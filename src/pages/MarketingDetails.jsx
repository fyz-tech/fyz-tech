export default function MarketingDetails() {
  return (
    <section className="min-h-screen py-32 px-6 md:px-20 text-center">
      <h1 className="text-5xl font-bold mb-8">
        AI Marketing Growth – Detailed Strategy
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto mb-10">
        We use advanced AI-driven analytics, conversion tracking,
        performance ads, and social media automation to scale brands globally.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="glass p-8 rounded-2xl">
          <h3 className="font-semibold text-xl mb-4">Performance Ads</h3>
          <p className="text-gray-400">
            Meta & Google Ads optimized using AI targeting.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl">
          <h3 className="font-semibold text-xl mb-4">Content Automation</h3>
          <p className="text-gray-400">
            AI-powered content planning & scheduling.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl">
          <h3 className="font-semibold text-xl mb-4">Analytics & Scaling</h3>
          <p className="text-gray-400">
            Data insights to maximize ROI & revenue growth.
          </p>
        </div>
      </div>
    </section>
  )
}