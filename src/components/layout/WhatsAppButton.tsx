import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20plans%20for%20our%20school.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground px-4 py-3 rounded-full shadow-premium-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium text-body-sm hidden sm:inline group-hover:inline">
        Chat with us
      </span>
    </a>
  );
}
