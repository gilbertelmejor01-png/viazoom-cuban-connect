import { ShoppingCart, Package, Plane, DollarSign } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useToast } from "@/hooks/use-toast";
import shoppingIcon from "@/assets/shopping-icon.jpg";
import shippingIcon from "@/assets/shipping-icon.jpg";
import travelIcon from "@/assets/travel-icon.jpg";
import remittanceIcon from "@/assets/remittance-icon.jpg";

const Services = () => {
  const { toast } = useToast();

  const handleServiceClick = (service: string) => {
    toast({
      title: "¡Próximamente!",
      description: `La sección de ${service} estará disponible pronto.`,
    });
  };

  const services = [
    {
      title: "Tienda Online",
      description: "Compra productos internacionales con la seguridad y confianza que necesitas. Catálogo amplio, precios competitivos y entrega garantizada.",
      features: [
        "Catálogo internacional completo",
        "Precios competitivos y transparentes",
        "Proceso de compra seguro",
        "Seguimiento en tiempo real"
      ],
      image: shoppingIcon,
      icon: ShoppingCart,
      buttonText: "Ver tienda",
      buttonAction: () => handleServiceClick("tienda"),
      accent: true
    },
    {
      title: "Envíos Internacionales",
      description: "Envía paquetes a cualquier parte del mundo con nuestra red logística premium. Rápido, seguro y con tracking completo.",
      features: [
        "Cobertura mundial garantizada",
        "Seguimiento GPS en tiempo real",
        "Empaque profesional incluido",
        "Seguro de mercancía opcional"
      ],
      image: shippingIcon,
      icon: Package,
      buttonText: "Calcular envío",
      buttonAction: () => handleServiceClick("envíos")
    },
    {
      title: "Reservas de Viajes",
      description: "Planifica tu próximo viaje con nuestros expertos. Vuelos, hoteles, paquetes turísticos y experiencias únicas al mejor precio.",
      features: [
        "Asesoría personalizada 24/7",
        "Mejores precios garantizados",
        "Paquetes todo incluido",
        "Cancelación flexible"
      ],
      image: travelIcon,
      icon: Plane,
      buttonText: "Explorar destinos",
      buttonAction: () => handleServiceClick("viajes")
    },
    {
      title: "Remesas a Cuba",
      description: "Envía dinero a Cuba de forma segura y rápida. Tipos de cambio preferenciales y entrega garantizada en pesos cubanos.",
      features: [
        "Entrega en 24-48 horas",
        "Tipos de cambio preferenciales",
        "Red de agencias en toda Cuba",
        "Máxima seguridad y confianza"
      ],
      image: remittanceIcon,
      icon: DollarSign,
      buttonText: "Enviar dinero",
      buttonAction: () => handleServiceClick("remesas"),
      accent: true
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuatro servicios esenciales diseñados para conectarte con el mundo de manera 
            simple, segura y confiable.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10K+</div>
              <div className="text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Países de cobertura</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Entregas exitosas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;