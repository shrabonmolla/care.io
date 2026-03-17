import Login from "@/Components/Auth/Login";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div>
      <Suspense fallback={<div>Loading......</div>}>
        <Login />
      </Suspense>
    </div>
  );
}
