import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
      fixed top-6 left-0 right-0 mx-auto
      w-[94%] md:w-[88%] max-w-7xl
      z-50 px-6 md:px-12 py-4
      flex justify-between items-center
      rounded-3xl
      backdrop-blur-xl
      bg-white/5
      border border-white/10
      shadow-[0_0_35px_rgba(168,85,247,0.35)]
      "
    >

      {/* Glow Border */}
      <div
        className="
        absolute inset-0 rounded-3xl
        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
        opacity-20 blur-lg -z-10
        "
      />

      {/* Logo */}

      <Link to="/">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="
          text-2xl md:text-3xl font-bold
          bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400
          bg-clip-text text-transparent
          cursor-pointer
          "
        >
          Fyz Tech ✨
        </motion.h1>
      </Link>


      {/* Desktop Menu */}

      <div className="hidden md:flex items-center gap-10">

        {navItems.map((item) => {

          const active = location.pathname === item.path;

          return (

            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1, rotateX: 8, rotateY: 8 }}
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
        className="md:hidden text-3xl text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </div>


      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
          absolute top-24 left-0 w-full
          bg-black/90 backdrop-blur-xl
          flex flex-col items-center gap-8 py-10
          rounded-3xl shadow-2xl
          md:hidden
          "
        >

          {navItems.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white text-xl hover:text-purple-400 transition"
            >
              {item.name}
            </Link>

          ))}

        </motion.div>

      )}

    </motion.nav>

  );

}