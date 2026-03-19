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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      alert(data.message);
      setEmail("");

    } catch (error) {

      alert("Server error. Make sure Flask backend is running.");

    }

  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-20 bg-gray-900 text-white"
    >

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Fyz Tech
          </h2>

          <p className="text-gray-400 text-lg">
            Let's build something powerful together.
          </p>

          {/* SOCIAL ICONS */}

          <div className="flex gap-5 text-2xl">

            {/* FACEBOOK */}

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 transition"
              style={{ color: "#1877F2" }}
            >
              <FaFacebookF />
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 transition"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram />
            </a>

            {/* TWITTER */}

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919488464218?text=Hello%20Fyz%20Tech%20I%20am%20interested%20in%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 transition"
              style={{ color: "#25D366" }}
            >
              <FaWhatsapp />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl hover:scale-110 transition"
              style={{ color: "#0A66C2" }}
            >
              <FaLinkedinIn />
            </a>

          </div>

          {/* SUBSCRIBE */}

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h3 className="text-xl font-semibold">
              Subscribe for Updates
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={handleSubscribe}
                className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
              >
                Subscribe
              </button>

            </div>

          </div>

          {/* BOOK CALL */}

          <button
            onClick={() => navigate("/apply")}
            className="bg-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-700 transition shadow-lg"
          >
            Book Call
          </button>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.img
          src={contactImg}
          alt="Global Clients"
          className="rounded-3xl shadow-2xl w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

      </div>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919488464218?text=Hello%20Fyz%20Tech"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full text-3xl shadow-xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
}