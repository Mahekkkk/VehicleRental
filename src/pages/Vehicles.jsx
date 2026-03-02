import { useState, useMemo } from "react";
import vehiclesData from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

function Vehicles() {

  const getPrice = (v) => v.pricePerDay || v.price || 0;

  const maxVehiclePrice = vehiclesData.length
    ? Math.max(...vehiclesData.map(getPrice))
    : 0;

  // Unique vehicle types
  const vehicleTypes = [
    "All",
    ...new Set(vehiclesData.map((v) => v.type)),
  ];

  // Unique categories
  const vehicleCategories = [
    "All",
    ...new Set(vehiclesData.map((v) => v.category)),
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [maxPrice, setMaxPrice] = useState(maxVehiclePrice);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  const filteredVehicles = useMemo(() => {
    return vehiclesData.filter((vehicle) => {

      const price = getPrice(vehicle);

      const matchesSearch = vehicle.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" || vehicle.type === typeFilter;

      const matchesCategory =
        categoryFilter === "All" || vehicle.category === categoryFilter;

      const matchesPrice = price <= maxPrice;

      return matchesSearch && matchesType && matchesCategory && matchesPrice;
    });
  }, [search, typeFilter, categoryFilter, maxPrice]);

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All");
    setCategoryFilter("All");
    setMaxPrice(maxVehiclePrice);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">

      {/* ================= TITLE ================= */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight 
                     bg-gradient-to-r from-orange-400 to-orange-600 
                     bg-clip-text text-transparent">
        Available Vehicles
      </h1>

      {/* ================= FILTER PANEL ================= */}
      <div
        className="max-w-6xl mx-auto
                   bg-white/5 backdrop-blur-xl border border-white/10
                   p-8 rounded-3xl shadow-2xl mb-16
                   hover:shadow-orange-500/10
                   transition-all duration-500
                   grid md:grid-cols-5 gap-6"
      >

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search vehicle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black/40 border border-white/20
                     rounded-xl px-4 py-3 text-white
                     placeholder-gray-400
                     focus:outline-none focus:border-orange-500"
        />

        {/* TYPE FILTER */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-black/40 border border-white/20
                     rounded-xl px-4 py-3 text-white
                     focus:outline-none focus:border-orange-500"
        >
          {vehicleTypes.map((type) => (
            <option key={type} value={type}>
              {type} Type
            </option>
          ))}
        </select>

        {/* CATEGORY FILTER */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-black/40 border border-white/20
                     rounded-xl px-4 py-3 text-white
                     focus:outline-none focus:border-orange-500"
        >
          {vehicleCategories.map((category) => (
            <option key={category} value={category}>
              {category} Category
            </option>
          ))}
        </select>

        {/* PRICE FILTER */}
        <div>
          <label className="block text-sm mb-2 text-gray-400">
            Max Price: ₹{formatCurrency(maxPrice)}
          </label>

          <input
            type="range"
            min="0"
            max={maxVehiclePrice}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-orange-500"
          />
        </div>

        {/* CLEAR BUTTON */}
        <button
          onClick={clearFilters}
          className="border border-orange-500 text-orange-500
                     rounded-xl px-4 py-3
                     hover:bg-orange-500 hover:text-white
                     transition-all duration-300"
        >
          Clear Filters
        </button>
      </div>

      {/* ================= VEHICLE GRID ================= */}
      {filteredVehicles.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <h3 className="text-2xl font-semibold mb-6">
            No Vehicles Found
          </h3>

          <button
            onClick={clearFilters}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold
                       hover:bg-orange-600 hover:scale-105 hover:shadow-lg
                       hover:shadow-orange-500/30
                       transition-all duration-300"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Vehicles;