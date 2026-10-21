import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PreFooterCTA } from "./PreFooterCTA";
import { WhatsAppButton } from "./WhatsAppButton";
import { SiteScrollReveal } from "./SiteScrollReveal";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-[64px] xl:pt-[88px]">
        <SiteScrollReveal />
        {children}
      </main>
      <PreFooterCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
