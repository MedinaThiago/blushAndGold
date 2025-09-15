import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="serif text-2xl font-light tracking-wide">
              Editorial Luxo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              Novidades
            </a>
            <a href="#" className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              Coleções
            </a>
            <a href="#" className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              Editorial
            </a>
            <a href="#" className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              Sobre
            </a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-accent transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-accent transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-accent transition-colors">
              <ShoppingBag size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-base font-light tracking-wide hover:text-accent transition-colors">
                Novidades
              </a>
              <a href="#" className="text-base font-light tracking-wide hover:text-accent transition-colors">
                Coleções
              </a>
              <a href="#" className="text-base font-light tracking-wide hover:text-accent transition-colors">
                Editorial
              </a>
              <a href="#" className="text-base font-light tracking-wide hover:text-accent transition-colors">
                Sobre
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;