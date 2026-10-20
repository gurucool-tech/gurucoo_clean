import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PreFooterCTA() {
  return (
    <section className="bg-[hsl(var(--gc-porcelain))] py-8 sm:py-10 lg:py-12">
      <div className="container-wide">
        <div className="prefooter-panel">
          <div className="relative z-10 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--gc-lime))]">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--gc-lime))]" />
                See the connected system
              </div>
              <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.02]">
            See how GuruCool could work for your institution.
          </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            Walk through the platform and the workflows that matter to your institution.
          </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <Button asChild size="lg" className="h-13 gap-2 rounded-lg bg-[hsl(var(--gc-electric-blue))] px-6">
              <Link to="/book-demo">
                Book a walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
              <Link to="/contact" className="text-link-light justify-center px-3 py-2">
              Talk to us
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
