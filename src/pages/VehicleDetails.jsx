import { useParams, useNavigate, Link } from "react-router-dom";
import vehicles from "../data/vehicles";

function VehicleDetails() {
  const { slug } = useParams();
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
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold
                     hover:bg-orange-600 hover:scale-105 hover:shadow-lg
                     hover:shadow-orange-500/30 transition-all duration-300"
        >
          Browse Vehicles
        </button>
      </div>
    );
  }

  // Support both image & images array
  const vehicleImage =
    vehicle.image || vehicle.images?.[0] || "/placeholder-vehicle.jpg";

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-400 hover:text-orange-500 transition"
        >
          ← Back
        </button>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                        rounded-3xl shadow-2xl overflow-hidden
                        hover:shadow-orange-500/10 transition-all duration-500">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={vehicleImage}
              alt={vehicle.name}
              className="w-full h-[420px] object-cover brightness-90"
            />

            {/* CATEGORY BADGE */}
            {vehicle.category && (
              <span
                className={`absolute top-6 left-6 px-4 py-2 text-sm font-semibold rounded-full backdrop-blur-md
                  ${
                    vehicle.category === "Luxury"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                      : vehicle.category === "Premium"
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                      : "bg-gray-500/20 text-gray-300 border border-gray-400/30"
                  }`}
              >
                {vehicle.category}
              </span>
            )}
          </div>

          <div className="p-10">

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight
                           bg-gradient-to-r from-orange-400 to-orange-600
                           bg-clip-text text-transparent">
              {vehicle.name}
            </h1>

            <p className="text-gray-400 mt-3">
              {vehicle.type} • {vehicle.fuel} • {vehicle.transmission}
            </p>

            {/* PRICE */}
            <p className="text-4xl font-bold mt-8 text-orange-500">
              ₹{formatPrice(vehicle.pricePerDay)}
              <span className="text-lg text-gray-400"> / day</span>
            </p>

            {vehicle.securityDeposit && (
              <p className="text-gray-400 mt-2">
                Security Deposit:
                <span className="text-orange-400 font-medium">
                  {" "}₹{formatPrice(vehicle.securityDeposit)}
                </span>
              </p>
            )}

            {/* DESCRIPTION */}
            {vehicle.description && (
              <p className="text-gray-300 mt-8 leading-relaxed">
                {vehicle.description}
              </p>
            )}

            {/* DETAILS GRID */}
            <div className="mt-8 text-gray-300 grid grid-cols-2 gap-y-3">
              {vehicle.rating && <p>⭐ Rating: {vehicle.rating}</p>}
              {vehicle.seats && <p>Seats: {vehicle.seats}</p>}
              {vehicle.luggage && <p>Luggage: {vehicle.luggage}</p>}
              {vehicle.location && <p>Location: {vehicle.location}</p>}
            </div>

            {/* BOOK BUTTON */}
            <Link
              to={`/booking/${vehicle.slug}`}
              className="inline-block mt-10 bg-orange-500 text-white
                         px-10 py-4 rounded-full font-semibold
                         hover:bg-orange-600 hover:scale-105
                         hover:shadow-lg hover:shadow-orange-500/30
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