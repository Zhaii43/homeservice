"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";

const Services = () => {
  const [isClient, setIsClient] = useState(false);
  const [category, setCategory] = useState("all");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const currentCategory = searchParams.get("category") || "all";
      setCategory(currentCategory);
    }
  }, [isClient, searchParams]);

  if (!isClient) return null;

  const serviceContent = {
    all: {
      title: "All Services",
      description: "Explore a wide range of home services tailored to your needs.",
      images: [
        "/images/background.jpg",
        "/images/cleaning.jpg",
        "/images/repair.jpeg",
        "/images/paint.png",
        "/images/plumbing.jpg",
        "/images/electricians.jpeg",
      ],
    },
    cleaning: {
      title: "Cleaning Services",
      description: "Professional cleaning services to keep your home spotless.",
      images: ["/images/cleaning.jpg", "/images/cleaning2.jpg", "/images/cleaning3.jpg"],
    },
    repair: {
      title: "Repair Services",
      description: "Reliable home repair solutions for all kinds of fixes.",
      images: ["/images/repair.jpeg", "/images/repair2.jpeg", "/images/repair3.jpeg"],
    },
    painting: {
      title: "Painting Services",
      description: "Expert painting services to add vibrancy to your home.",
      images: ["/images/paint.png", "/images/paint2.png", "/images/paint3.png"],
    },
    plumbing: {
      title: "Plumbing Services",
      description: "Quick and reliable plumbing solutions for your home.",
      images: ["/images/plumbing.jpg", "/images/plumbing2.jpg", "/images/plumbing3.jpg"],
    },
    electric: {
      title: "Electrical Services",
      description: "Safe and efficient electrical installations and repairs.",
      images: ["/images/electricians.jpeg", "/images/electric2.jpeg", "/images/electric3.jpeg"],
    },  };

  const categories = Object.keys(serviceContent) as (keyof typeof serviceContent)[];

  const handleCategoryChange = (selectedCategory: keyof typeof serviceContent) => {
    router.push(`/services?category=${selectedCategory}`);
  };

  const content = serviceContent[category as keyof typeof serviceContent] || serviceContent["all"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.header
        className="flex justify-between items-center px-8 py-4 bg-transparent shadow-md"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
        }}
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
              src="/images/user1.png"
              alt="Login/Signup"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex flex-1 px-6 py-12">
        <aside className="w-1/4 bg-black p-3 rounded-md border border-gray-300 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-white">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryChange(cat)}
                  className={`w-full text-left p-2 rounded-md ${
                    category === cat ? "bg-blue-500 text-white" : "text-white hover:text-blue-300"
                  }`}
                >
                  {serviceContent[cat].title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex-1 ml-8 p-4 bg-transparent rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg mb-6">{content.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-md">
                <img
                  src={image}
                  alt={`${content.title} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-translucent text-center py-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Home Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

import dynamic from "next/dynamic";

// Dynamically import Services component for CSR
const ServicesWithSuspense = dynamic(() => Promise.resolve(Services), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesWithSuspense />
    </Suspense>
  );
}
