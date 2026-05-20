// Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-1.5 text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 ${
      isActive
        ? "bg-gray-100 dark:bg-white/10 text-emerald-700 dark:text-emerald-400 font-medium"
        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/10 sticky top-0 z-50">
      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[68px]">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <h1 className="text-[22px] font-extrabold tracking-tight text-gray-900 dark:text-white font-[Syne,sans-serif]">
            sara
          </h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-0.5 list-none">
          <li>
            <NavLink to="/" className={linkStyle}>
              <i className="ti ti-home text-[15px]" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={linkStyle}>
              <i className="ti ti-package text-[15px]" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={linkStyle}>
              <i className="ti ti-layout-grid text-[15px]" />
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/brands" className={linkStyle}>
              <i className="ti ti-building-store text-[15px]" />
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={linkStyle}>
              <span className="relative">
                <i className="ti ti-shopping-cart text-[15px]" />
                <span className="absolute -top-0.5 -right-1.5 w-[7px] h-[7px] bg-red-500 rounded-full border-2 border-white dark:border-gray-950" />
              </span>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className={linkStyle}>
              <i className="ti ti-credit-card text-[15px]" />
              Checkout
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className="text-sm font-medium px-[18px] py-[7px] rounded-full border border-gray-200 dark:border-white/15 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-200"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="text-sm font-medium px-[18px] py-[7px] rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200"
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}