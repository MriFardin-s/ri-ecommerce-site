import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">

      <h1 className="text-8xl font-black text-green-600 mb-4 tracking-tighter">
        404
      </h1>


      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found 
      </h2>


      <p className="text-gray-500 mb-8 max-w-md">
        Sorry, the page you are looking for is not available right now.
      </p>


      <Link
        href="/"
        className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}