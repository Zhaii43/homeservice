"use client";

import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { motion } from "framer-motion";

export default function About() {
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
          <Link href="/" passHref>
            <a className="hover:text-blue-600">Home</a>
          </Link>
          <Link href="/services" passHref>
            <a className="hover:text-blue-600">Services</a>
          </Link>
          <Link href="/about-us" passHref>
            <a className="hover:text-blue-600">About Us</a>
          </Link>
        </nav>
        <div>
          <Link href="/login" passHref>
            <a>
              <img
                src="/images/user1.png" // Replace with the actual path to your icon image
                alt="Login/Signup"
                className="w-8 h-8 cursor-pointer hover:opacity-80"
              />
            </a>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-white">About Us</h2>
        <p className="text-lg text-white mb-6 text-center max-w-3xl">
          At Home Services, we are dedicated to providing top-notch home improvement and maintenance solutions tailored to your needs. Our skilled professionals ensure your home stays comfortable, functional, and beautiful.
        </p>
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-700">
              To deliver exceptional home services that enhance your living experience with professionalism, reliability, and care.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and preferred home services provider in the industry.
            </p>
          </div>
          {/* Commitment */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Commitment</h3>
            <p className="text-gray-700">
              Your satisfaction is our priority. We strive to exceed expectations with every service we offer.
            </p>
          </div>
        </div>
        <Image
          src="/images/background.jpg" // Replace with the actual image path
          alt="Our Team"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </main>

      {/* Footer */}
      <footer className="bg-translucent text-center py-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Home Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
