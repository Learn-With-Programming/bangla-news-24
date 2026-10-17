"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Sign Up Successful!");
      redirect("/");
    }
    if (error) {
      toast.error("Email and Password Error!");
    }
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignUp = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700"> সাইন আপ</h2>
      <form onSubmit={onSubmit}>
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

          <label className="label">ইমেল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn bg-red-500 text-white font-bold mt-4 w-md"
          >
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <div className="flex items-center justify-center gap-8">
        <button
          onClick={handleGoogleSignUp}
          className="btn btn-info mt-5 text-white"
        >
          <FaGoogle size={18} />
          Sign Up With Google
        </button>
        <button
          onClick={handleGithubSignUp}
          className="btn btn-info mt-5 text-white"
        >
          <FaGithub size={18} />
          Sign Up With GitHub
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
