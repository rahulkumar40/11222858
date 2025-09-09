import { useState } from "react";
import { motion } from "framer-motion";
import enrollIllustration from "../assets/homeImage/school_b3.jpeg"; // Add your image here

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    studentClass: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Submitted:", formData);
    alert("Enrollment Submitted Successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      studentClass: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 flex flex-col md:flex-row items-center justify-center">
      {/* Left Panel */}
      <motion.div
        className="hidden md:flex flex-col items-center justify-center bg-indigo-700 text-white p-10 w-full md:w-1/2 h-full"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={enrollIllustration}
          alt="Inspiration"
          className="w-80 mb-6"
        />
        <h2 className="text-3xl font-bold text-center leading-snug mb-4">
          "Education is the passport to the future, <br /> for tomorrow belongs
          to those who prepare for it today."
        </h2>
        <p className="text-lg text-center opacity-80">— Malcolm X</p>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="bg-white shadow-2xl rounded-none md:rounded-l-3xl p-8 w-full md:w-1/2"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Student Enrollment Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select
            name="studentClass"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.studentClass}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>
            <option>Nursery</option>
            <option>KG</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>

          <textarea
            name="address"
            rows="3"
            placeholder="Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Enroll Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EnrollForm;
