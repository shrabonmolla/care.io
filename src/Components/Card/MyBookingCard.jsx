"use client";
import { deleteBookings } from "@/Actions/server/booking";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

export default function MyBookingCard({ bookings }) {
  async function handleDeleteBookings(id, email) {
    const result = await deleteBookings(id, email);
    toast.success("deleted");
    console.log(result);
  }
  return (
    <div className="overflow-x-auto w-11/12 mx-auto py-6 h-screen">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Service</th>
            <th>Location</th>
            <th>Duration</th>
            <th>Cost</th>
            <th>Status</th>
            <th></th>
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
              <td>
                {booking.district}, {booking.division}
              </td>

              {/* Duration */}
              <td>{booking.duration} hr</td>

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
              <td>
                <button
                  onClick={() =>
                    handleDeleteBookings(booking._id, booking.email)
                  }
                  className="btn btn-error btn-sm"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
