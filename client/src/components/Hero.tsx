import { ArrowUpRight, ChevronDown, MapPin, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '@/const';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wash relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pb-16">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.8fr)] lg:gap-20">
        <div className="order-1 flex flex-col gap-7 lg:order-1">
          <div className="space-y-5">
            <p className="eyebrow">Psiquiatria em Caruaru e online</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-[4.35rem]">
              Cuidar da mente é um ato de coragem e amor próprio.
            </h1>
            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Atendimento psiquiátrico humanizado, integrando ciência, empatia e cuidado.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center shadow-[0_10px_24px_rgba(11,12,43,0.16)]"
            >
              Agendar pelo WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Conheça a Dra. Erika
            </button>
          </div>

          <div className="flex max-w-xl flex-wrap items-center gap-x-5 gap-y-3 border-t border-primary/15 pt-5 text-sm">
            <div className="flex items-center gap-2 whitespace-nowrap text-foreground">
              <ShieldCheck size={18} className="shrink-0 text-secondary" aria-hidden="true" />
              <span>CRM 29662</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap text-foreground">
              <MapPin size={18} className="shrink-0 text-secondary" aria-hidden="true" />
              <span>Caruaru, PE</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap text-foreground">
              <MonitorSmartphone size={18} className="shrink-0 text-secondary" aria-hidden="true" />
              <span>Consultas online</span>
            </div>
          </div>
        </div>

        <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[430px]">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-secondary/40 sm:-left-8 sm:-top-8 sm:h-32 sm:w-32" aria-hidden="true" />
            <div className="hero-portrait-frame relative aspect-[0.83] overflow-hidden rounded-[2rem] border border-primary/10 bg-secondary-light">
              <img
                src="/dra-erika-1.jpg"
                alt="Dra. Erika Gonçalves, psiquiatra"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/40 bg-primary/90 px-4 py-3 text-primary-foreground backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
                <p className="font-serif text-lg">Dra. Erika Gonçalves</p>
                <p className="mt-0.5 text-xs tracking-wide text-primary-foreground/75">Psiquiatria · CRM 29662</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection('about')}
        aria-label="Ir para a seção Sobre"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-secondary transition-colors hover:bg-secondary/10 sm:block"
      >
        <ChevronDown size={22} aria-hidden="true" />
      </button>
    </section>
  );
}
