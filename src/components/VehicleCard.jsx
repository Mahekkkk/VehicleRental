import { Link } from "react-router-dom";

function VehicleCard({ vehicle }) {
  if (!vehicle) return null;

  const {
    slug,
    name,
    image,
    images,
    type,
    fuel,
    transmission,
    pricePerDay,
    category,
  } = vehicle;

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  // Supports both old and new image formats
  const vehicleImage = image || images?.[0] || "/placeholder-vehicle.jpg";

  return (
    <Link
      to={`/vehicle/${slug}`}
      className="group block bg-white/5 backdrop-blur-xl
                 border border-white/10
                 rounded-2xl overflow-hidden
                 shadow-xl hover:shadow-orange-500/20
                 transition-all duration-500
                 hover:scale-[1.03]"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={vehicleImage}
          alt={name}
          className="w-full h-52 object-cover brightness-90
                     group-hover:brightness-100
                     group-hover:scale-110
                     transition-all duration-500"
        />

        {/* CATEGORY BADGE */}
        {category && (
          <span
            className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md
              ${
                category === "Luxury"
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                  : category === "Premium"
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                  : "bg-gray-500/20 text-gray-300 border border-gray-400/30"
              }`}
          >
            {category}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-xl font-semibold">{name}</h2>

        <p className="text-gray-400 mt-2 text-sm">
          {type} • {fuel} • {transmission}
        </p>

        <p className="text-2xl font-bold mt-4 text-orange-500">
          ₹{formatPrice(pricePerDay)}
          <span className="text-sm text-gray-400"> / day</span>
        </p>

        <div
          className="inline-block mt-6 px-6 py-2 rounded-xl
                     bg-orange-500 text-white font-medium
                     group-hover:bg-orange-600
                     group-hover:shadow-lg group-hover:shadow-orange-500/30
                     transition-all duration-300"
        >
          View Details
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;