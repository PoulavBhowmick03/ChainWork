use anchor_lang::prelude::*;
use anchor_lang::system_program;
use sha2::{Digest, Sha256};

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[account]
pub struct User {
    pub authority: Pubkey,
    pub pubkey: Pubkey,
    pub username: String,
    pub email: String,
    pub password_hash: [u8; 32],
    pub created_at: i64,
}

#[account]
pub struct Client {
    pub authority: Pubkey,
    pub pubkey: Pubkey,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub password_hash: [u8; 32],
    pub country: String,
    pub created_at: i64,
}

#[account]
pub struct Gig {
    pub client: Pubkey,
    pub title: String,
    pub description: String,
    pub created_at: i64,
    pub location: String,
    pub expertise: String,
    pub pay: u64,
    pub project_type: String,
}

#[account]
pub struct ClientGigs {
    pub client: Pubkey,
    pub gigs: Vec<Pubkey>,
}

#[account]
pub struct Contract{
    pub client: Pubkey,
    pub user : Pubkey,
    pub gig: Pubkey,
    pub terms: String,
    pub status: ContractStatus,
    pub created_at: i64,
}

#[account]
pub struct Escrow{
    pub client: Pubkey,
    pub gig: Pubkey,
    pub amount: u64,
    pub created_at: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum ContractStatus {
    Pending,
    InProgress,
    Completed,
    Cancelled,
}

#[derive(Accounts)]
pub struct RegisterUser<'info> {
    #[account(
        init, 
        payer = signer, 
        space = 8 + 32 + 64 + 64 + 32 + 8
    )]
    pub user: Account<'info, User>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct RegisterClient<'info> {
    #[account(
        init, 
        payer = signer, 
        space = 8 + 32 + 64 + 64 + 64 + 32 + 64 + 8
    )]
    pub client: Account<'info, Client>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateGig<'info> {
    #[account(mut)]
    pub client: Signer<'info>,
    #[account(
        init,
        payer = client,
        space = 8 + 32 + 4 + (32 * 10),
        seeds = [b"client-gigs", client.key().as_ref()],
        bump
    )]
    pub client_gigs: Account<'info, ClientGigs>,
    #[account(
        init,
        payer = client,
        space = 8 + 32 + 256 + 1024 + 8 + 256 + 256 + 8 + 256,
        seeds = [b"gig", client.key().as_ref(), &[client_gigs.gigs.len() as u8]],
        bump
    )]
    pub gig: Account<'info, Gig>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct EditUserProfile<'info> {
    #[account(mut, has_one = authority @ MyErrorCode::Unauthorized)]
    pub user: Account<'info, User>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct EditClientProfile<'info> {
    #[account(mut, has_one = authority @ MyErrorCode::Unauthorized)]
    pub client: Account<'info, Client>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct EditGig<'info> {
    #[account(mut, has_one = client @ MyErrorCode::Unauthorized)]
    pub gig: Account<'info, Gig>,
    pub client: Signer<'info>,
}

#[derive(Accounts)]
pub struct DeleteGig<'info> {
    #[account(mut)]
    pub client_gigs: Account<'info, ClientGigs>,
    #[account(mut, close = client, has_one = client @ MyErrorCode::Unauthorized)]
    pub gig: Account<'info, Gig>,
    pub client: Signer<'info>,
}

#[derive(Accounts)]
pub struct CreateContract<'info>{
    #[account(mut)]
    pub client: Signer<'info>,
    pub user : AccountInfo<'info>,
    #[account(mut, has_one=client)]
    pub gig: Account<'info,Gig>,
    #[account(
        init,
        payer = client,
        space = 8 + 32 + 32 + 32 + 1024 + 1 + 8,
        seeds = [b"contract", client.key().as_ref(), user.key().as_ref(), gig.key().as_ref()],
        bump
    )]
    pub contract: Account<'info, Contract>,
    pub system_program: Program<'info, System>,
}

    #[derive(Accounts)]
    pub struct CreateEscrow<'info> {
        #[account(mut)]
        pub client: Signer<'info>,
        #[account(mut, has_one = client)]
        pub gig: Account<'info, Gig>,
        #[account(
            init,
            payer = client,
            space = 8 + 32 + 32 + 8 + 8,
            seeds = [b"escrow", client.key().as_ref(), gig.key().as_ref()],
            bump
        )]
        pub escrow: Account<'info, Escrow>,
        pub system_program: Program<'info, System>,
    }

    #[derive(Accounts)]
    pub struct ReleasePayment<'info> {
        #[account(mut)]
        pub client: Signer<'info>,
        #[account(mut)]
        pub user: AccountInfo<'info>,
        #[account(mut, has_one = client, close = client)]
        pub escrow: Account<'info, Escrow>,
        #[account(mut, has_one = client, has_one = user)]
        pub contract: Account<'info, Contract>,
        pub system_program: Program<'info, System>,
    }

