import React from "react";

export default function loading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 py-16">
      {Array(6)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="card bg-base-100  hover:shadow-xl transition duration-300 shadow-lg animate-pulse"
            >
              {/* Image skeleton */}
              <div className="w-full h-64 bg-gray-300 rounded-t-xl"></div>

              <div className="card-body space-y-3">
                {/* Category */}
                <div className="h-5 w-24 bg-gray-300 rounded"></div>

                {/* Title */}
                <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

                {/* Rating */}
                <div className="h-4 w-16 bg-gray-300 rounded"></div>

                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-300 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                </div>

                {/* Price + Button */}
                <div className="flex justify-between items-center pt-3">
                  <div className="h-5 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-28 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
