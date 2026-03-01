import Link from "next/link";
import React from "react";
import { MdError } from "react-icons/md";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-2">
      <h1 className="text-8xl text-primary">
        <MdError />
      </h1>
      <p>Error 404 | Page Not Found</p>

      <Link href={"/"} className="btn btn-primary btn-outline">
        Return to Home
      </Link>
    </div>
  );
}
