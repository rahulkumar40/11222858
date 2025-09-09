import React from "react";
import { FaSquareInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";

function Contact() {
  const color = false;

  return (
    <div
      className={`min-h-screen w-full ${
        color ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="w-full">

        {/* Hero Section */}
        <div
          className="w-full min-h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              Get in Touch with Our School
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium drop-shadow-md">
              “Nurturing Minds, Shaping Futures” — We’re here to guide you every step of the way.
            </p>
            <a
              href="mailto:admissions@yourschool.edu"
              className="mt-6 inline-block bg-yellow-400 px-6 py-3 text-lg font-semibold rounded-md hover:bg-yellow-500 transition"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Quick Info Section */}
        <div
          className={`py-6 rounded-md shadow-md max-w-[1200px] mx-auto mt-8 px-4 ${
            color ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Contact Information
          </h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-gray-600">
            <ContactInfo title="Phone" value="+91 1234567890" link="tel:+911234567890" />
            <ContactInfo title="Email" value="admissions@yourschool.edu" link="mailto:admissions@yourschool.edu" />
            <ContactInfo title="Address" value="123 Education Lane, Learning City, India" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10 max-w-[1200px] mx-auto px-4">
          <h2 className="text-center mb-4 text-xl font-semibold">
            We’d love to hear from you
          </h2>
          <form
            className={`p-6 rounded-md shadow-lg flex flex-col gap-6 ${
              color
                ? "bg-gray-800"
                : "bg-gradient-to-r from-blue-50/50 to-purple-50/50"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 w-full">
              <div className="space-y-4">
                <input type="text" placeholder="Your Name *" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                <input type="email" placeholder="Your Email *" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              </div>
              <textarea placeholder="Your Message..." className="w-full h-40 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"></textarea>
            </div>
            <button type="submit" className="self-center bg-blue-600 px-6 py-2 text-white font-medium rounded-md hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-[1200px] mx-auto px-4 items-center">
          <p className="text-center font-semibold text-lg">
            Find Us on the Map
          </p>
          <iframe
            className="w-full h-64 rounded-md shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.4980211078114!2d77.0468112!3d30.2513883"
            allowFullScreen
            loading="lazy"
            title="School Location Map"
          ></iframe>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 py-8">
          <h2 className="mb-6 text-xl font-bold text-center text-white">
            Stay Connected with Us
          </h2>
          <div className="flex justify-center gap-8">
            <SocialIcon url="#" label="Instagram" Icon={FaSquareInstagram} />
            <SocialIcon url="#" label="WhatsApp" Icon={FaWhatsapp} />
            <SocialIcon url="#" label="Facebook" Icon={FaFacebook} />
          </div>
        </div>

      </div>
    </div>
  );
}

const ContactInfo = ({ title, value, link }) => (
  <div className="flex flex-col items-center py-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    {link ? (
      <a href={link} className="hover:underline">
        {value}
      </a>
    ) : (
      <p className="text-center">{value}</p>
    )}
  </div>
);

const SocialIcon = ({ url, label, Icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center hover:scale-110 transform transition-all text-white"
  >
    <Icon className="text-4xl mb-1" />
    <span className="text-sm">{label}</span>
  </a>
);

export default Contact;
