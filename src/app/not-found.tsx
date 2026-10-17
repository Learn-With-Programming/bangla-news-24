import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center from-red-50 via-white to-red-100 px-4">
      <div className="max-w-md text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-red-100">
        <h1 className="text-7xl font-bold text-red-600 mb-2">404</h1>

        <p className="text-xl font-semibold text-gray-800 mb-2">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </p>

        <p className="text-sm text-gray-500 mb-6">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা লিংকটি সঠিক নয়।
        </p>

        <Link
          href="/"
          className="inline-block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFound;