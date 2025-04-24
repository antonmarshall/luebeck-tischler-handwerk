import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tischlerhandwerk Weber</h3>
            <p className="mb-4">
              Ihr Spezialist für maßgefertigte Möbel und Innenausbau in Lübeck und Umgebung.
            </p>
            <p className="flex items-center">
              <span>Mit </span>
              <Heart className="h-4 w-4 mx-1 text-red-400 fill-red-400" />
              <span> in Lübeck gefertigt</span>
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Startseite</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Unsere Leistungen</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">Referenzen</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link to="/agb" className="hover:text-primary transition-colors">AGB</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-300 text-sm">
          © {currentYear} Tischlerhandwerk Weber. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
