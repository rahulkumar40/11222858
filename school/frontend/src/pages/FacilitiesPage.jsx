import React from "react";
import { motion } from "framer-motion";

import sections from "../assets/facilitie/facilitiesD"; // Importing the facilities data

export default function FacilitiesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1350&q=80')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Facilities
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            World-class infrastructure and resources to support every student's learning journey.
          </motion.p>
        </div>
      </motion.section>

      {/* Sections */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">
        {sections.map((sec, idx) => (
          <motion.div
            key={sec.id}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              idx % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="lg:w-1/2 overflow-hidden rounded-xl shadow-lg">
              <motion.img
                src={sec.img}
                alt={sec.title}
                className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800">{sec.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{sec.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Virtual Tour & Map */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Explore Our Campus</h2>
          <p className="mt-3 text-gray-600">
            Take a virtual tour or locate us easily using the campus map below.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <iframe
              className="w-full h-64 rounded-xl shadow-md"
              src="https://www.youtube.com/embed/Scxs7L0vhZ4"
              title="Virtual Tour"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-indigo-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Interested in Our Facilities?</h2>
        <p className="mt-2">
          Request more information or schedule a visit to our campus.
        </p>
        <button className="mt-6 bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
