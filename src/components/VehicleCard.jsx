import { Link } from "react-router-dom";

function VehicleCard({ vehicle }) {
  if (!vehicle) return null;

  const { slug, name, images, type, fuel, transmission, pricePerDay } = vehicle;

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  return (
    <Link
      to={`/vehicle/${slug}`} // ✅ link uses slug
      className="group block bg-white/10 backdrop-blur-lg
                 border border-white/20
                 rounded-2xl overflow-hidden
                 shadow-xl hover:shadow-indigo-500/30
                 transition-all duration-500
                 hover:scale-[1.03]"
    >
      <div className="overflow-hidden">
        <img
          src={images?.[0] || "/placeholder-vehicle.jpg"}
          alt={name}
          className="w-full h-52 object-cover
                     transition-transform duration-500
                     group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-300 mt-2 text-sm">
          {type} • {fuel} • {transmission}
        </p>
        <p className="text-2xl font-bold mt-4 text-indigo-400">
          ₹{formatPrice(pricePerDay)}
          <span className="text-sm text-gray-400"> / day</span>
        </p>

        <div
          className="inline-block mt-6 px-6 py-2 rounded-xl
                     bg-white text-black
                     group-hover:scale-105 group-hover:shadow-2xl
                     transition-all duration-300"
        >
          View Details
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;