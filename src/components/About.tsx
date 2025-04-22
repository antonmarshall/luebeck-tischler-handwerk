
import { Award, Calendar, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Calendar className="w-8 h-8 text-green-DEFAULT" />,
      title: "Seit 1995",
      description: "Über 25 Jahre Erfahrung in der Holzverarbeitung"
    },
    {
      icon: <Award className="w-8 h-8 text-green-DEFAULT" />,
      title: "Meisterbetrieb",
      description: "Handwerkskunst mit Tradition und hohen Qualitätsansprüchen"
    },
    {
      icon: <Users className="w-8 h-8 text-green-DEFAULT" />,
      title: "Lokales Team",
      description: "Ausgebildete Fachkräfte aus der Region Lübeck"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Wood pattern background */}
      <div className="absolute inset-0 bg-wood-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?q=80&w=1470&auto=format&fit=crop" 
                alt="Tischlermeister in der Werkstatt" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-5 -right-5 w-2/3 h-24 bg-green-light rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="section-title">Über Uns</h2>
            <p className="text-lg mb-6">
              Als traditioneller Tischlermeisterbetrieb in Lübeck verbinden wir klassisches Handwerk mit modernen Fertigungsmethoden. Seit über 25 Jahren gestalten, fertigen und montieren wir hochwertige Möbel und Einrichtungslösungen für Privatkunden und gewerbliche Auftraggeber.
            </p>
            <p className="text-lg mb-8">
              Unser Meister Thomas Weber führt den Betrieb in zweiter Generation und legt besonderen Wert auf nachhaltige Materialien, präzise Verarbeitung und eine persönliche Kundenbetreuung vom ersten Entwurf bis zur finalen Montage.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="mx-auto mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
