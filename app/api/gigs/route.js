import prisma from "@/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req, res) {
  try {
    const { username, email, password } = await req.body;
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res
      .status(201)
      .json({ publicKey: userKeypair.publicKey.toString(), username, email });
  } catch (error) {
    
  }
  return res.json("success");
}
export async function GET(req, res) {
  return res.json("success");
}
export async function PUT(req, res) {
  return res.json("success");
}
export async function DELETE(req, res) {
  return res.json("success");
}
