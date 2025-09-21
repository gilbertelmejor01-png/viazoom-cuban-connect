import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import viazoomLogo from "@/assets/viazoom-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={viazoomLogo} 
              alt="ViaZoom Express" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Servicios
            </a>
            <a href="#tienda" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Tienda
            </a>
            <a href="#envios" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Envíos
            </a>
            <a href="#viajes" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Viajes
            </a>
            <a href="#remesas" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Remesas
            </a>
            <a href="#contacto" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-primary">
              Comenzar ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#inicio" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Inicio
              </a>
              <a href="#servicios" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Servicios
              </a>
              <a href="#tienda" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Tienda
              </a>
              <a href="#envios" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Envíos
              </a>
              <a href="#viajes" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Viajes
              </a>
              <a href="#remesas" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Remesas
              </a>
              <a href="#contacto" className="text-primary hover:text-accent transition-colors font-medium" onClick={toggleMenu}>
                Contacto
              </a>
              <Button className="btn-primary mt-4" onClick={toggleMenu}>
                Comenzar ahora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;