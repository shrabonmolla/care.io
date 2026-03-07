export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-300 rounded-xl"></div>

        {/* Details Skeleton */}
        <div className="space-y-4">
          {/* Category */}
          <div className="h-6 w-28 bg-gray-300 rounded"></div>

          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-300 rounded"></div>

          {/* Rating */}
          <div className="h-6 w-24 bg-gray-300 rounded"></div>

          {/* Description lines */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
          </div>

          {/* Price */}
          <div className="h-8 w-32 bg-gray-300 rounded"></div>

          {/* Button */}
          <div className="h-10 w-40 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
