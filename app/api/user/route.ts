import prisma from "@/prisma";
import type { User } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic"; // defaults to auto


export async function GET(request: NextRequest) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: 1 },
      select: { name: true, email: true }
    });
    if (!user) return NextResponse.redirect("/");
    return new Response(JSON.stringify(user));
  }
  
}
