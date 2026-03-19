import marketingImg from "../assets/marketing.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartLine, FaBullhorn, FaSearch } from "react-icons/fa";

export default function Marketing() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-600 blur-3xl opacity-20 rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI Marketing
            </span>
            <br />
            Growth Engine
          </h2>

          <p className="text-gray-400 mb-10 text-lg md:text-xl leading-relaxed">
            Our AI powered marketing system helps businesses attract more
            customers, boost brand visibility and scale faster using data
            driven strategies.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-6 mb-10">

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-gray-800 text-center hover:scale-105 transition">
              <FaSearch className="text-purple-400 text-2xl mx-auto mb-2"/>
              <p className="text-sm text-gray-300">SEO Growth</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-gray-800 text-center hover:scale-105 transition">
              <FaBullhorn className="text-pink-400 text-2xl mx-auto mb-2"/>
              <p className="text-sm text-gray-300">Ads Campaign</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-gray-800 text-center hover:scale-105 transition">
              <FaChartLine className="text-blue-400 text-2xl mx-auto mb-2"/>
              <p className="text-sm text-gray-300">Analytics</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-6">

            <Link to="/marketing-details">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl hover:scale-110 transition shadow-lg shadow-purple-500/30">
                Learn More
              </button>
            </Link>

            <Link to="/case-studies">
              <button className="border border-gray-600 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Case Studies
              </button>
            </Link>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-purple-400">320%</h3>
              <p className="text-gray-400 text-sm">Traffic Growth</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-400">150+</h3>
              <p className="text-gray-400 text-sm">Brands Scaled</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
              <p className="text-gray-400 text-sm">AI Automation</p>
            </div>

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 rounded-3xl"></div>

          <img
            src={marketingImg}
            alt="AI Marketing"
            className="relative rounded-3xl shadow-2xl w-full object-cover border border-gray-800"
          />

        </motion.div>

      </div>
    </section>
  );
}