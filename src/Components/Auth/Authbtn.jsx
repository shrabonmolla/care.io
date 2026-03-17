"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Authbtn() {
  const { data: session, status } = useSession();

  if (status == "loading") return <p>Loading form authbtn</p>;

  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* ✅ Show dashboard if admin */}
        {session.role === "admin" && (
          <Link href="/dashboard" className="btn btn-accent btn-outline mr-2">
            Dashboard
          </Link>
        )}
        <button
          className="btn btn-primary btn-outline"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Link href={"/login"} className="btn btn-primary btn-outline">
        Log in
      </Link>
    </>
  );
}
