export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tighter uppercase">DEMODAY</div>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            Celebrando la excelencia y el ingenio de los estudiantes de la <span className="text-white">Universidad El Bosque</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Evento</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Cronograma</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ubicación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Registro</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Universidad</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Facultades</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investigación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admisiones</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Social</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-muted">
        <div>© 2024 DEMODAY • Universidad El Bosque.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
