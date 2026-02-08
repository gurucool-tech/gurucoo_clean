import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20plans%20for%20our%20school.";

export function PreFooterCTA() {
  return (
    <section className="py-14 sm:py-16 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading-xl font-bold text-foreground mb-4">
            Ready to see GuruCool in action?
          </h2>
          <p className="text-body-md text-muted-foreground mb-8">
            Book a personalized demo and discover how GuruCool can simplify your school's operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-whatsapp hover:bg-whatsapp-hover">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/book-demo">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
