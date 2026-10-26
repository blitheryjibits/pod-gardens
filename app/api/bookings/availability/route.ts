import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const year = Number(searchParams.get("year"));
  const month = Number(searchParams.get("month")); // 0–11

  const start = new Date(year, month, 1).toISOString(); // first day of month
  const end = new Date(year, month + 1, 0, 23, 59, 59, 999).toISOString(); // last day of month

  const bookings = await prisma.booking.findMany({
    where: {
      appointmentDate: {
        gte: start,
        lte: end,
      },
    },
    select: {
      appointmentDate: true,
      appointmentTime: true,
    },
  });

  return NextResponse.json({ success: true, bookings });
}
