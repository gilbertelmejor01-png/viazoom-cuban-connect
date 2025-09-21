import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  buttonText: string;
  buttonAction: () => void;
  accent?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  image, 
  icon: Icon, 
  buttonText, 
  buttonAction,
  accent = false 
}: ServiceCardProps) => {
  return (
    <div className={`service-card bg-card rounded-3xl p-8 shadow-soft ${accent ? 'ring-2 ring-accent/20' : ''}`}>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${accent ? 'bg-gradient-accent' : 'bg-primary'}`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            onClick={buttonAction}
            className={accent ? "btn-primary" : "btn-secondary"}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 max-w-lg">
          <div className="relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-80 object-cover rounded-2xl shadow-medium"
            />
            <div className={`absolute inset-0 bg-gradient-to-tr ${accent ? 'from-accent/20 to-transparent' : 'from-primary/20 to-transparent'} rounded-2xl`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;