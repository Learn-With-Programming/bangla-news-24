"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  const [show, setShow] = useState(false);
  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserdata = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };
    await authClient.updateUser({
      ...newUserdata,
    });
  };
  const handleShowForm = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mt-8">
        <Link href={"/profile"}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
        </Link>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <button
          onClick={handleShowForm}
          className="btn btn-info text-white font-bold"
        >
          Edit Profile
        </button>

        {show && <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-md"
              placeholder="name"
            />

            <label className="label">Image URL</label>
            <input
              name="image"
              type="url"
              className="input w-md"
              placeholder="image"
            />
            <button
              type="submit"
              className="btn bg-red-500 text-white font-bold mt-4 w-md"
            >
              Update Profile
            </button>
          </fieldset>
        </form>}
      </div>
    </div>
  );
};

export default ProfilePage;
