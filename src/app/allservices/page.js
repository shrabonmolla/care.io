import { getAllServices } from "@/Actions/server/services";
import ServiceCard from "@/Components/Card/ServiceCard";
import React from "react";

export default async function page() {
  const allservices = await getAllServices();
  const formatedAllServices = allservices.map((services, index) => ({
    ...services,
    _id: services._id.toString(),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        We have total {formatedAllServices.length} services
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {formatedAllServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
