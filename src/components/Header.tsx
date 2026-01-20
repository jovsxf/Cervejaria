import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl">
                <img
                  src="public/images/cocar.png"
                  alt="Cerveja"
                  className="w-12 h-12"
              />
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary tracking-tight">CONGÕI</h1>
              <p className="text-xs text-muted-foreground">Cervejaria Artesanal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('sobre')} className="text-foreground/80 hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('kombi')} className="text-foreground/80 hover:text-primary transition-colors">
              A Kombi
            </button>
            <button onClick={() => scrollToSection('cervejas')} className="text-foreground/80 hover:text-primary transition-colors">
              Cervejas
            </button>
            <button onClick={() => scrollToSection('eventos')} className="text-foreground/80 hover:text-primary transition-colors">
              Eventos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground/80 hover:text-primary transition-colors">
              Contato
            </button>
            <Button onClick={() => scrollToSection('agendar')} className="bg-secondary hover:bg-secondary/90">
              Agendar Evento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-primary/20 pt-4">
            <button onClick={() => scrollToSection('sobre')} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('kombi')} className="text-foreground/80 hover:text-primary transition-colors text-left">
              A Kombi
            </button>
            <button onClick={() => scrollToSection('cervejas')} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Cervejas
            </button>
            <button onClick={() => scrollToSection('eventos')} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Eventos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground/80 hover:text-primary transition-colors text-left">
              Contato
            </button>
            <Button onClick={() => scrollToSection('agendar')} className="bg-secondary hover:bg-secondary/90 w-full">
              Agendar Evento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
