import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
  try {
    const { id } = params;

    const client = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!client) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(client);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
