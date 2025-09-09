import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import schoolImage from "../assets/homeImage/school_b1.jpeg";
import schoolImage1 from "../assets/homeImage/school_b2.jpeg";
import image from "../assets/homeImage/image.png";
import { Link } from "react-router-dom";
import about from "../assets/img/about_us.jpg";
const Home = () => {
  const academicLevels = ["Primary", "Middle", "Senior Secondary"];
  const facilities = [
    { name: "Library", img: "library" },
    { name: "Sports Complex", img: "sports" },
    { name: "Science Labs", img: "lab" },
    { name: "Computer Labs", img: "computer_lab" },
  ];
  const testimonials = [
    {
      name: "Aditi Sharma",
      year: "Class of 2025",
      text: "EduWave gave me the wings to fly. From academics to personality development, the journey here has been life-changing!",
    },
    {
      name: "Rohan Verma",
      year: "Class of 2024",
      text: "The faculty is excellent, and I always felt supported academically and emotionally. I'm proud to be an EduWave alumnus.",
    },
    {
      name: "Neha Mehta",
      year: "Class of 2023",
      text: "The events and competitions really helped me develop confidence and leadership skills.",
    },
  ];

  return (
    <div className="text-gray-800 bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold">
              Welcome to EduWave School
            </h1>
            <p className="text-lg">
              Empowering future generations with world-class education, values,
              and innovation.
            </p>
            <Link to="/enroll">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={schoolImage1}
              alt="School building"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <img src={image} alt="Principal" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Message from the Principal
            </h2>
            <p>
              At EduWave, we believe every child is unique and deserves a
              learning environment tailored to their potential. Our mission is
              to instill values, ignite creativity, and inspire future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden">
            <img
              src={about}
              alt="About"
              className="rounded-xl shadow-md overflow-hidden"
            />
            <div className="h-full w-full hover:bg-gradient-to-tr from-gray-900 to-transparent absolute top-0 left-0 transition-all ease-in duration-100"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p>
              EduWave is a premier institution committed to delivering top-notch
              education, fostering creativity, and developing leaders of
              tomorrow. Our vision is to provide a nurturing and inclusive
              learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Academics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicLevels.map((level, i) => (
              <div
                key={i}
                className="bg-blue-100 p-6 rounded-lg shadow-md hover:scale-105 transition"
              >
                <img
                  src={schoolImage}
                  alt={level}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="text-xl font-semibold">{level} Section</h3>
                <p className="text-sm text-gray-700">
                  Comprehensive curriculum with innovative teaching approaches.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map(({ name, img }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <img
                  src={schoolImage}
                  alt={name}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="italic text-gray-600 mb-4">"{t.text}"</p>
                <h4 className="font-bold text-indigo-700">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl font-bold">Admissions Open for 2025</h2>
          <p>
            Seats are limited! Don’t miss the opportunity to be part of EduWave
            School.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Apply Now
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            For admission inquiries, call <strong>+91-99999-88888</strong> or
            email
            <strong> contact@eduwave.edu</strong>
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center p-6">
        <p>© 2025 EduWave School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
