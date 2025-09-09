import React from "react";
import { motion } from "framer-motion";
import ourFacility from "./aboutDataStroe";

// Custom fade-in animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

function CampusFacility() {
  return (
    <motion.section
      className="mt-16 px-4 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl font-bold text-indigo-700 mb-10 text-center">
        Moments from Our Campus
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ourFacility.map((facility, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={facility.img}
              alt={`Campus Moment ${idx + 1}`}
              className="w-full h-40 md:h-48 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default CampusFacility;
