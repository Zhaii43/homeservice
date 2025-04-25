// app/services/[category]/[id]/page.tsx
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define interfaces for type safety
interface Service {
  id: number;
  title: string;
  details: string;
  price: string;
  location: string;
  similarBusinesses: string[];
}

interface ServiceDetails {
  [key: string]: Service[];
}

interface CategoryContent {
  [key: string]: { title: string };
}

interface FormData {
  name: string;
  email: string;
  date: string;
  message: string;
}

// Mock data for service details
const serviceDetails: ServiceDetails = {
  // Mock data structure as in the original code
};

const serviceContent: CategoryContent = {
  // Mock data structure as in the original code
};

export default function ServiceDetails() {
  const { category, id } = useParams() as { category: string; id: string };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const service = serviceDetails[category]?.find(
    (item) => item.id === parseInt(id)
  );
  const categoryTitle = serviceContent[category]?.title || "Service";

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Service not found</p>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Booking request submitted! We'll contact you soon.");
    setFormData({ name: "", email: "", date: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        className="flex justify-between items-center px-8 py-4 bg-transparent shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
                src="/images/user1.png"
                alt="Login/Signup"
                className="w-8 h-8 cursor-pointer hover:opacity-80"
              />
            </a>
          </Link>
        </div>
      </motion.header>

      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <Image
            src={`/images/${category}.jpg`}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-lg mb-6 w-full object-cover"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600 mb-4">{service.details}</p>
              <h2 className="text-xl font-semibold mb-2">Category</h2>
              <p className="text-gray-600 mb-4">{categoryTitle}</p>
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="text-gray-600 mb-4">{service.location}</p>
              <h2 className="text-xl font-semibold mb-2">Similar Businesses</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {service.similarBusinesses.map((business, index) => (
                  <li key={index}>{business}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
