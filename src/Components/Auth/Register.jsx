"use client";
import React from "react";
import Link from "next/link";
import SocialSignInbtn from "./SocialSignInbtn";
import { useForm } from "react-hook-form";
import { postUser } from "@/Actions/server/auth";

export default function Register() {
  const { register, handleSubmit } = useForm();

  async function handleRegister(data) {
    const result = await postUser(data);
    if (result.acknowledged) {
      alert("registration succesful");
    } else {
      alert("somethig went wrong");
    }
    console.log(result);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary">
            Create Account
          </h2>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="mt-6 space-y-4"
          >
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full focus:outline-primary"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-primary"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Minimum 6 characters"
                className="input input-bordered w-full focus:outline-primary"
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full mt-4">Register</button>
          </form>
          <SocialSignInbtn />

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-secondary font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
