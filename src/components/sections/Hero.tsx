'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Scene from '@/components/canvas/Scene'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <Scene />

      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          19 DE MAYO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
        >
          DEMO<span className="text-muted">DAY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 text-balance leading-relaxed"
        >
          Descubre el futuro de la innovación en la <span className="text-white font-medium">Universidad El Bosque</span>. Donde los grandes proyectos cobran vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 group">
            Registrarse
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 border border-white/10 bg-white/5 font-semibold rounded-full hover:bg-white/10 transition-colors">
            Cronograma
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted/50"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
