
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Fehler",
        description: "Bitte stimmen Sie der Datenschutzerklärung zu",
        variant: "destructive"
      });
      return;
    }

    // In a real scenario, you would send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank! Wir melden uns zeitnah bei Ihnen.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      privacy: false
    });
  };

  return (
    <section id="contact" className="py-20 bg-wood-light bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto w-max">Kontakt</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns gerne – wir freuen uns auf Ihre Anfrage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Projektanfrage</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-DEFAULT focus:border-green-DEFAULT"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-DEFAULT focus:border-green-DEFAULT"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-DEFAULT focus:border-green-DEFAULT"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre Nachricht*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-DEFAULT focus:border-green-DEFAULT"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="mb-6 flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-green-DEFAULT focus:ring-green-DEFAULT border-gray-300 rounded"
                    checked={formData.privacy}
                    onChange={handleChange}
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    Ich stimme der <a href="#datenschutz" className="text-green-DEFAULT hover:underline">Datenschutzerklärung</a> zu*
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Anfrage senden
                </button>
                <p className="text-xs text-gray-500 mt-2">* Pflichtfelder</p>
              </form>
            </div>
          </div>
          
          {/* Contact information and map */}
          <div>
            {/* Contact information */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-green-DEFAULT" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Adresse</h4>
                    <address className="not-italic text-gray-600">
                      Tischlerhandwerk Weber<br />
                      Handwerkerstraße 15<br />
                      23552 Lübeck
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-green-DEFAULT" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Telefon</h4>
                    <p className="text-gray-600">
                      <a href="tel:+494511234567" className="link-hover">+49 (0) 451 / 123 456 7</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-green-DEFAULT" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">E-Mail</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@tischler-luebeck.de" className="link-hover">info@tischler-luebeck.de</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-green-DEFAULT" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Öffnungszeiten</h4>
                    <p className="text-gray-600">
                      Mo - Fr: 8:00 - 17:00 Uhr<br />
                      Sa: Nach Vereinbarung<br />
                      So: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map (placeholder) */}
            <div className="bg-white rounded-lg shadow-md p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37650.34694879737!2d10.641899741992172!3d53.86700318282224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2097d44a1dad9%3A0x448f55fb678b9abe!2sL%C3%BCbeck!5e0!3m2!1sen!2sde!4v1650358084258!5m2!1sen!2sde" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
