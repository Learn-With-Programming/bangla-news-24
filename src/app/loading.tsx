const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center bg-linear-to-br from-red-50 via-white to-red-100 px-4 py-12">
      <div className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-red-100">
        <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">
          লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
