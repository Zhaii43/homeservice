"use client";

import Link from "next/link";

export default function Search() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-transparent shadow-md">
        <h1 className="text-xl font-bold">Home Services</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/">
            <a className="hover:text-blue-600">Home</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-blue-600">Services</a>
          </Link>
          <Link href="/about-us">
            <a className="hover:text-blue-600">About Us</a>
          </Link>
        </nav>
        <div>
          <Link href="/login">
            <a>
              <img
                src="/images/user1.png" // Replace with the actual path to your icon image
                alt="Login/Signup"
                className="w-8 h-8 cursor-pointer hover:opacity-80"
              />
            </a>
          </Link>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-translucent text-center py-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Home Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
