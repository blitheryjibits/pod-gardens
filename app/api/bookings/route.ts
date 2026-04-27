import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, notes, date, time } = body;

    // --- Validate required fields ---
    if (!fullName || !email || !date || !time) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Convert date + time into a real DateTime range
    const startTime = new Date(date);
    const [hours, minutes] = time.split(":").map(Number);
    startTime.setHours(hours, minutes, 0, 0);

    // Get appointment type duration (fallback 60 minutes)
    const appointmentType = await prisma.appointmentType.findUnique({
      where: { name: "consultation", id: "3221497825173" },
    });

    // --- Auto-create or fetch user profile ---
    let user = await prisma.userProfile.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.userProfile.create({
        data: {
          email,
          fullName,
        },
      });
    }

    // --- Check if slot is already booked ---
    const existingBooking = await prisma.booking.findFirst({
      where: {
        startTime,
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        {
          success: false,
          error: "This time slot is already booked",
        },
        { status: 409 },
      );
    }

    // --- Create booking ---
    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        appointmentTypeId: appointmentType?.id ?? "",
        startTime,
        notes,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        booking,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 },
    );
  }
}
