import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-black text-off-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="serif text-2xl font-light mb-6">
              Editorial Luxo
            </h3>
            <p className="text-sm font-light leading-relaxed text-off-white/80 mb-6">
              Criamos peças atemporais que transcendem tendências. 
              Cada coleção é uma celebração da elegância contemporânea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:text-gold-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:text-gold-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="serif text-lg font-light mb-6">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#" className="hover:text-gold-accent transition-colors">
                  Coleções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-accent transition-colors">
                  Editorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-accent transition-colors">
                  Contato
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
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-gold-accent" />
                <div>
                  <p>Rua Augusta, 2000</p>
                  <p>São Paulo, SP 01412-100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-accent" />
                <p>contato@editorialluxo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-off-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-off-white/60">
            <p>&copy; 2024 Editorial Luxo. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;