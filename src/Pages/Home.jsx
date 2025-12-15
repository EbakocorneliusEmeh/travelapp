

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" > GetGo </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/search" className="hover:underline">Search</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </nav>

      <header className="bg-blue-100 flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore the world with GetGo
        </h2>
        <p className="text-slate-600 text-lg md:text-xl mb-6">
          Search any destination to see weather, attractions, and airports.
        </p>
        <Link
          to="/search"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Start Exploring
        </Link>
      </header>

      <section className="flex flex-wrap justify-center gap-6 p-10 bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">Attractions</h3>
          <p>Discover the best places to visit nearby your location.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">Weather</h3>
          <p>Check live weather forecasts for your next adventure.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">Airports</h3>
          <p>Find the nearest airports and plan your trips effortlessly.</p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white mt-auto py-6 px-6 text-center">
        <p>© 2025 GetGo. All rights reserved.</p>
      </footer>
    </div>
  );
}
