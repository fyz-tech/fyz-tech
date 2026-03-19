import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function WebsiteService() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { speed: 1 },
            links: { enable: true },
          }
        }}
      />

      {/* HERO */}
      <div className="relative z-10 px-6 md:px-20 pt-32 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-bold mb-6"
        >
          We Build <span className="text-purple-400">Powerful Websites</span>
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          We build high-converting, fast and SEO-optimized websites
          that help your business grow and generate leads.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center gap-5">

          <button className="bg-purple-600 px-10 py-4 rounded-xl text-lg hover:bg-purple-700 transition">
            Start Your Website
          </button>

          <button className="border border-purple-400 px-10 py-4 rounded-xl text-lg hover:bg-purple-400 hover:text-black transition">
            View Portfolio
          </button>

        </div>

      </div>


      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, rotateY: -20 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center mt-20 relative z-10 px-4"
      >

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="rounded-2xl shadow-2xl w-full max-w-3xl border border-white/10"
        />

      </motion.div>


      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-28 relative z-10">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-10 rounded-3xl border border-white/20 hover:shadow-purple-500/20 hover:shadow-xl transition"
        >
          <FaLaptopCode className="text-4xl text-purple-400 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Business Websites</h3>
          <p className="text-gray-400">
            Professional websites for clinics, companies and startups.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-10 rounded-3xl border border-white/20 hover:shadow-purple-500/20 hover:shadow-xl transition"
        >
          <FaMobileAlt className="text-4xl text-purple-400 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Mobile Responsive</h3>
          <p className="text-gray-400">
            Perfect experience on mobile, tablet and desktop devices.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-10 rounded-3xl border border-white/20 hover:shadow-purple-500/20 hover:shadow-xl transition"
        >
          <FaRocket className="text-4xl text-purple-400 mb-4" />
          <h3 className="text-2xl font-bold mb-3">SEO Optimized</h3>
          <p className="text-gray-400">
            Websites optimized for Google ranking and high performance.
          </p>
        </motion.div>

      </div>


      {/* WHY CHOOSE US */}
      <div className="mt-32 px-6 md:px-20 text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-400">Get your website in 5-10 days</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
            <p className="text-gray-400">Best price for high quality</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-400">We support you anytime</p>
          </div>

        </div>

      </div>


      {/* CTA */}
      <div className="text-center mt-32 pb-32 relative z-10">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s Build Your Dream Website 🚀
        </h2>

        <p className="text-gray-400 mb-8">
          Book a free consultation and grow your business online
        </p>

        <button className="bg-purple-600 px-12 py-4 rounded-xl text-lg hover:bg-purple-700 transition">
          Book Free Consultation
        </button>

      </div>

    </section>

  );
}

