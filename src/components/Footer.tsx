import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import viazoomLogo from "@/assets/viazoom-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src={viazoomLogo} 
              alt="ViaZoom Express" 
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Tu socio confiable para servicios internacionales. 
              Conectamos personas y negocios con el mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#tienda" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Tienda Online
                </a>
              </li>
              <li>
                <a href="#envios" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Envíos Internacionales
                </a>
              </li>
              <li>
                <a href="#viajes" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Reservas de Viajes
                </a>
              </li>
              <li>
                <a href="#remesas" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Remesas a Cuba
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#nosotros" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/80">info@viazoom.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-primary-foreground/80">Miami, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 ViaZoom Express Multiservices. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;