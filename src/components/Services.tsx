
import { Wrench, Home, Sofa, ChefHat, Archive, Construction } from 'lucide-react';

const Services = () => {
  const services = [
    // Replace 'Tool' with 'Wrench'
    {
      title: "Maßgefertigte Möbel",
      description: "Individuelle Möbelstücke nach Ihren Wünschen und Maßen – vom Einzelstück bis zum kompletten Ensemble.",
      icon: <Sofa className="w-10 h-10 text-green-DEFAULT" />
    },
    {
      title: "Innenausbau",
      description: "Professionelle Umsetzung Ihrer Raumideen mit maßgeschneiderten Einbauten und Verkleidungen.",
      icon: <Home className="w-10 h-10 text-green-DEFAULT" />
    },
    {
      title: "Einbauschränke",
      description: "Perfekt angepasste Stauraumlösungen für jede Raumsituation – vom Dachschrägen-Schrank bis zur begehbaren Garderobe.",
      icon: <Archive className="w-10 h-10 text-green-DEFAULT" />
    },
    {
      title: "Küchen",
      description: "Funktionale und ästhetische Küchenkonzepte nach Maß, individuell auf Ihre Bedürfnisse zugeschnitten.",
      // Replace 'Kitchen' with 'ChefHat'
      icon: <ChefHat className="w-10 h-10 text-green-DEFAULT" />
    },
    {
      title: "Restauration",
      description: "Fachgerechte Aufarbeitung und Wiederherstellung von historischen und antiken Möbelstücken.",
      // Replace 'Tool' with 'Wrench'
      icon: <Wrench className="w-10 h-10 text-green-DEFAULT" />
    },
    {
      title: "Objekteinrichtungen",
      description: "Komplettlösungen für Gewerberäume, Praxen und öffentliche Einrichtungen.",
      icon: <Construction className="w-10 h-10 text-green-DEFAULT" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto w-max">Unsere Leistungen</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Als Tischlermeisterbetrieb bieten wir Ihnen die volle Bandbreite handwerklicher Holzbearbeitung. 
            Jedes Stück wird mit Leidenschaft und Präzision gefertigt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card hover:translate-y-[-5px] bg-white"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-wood-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

