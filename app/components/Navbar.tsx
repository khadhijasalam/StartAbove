import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth, signOut, signIn } from "@/auth";
const Navbar = async () => {
  const session = await auth();
  return (
    <>
      <header className="px-5 py-3 bg-white shadow font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={30} />
          </Link>
          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create </span>
                </Link>
                {/* <form action={async () => {
                    "use server";
                    await signOut({redirectTo:"/"});
                  }
                
                }
                >
                  <button type="submit">Logout</span>
                </form> */}
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit" className="bg-amber-50">
                    Logout
                  </button>
                </form>
                {/* Link to go to the user's profile */}
                <Link href={`user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              // WE cannot add sign In to a button and use onclick directly instead of form. server action error
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="bg-amber-50">
                  Login
                </button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
