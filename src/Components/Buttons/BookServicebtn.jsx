"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function BookServicebtn() {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const session = useSession();
  const path = usePathname();

  const islogin = session.status === "authenticated";
  function handleAdd2Cart() {
    setloading(true);
    if (islogin) {
      alert("you booked this service");
      setloading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setloading(false);
    }
  }
  return (
    <button
      disabled={loading}
      onClick={handleAdd2Cart}
      className="btn btn-primary mt-4"
    >
      Book This Service
    </button>
  );
}
