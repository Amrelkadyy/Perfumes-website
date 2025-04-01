import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar flex items-center justify-between py-5 font-medium fixed top-0 left-0 right-0 z-10 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.4)] px-5">
      {/* Logo - Moved Slightly Left */}
      <Link to="/" className="flex-shrink-0 ml-1 sm:ml-7">
        <img src={assets.logo} className="w-40 sm:w-48 cursor-pointer" alt="Logo" />
      </Link>

      {/* Desktop Navigation (Hidden on Mobile) */}
      <ul className="hidden sm:flex flex-1 justify-center gap-5 text-lg text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right Side Icons - Not Moved */}
      <div className="flex items-center gap-7">
        <img src={assets.search_icon} className="w-6 sm:w-7 cursor-pointer" alt="" />
        
        <div className="group relative">
          <img className="w-5 sm:w-6 cursor-pointer" src={assets.profile_icon} alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 sm:w-7 min-w-5" alt="" />
          <p className="absolute right-[-6px] bottom-[-9px] flex items-center justify-center w-5 h-5 bg-black text-white rounded-full text-[12px]">
            3
          </p>
        </Link>

        {/* Mobile Menu Icon (Visible on small screens) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-7 sm:w-8 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar for Mobile View */}
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setVisible(false)}></div>
      )}
      
      <div
        className={`fixed top-0 right-0 h-full bg-white z-30 shadow-lg transition-transform ${
          visible ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close Button */}
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-5 rotate-180 self-center mt-1" src={assets.dropdown_icon} alt="Back" />
            <p className="text-xl">Back</p>
          </div>

          {/* Mobile Menu Links */}
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-transparent hover:border-gray-400 block" to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-transparent hover:border-gray-400 block" to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-transparent hover:border-gray-400 block" to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-transparent hover:border-gray-400 block" to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
