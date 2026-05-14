"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { CalendarUI } from "@/components/calendar/CalendarUI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";
import { record } from "zod";

type BookingFormValues = {
  fullName: string;
  email: string;
  notes?: string;
};

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [bookedDates, setBookedDates] = useState<Record<string, string[]>>({});
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // -----------------------------
  // REACT HOOK FORM
  // -----------------------------
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      notes: "",
    },
  });

  // -----------------------------
  // LOAD AVAILABILITY
  // -----------------------------
  // use memo to cache results in a timesMap memo state
  useEffect(() => {
    async function checkDateTimeAvailability() {
      const timesMap: Record<string, string[]> = {};
      const res = await fetch(
        `/api/bookings/availability?year=${currentDate.getFullYear()}&month=${currentDate.getMonth()}`,
      );
      const data = await res.json();
      if (!data.success) return;
      data.bookings?.forEach(
        (booking: { appointmentDate: string; appointmentTime: string }) => {
          const dateKey = booking.appointmentDate.split("T")[0];
          if (!timesMap[dateKey]) timesMap[dateKey] = [];
          timesMap[dateKey].push(booking.appointmentTime);
        },
      );

      if (!data.success) {
        toast(data.error || "Failed to load availability");
      }
      setBookedDates(timesMap);
    }

    checkDateTimeAvailability();
  }, [currentDate]);

  // -----------------------------
  // SUBMIT HANDLER
  // -----------------------------
  const onSubmit = async (values: BookingFormValues) => {
    if (!selectedDate) {
      toast("Please select a date");
      return;
    }

    if (!selectedTime) {
      toast("Please select a time");
      return;
    }

    const payload = {
      ...values,
      date: selectedDate.toISOString(),
      time: selectedTime,
      appointmentType: "consultation",
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
    reset();
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <main className="container mx-auto py-32 px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Book an Appointment
      </h1>

      <div className="w-full flex flex-col items-center gap-12">
        {/* Calendar + Time Picker */}
        <CalendarUI
          bookedDates={bookedDates} // Replace with real data
          // bookedTimes={} // Replace with real data
          availableTimes={["10:00", "11:00", "14:00", "15:00"]}
          onDateChange={setSelectedDate}
          onTimeChange={setSelectedTime}
          onMonthChange={setCurrentDate}
        />

        <Link
          href="/appointments"
          className="
    relative 
    text-on-secondary-fixed-variant
    transition-colors 
    duration-200 
    hover:text-primary
    after:absolute 
    after:left-0 
    after:-bottom-0.5 
    after:h-0.5
    after:w-0 
    after:bg-secondary 
    after:transition-all 
    after:duration-300 
    hover:after:w-full
  "
        >
          already made a booking?
        </Link>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg space-y-4 border rounded-lg p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-2">Your Details</h2>

          {/* Full Name */}
          <div>
            <Input
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 60,
                  message: "Name must not exceed 60 characters",
                },
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              placeholder="John@email.com"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Notes */}
          <div>
            <Textarea placeholder="Notes (optional)" {...register("notes")} />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-4"
            disabled={!selectedDate || !selectedTime || isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : selectedDate && selectedTime
                ? `Confirm Booking for ${selectedTime}`
                : "Select a date and time"}
          </Button>
        </form>
      </div>
    </main>
  );
}
