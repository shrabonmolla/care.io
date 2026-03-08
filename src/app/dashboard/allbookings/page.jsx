import { allBookings } from "@/Actions/server/booking";
import AllBookingCard from "@/Components/Card/AllBookingsCard";
import React from "react";

export default async function page() {
  const allbookings = await allBookings();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        {allbookings.length} Booking are Pending
      </h2>

      <AllBookingCard bookings={allbookings} />
    </div>
  );
}
