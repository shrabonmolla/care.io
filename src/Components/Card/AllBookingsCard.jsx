"use client";
import {
  completedBookingsStatus,
  updateBookingsStatus,
} from "@/Actions/server/booking";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { GiConfirmed } from "react-icons/gi";
import { IoIosCloudDone } from "react-icons/io";

export default function AllBookingCard({ bookings }) {
  const router = useRouter();
  async function handleUpdateStatus(id) {
    const result = await updateBookingsStatus(id);
    toast.success("confirm service");
    if (result.matchedCount) {
      router.refresh();
    }
  }

  async function handleCompleteStatus(id) {
    const result = await completedBookingsStatus(id);
    toast.success("completed service");
    if (result.matchedCount) {
      router.refresh();
    }
  }

  return (
    <div className="overflow-x-auto w-11/12 mx-auto py-6 h-screen">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Service</th>
            <th>Name</th>
            <th>Email</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              {/* Service */}
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src={booking.serviceImage}
                    className="w-12 h-12 rounded-lg object-cover"
                    alt="service"
                  />
                  <div>
                    <div className="font-bold">{booking.serviceName}</div>
                  </div>
                </div>
              </td>

              {/* Location */}
              <td>{booking.name}</td>

              {/* Duration */}
              <td>{booking.email} hr</td>

              {/* Cost */}
              <td>${booking.totalCost}</td>

              {/* Status */}
              <td>
                <span
                  className={`badge ${
                    booking.status === "pending"
                      ? "badge-warning"
                      : "badge-success"
                  }`}
                >
                  {booking.status}
                </span>
              </td>

              {/* Action */}
              <td className="flex gap-4">
                <button
                  onClick={() => handleUpdateStatus(booking._id)}
                  className="btn btn-error btn-sm"
                >
                  <GiConfirmed />
                </button>

                <button
                  onClick={() => handleCompleteStatus(booking._id)}
                  className="btn btn-error btn-sm"
                >
                  <IoIosCloudDone />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
