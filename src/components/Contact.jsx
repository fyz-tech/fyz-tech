import { motion } from "framer-motion";
import contactImg from "../assets/worldmap.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";

export default function Contact() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      alert(data.message);
      setEmail("");
    } catch (error) {
      alert("Server error. Make sure Flask backend is running.");
    }
  };

  const locations = [
    { name: "India", top: "35%", left: "68%" },
    { name: "Dubai", top: "40%", left: "58%" },
    { name: "USA", top: "32%", left: "18%" },
    { name: "UK", top: "25%", left: "46%" },
    { name: "Singapore", top: "58%", left: "76%" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-24 md:pt-32 pb-20 px-4 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* SMALL TAG */}
          <div className="inline-block bg-purple-600/20 border border-purple-500/30 px-5 py-2 rounded-full text-purple-400 text-sm tracking-widest uppercase">
            Global Digital Agency
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Contact <span className="text-purple-500">Tech Fyz</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-lg leading-relaxed">
            We help brands grow using AI automation, web development,
            digital marketing, and creative solutions. Let’s build
            something futuristic together.
          </p>

          {/* QUICK INFO */}
          <div className="grid gap-4">

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="bg-purple-600/20 p-3 rounded-xl text-purple-400">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <h4 className="font-semibold">contact@techfyz.com</h4>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="bg-green-500/20 p-3 rounded-xl text-green-400">
                <FaPhone />
              </div>

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <h4 className="font-semibold">+91 90256 55128</h4>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="bg-pink-500/20 p-3 rounded-xl text-pink-400">
                <FaLocationDot />
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <h4 className="font-semibold">Tamil Nadu, India</h4>
              </div>
            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-4 pt-2">

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 hover:-translate-y-1 transition duration-300"
              style={{ color: "#1877F2" }}
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/tech.fyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 hover:-translate-y-1 transition duration-300"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://wa.me/919025655128?text=Hello%20Tech%20Fyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 hover:-translate-y-1 transition duration-300"
              style={{ color: "#25D366" }}
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.linkedin.com/company/techfyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 hover:-translate-y-1 transition duration-300"
              style={{ color: "#0A66C2" }}
            >
              <FaLinkedinIn />
            </a>

          </div>

          {/* SUBSCRIBE CARD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-5 shadow-2xl">

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Subscribe for Updates
              </h3>

              <p className="text-gray-400">
                Get latest AI, website, and digital marketing updates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-2xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={handleSubscribe}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
              >
                Subscribe
                <FaArrowRight />
              </button>

            </div>

          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5">

            <button
              onClick={() => navigate("/apply")}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Book Call
            </button>

            <button
              onClick={() => navigate("/services")}
              className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Explore Services
            </button>

          </div>
        </motion.div>

        {/* RIGHT SIDE MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* MAP IMAGE */}
          <img
            src={contactImg}
            alt="Global Clients"
            className="rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.4)] w-full border border-white/10"
          />

          {/* MAP OVERLAY */}
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center"
              style={{
                top: location.top,
                left: location.left,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            >
              {/* BLINK DOT */}
              <div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)]"></div>

              {/* LABEL */}
              <div className="mt-2 bg-black/70 px-3 py-1 rounded-full text-xs text-white border border-white/10">
                {location.name}
              </div>
            </motion.div>
          ))}

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white">
              Worldwide Clients
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Trusted by startups and businesses globally.
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 mt-20 pt-8 text-center text-gray-500 text-sm relative z-10">
        © 2026 Tech Fyz. All rights reserved.
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/919025655128?text=Hello%20Tech%20Fyz"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="fixed bottom-5 right-4 md:right-6 bg-green-500 text-white p-4 rounded-full text-3xl shadow-[0_0_30px_rgba(34,197,94,0.7)] z-50"
      >
        <FaWhatsapp />
      </motion.a>
    </section>
  );
}