#[error_code]
pub enum MyErrorCode {
    #[msg("Invalid input provided")]
    InvalidInput,
    #[msg("Unauthorized action")]
    Unauthorized,
    InvalidContractStatus,
}

#[program]
mod fiverrr {
    use super::*;

    pub fn register_user(
        ctx: Context<RegisterUser>,
        username: String,
        email: String,
        password: String,
    ) -> Result<()> {
        require!(
            !username.is_empty() && !email.is_empty() && !password.is_empty(),
            MyErrorCode::InvalidInput
        );
        require!(
            username.len() <= 64 && email.len() <= 64,
            MyErrorCode::InvalidInput
        );

        let user_account = &mut ctx.accounts.user;
        user_account.authority = ctx.accounts.signer.key();
        user_account.pubkey = ctx.accounts.signer.key();
        user_account.username = username;
        user_account.email = email;
        user_account.password_hash = hash_password(&password);
        user_account.created_at = Clock::get()?.unix_timestamp;
        Ok(())
    }

    pub fn register_client(
        ctx: Context<RegisterClient>,
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        country: String,
    ) -> Result<()> {
        require!(
            !first_name.is_empty()
                && !last_name.is_empty()
                && !email.is_empty()
                && !password.is_empty()
                && !country.is_empty(),
            MyErrorCode::InvalidInput
        );
        require!(
            first_name.len() <= 64
                && last_name.len() <= 64
                && email.len() <= 64
                && country.len() <= 64,
            MyErrorCode::InvalidInput
        );

        let client_account = &mut ctx.accounts.client;
        client_account.authority = ctx.accounts.signer.key();
        client_account.pubkey = ctx.accounts.signer.key();
        client_account.first_name = first_name;
        client_account.last_name = last_name;
        client_account.email = email;
        client_account.password_hash = hash_password(&password);
        client_account.country = country;
        client_account.created_at = Clock::get()?.unix_timestamp;
        Ok(())
    }

    pub fn edit_user_profile(
        ctx: Context<EditUserProfile>,
        new_username: Option<String>,
        new_password: Option<String>,
        new_email: Option<String>,
    ) -> Result<()> {
        let user = &mut ctx.accounts.user;
        update_if_some(&mut user.username, new_username, 64)?;
        update_if_some(&mut user.email, new_email, 64)?;
        if let Some(new_pass) = new_password {
            user.password_hash = hash_password(&new_pass);
        }
        Ok(())
    }

    pub fn edit_client_profile(
        ctx: Context<EditClientProfile>,
        new_first_name: Option<String>,
        new_last_name: Option<String>,
        new_email: Option<String>,
        new_country: Option<String>,
    ) -> Result<()> {
        let client = &mut ctx.accounts.client;
        update_if_some(&mut client.first_name, new_first_name, 64)?;
        update_if_some(&mut client.last_name, new_last_name, 64)?;
        update_if_some(&mut client.email, new_email, 64)?;
        update_if_some(&mut client.country, new_country, 64)?;
        Ok(())
    }

