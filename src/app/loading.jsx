import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-white">
       <Spinner size="xl" className="font-bold text-green-700" />
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
          হাটে পশু খোঁজা হচ্ছে...
        </h2>
        <p className="text-gray-500 mt-2">অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন</p>
      </div>
    </div>
  );
}