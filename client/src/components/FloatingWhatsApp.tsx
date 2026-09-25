import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/const';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:bottom-8 sm:right-8"
      aria-label="Conversar no WhatsApp"
      title="Conversar com Dra. Erika no WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
