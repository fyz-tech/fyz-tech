import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";

import youtubeImg from "../assets/youtube.jpg";
import reelsImg from "../assets/reels.jpg";
import realestateImg from "../assets/realestate.jpg";

const services = [
  { title: "YouTube Long Form Editing", img: youtubeImg, path: "/services/youtube" },
  { title: "Short Form / Reels Editing", img: reelsImg, path: "/services/reels" },
  { title: "Real Estate Promo Videos", img: realestateImg, path: "/services/realestate" },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-black text-white pt-36 pb-32 px-6 md:px-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center mb-28"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6
        bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400
        bg-clip-text text-transparent">
          Elite Video Editing Agency
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Transforming raw footage into cinematic, high-converting content
          for premium brands in USA 🇺🇸 and Australia 🇦🇺.
        </p>
      </motion.div>

      {/* ================= TRUST ================= */}
      <div className="grid md:grid-cols-3 gap-10 mb-32 text-center">
        {[
          {
            icon: <FaGlobeAmericas />,
            title: "Global Clients",
            desc: "Serving USA & Australia clients with seamless remote workflow."
          },
          {
            icon: <FaUsers />,
            title: "Expert Team",
            desc: "30+ skilled editors delivering premium quality consistently."
          },
          {
            icon: <FaDollarSign />,
            title: "Strategic Pricing",
            desc: "Luxury quality with scalable long-term partnerships."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-2xl p-10 rounded-3xl 
            border border-white/10 hover:border-purple-500/40
            transition duration-500 hover:-translate-y-2"
          >
            <div className="text-4xl text-purple-400 mb-5 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ================= SERVICES ================= */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto mb-36">
        {services.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(item.path)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">

              <img
                src={item.img}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">
                  Cinematic edits engineered for engagement & revenue growth.
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= TOOLS ================= */}
      <div className="text-center mb-36">
        <h2 className="text-4xl font-bold mb-16">Premium Tools We Use</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { name: "Adobe Premiere Pro", icon: "🎬" },
            { name: "After Effects", icon: "✨" },
            { name: "Photoshop", icon: "🖌️" },
            { name: "Canva Pro", icon: "🎨" },
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl p-8 hover:-translate-y-2 transition duration-500"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <p className="text-gray-300 font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CLIENT UPLOAD EXPERIENCE ================= */}
      <div className="mb-36 text-center">
        <h2 className="text-4xl font-bold mb-6">Client Upload Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Upload raw footage, track editing progress and receive final delivery —
          simple, secure and professional.
        </p>

        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">

          {/* STEP 1 */}
          <motion.div
            whileHover={{ rotateY: 8, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white/5 backdrop-blur-2xl border border-purple-500/20
            rounded-3xl p-10"
          >
            <div className="bg-black/60 rounded-2xl p-6 mb-6 border border-white/10 text-left text-sm text-gray-300">
              📁 Client_Project_Footage <br/>
              ├── intro.mp4 <br/>
              ├── main_clip.mov <br/>
              └── drone_shot.mp4
            </div>
            <h3 className="text-xl font-semibold mb-3">
              01. Select & Upload Files
            </h3>
            <p className="text-gray-400 text-sm">
              Secure transfer via Drive, Dropbox or private portal.
            </p>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            whileHover={{ rotateY: -8, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white/5 backdrop-blur-2xl border border-purple-500/20
            rounded-3xl p-10"
          >
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden mb-6">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3"
                initial={{ width: "0%" }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5 }}
              ></motion.div>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              02. Editing in Progress
            </h3>
            <p className="text-gray-400 text-sm">
              Color grading, sound design & retention optimization.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white/5 backdrop-blur-2xl border border-purple-500/20
            rounded-3xl p-10"
          >
            <div className="text-green-400 text-4xl mb-6">✔</div>
            <h3 className="text-xl font-semibold mb-3">
              03. Final Delivery
            </h3>
            <p className="text-gray-400 text-sm">
              Platform-optimized video ready for publishing.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= LIVE PREVIEW ================= */}
      <div className="text-center mb-32">
        <h2 className="text-4xl font-bold mb-16">View Our Work</h2>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl 
        border border-white/10 rounded-3xl p-6 shadow-2xl">

          <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Sample"
              allowFullScreen
            ></iframe>
          </div>

          <button
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600
            px-8 py-4 rounded-2xl hover:scale-105 transition text-lg"
          >
            View Instagram Page
          </button>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Scale Your Content?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-purple-600 to-pink-600
          px-10 py-4 rounded-2xl text-lg hover:scale-105 transition"
        >
          Start Your Project
        </button>
      </div>

    </section>
  );
}