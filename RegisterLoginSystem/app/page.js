"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-black flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Auth App 🚀</h1>
      <p className="mb-6 text-gray-600">Choose an option below:</p>
      
      <div className="flex gap-4">
        <Link
          href="/signup"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Signup
        </Link>
        <Link
          href="/login"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Login
        </Link>
      </div>
    </main>
  );
}