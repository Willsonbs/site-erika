import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '@/const';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Tratamentos', id: 'treatments' },
    { label: 'E-books', id: 'ebooks' },
    { label: 'Avaliações', id: 'reviews' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="container flex h-[4.5rem] items-center justify-between gap-4 lg:gap-8">
        <div className="flex min-w-0 flex-shrink-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/logo.png"
            alt="Dra. Erika Gonçalves - Logo"
            className="h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14"
          />
          <div className="min-w-0">
            <p className="truncate font-serif text-sm font-bold leading-tight text-primary sm:text-base">Dra. Erika Gonçalves</p>
            <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">Psiquiatria</p>
          </div>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="whitespace-nowrap text-sm font-medium text-foreground transition-colors duration-300 hover:text-secondary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button - Right */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex whitespace-nowrap px-5 py-2 text-sm"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="flex-shrink-0 rounded-lg p-2 text-primary transition-colors hover:bg-muted md:hidden"
        >
          {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-navigation" className="mobile-nav-panel border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-md py-2.5 text-left font-medium text-foreground transition-colors duration-300 hover:bg-secondary/10 hover:text-secondary"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full text-center"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
