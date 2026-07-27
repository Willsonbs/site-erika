import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/const';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-40 animate-bounce"
      aria-label="Conversar no WhatsApp"
      title="Conversar com Dra. Erika no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
