import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ChainWork } from "../target/types/chain_work";

describe("chain-work", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ChainWork as Program<ChainWork>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
