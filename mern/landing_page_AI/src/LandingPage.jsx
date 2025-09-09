// src/pages/LandingPage.jsx
import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powering Bulk Commerce for Businesses
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Source products at scale with competitive pricing and reliable delivery.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Trusted by Leading Businesses</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["BrandA", "BrandB", "BrandC", "BrandD"].map((brand) => (
              <div
                key={brand}
                className="bg-white shadow p-4 rounded-lg w-32 h-20 flex items-center justify-center"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Electronics", "Packaging", "Office Supplies"].map((cat) => (
              <div
                key={cat}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/400x200?text=${cat}`}
                  alt={cat}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{cat}</h3>
                  <p className="text-gray-600">Bulk deals and business-friendly pricing.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Bulk Discounts", desc: "Save more when you buy in large quantities." },
              { title: "Reliable Logistics", desc: "On-time delivery for every order." },
              { title: "Business Credit", desc: "Flexible payment terms for approved partners." }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-blue-700 text-white py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Request a Quote
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
