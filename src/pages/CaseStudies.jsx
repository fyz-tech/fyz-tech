import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 md:px-20">

      <div className="max-w-6xl mx-auto">

        <motion.h1
          className="text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Case Studies
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-3">Ecommerce Brand</h3>
            <p className="text-gray-400">
              Increased sales by 320% using AI marketing strategies.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-3">Clinic SEO</h3>
            <p className="text-gray-400">
              Ranked #1 in Google search within 3 months.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-3">Startup Ads</h3>
            <p className="text-gray-400">
              Generated 10,000+ leads using targeted ads.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}