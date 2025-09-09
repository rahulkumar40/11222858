import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import whyChooseUsFullData from "../assets/homeImage/whyChooseDetails";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

const WhyChooseUsDetail = () => {
  const { id } = useParams();
  const data = whyChooseUsFullData.find((item) => item.id === parseInt(id));

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-red-600 px-4">
        <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
        <p className="mb-6 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-slate-100 px-6 py-14"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 mb-8 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-12 leading-tight"
          variants={fadeInUp}
        >
          {data.title}
        </motion.h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {data.images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img
                src={img}
                alt={`${data.title} Image ${idx + 1}`}
                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center p-4">
                <p className="text-white text-sm">Image {idx + 1}</p>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Overview Section */}
        <motion.div
          className="prose prose-lg max-w-4xl mx-auto text-gray-700 leading-relaxed mb-12"
          variants={fadeInUp}
        >
          {data.overview.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          className="mt-10 bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl border border-slate-200"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6">
            Highlights
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base md:text-lg">
            {data.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsDetail;
