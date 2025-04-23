// app/services/[category]/[id]/page.tsx
"use client";

import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ... (rest of your code with interfaces, serviceDetails, etc.)

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
  cleaning: [
    {
      id: 1,
      title: "Deep Cleaning",
      details: "Comprehensive cleaning for every corner of your home, including hard-to-reach areas, appliances, and fixtures.",
      price: "$99",
      location: "Available in New York, NY and surrounding areas",
      similarBusinesses: ["Spotless Homes", "Clean Sweep Services", "Pristine Cleaners"],
    },
    {
      id: 2,
      title: "Regular Cleaning",
      details: "Weekly or bi-weekly maintenance cleaning to keep your home tidy and fresh.",
      price: "$59",
      location: "Available in New York, NY and surrounding areas",
      similarBusinesses: ["Daily Shine", "Tidy Spaces", "Quick Clean Co."],
    },
  ],
  repair: [
    {
      id: 1,
      title: "Appliance Repair",
      details: "Fix refrigerators, washers, dryers, and other household appliances with expert care.",
      price: "$79",
      location: "Available in Brooklyn, NY and nearby regions",
      similarBusinesses: ["FixIt Pros", "Appliance Wizards", "Tech Repair Co."],
    },
    {
      id: 2,
      title: "Furniture Repair",
      details: "Restore your furniture to perfect condition, including upholstery and woodwork.",
      price: "$89",
      location: "Available in Brooklyn, NY and nearby regions",
      similarBusinesses: ["Furniture Fix", "Restore & More", "Craft Repair"],
    },
  ],
  painting: [
    {
      id: 1,
      title: "Interior Painting",
      details: "Professional painting for walls, ceilings, and trim to refresh your home’s interior.",
      price: "$149",
      location: "Available in Manhattan, NY and surrounding areas",
      similarBusinesses: ["Color Splash", "Paint Pros", "Vivid Homes"],
    },
    {
      id: 2,
      title: "Exterior Painting",
      details: "Weather-resistant painting for your home’s exterior, including siding and trim.",
      price: "$199",
      location: "Available in Manhattan, NY and surrounding areas",
      similarBusinesses: ["Outdoor Colors", "Exterior Experts", "Paint Shield"],
    },
  ],
  plumbing: [
    {
      id: 1,
      title: "Leak Repair",
      details: "Fast and reliable repair for leaks in pipes, faucets, and fixtures to prevent water damage.",
      price: "$69",
      location: "Available in Queens, NY and nearby areas",
      similarBusinesses: ["Plumb Perfect", "Leak Stoppers", "Pipe Pros"],
    },
    {
      id: 2,
      title: "Drain Cleaning",
      details: "Clear clogged drains and pipes efficiently to restore proper flow.",
      price: "$49",
      location: "Available in Queens, NY and nearby areas",
      similarBusinesses: ["Drain Masters", "Flow Easy", "Clear Pipes Co."],
    },
  ],
  electric: [
    {
      id: 1,
      title: "Wiring Installation",
      details: "Safe and code-compliant electrical wiring installation for new or renovated spaces.",
      price: "$129",
      location: "Available in Bronx, NY and surrounding areas",
      similarBusinesses: ["Wire Works", "Electric Experts", "Power Pros"],
    },
    {
      id: 2,
      title: "Lighting Repair",
      details: "Repair or install new lighting fixtures to brighten your home safely.",
      price: "$79",
      location: "Available in Bronx, NY and surrounding areas",
      similarBusinesses: ["Bright Solutions", "Light Fixers", "Illuminators"],
    },
  ],
};

// Mock category titles
const serviceContent: CategoryContent = {
  cleaning: { title: "Cleaning Services" },
  repair: { title: "Repair Services" },
  painting: { title: "Painting Services" },
  plumbing: { title: "Plumbing Services" },
  electric: { title: "Electrical Services" },
};

export default function ServiceDetails() {
  const { category, id } = useParams() as { category: string; id: string };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  // Find the service based on category and id
  const service: Service | undefined = serviceDetails[category]?.find(
    (item) => item.id === parseInt(id)
  );
  const categoryTitle: string = serviceContent[category]?.title || "Service";

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
    console.log("Booking submitted:", formData);
    // Here you would typically send the form data to an API
    alert("Booking request submitted! We'll contact you soon.");
    setFormData({ name: "", email: "", date: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.header
        className="flex justify-between items-center px-8 py-4 bg-transparent shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
              src="/images/user1.png"
              alt="Login/Signup"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          
          {/* Service Image */}
          <Image
            src={`/images/${category}.jpg`}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-lg mb-6 w-full object-cover"
          />

          {/* Service Details */}
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

            {/* Book Appointment Form */}
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
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        </motion.div>
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