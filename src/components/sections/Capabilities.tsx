'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Capabilities() {
  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Formando a los <br />
            <span className="text-muted">líderes del mañana.</span>
          </motion.h2>

          <div className="space-y-6">
            {[
              "Excelencia académica y técnica",
              "Proyectos multidisciplinarios",
              "Mentoría por expertos de la industria",
              "Enfoque en sostenibilidad e innovación"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-lg text-muted"
              >
                <CheckCircle2 className="w-6 h-6 text-white" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full glass-card rounded-[40px] flex items-center justify-center overflow-hidden"
          >
            {/* Minimalist Visual Representation of "Neural Grid" */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 p-12 text-center">
                <div className="text-6xl md:text-8xl font-bold text-white/10 select-none uppercase tracking-widest">El Bosque</div>
            </div>
          </motion.div>
          {/* Accent Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  )
}
