import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-800">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Tischlerhandwerk Weber</h3>
            <p className="mb-4 text-gray-700">
              Ihr Spezialist für maßgefertigte Möbel und Innenausbau in Lübeck und Umgebung.
            </p>
            <p className="flex items-center text-gray-700">
              <span>Mit </span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
              <span> in Lübeck gefertigt</span>
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Startseite</a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Unsere Leistungen</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Referenzen</a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-amber-800">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-amber-700 hover:text-amber-900 transition-colors">Impressum</Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-amber-700 hover:text-amber-900 transition-colors">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link to="/agb" className="text-amber-700 hover:text-amber-900 transition-colors">AGB</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © {currentYear} Tischlerhandwerk Weber. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
