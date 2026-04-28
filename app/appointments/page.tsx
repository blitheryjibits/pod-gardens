"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ClientAppointmentsPage() {
  const [email, setEmail] = useState("");
  //   eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLookup = async () => {
    if (!email) {
      toast("Please enter your email");
      return;
    }

    setLoading(true);

    const res = await fetch(`/api/bookings?email=${encodeURIComponent(email)}`);
    const data = await res.json();

    setLoading(false);

    if (!data.success) {
      toast(data.error || "No appointments found");
      return;
    }

    setAppointments(data.bookings);
  };

  return (
    <div>
      <Navbar />

      <main className="container mx-auto py-32 px-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          View Your Appointments
        </h1>

        <div className="w-full max-w-lg mx-auto space-y-6">
          {/* Email Lookup */}
          <div className="border rounded-lg p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Find Your Bookings</h2>

            <Input
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              className="w-full"
              onClick={handleLookup}
              disabled={loading}
            >
              {loading ? "Loading..." : "Find My Appointments"}
            </Button>
          </div>

          {/* Appointment Results */}
          {appointments.length > 0 && (
            <div className="space-y-4 mt-10">
              <h2 className="text-2xl font-semibold text-center">
                Your Appointments
              </h2>

              {appointments.map((appt) => (
                <div
                  key={appt.id}
                  className="border rounded-lg p-6 shadow-sm space-y-2"
                >
                  <p className="text-lg font-semibold">
                    {new Date(appt.startTime).toLocaleDateString()} —{" "}
                    {new Date(appt.startTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Duration: {appt.appointmentType?.durationMinutes || 60} mins
                  </p>

                  {appt.notes && (
                    <p className="text-sm">
                      <span className="font-semibold">Notes:</span> {appt.notes}
                    </p>
                  )}

                  <p className="text-sm">
                    <span className="font-semibold">Status:</span> {appt.status}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* No appointments */}
          {appointments.length === 0 && email && !loading && (
            <p className="text-center text-muted-foreground mt-6">
              No appointments found for this email.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
