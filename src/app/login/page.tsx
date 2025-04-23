"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Login() {
  const headerAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with animation */}
      <motion.header
        className="flex justify-between items-center px-8 py-4 bg-transparent shadow-md"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={headerAnimation}
      >
        <h1 className="text-xl font-bold">Home Services</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/about-us" className="hover:text-blue-600">About Us</Link>
        </nav>
        <div>
          <Link href="/login">
            <Image
              src="/images/user1.png" // Replace with the actual path to your icon image
              alt="Login/Signup"
              width={32}
              height={32}
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative flex flex-1 justify-center items-center px-6 py-12">
        {/* Background GIF */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://i.gifer.com/ZGYq.gif')" }} // Replace with your GIF path
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row bg-gray-200 shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/background.jpg" // Replace with your image path
              alt="Login Banner"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Login Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl text-black font-bold text-center mb-6">Login</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Home Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
