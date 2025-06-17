import React from "react";
import logoImg from "../assets/logo.png";
import { FaBars, FaSearch } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

  const navMenu = [
    { name: "Rooms", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Services", path: "/services" },
  ]
  return (
    <header className="bg-gray-100 md:p-5 md:py-2 p-3 shadow">
      <div className=" md:flex justify-between items-center align-middle">
        <div className="logo">
          <img src={logoImg} alt="StayFinder" className="h-12" />
        </div>
        <nav className="md:flex items-center hidden align-middle gap-3">
         
          {
            navMenu.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `
                ${
                    isActive ? "border-b-2 border-black" : "text-gray-700"
                  } text-sm font-medium`
                }
                to={item.path}
              >
                {item.name}
              </NavLink> 
            ))
         }
        
        </nav>
        <div className="hidden menu gap-2 md:flex items-center  align-middle">
          <Link
            to="/login"            
            className="text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Login / Signup
          </Link>
          <div className="flex items-center align-middle ">
            <button className="btn p-2 px-3 rounded-l-full bg-gray-300 hover:bg-gray-400">
              <MdOutlineLanguage size={24} />
            </button>
            <button className="btn p-2 px-3 rounded-r-full bg-gray-300 hover:bg-gray-400">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>
   
    </header>
  );
};

export default Navbar;
