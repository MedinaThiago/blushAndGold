import { type MouseEvent, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToCollections = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById("collections");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleScrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="serif text-2xl font-light tracking-wide">
              IF Collection
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              News
            </a>
            <a href="#collections" onClick={handleScrollToCollections} className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#contact" onClick={handleScrollToContact} className="text-sm font-light tracking-wide hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="md:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-base font-light tracking-wide hover:text-accent transition-colors">
                News
              </a>
              <a href="#collections" onClick={handleScrollToCollections} className="text-base font-light tracking-wide hover:text-accent transition-colors">
                Collections
              </a>
              <a href="#contact" onClick={handleScrollToContact} className="text-base font-light tracking-wide hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
