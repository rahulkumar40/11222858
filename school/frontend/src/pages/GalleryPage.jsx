import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Academics", "Sports", "Arts", "Events", "Campus Life"];

const galleryItems = [
  {
    category: "Academics",
    title: "Science Fair 2025",
    description: "Students presenting innovative science projects.",
    img: "https://images.unsplash.com/photo-1581091215360-1b079a8f9b36?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Sports",
    title: "Annual Sports Day",
    description: "Track and field competitions filled with team spirit.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Arts",
    title: "Art Exhibition",
    description: "Student artworks displayed for parents and visitors.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Events",
    title: "Graduation Ceremony",
    description: "Celebrating the achievements of our graduating class.",
    img: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Campus Life",
    title: "Library Time",
    description: "Students exploring books in the school library.",
    img: "https://images.unsplash.com/photo-1581093588401-22afc519f9be?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Sports",
    title: "Basketball Championship",
    description: "Our school team competing at the state level.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Events",
    title: "Cultural Fest",
    description: "Music, dance, and theatre performances by students.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Campus Life",
    title: "Morning Assembly",
    description: "Daily gathering to promote unity and discipline.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')",
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
            School Gallery
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore our vibrant school culture through photos and videos.
          </motion.p>
        </div>
      </motion.div>

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto py-10 px-6 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
