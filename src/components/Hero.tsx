import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroBanner} 
          alt="ViaZoom Services" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Todo en un solo lugar
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Compras, envíos, viajes y remesas a Cuba y el mundo
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Experiencia premium, seguridad garantizada y servicio excepcional. 
            La forma más confiable de conectar con el mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-primary text-lg px-8 py-4 group">
              Explorar servicios
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4 group">
              <Play className="mr-2 h-5 w-5" />
              Ver cómo funciona
            </Button>
          </div>

          {/* Quick Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="glass w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛒</span>
              </div>
              <p className="text-white/90 font-medium">Compras</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="glass w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-white/90 font-medium">Envíos</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="glass w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✈️</span>
              </div>
              <p className="text-white/90 font-medium">Viajes</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="glass w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💸</span>
              </div>
              <p className="text-white/90 font-medium">Remesas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <div className="w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;