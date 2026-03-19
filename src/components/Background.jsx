import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export default function Background() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX - innerWidth / 2) / 50)
      mouseY.set((e.clientY - innerHeight / 2) / 50)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(mouseY, [-10, 10], [10, -10])
  const rotateY = useTransform(mouseX, [-10, 10], [-10, 10])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Gradient Mesh Background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[1200px] h-[1200px] 
                   bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-600 
                   rounded-full blur-[180px] opacity-20 
                   top-[-300px] left-[-300px]"
      />

      {/* Glass Floating Orb 1 */}
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-80 h-80 
                   backdrop-blur-3xl bg-white/10 
                   border border-white/20 
                   rounded-3xl shadow-2xl"
      />

      {/* Glass Floating Orb 2 */}
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 
                   backdrop-blur-3xl bg-purple-500/10 
                   border border-purple-400/20 
                   rounded-full shadow-2xl"
      />

      {/* Center Glow Depth Layer */}
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
                   -translate-x-1/2 -translate-y-1/2
                   bg-indigo-500 rounded-full 
                   blur-[200px] opacity-20"
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-10px`,
          }}
        />
      ))}

    </div>
  )
}