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
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-wood-dark font-bold text-2xl flex items-center">
            <span className="text-[#6B8E23] mr-1">Tischler</span>Handwerk
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-wood-dark hover:text-[#6B8E23] transition-colors duration-300 px-2 py-1 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-wood-dark focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-wood-dark hover:text-[#6B8E23] py-2 font-medium border-b border-wood-light last:border-b-0"
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
      <div className="relative pt-24 min-h-screen flex items-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Handwerkskunst aus <span className="text-[#6B8E23]">Lübeck</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Maßgefertigte Möbel und hochwertige Innenausbauten 
              von Ihrem Tischlermeister mit jahrzehntelanger Erfahrung.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <button className="btn-primary">
                  Kostenloses Beratungsgespräch vereinbaren
                </button>
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-md transition-colors duration-300 hover:bg-white hover:text-wood-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
