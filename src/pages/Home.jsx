import { Link } from "react-router-dom";
import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-80"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.85),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Drive the Future.
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Today.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Ultra-premium vehicles. Instant booking. Zero hassle.
            Experience driving like never before.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vehicles"
              className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Explore Vehicles
            </Link>

            <Link
              to="/vehicles"
              className="border border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce text-gray-400 opacity-70">
          <span className="text-sm">Scroll</span>
          <div className="w-5 h-9 border border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto relative">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Choose Vehicle", "Book Instantly", "Enjoy the Ride"].map(
              (step, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl font-bold text-white/20 mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step}</h3>
                  <p className="text-gray-400 text-sm">
                    Fast, seamless and designed for maximum comfort.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURED VEHICLES ================= */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            Featured Vehicles
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredVehicles.map((v) => (
              <div
                key={v.id}
                className="transform hover:scale-105 transition duration-300"
              >
                <VehicleCard vehicle={v} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/vehicles"
              className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                text: "Super smooth booking experience. Felt truly premium.",
                name: "Rahul Sharma",
              },
              {
                text: "Clean cars, great pricing, zero headaches.",
                name: "Priya Verma",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <p className="text-gray-300 italic">“{r.text}”</p>
                <h4 className="mt-6 font-semibold">— {r.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Ready to Hit the Road?
          </h2>

          <p className="text-gray-400 mb-10 text-lg md:text-xl">
            Book your dream car in seconds.
          </p>

          <Link
            to="/vehicles"
            className="bg-white text-black px-12 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Start Booking
          </Link>
        </div>
      </section>
    </div>
  );
}