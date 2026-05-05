'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const judges = [
  {
    name: "Dr. Roberto Gómez",
    role: "Decano de Ingeniería",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    delay: 0.1
  },
  {
    name: "Dra. Elena Santos",
    role: "Directora de Innovación",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
    delay: 0.2
  },
  {
    name: "Ing. Marco Aurelio",
    role: "Líder de Investigación",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    delay: 0.3
  },
  {
    name: "Dra. Claudia Rivas",
    role: "Coordinadora Académica",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    delay: 0.4
  }
]

export default function Judges() {
  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Nuestros <span className="text-muted">Jurados</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-xl"
        >
          Un panel de expertos encargado de evaluar la innovación y el impacto técnico de cada proyecto.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {judges.map((judge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: judge.delay }}
            className="group"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border border-white/10 glass-card">
              <Image
                src={judge.photo}
                alt={judge.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight">{judge.name}</h3>
            <p className="text-muted text-sm">{judge.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
