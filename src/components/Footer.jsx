import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4
                         bg-gradient-to-r from-orange-400 to-orange-600
                         bg-clip-text text-transparent">
            SHIVSHAKTI AUTO RENTALS
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Trusted vehicle rental service in Vadodara.
            Affordable cars & bikes available for daily rental.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vehicles" className="hover:text-orange-500 transition">
                Vehicles
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact Us
          </h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p>Shop 02, Stanza Living</p>
            <p>Beside HP Petrol Pump</p>
            <p>Near Gayatri Mandir</p>
            <p>Waghodiya Road, Vadodara</p>

            <p className="mt-4">
              Phone:{" "}
              <a
                href="tel:+916353392987"
                className="hover:text-orange-500 transition"
              >
                +91 63533 92987
              </a>
            </p>

            <p>
              <a
                href="https://wa.me/916353392987"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4 text-sm uppercase tracking-wider">
            Working Hours
          </h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>Monday - Sunday</p>
            <p>9:00 AM – 9:00 PM</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-xs mt-14 pt-6 border-t border-white/10">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-medium">
          Shivshakti Auto Rentals
        </span>, Vadodara. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;