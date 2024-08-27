import prisma from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse){
    return NextResponse.json("success");
}
