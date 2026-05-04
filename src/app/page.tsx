'use client'

import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Capabilities from '@/components/sections/Capabilities'
import Judges from '@/components/sections/Judges'
import Footer from '@/components/sections/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 border-b border-white/5 backdrop-blur-md bg-background/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter">DEMODAY</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <a href="#" className="hover:text-white transition-colors">Inicio</a>
            <a href="#" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#" className="hover:text-white transition-colors">Jurados</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <a href="#cta" className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors">
            Inscribirse
          </a>
        </div>
      </nav>

      <Hero />
      <Features />
      <Capabilities />
      <Judges />

      {/* Final CTA */}
      <section id="cta" className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card p-16 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">¿Listo para el evento?</h2>
          <p className="text-muted text-lg mb-12 max-w-lg mx-auto">
            Acompáñanos este 19 de mayo para presenciar el talento y la innovación de nuestros estudiantes.
          </p>
          <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            Inscribirme ahora
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
