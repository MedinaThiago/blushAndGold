import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-ink-velvet text-ivory-haze py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="serif text-2xl font-light mb-6">
              IF Collection
            </h3>
            <p className="text-sm font-light leading-relaxed text-ivory-haze/80 mb-6">
              We create timeless pieces that transcend trends. Each collection is a celebration of contemporary elegance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="serif text-lg font-light mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#" className="p-2 hover:text-sage-velour transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#collections" className="p-2 hover:text-sage-velour transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="serif text-lg font-light mb-6">
              Contato
            </h4>
            <div className="space-y-4 text-sm font-light">
              <a
                href="https://www.instagram.com/if_mycollection?igsh=MTYzOTdsdnA1eThodA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-sage-velour transition-colors cursor-pointer"
              >
                <Instagram size={20} />
                <div>
                  <p>IF Collection</p>
                </div>
              </a>
              <a
                href="mailto:Ifagundes@ifexclusivecollection.com"
                className="flex items-start space-x-3 hover:text-sage-velour transition-colors cursor-pointer"
                aria-label="Enviar email para Ifagundes@ifexclusivecollection.com"
              >
                <Mail size={20} />
                <div>
                  <p>Ifagundes@ifexclusivecollection.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory-haze/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-champagne-cream/60">
            <p>&copy; 2025 IF Collection. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;