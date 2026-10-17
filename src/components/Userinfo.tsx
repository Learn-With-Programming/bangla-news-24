"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignout = async () => {
    await authClient.signOut();
  };
  return (
    <div className="absolute right-4 top-10 flex -translate-y-1/2 items-center gap-3">
      {user ? (
        <div className="flex flex-col items-center gap-2 mt-8">
          <Link href={'/profile'}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img alt="Tailwind-CSS-Avatar-component"src={user?.image as string}/>
            </div>
          </div>
          </Link>
          <h2>{user?.name}</h2>
          <button onClick={handleSignout} className="btn btn-error btn-xs">
            Signout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href={"/SignIn"}>
            <button className="rounded-md bg-[#d60000] px-3 py-1.5 text-[15px] font-bold text-white transition">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/SignUp"}>
            <button className=" rounded-md bg-[#00d6a0] px-3 py-1.5 text-[15px] font-bold text-white transition">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
