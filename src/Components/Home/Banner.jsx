import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import banner from "../../../public/assets/banner.jpg";

export default function Banner() {
  return (
    <section className="bg-neutral">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary leading-tight">
              Trusted Care for Your Loved Ones
            </h1>

            <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Care.IO helps you find reliable babysitters, elderly caregivers,
              and home support services easily. Safe, secure, and accessible
              caregiving at your fingertips.
            </p>

            <div className="mt-8">
              <button className="btn btn-primary px-8 py-3 text-lg">
                Explore Services <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Right Side Image */}

          <Image
            src={banner}
            alt="Care Service Banner"
            className="rounded-2xl"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
