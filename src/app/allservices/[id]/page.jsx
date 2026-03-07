import { getService } from "@/Actions/server/services";
import BookServicebtn from "@/Components/Buttons/BookServicebtn";
import Image from "next/image";

export default async function ServiceDetails({ params }) {
  const id = await params;
  const service = await getService(id);

  const { service_name, category, price_per_hour, rating, description, image } =
    service;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={image}
            alt={service_name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="badge badge-secondary">{category}</div>

          <h1 className="text-3xl font-bold">{service_name}</h1>

          <p className="text-yellow-500 font-semibold">⭐ {rating} Rating</p>

          <p className="text-gray-600">{description}</p>

          <p className="text-xl font-bold text-primary">
            ${price_per_hour}/hour
          </p>

          <BookServicebtn />
        </div>
      </div>
    </div>
  );
}