    pub fn create_gig(
        ctx: Context<CreateGig>,
        title: String,
        description: String,
        location: String,
        expertise: String,
        pay: u64,
        project_type: String,
    ) -> Result<()> {
        require!(
            !title.is_empty()
                && !description.is_empty()
                && !location.is_empty()
                && !expertise.is_empty()
                && !project_type.is_empty(),
            MyErrorCode::InvalidInput
        );
        require!(
            title.len() <= 256
                && description.len() <= 1024
                && location.len() <= 256
                && expertise.len() <= 256
                && project_type.len() <= 256,
            MyErrorCode::InvalidInput
        );

        let client_gigs = &mut ctx.accounts.client_gigs;
        let gig = &mut ctx.accounts.gig;

        if client_gigs.gigs.is_empty() {
            client_gigs.client = ctx.accounts.client.key();
        }

        client_gigs.gigs.push(gig.key());

        gig.client = ctx.accounts.client.key();
        gig.title = title;
        gig.description = description;
        gig.created_at = Clock::get()?.unix_timestamp;
        gig.location = location;
        gig.expertise = expertise;
        gig.pay = pay;
        gig.project_type = project_type;

        Ok(())
    }

    pub fn edit_gig(
        ctx: Context<EditGig>,
        new_title: Option<String>,
        new_description: Option<String>,
        new_pay: Option<u64>,
        new_location: Option<String>,
        new_expertise: Option<String>,
        new_project_type: Option<String>,
    ) -> Result<()> {
        let gig = &mut ctx.accounts.gig;
        update_if_some(&mut gig.title, new_title, 256)?;
        update_if_some(&mut gig.description, new_description, 1024)?;
        if let Some(pay) = new_pay {
            gig.pay = pay;
        }
        update_if_some(&mut gig.location, new_location, 256)?;
        update_if_some(&mut gig.expertise, new_expertise, 256)?;
        update_if_some(&mut gig.project_type, new_project_type, 256)?;
        Ok(())
    }

    pub fn delete_gig(ctx: Context<DeleteGig>) -> Result<()> {
        let client_gigs = &mut ctx.accounts.client_gigs;
        let gig_pubkey = ctx.accounts.gig.key();
        client_gigs.gigs.retain(|&pubkey| pubkey != gig_pubkey);
        Ok(())
    }

    pub fn create_contract(ctx: Context<CreateContract>, terms: String) -> Result<()> {
        require!(!terms.is_empty() && terms.len() <= 1024, MyErrorCode::InvalidInput);

        let contract = &mut ctx.accounts.contract;
        contract.client = ctx.accounts.client.key();
        contract.user = ctx.accounts.user.key();
        contract.gig = ctx.accounts.gig.key();
        contract.terms = terms;
        contract.status = ContractStatus::Pending;
        contract.created_at = Clock::get()?.unix_timestamp;

        Ok(())
    }

    pub fn create_escrow(ctx: Context<CreateEscrow>, amount: u64) -> Result<()> {
        require!(amount > 0, MyErrorCode::InvalidInput);

        let escrow = &mut ctx.accounts.escrow;
        escrow.client = ctx.accounts.client.key();
        escrow.gig = ctx.accounts.gig.key();
        escrow.amount = amount;
        escrow.created_at = Clock::get()?.unix_timestamp;

        // Transfer funds from client to escrow account
        let cpi_context = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            system_program::Transfer {
                from: ctx.accounts.client.to_account_info(),
                to: escrow.to_account_info(),
            },
        );
        system_program::transfer(cpi_context, amount)?;

        Ok(())
    }

    pub fn release_payment(ctx: Context<ReleasePayment>) -> Result<()> {
        let escrow = &ctx.accounts.escrow;
        let contract = &mut ctx.accounts.contract;

        require!(contract.status == ContractStatus::InProgress, MyErrorCode::InvalidContractStatus);

        // Transfer funds from escrow to user
        **ctx.accounts.escrow.to_account_info().try_borrow_mut_lamports()? -= escrow.amount;
        **ctx.accounts.user.try_borrow_mut_lamports()? += escrow.amount;

        contract.status = ContractStatus::Completed;

        Ok(())
    }

}
    fn update_if_some(field: &mut String, new_value: Option<String>, max_len: usize) -> Result<()> {
        if let Some(value) = new_value {
            require!(
                !value.is_empty() && value.len() <= max_len,
                MyErrorCode::InvalidInput
            );
            *field = value;
        }
        Ok(())
    }

    fn hash_password(password: &str) -> [u8; 32] {
        let mut hasher = Sha256::new();
        hasher.update(password);
        hasher.finalize().into()
    }
