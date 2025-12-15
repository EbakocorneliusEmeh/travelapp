

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchGeocode } from "../hooks/geoapify";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    const result = await fetchGeocode(query);

    if (!result) {
      alert("Location not found");
      return;
    }

    navigate("/search", {
      state: {
        lat: result.lat,
        lon: result.lon,
        country: result.country,
        city: result.city,
      },
    });
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 flex-1">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destination (e.g. Limbe)"
        className="flex-1 border rounded px-3 py-2"
      />
      <button className="bg-black text-white px-4 rounded">Go</button>
    </form>
  );
}
