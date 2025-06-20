import { useState } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaBars } from "react-icons/fa";
import ProFastLogo from "./ProFastLogo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/coverage">Coverage</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="/rider">Be a Rider</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 md:px-8 py-3 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          <ProFastLogo/>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center">
        <ul className="menu menu-horizontal px-1 text-sm font-medium">
          {navLinks}
        </ul>
        <div className="ml-4 space-x-2">
          <Link
            to="/login"
            className="btn btn-sm btn-outline rounded-md border-gray-300"
          >
            Sign In
          </Link>
          <Link
            to="/rider"
            className="btn btn-sm bg-lime-300 text-black hover:bg-lime-400 rounded-md"
          >
            Be a Rider <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-ghost text-xl"
        >
          <FaBars />
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-base-100 z-50 shadow-md p-4">
            <ul className="menu menu-vertical space-y-2 text-base font-medium">
              {navLinks}
              <li><Link to="/login">Sign In</Link></li>
              <li>
                <Link
                  to="/rider"
                  className="flex items-center text-black bg-lime-300 px-3 py-2 rounded-md"
                >
                  Be a Rider <FaArrowRight className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
