"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CalendarUIProps = {
  bookedDates: Date[];
  bookedTimes: Record<string, string[]>; // { "2026-05-12": ["10:00", "11:00"] }
  availableTimes: string[];
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
  initialDate?: Date;
  initialTime?: string;
};

export function CalendarUI({
  bookedDates,
  bookedTimes,
  availableTimes,
  onDateChange,
  onTimeChange,
  initialDate,
  initialTime,
}: CalendarUIProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    initialDate,
  );
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(
    initialTime,
  );

  // Convert bookedDates to a Set of YYYY-MM-DD strings for fast lookup
  const bookedDateStrings = React.useMemo(
    () => new Set(bookedDates.map((d) => d.toISOString().split("T")[0])),
    [bookedDates],
  );

  const selectedDateKey = selectedDate
    ? selectedDate.toISOString().split("T")[0]
    : null;

  const timesBookedForSelectedDate =
    (selectedDateKey && bookedTimes[selectedDateKey]) || [];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(undefined);
    onDateChange(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onTimeChange(time);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Calendar */}
      <div className="rounded-md border p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          disabled={(date) => {
            const key = date.toISOString().split("T")[0];
            return bookedDateStrings.has(key);
          }}
          modifiers={{
            booked: bookedDates,
          }}
          modifiersStyles={{
            booked: {
              textDecoration: "line-through",
              opacity: 0.5,
            },
          }}
          className="mx-auto"
        />
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-3 w-full md:w-64">
        <h3 className="font-medium">Select a time</h3>

        {!selectedDate && (
          <p className="text-sm text-muted-foreground">
            Select a date to view available times
          </p>
        )}

        {selectedDate && (
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((time) => {
              const isBooked = timesBookedForSelectedDate.includes(time);

              return (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  disabled={isBooked}
                  onClick={() => handleTimeSelect(time)}
                  className={cn(
                    "w-full",
                    isBooked && "opacity-50 cursor-not-allowed line-through",
                  )}
                >
                  {time}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
