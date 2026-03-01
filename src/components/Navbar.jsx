import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname.startsWith(path);

  const linkClasses = (path) =>
    `relative group transition-colors duration-300 ${
      isActive(path) ? "text-white" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          RideNow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <Link to="/" className={linkClasses("/")}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link to="/vehicles" className={linkClasses("/vehicles")}>
            Vehicles
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link to="/login" className={linkClasses("/login")}>
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-6 text-center">
          <Link to="/" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/vehicles" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Vehicles
          </Link>
          <Link to="/login" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;