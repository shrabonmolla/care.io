"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const { service_name, category, price_per_hour, rating, description, image } =
    service;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
      <Image
        src={image}
        alt={service_name}
        width={200}
        height={180}
        className="object-cover w-full h-64 "
      />

      <div className="card-body">
        {/* Category */}
        <div className="badge badge-secondary mb-2">{category}</div>

        {/* Title */}
        <h2 className="card-title text-primary text-lg">{service_name}</h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Price */}
        <div className="flex justify-between items-center mt-3">
          <p className="font-semibold text-secondary">${price_per_hour}/hour</p>

          <Link href={`/service`}>
            <button className="btn btn-primary btn-sm">Explore Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
