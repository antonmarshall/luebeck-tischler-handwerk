
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Maßgefertigte Küche",
      category: "Küchen",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e8b?q=80&w=1470&auto=format&fit=crop",
      description: "Moderne Einbauküche mit Massivholzarbeitsplatte und maßgefertigten Fronten."
    },
    {
      id: 2,
      title: "Einbauschrank",
      category: "Schränke",
      image: "https://images.unsplash.com/photo-1595514535415-e351a0148f98?q=80&w=1374&auto=format&fit=crop",
      description: "Raumhoher Einbauschrank mit individueller Inneneinteilung nach Kundenwunsch."
    },
    {
      id: 3,
      title: "Bücherregal",
      category: "Wohnmöbel",
      image: "https://images.unsplash.com/photo-1601591568068-df3c7625a420?q=80&w=1471&auto=format&fit=crop",
      description: "Maßgefertigtes Bücherregal in Eiche massiv mit integrierten LED-Leuchten."
    },
    {
      id: 4,
      title: "Restaurierter Sekretär",
      category: "Restauration",
      image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=1374&auto=format&fit=crop",
      description: "Fachgerecht restaurierter antiker Sekretär aus dem frühen 19. Jahrhundert."
    },
    {
      id: 5,
      title: "Badmöbel",
      category: "Badezimmer",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=1471&auto=format&fit=crop",
      description: "Waschtischunterschrank und Hochschrank mit wasserfesten Oberflächen."
    },
    {
      id: 6,
      title: "Büroeinrichtung",
      category: "Objekteinrichtung",
      image: "https://images.unsplash.com/photo-1600494448655-ae58f58bb945?q=80&w=1470&auto=format&fit=crop",
      description: "Komplette Büroeinrichtung mit Schreibtisch, Regalen und Aktenschränken."
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("Alle");

  const categories = ["Alle", ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === "Alle" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = projects.findIndex(p => p.id === selectedImage);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedImage(projects[nextIndex].id);
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = projects.findIndex(p => p.id === selectedImage);
      const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedImage(projects[previousIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto w-max">Unsere Projekte</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer Arbeiten – von maßgefertigten Einzelmöbeln 
            bis zu kompletten Innenausbauten.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category 
                  ? 'bg-green-DEFAULT text-white' 
                  : 'bg-white text-wood-dark hover:bg-green-light'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => setSelectedImage(project.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Ansehen
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <span className="text-green-DEFAULT text-sm font-medium">{project.category}</span>
                    <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-[90%] p-0 bg-transparent border-none">
                <div className="relative rounded-lg overflow-hidden bg-white">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 relative">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <button 
                        className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
                        onClick={() => setSelectedImage(null)}
                      >
                        <X className="w-6 h-6" />
                      </button>
                      
                      {/* Navigation buttons */}
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <button 
                          onClick={handlePrevious}
                          className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-r-full p-2 ml-2 shadow-md transition-all"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <button 
                          onClick={handleNext}
                          className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-l-full p-2 mr-2 shadow-md transition-all"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <div className="md:w-1/3 p-6">
                      <span className="text-green-DEFAULT font-medium">{project.category}</span>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
