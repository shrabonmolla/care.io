import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        className="hero min-h-[70vh] "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1700412222385-e2ac73a348da?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-[#09637e]  to-[#088395] opacity-75  "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Trusted Care for Your Loved Ones
            </h1>
            <p className="mb-5 text-white">
              Care.IO helps you find reliable babysitters, elderly caregivers,
              and home support services easily. Safe, secure, and accessible
              caregiving at your fingertips.
            </p>
            <button className="btn btn-primary  text-white">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
