import { useParams, useNavigate, Link } from "react-router-dom";
import vehicles from "../data/vehicles";

function VehicleDetails() {
  const { slug } = useParams(); // ✅ slug from route
  const navigate = useNavigate();

  const vehicle = vehicles.find((v) => v.slug === slug);

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-6">Vehicle Not Found</h1>
        <button
          onClick={() => navigate("/vehicles")}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold
                     hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Browse Vehicles
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-400 hover:text-white transition"
        >
          ← Back
        </button>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={vehicle.images?.[0] || "/placeholder-vehicle.jpg"}
            alt={vehicle.name}
            className="w-full h-[420px] object-cover"
          />

          <div className="p-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {vehicle.name}
            </h1>
            <p className="text-gray-400 mt-3">
              {vehicle.type} • {vehicle.fuel} • {vehicle.transmission}
            </p>

            <p className="text-4xl font-bold mt-8">
              ₹{formatPrice(vehicle.pricePerDay)}
              <span className="text-lg text-gray-400"> / day</span>
            </p>
            <p className="text-gray-400 mt-2">
              Security Deposit: ₹{formatPrice(vehicle.securityDeposit)}
            </p>

            <p className="text-gray-300 mt-8 leading-relaxed">
              {vehicle.description}
            </p>

            <div className="mt-8 text-gray-300 grid grid-cols-2 gap-y-2">
              <p>⭐ Rating: {vehicle.rating}</p>
              <p>Seats: {vehicle.seats}</p>
              <p>Luggage: {vehicle.luggage}</p>
              <p>Location: {vehicle.location}</p>
            </div>

            <Link
              to={`/booking/${vehicle.slug}`} // ✅ use slug for booking
              className="inline-block mt-10 bg-white text-black
                         px-10 py-4 rounded-full font-semibold
                         hover:scale-105 hover:shadow-2xl
                         transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;