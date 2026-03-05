"use client";
import React from "react";
import Link from "next/link";
import SocialSignInbtn from "./SocialSignInbtn";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const params = useSearchParams();

  async function handleLogin(data) {
    const result = await signIn("credentials", {
      redirect: false,
      password: data.password,
      email: data.email,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    console.log(result);

    if (result.ok) {
      alert("login successful");
    } else {
      alert("failed to login . something went wrong");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(handleLogin)} className="mt-6 space-y-4">
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
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-primary"
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full mt-4">Login</button>
          </form>

          <SocialSignInbtn />

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-secondary font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
