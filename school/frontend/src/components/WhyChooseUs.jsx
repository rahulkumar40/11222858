import { motion } from "framer-motion";
import whyChooseUsData from "../assets/homeImage/homeData";
// import whyChooseUsFullData from "../assets/homeImage/whyChooseDetails";
import { Link } from "react-router-dom";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      id="why-choose"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Choose <span className="text-indigo-600">EduWave</span>?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyChooseUsData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <Link to={`/why-choose-us/${item.id}`} className="block">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Gradient Overlay with Description */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.p
                    className="text-white text-sm leading-relaxed mb-[4rem]"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>

                {/* Title Box */}
                <div className="bg-white py-4 px-6 z-10 relative">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
