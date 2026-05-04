import { motion } from "framer-motion";
import internshipImg from "../assets/internship.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaVideo,
  FaRobot,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function Internship() {
  const navigate = useNavigate();

  const internshipFeatures = [
    {
      icon: <FaVideo />,
      title: "Video Editing",
      desc: "Learn cinematic editing, reels creation, transitions, and professional storytelling.",
    },
    {
      icon: <FaRobot />,
      title: "AI Tools",
      desc: "Work with modern AI tools for automation, content generation, and productivity.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Real Projects",
      desc: "Gain practical experience by working on real client-based projects and tasks.",
    },
    {
      icon: <FaCertificate />,
      title: "Certificate",
      desc: "Receive an internship completion certificate after successful participation.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Collaborate with creative teams and improve communication & workflow skills.",
    },
  ];

  return (
    <section
      id="internship"
      className="relative py-32 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative z-10">

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
          whileHover={{ rotateY: 8, rotateX: 5, scale: 1.03 }}
          className="flex justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative">
            <img
              src={internshipImg}
              alt="Internship Program"
              className="rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.5)] w-full max-w-lg border border-white/10"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -top-6 -right-6 bg-purple-600 text-white px-5 py-3 rounded-2xl shadow-xl"
            >
              <h3 className="font-bold text-lg">100+ Students</h3>
              <p className="text-sm text-gray-200">Already Joined</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="text-purple-400 uppercase tracking-[4px] mb-4 font-semibold">
            Career Growth Opportunity
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Internship Program
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            Join our internship program and build real-world experience in
            video editing, AI tools, content creation, and digital projects.
            Work alongside creative professionals, improve your technical
            skills, and grow your portfolio with hands-on training.
          </p>

          {/* Features */}
          <div className="grid gap-5 mb-10">
            {internshipFeatures.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg"
              >
                <div className="text-purple-400 text-2xl mt-1">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/apply")}
              className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            >
              Apply Now
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}