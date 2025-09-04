import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white text-center px-6">
      <h1 className="text-7xl font-extrabold tracking-widest">404</h1>
      <p className="mt-4 text-xl text-gray-300">Oops! Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-6 cursor-pointer px-6 py-3 rounded-2xl bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 transition-all font-semibold shadow-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
}
