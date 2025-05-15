
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">KMT Building Solutions</h3>
            <p className="text-gray-300 mb-4">Your one-stop solution for high-quality construction materials in India.</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 mr-2 text-construction-500" />
              <a 
                href="https://www.google.com/maps/place/River+Sand+Supplier/@11.0634467,76.9886575,13.66z/data=!4m15!1m8!3m7!1s0x3ba8f7f3acac202b:0xb9a1348889c47108!2sSaravanampatti,+Coimbatore,+Tamil+Nadu!3b1!8m2!3d11.0796991!4d76.9997393!16zL20vMGY2Nms5!3m5!1s0x3ba8f7df1fae783f:0x19d2e06cea16dd20!8m2!3d11.0615406!4d76.9831848!16s%2Fg%2F11f3wxhdky?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-construction-400"
              >
                Do.no:6, Amman Nagar, Saravanampatti, Coimbatore-641035
              </a>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 mr-2 text-construction-500" />
              <a 
                href="tel:9345587584" 
                className="text-gray-300 hover:text-construction-400"
              >
                +91 93455 87584
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-construction-500" />
              <a 
                href="mailto:karthiksolaisamy5@gmail.com" 
                className="text-gray-300 hover:text-construction-400"
              >
                karthiksolaisamy5@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/karthik.hummer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-construction-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/_mr.criminal66/?next=%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-construction-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/9345587584" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-construction-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KMT Building Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
