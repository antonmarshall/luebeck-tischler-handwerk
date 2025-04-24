import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import heroImage from "@/assets/images/about-craftsman.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Startseite', href: '#home' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Über Uns', href: '#about' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kundenstimmen', href: '#testimonials' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header id="home" className="relative">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-foreground font-bold text-2xl flex items-center">
            <span className="text-primary mr-1">Tischler</span>Handwerk
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 px-2 py-1 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background shadow-lg animate-fade-in">
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary py-2 font-medium border-b border-muted last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Tischlerhandwerk Weber" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Handwerkskunst aus <span className="text-primary">Lübeck</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg">
                Maßgefertigte Möbel und hochwertige Innenausbauten 
                von Ihrem Tischlermeister mit jahrzehntelanger Erfahrung.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Kostenloses Beratungsgespräch vereinbaren
                  </Button>
                </a>
                <a href="#services">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10">
                    Unsere Leistungen
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
