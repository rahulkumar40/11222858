import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage({ setLanding }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col">
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-extrabold">EduWave</div>
      </nav>

      <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-8 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Learn. Grow. Succeed.
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Empowering future generations with knowledge, discipline, and confidence.
          </p>
          <button
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl shadow-xl transition"
            onClick={() => setLanding(false)}
          >
            Get Started
          </button>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
          alt="School Building"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mt-10 md:mt-0 rounded-2xl shadow-2xl"
        />
      </div>

      <footer className="p-6 text-center text-sm text-blue-200">
        © 2025 EduWave School. All rights reserved.
      </footer>
    </div>
  );
}
