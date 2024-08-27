// pages/api/users/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
// import { program } from '../../../lib/solanaClient';
import { Keypair } from '@solana/web3.js';
import prisma from '../../../lib/db';

export default async function SignUp(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        // Generate a new keypair for the user
        const userKeypair = Keypair.generate();

        try {
            // Call the smart contract to register the user
            // await program.rpc.registerUser(username, {
            //     accounts: {
            //         user: userKeypair.publicKey,
            //         rent: web3.SYSVAR_RENT_PUBKEY,
            //     },
            //     signers: [userKeypair],
            // });

            // // Store user data in the database
            // const user = await prisma.user.create({
            //     data: {
            //         username,
            //         email,
            //         password,
            //     },
            // });

            res.status(201).json({ publicKey: userKeypair.publicKey.toString(), username, email });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to register user' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
