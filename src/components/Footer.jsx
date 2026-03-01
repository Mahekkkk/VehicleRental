import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-400 pt-16 pb-10 px-6 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            RideNow
          </h2>
          <p className="leading-relaxed text-sm">
            Premium and affordable vehicle rentals made simple.
            Drive your journey with comfort and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vehicles" className="hover:text-white transition-colors duration-300">
                Vehicles
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition-colors duration-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact
          </h3>
          <div className="space-y-3 text-sm">
            <p>
              Email:{" "}
              <a
                href="mailto:support@ridenow.com"
                className="hover:text-white transition"
              >
                support@ridenow.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-white transition"
              >
                +91 9876543210
              </a>
            </p>
            <p>Pune, Maharashtra</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Follow Us
          </h3>
          <div className="flex space-x-5 text-sm">
            <a href="#" className="hover:text-white transition-transform hover:scale-110 duration-300">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110 duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110 duration-300">
              Twitter
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-xs mt-14 pt-6 border-t border-white/10">
        © {new Date().getFullYear()} RideNow. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;