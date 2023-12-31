import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    const newClient = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });
    return NextResponse.json(newClient);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};
export const GET = async () => {
  try {
    const client = await prisma.user.findMany();
    return NextResponse.json(client);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
