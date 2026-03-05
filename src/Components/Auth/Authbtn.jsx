"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Authbtn() {
  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
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
