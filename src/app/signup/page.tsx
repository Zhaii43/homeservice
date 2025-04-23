"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Signup() {
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
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/about-us" className="hover:text-blue-600">About Us</a>
        </nav>
        <div>
          <a href="/login">
            <img
              src="/images/user1.png" // Replace with the actual path to your icon image
              alt="Login/Signup"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </motion.header>

      {/* Signup Form */}
      <main className="flex flex-col items-center justify-center flex-grow text-center p-8">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-8">
          <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Sign Up</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              {/* Username */}
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "black" }}
                placeholder="Enter your username"
              />
            </div>

            <div>
              {/* Email */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "black" }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              {/* Password */}
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "black" }}
                placeholder="Enter your password"
              />
            </div>

            <div>
              {/* Confirm Password */}
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "black" }}
                placeholder="Confirm your password"
              />
            </div>

            {/* Column 2 */}
            <div>
              {/* Age */}
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="mt-1 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "black" }}
                placeholder="Enter your age"
              />
            </div>

            <div>
              {/* Address */}
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                style={{ color: "black" }}
                placeholder="Enter your address"
              />
            </div>

            {/* Full-width Submit Button */}
            <div className="col-span-full">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
              {/* Redirect to Login */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
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
