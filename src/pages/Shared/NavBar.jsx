import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaArrowRight, FaBars } from "react-icons/fa";
import ProFastLogo from "./ProFastLogo";
import { BsArrowUpRightCircle } from "react-icons/bs";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
      <li><NavLink to="/rider">Be a Rider</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white rounded-xl px-4 md:px-8 py-3 shadow-sm">
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
          <button
            to="/login"
            className="btn btn-secondary btn-outline rounded-md text-primary"
          >
            Sign In
          </button>
          <Link
            to="/rider"
            className="btn btn-secondary text-primary rounded-md"
          >
            Be a Rider <BsArrowUpRightCircle  size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-secondary btn-outline text-xl"
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
