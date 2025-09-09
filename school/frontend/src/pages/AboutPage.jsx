import React from "react";
import { motion } from "framer-motion";
import class_room from "../assets/img/class_room.jpg";
import Smart from "../assets/homeImage/smart_class.jpeg";
import ourFacility from "../assets/aboutData/aboutDataStroe";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
            Welcome to Greenfield International School
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering Future Leaders Through Quality Education
          </p>
        </motion.div>

        {/* Imaginary Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src={class_room}
            alt="school campus"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Greenfield, we believe in nurturing each child's unique
              potential through a blend of modern techniques and traditional
              values. Our vision is to foster critical thinking, creativity, and
              compassion in every student.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 grid md:grid-cols-2 gap-6 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Our Mission
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide a safe and inclusive learning environment</li>
              <li>Encourage innovation, collaboration, and responsibility</li>
              <li>Develop leadership and communication skills</li>
              <li>Promote physical, mental, and emotional well-being</li>
            </ul>
          </div>
          <img
            src={Smart}
            alt="Smart Class"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-indigo-700">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ourFacility.map((facility, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {facility.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
            Moments from Our Campus
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ourFacility.map((facilities, idx) => (
              <motion.img
                key={idx}
                src={facilities.img}
                alt="gallery"
                className="rounded-lg shadow hover:scale-105 transition duration-300 object-cover w-full h-40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Meet the Team */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
            Meet Our Dedicated Faculty
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mrs. Aarti Sharma",
                role: "Principal",
                img: "https://source.unsplash.com/200x200/?woman,teacher",
              },
              {
                name: "Mr. Rajeev Mehta",
                role: "Math Teacher",
                img: "https://source.unsplash.com/200x200/?man,teacher",
              },
              {
                name: "Ms. Nidhi Kapoor",
                role: "Science Teacher",
                img: "https://source.unsplash.com/200x200/?woman,scientist",
              },
            ].map((person, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="mx-auto rounded-full w-24 h-24 object-cover mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {person.name}
                </h4>
                <p className="text-indigo-600 text-sm">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-20 bg-indigo-50 p-8 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-700 mb-4">
            Have questions or want to know more? Reach out via our contact page
            or visit our campus.
          </p>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
