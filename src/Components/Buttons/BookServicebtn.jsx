"use client";

import { addBookings } from "@/Actions/server/booking";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function BookServicebtn({ service }) {
  const { register, handleSubmit, watch } = useForm();

  const {
    service_name,
    category,
    price_per_hour,
    rating,
    description,
    image,
    _id,
  } = service;

  const [loading, setloading] = useState(false);
  const router = useRouter();
  const session = useSession();
  const path = usePathname();
  const modalRef = useRef();
  console.log(session.data.user.name);

  const islogin = session.status === "authenticated";
  function handleAdd2Cart() {
    setloading(true);
    if (islogin) {
      // alert("you booked this service");
      modalRef.current.showModal();
      setloading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setloading(false);
    }
  }

  const duration = watch("duration");
  const price = price_per_hour;

  const totalCost = duration * price;

  async function onSubmit(data) {
    const bookingData = {
      ...data,
      serviceName: service_name,
      serviceId: _id,
      serviceImage: image,
      price,
      totalCost,
    };

    const result = await addBookings(bookingData);
    alert("successfuly booked this service");
    router.push("/mybookings");
  }
  return (
    <div>
      <button
        disabled={loading}
        onClick={handleAdd2Cart}
        className="btn btn-primary mt-4"
      >
        Book This Service
      </button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Book Service</h3>

          {/* Service Info */}
          <div className="bg-base-200 p-3 rounded mb-4">
            <p className="font-semibold text-center">{service_name}</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Name */}
            <input
              disabled
              defaultValue={session.data?.user?.name}
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            {/* Email */}
            <input
              disabled
              defaultValue={session.data?.user?.email}
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            {/* Division */}
            <select
              {...register("division", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select Division</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Rajshahi</option>
            </select>

            {/* District */}
            <input
              {...register("district", { required: true })}
              placeholder="District"
              className="input input-bordered w-full"
            />

            {/* Duration */}
            <input
              defaultValue={1}
              type="number"
              {...register("duration", { required: true, min: 1 })}
              placeholder="Duration (Hours)"
              className="input input-bordered w-full"
            />

            {/* Service Info */}
            <div className="bg-base-200 p-3 rounded">
              <p className="font-semibold">{service?.title}</p>
              <p>Service Charge: ${price} / hour</p>
            </div>

            {/* Total Cost */}
            <div className="text-lg font-bold">Total Cost: ${totalCost}</div>

            <button className="btn btn-primary w-full">Confirm Booking</button>
            <button
              onClick={() => modalRef.current.close()}
              className="btn btn-error text-white w-full"
            >
              Cancel
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
