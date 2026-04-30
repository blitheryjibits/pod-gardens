"use client";

import { useState, useEffect } from "react";
import { CalendarUI } from "@/components/calendar/CalendarUI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    async function checkDateTimeAvailability() {
      const res = await fetch("/api/bookings/availability");
      const data = await res.json();

      if (!data.success) {
        toast(data.error || "Failed to load availability");
        return;
      }

      // handle availability data here
    }

    checkDateTimeAvailability();
  }, []);

  const handleSubmit = async () => {
    const payload = {
      fullName,
      email,
      notes,
      date: selectedDate?.toISOString(),
      time: selectedTime,
      appointmentTypeId: "default-type",
    };

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!data.success) {
      toast(data.error);
      return;
    }

    toast("Booking confirmed!");
  };

  return (
    <main className="container mx-auto py-32 px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Book an Appointment
      </h1>

      <div className="w-full flex flex-col items-center gap-12">
        {/* Calendar + Time Picker */}
        <CalendarUI
          bookedDates={[]} // Replace with real data
          bookedTimes={{}} // Replace with real data
          availableTimes={["10:00", "11:00", "14:00", "15:00"]}
          onDateChange={setSelectedDate}
          onTimeChange={setSelectedTime}
        />

        <Link href="/appointments">already made a booking?</Link>

        {/* Booking Form */}
        <div className="w-full max-w-lg space-y-4 border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Your Details</h2>

          <Input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Textarea
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <Button
            className="w-full mt-4"
            disabled={!selectedDate || !selectedTime}
            onClick={handleSubmit}
          >
            {selectedDate && selectedTime
              ? `Confirm Booking for ${selectedTime}`
              : "Select a date and time"}
          </Button>
        </div>
      </div>
    </main>
  );
}
