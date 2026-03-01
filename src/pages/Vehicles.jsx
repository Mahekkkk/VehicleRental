import { useState, useMemo } from "react";
import vehiclesData from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

function Vehicles() {

  // ✅ Safe price getter
  const getPrice = (v) => v.pricePerDay || v.price || 0;

  const maxVehiclePrice = vehiclesData.length
    ? Math.max(...vehiclesData.map(getPrice))
    : 0;

  const vehicleTypes = [
    "All",
    ...new Set(vehiclesData.map((v) => v.type)),
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
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

      const matchesPrice = price <= maxPrice;

      return matchesSearch && matchesType && matchesPrice;
    });
  }, [search, typeFilter, maxPrice]);

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All");
    setMaxPrice(maxVehiclePrice);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">

      {/* ================= TITLE ================= */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight">
        Available Vehicles
      </h1>

      {/* ================= FILTER PANEL ================= */}
      <div
        className="max-w-6xl mx-auto
                   bg-white/5 backdrop-blur-xl border border-white/10
                   p-8 rounded-3xl shadow-2xl mb-16
                   grid md:grid-cols-4 gap-6"
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
                     focus:outline-none focus:border-white"
        />

        {/* TYPE FILTER */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-black/40 border border-white/20
                     rounded-xl px-4 py-3 text-white
                     focus:outline-none focus:border-white"
        >
          {vehicleTypes.map((type) => (
            <option key={type} value={type}>
              {type} Types
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
            className="w-full accent-white"
          />
        </div>

        {/* CLEAR BUTTON */}
        <button
          onClick={clearFilters}
          className="border border-white/20 rounded-xl px-4 py-3
                     hover:bg-white hover:text-black
                     transition-all duration-300"
        >
          Clear Filters
        </button>
      </div>

      {/* ================= VEHICLE GRID ================= */}
      {filteredVehicles.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="transform hover:scale-105 transition duration-300"
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <h3 className="text-2xl font-semibold mb-6">
            No Vehicles Found
          </h3>

          <button
            onClick={clearFilters}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold
                       hover:scale-105 hover:shadow-2xl
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