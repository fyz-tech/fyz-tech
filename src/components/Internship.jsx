import { motion } from "framer-motion";
import internshipImg from "../assets/internship.jpg";
import { useNavigate } from "react-router-dom";

export default function Internship() {
  const navigate = useNavigate();

  return (
    <section
      id="internship"
      className="py-32 px-6 md:px-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 perspective-1000"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* Left Side Image */}
        <motion.img
          src={internshipImg}
          alt="Internship Program"
          className="rounded-3xl shadow-2xl w-full max-w-md"
          initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Right Side Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 60, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Internship Program
          </h2>
          <p className="text-gray-300 mb-8 text-lg md:text-xl">
            Learn video editing, AI tools, and work on real-world client projects. Boost your skills and gain hands-on experience in a creative environment.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-700 transition shadow-lg"
          >
            Apply Now
          </button>
        </motion.div>

      </div>
    </section>
  );
}