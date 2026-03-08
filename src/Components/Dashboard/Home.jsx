"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const session = useSession();
  //   console.log(session?.data?.role);
  return (
    <div>
      <h1 className="text-4xl">
        Welcome back,
        <span className="text-primary font-bold"> {session?.data?.role}</span>
      </h1>
    </div>
  );
}
