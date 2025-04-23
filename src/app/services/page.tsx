// app/services/page.jsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample service details data
const serviceDetails = {
  cleaning: [
    { id: 1, title: "Deep Cleaning", details: "Comprehensive cleaning for every corner of your home", price: "$99" },
    { id: 2, title: "Regular Cleaning", details: "Weekly or bi-weekly maintenance cleaning", price: "$59" },
  ],
  repair: [
    { id: 1, title: "Appliance Repair", details: "Fix refrigerators, washers, and more", price: "$79" },
    { id: 2, title: "Furniture Repair", details: "Restore your furniture to perfect condition", price: "$89" },
  ],
  painting: [
    { id: 1, title: "Interior Painting", details: "Professional wall and ceiling painting", price: "$149" },
    { id: 2, title: "Exterior Painting", details: "Weather-resistant outdoor painting", price: "$199" },
  ],
  plumbing: [
    { id: 1, title: "Leak Repair", details: "Fix leaks in pipes and faucets", price: "$69" },
    { id: 2, title: "Drain Cleaning", details: "Clear clogged drains efficiently", price: "$49" },
  ],
  electric: [
    { id: 1, title: "Wiring Installation", details: "Safe electrical wiring setup", price: "$129" },
    { id: 2, title: "Lighting Repair", details: "Fix or install new lighting fixtures", price: "$79" },
  ],
};

export default function Services() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || "all";

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
    },
  };

  const categories = Object.keys(serviceContent);

  const handleCategoryChange = (selectedCategory) => {
    router.push(`/services?category=${selectedCategory}`);
  };

  const content = serviceContent[category] || serviceContent["all"];

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
      <main className="flex flex-1 px-6 py-12">
        {/* Categories Section */}
        <aside className="w-1/4 bg-black p-3 rounded-md border border-gray-300 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-white">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryChange(cat)}
                  className={`w-full text-left p-2 rounded-md ${
                    category === cat
                      ? "bg-blue-500 text-white"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {serviceContent[cat].title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Service Section */}
        <section className="flex-1 ml-8 p-4 bg-transparent rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg mb-6">{content.description}</p>
          
          {category === "all" ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {content.images.map((img, index) => (
                <div key={index} className="w-64 bg-white p-4 rounded-lg shadow-md">
                  <Image
                    src={img}
                    alt={`${content.title} ${index + 1}`}
                    width={200}
                    height={150}
                    className="rounded-md mb-4 mx-auto"
                  />
                  <h3 className="text-lg font-semibold">Service Preview {index + 1}</h3>
                  <p className="text-sm text-gray-600">Explore our services</p>
                  <button
                    onClick={() => handleCategoryChange(categories[index + 1] || "all")}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(serviceDetails[category] || []).map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <Image
                    src={content.images[index % content.images.length]}
                    alt={service.title}
                    width={200}
                    height={150}
                    className="rounded-md mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{service.details}</p>
                  <p className="text-sm font-medium text-gray-800 mb-4">Category: {content.title}</p>
                  <p className="text-lg font-bold text-blue-600 mb-4">{service.price}</p>
                  <a
                    href={`/services/${category}/${service.id}`}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition text-center block"
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
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