import { myBookings } from "@/Actions/server/booking";
import MyBookingCard from "@/Components/Card/MyBookingCard";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const mybookings = await myBookings(userEmail);

  const safeMyBookingsData = mybookings.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  console.log(safeMyBookingsData);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        You have total {safeMyBookingsData.length} Booking services
      </h2>
      <MyBookingCard bookings={safeMyBookingsData} />
    </div>
  );
}
