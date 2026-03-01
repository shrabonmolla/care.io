import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="text-2xl font-bold text-primary">
      CARE.
      <span className="bg-primary btn-square rounded-sm px-1 text-white">
        IO
      </span>
    </Link>
  );
}
