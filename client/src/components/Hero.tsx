import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '@/const';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-background">
      {/* Ambient glow, sage-tinted to keep the palette from reading as pure gold+navy */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,122,88,0.16), transparent 70%)' }}
      />

      <div className="container relative grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-7">
          <div>
            <p className="eyebrow">Psiquiatria em Caruaru, PE</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-primary leading-[1.08] tracking-tight">
              Cuidar da mente é um ato de{' '}
              <em className="italic text-secondary" style={{ fontStyle: 'italic' }}>
                coragem
              </em>{' '}
              e amor próprio.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-5 max-w-lg">
              Atendimento psiquiátrico humanizado, integrando ciência, empatia e cuidado.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle size={18} /> Agendar Consulta via WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="btn-secondary inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Conheça a Dra. Erika <ArrowRight size={16} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-foreground/80">
            <span className="font-medium">CRM-29662/PE</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-medium">Psiquiatria</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-medium">Atendimento Humanizado</span>
          </div>
        </div>

        {/* Right Image — classic arch, the page's signature shape */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <div
              className="absolute -inset-3 -z-10 opacity-50 blur-2xl bg-gradient-to-br from-secondary/40 to-sage/25"
              style={{ borderRadius: '50% 50% 8px 8px / 40% 40% 8px 8px' }}
            />
            <div
              className="relative w-full aspect-[4/5] overflow-hidden border-4 border-white shadow-xl"
              style={{ borderRadius: '50% 50% 0 0 / 40% 40% 0 0' }}
            >
              <img
                src="/dra-erika-1.jpg"
                alt="Dra. Erika Gonçalves - Psiquiatria em Caruaru"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — static, no bounce */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Rolar para a seção Sobre"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover:bg-muted transition-colors motion-safe:animate-pulse"
      >
        <ChevronDown size={22} className="text-secondary" />
      </button>
    </section>
  );
}
