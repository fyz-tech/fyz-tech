import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logoss.png";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Web Solutions", path: "/website" },
    { name: "Services", path: "/services" },
    { name: "Marketing", path: "/marketing" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
      fixed top-3 left-0 right-0 mx-auto
      w-[95%] md:w-[88%] max-w-7xl
      z-50 px-4 md:px-10 py-3
      flex justify-between items-center
      rounded-2xl
      backdrop-blur-xl
      bg-black/50
      border border-white/10
      shadow-[0_0_25px_rgba(168,85,247,0.25)]
      "
    >

      {/* Glow Border */}
      <div
        className="
        absolute inset-0 rounded-2xl
        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
        opacity-20 blur-lg -z-10
        "
      />

      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">

        <motion.img
          src={logo}
          alt="TechFyz Logo"
          whileHover={{ scale: 1.05 }}
          className="
            w-10 md:w-14
            object-contain
            brightness-125 contrast-125
            drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]
          "
        />

        {/* ✅ Mobile + Desktop visible */}
        <span className="
          text-sm md:text-xl font-bold
          bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400
          bg-clip-text text-transparent
        ">
          Tech Fyz
        </span>

      </Link>


      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">

        {navItems.map((item) => {

          const active = location.pathname === item.path;

          return (

            <motion.div
              key={item.name}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative"
            >

              <Link
                to={item.path}
                className={`text-lg font-medium transition
                ${active ? "text-purple-400" : "text-white hover:text-purple-400"}`}
              >

                {item.name}

                {active && (
                  <motion.div
                    layoutId="underline"
                    className="
                    absolute -bottom-2 left-0 w-full h-[2px]
                    bg-gradient-to-r from-purple-500 to-pink-500
                    "
                  />
                )}

              </Link>

            </motion.div>

          );

        })}

      </div>


      {/* Mobile Icon */}
      <div
        className="md:hidden text-2xl text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </div>


      {/* Mobile Menu */}
      {open && (

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
          absolute top-20 left-0 w-full
          bg-black/95 backdrop-blur-xl
          flex flex-col items-center gap-6 py-8
          rounded-2xl shadow-2xl
          md:hidden
          "
        >

          {navItems.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:text-purple-400 transition"
            >
              {item.name}
            </Link>

          ))}

        </motion.div>

      )}

    </motion.nav>

  );

}