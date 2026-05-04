'use client'

import { motion } from 'framer-motion'
import { Layers, Shield, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    title: "Innovación Técnica",
    description: "Proyectos que empujan los límites de la tecnología actual con implementaciones robustas.",
    icon: Zap,
    delay: 0.1
  },
  {
    title: "Diseño de Usuario",
    description: "Interfaces intuitivas y experiencias centradas en el ser humano que resuelven problemas reales.",
    icon: Sparkles,
    delay: 0.2
  },
  {
    title: "Impacto Social",
    description: "Soluciones diseñadas para generar un cambio positivo en nuestra comunidad y el mundo.",
    icon: Shield,
    delay: 0.3
  },
  {
    title: "Pensamiento Crítico",
    description: "Investigación profunda y análisis detallado detrás de cada propuesta presentada.",
    icon: Layers,
    delay: 0.4
  }
]

export default function Features() {
  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: feature.delay }}
            className="glass-card p-8 rounded-3xl group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-muted text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
