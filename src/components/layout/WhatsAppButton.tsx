import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20walkthrough%20and%20understand%20plans%20for%20our%20institution.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-50 flex min-h-12 items-center gap-2 rounded-xl border border-transparent bg-whatsapp px-4 py-3 text-primary-foreground shadow-premium-lg transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:bg-whatsapp-hover hover:shadow-xl active:translate-y-0 sm:bottom-6 sm:right-6"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium text-body-sm hidden sm:inline group-hover:inline">
        Chat with us
      </span>
    </a>
  );
}
