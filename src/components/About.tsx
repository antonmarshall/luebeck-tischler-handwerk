import aboutImage from "@/assets/about-craftsman.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Erfahrener Tischlermeister bei der traditionellen Handarbeit"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Über uns</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Seit über 25 Jahren steht unsere Tischlerei für traditionelles Handwerk und moderne Präzision. 
                Als familiengeführter Betrieb in Lübeck verbinden wir altbewährte Handwerkstechniken mit 
                zeitgemäßer Technologie.
              </p>
              <p className="text-lg text-gray-600">
                Unser erfahrenes Team aus Meistern und Gesellen arbeitet mit Leidenschaft 
                und höchster Sorgfalt an jedem Projekt - ob klassische Möbelstücke, 
                moderne Einbauten oder anspruchsvolle Restaurierungen.
              </p>
              <p className="text-lg text-gray-600">
                Was uns auszeichnet ist die persönliche Beratung und individuelle Betreuung 
                unserer Kunden von der ersten Idee bis zur finalen Umsetzung.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">25+</h3>
                <p className="text-gray-600">Jahre Erfahrung</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">100%</h3>
                <p className="text-gray-600">Kundenzufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
