"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <a
            href="/services?category=cleaning"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/mop.png" alt="Cleaning" className="w-8 h-8 mb-2" />
            Cleaning
          </a>
          {/* Repair */}
          <a
            href="/services?category=repair"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/support.png" alt="Repair" className="w-8 h-8 mb-2" />
            Repair
          </a>
          {/* Painting */}
          <a
            href="/services?category=painting"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/paintbrush.png" alt="Painting" className="w-8 h-8 mb-2" />
            Painting
          </a>
          {/* Plumbing */}
          <a
            href="/services?category=plumbing"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/repairing.png" alt="Plumbing" className="w-8 h-8 mb-2" />
            Plumbing
          </a>
          {/* Electric */}
          <a
            href="/services?category=electric"
            className="flex flex-col items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <img src="/images/electricity.png" alt="Electric" className="w-8 h-8 mb-2" />
            Electric
          </a>
        </div>
      </section>


             {/* Popular Businesses Section */}
        <section className="mt-16 w-full max-w-6xl">
          <h3 className="text-xl font-bold mb-6 text-left">Popular Businesses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Business 1 */}
          <div className="bg-white border rounded-xl shadow-lg p-0 hover:shadow-[0_4px_20px_rgba(128,0,255,0.3)] transition-shadow duration-300">
            <div className="rounded-xl overflow-hidden w-full h-[200px] relative hover:scale-105 transform transition duration-300">
              <Image src="/images/plumbing.jpg" alt="Plumber Services" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full"/>
            </div>
            <div className="p-4">
              <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-md mb-2">
                Repair
              </span>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 text-left">Quick Fix Plumbing</h4>
              <p className="text-sm text-gray-500 text-left">525 N Tyron Street, New York</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 hover:scale-105 transform transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>
          {/* Business 2*/}
          <div className="bg-white border rounded-xl shadow-lg p-0 hover:shadow-[0_4px_20px_rgba(128,0,255,0.3)] transition-shadow duration-300">
            <div className="rounded-xl overflow-hidden w-full h-[200px] relative hover:scale-105 transform transition duration-300">
              <Image src="/images/electricians.jpeg" alt="Plumber Services" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full"/>
            </div>
            <div className="p-4">
              <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-md mb-2">
                Electricians Services
              </span>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 text-left">Power Pro Electricians</h4>
              <p className="text-sm text-gray-500 text-left">Bayanihan Basak, Cebu City</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 hover:scale-105 transform transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>
          {/* Business 3*/}
          <div className="bg-white border rounded-xl shadow-lg p-0 hover:shadow-[0_4px_20px_rgba(128,0,255,0.3)] transition-shadow duration-300">
            <div className="rounded-xl overflow-hidden w-full h-[200px] relative hover:scale-105 transform transition duration-300">
              <Image src="/images/cleaning.jpg" alt="Plumber Services" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full"/>
            </div>
            <div className="p-4">
              <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-md mb-2">
                Cleaning Services
              </span>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 text-left">Sparkle Cleaning Co.</h4>
              <p className="text-sm text-gray-500 text-left">Basak Lapu-Lapu, Cebu</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 hover:scale-105 transform transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>
          {/* Business 4*/}
          <div className="bg-white border rounded-xl shadow-lg p-0 hover:shadow-[0_4px_20px_rgba(128,0,255,0.3)] transition-shadow duration-300">
            <div className="rounded-xl overflow-hidden w-full h-[200px] relative hover:scale-105 transform transition duration-300">
              <Image src="/images/bathroom.jpg" alt="Plumber Services" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full"/>
            </div>
            <div className="p-4">
              <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-md mb-2">
                Cleaning Services
              </span>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 text-left">Bathroom Cleaning</h4>
              <p className="text-sm text-gray-500 text-left">Naga City, Cebu</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 hover:scale-105 transform transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>
          </div>
        </section>
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
