
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Becker",
      location: "Lübeck",
      rating: 5,
      text: "Herr Weber hat für uns einen maßgeschneiderten Einbauschrank unter der Dachschräge gefertigt. Die Qualität der Arbeit ist hervorragend und der Schrank nutzt den verfügbaren Raum optimal aus. Von der Beratung bis zur Montage war alles sehr professionell.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      name: "Sabine Müller",
      location: "Travemünde",
      rating: 5,
      text: "Wir haben unsere komplette Küche vom Tischlerhandwerk anfertigen lassen. Das Ergebnis übertrifft alle unsere Erwartungen. Die Beratung war ausführlich, alle unsere Wünsche wurden berücksichtigt, und die Qualität ist einfach erstklassig. Ganz klar eine Empfehlung!",
      image: "https://i.pravatar.cc/150?img=20"
    },
    {
      id: 3,
      name: "Thomas Schulz",
      location: "Bad Schwartau",
      rating: 5,
      text: "Bereits zum zweiten Mal haben wir die Dienste von Herrn Weber in Anspruch genommen. Diesmal für die Restaurierung eines alten Familienerbstücks. Die Arbeit wurde mit viel Liebe zum Detail durchgeführt, und das Möbelstück erstrahlt in neuem Glanz. Vielen Dank!",
      image: "https://i.pravatar.cc/150?img=59"
    },
    {
      id: 4,
      name: "Karin Hoffmann",
      location: "Stockelsdorf",
      rating: 5,
      text: "Die Zusammenarbeit mit dem Tischlerhandwerk war von Anfang bis Ende ausgezeichnet. Unser neues Bücherregal ist nicht nur ein funktionales Möbelstück, sondern ein echtes Schmuckstück in unserem Wohnzimmer. Absolute Handwerkskunst!",
      image: "https://i.pravatar.cc/150?img=32"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePrevious = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((activeIndex + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto w-max">Kundenstimmen</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Was unsere Kunden über unsere Arbeit sagen – authentische Erfahrungen mit unserer Tischlerei.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button 
            onClick={handlePrevious} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-light transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-light transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial carousel */}
          <div className="overflow-hidden p-4">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${animating ? 'opacity-80' : 'opacity-100'}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-8 border border-wood-light">
                    {/* Rating stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial text */}
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    
                    {/* Customer info */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation dots */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-green-DEFAULT' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
