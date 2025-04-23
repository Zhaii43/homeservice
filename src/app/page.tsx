"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.6 } },
  };

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
            <img
              src="/images/user1.png" // Replace with the actual path to your icon image
              alt="Login/Signup"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </Link>
        </div>
      </motion.header>
      
      {/* Main Content with Fade-In Animation */}
      <motion.main
        className="flex flex-col items-center justify-center flex-grow text-center p-8"
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-4xl font-bold mb-4">Find Home Services/Repair Near You</h2>
        <p className="text-lg mb-2 text-gray-600">
          Explore Best Home Service & Repair near you.
        </p>
        <div className="mt-8 flex items-center justify-center w-full">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

      {/* Categories Section */}
      <section className="mt-12 w-full max-w-4xl text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {/* Cleaning */}
          <Link
            href="/services?category=cleaning"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/mop.png" alt="Cleaning" className="w-8 h-8 mb-2" />
            Cleaning
          </Link>
          {/* Repair */}
          <Link
            href="/services?category=repair"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/support.png" alt="Repair" className="w-8 h-8 mb-2" />
            Repair
          </Link>
          {/* Painting */}
          <Link
            href="/services?category=painting"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/paintbrush.png" alt="Painting" className="w-8 h-8 mb-2" />
            Painting
          </Link>
          {/* Plumbing */}
          <Link
            href="/services?category=plumbing"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/repairing.png" alt="Plumbing" className="w-8 h-8 mb-2" />
            Plumbing
          </Link>
          {/* Electric */}
          <Link
            href="/services?category=electric"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/electricity.png" alt="Electric" className="w-8 h-8 mb-2" />
            Electric
          </Link>
        </div>
      </section>
      {/* Popular Businesses Section */}
      {/* Your code for this section */}
      </motion.main>

      {/* Footer */}
      <footer className="bg-translucent text-center py-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Home Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
