import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should an institution start with first?",
    answer: "We strongly recommend starting with the Foundation layer: identity setup, profiles, and basic QR/biometric attendance. This establishes the core data infrastructure without overwhelming your staff. Once attendance flows smoothly, you can add daily operations like timetables and WhatsApp alerts."
  },
  {
    question: "How does the staged rollout work?",
    answer: "Staged rollout means deploying GuruCool in layers to prevent change fatigue. Phase 1 is Foundation and Attendance. Phase 2 introduces Academic Operations (timetables, homework). Phase 3 brings Finance (fees, receipts). Phase 4 adds Assessments. You decide the pace."
  },
  {
    question: "Do you support colleges and tuition institutions too?",
    answer: "Yes. GuruCool is an operating layer for all educational institutions. While schools use our K-12 modules, colleges leverage our advanced assessment and scale tools. Tuition centers heavily utilize our attendance tracking and WhatsApp parent loops to manage multiple branches."
  },
  {
    question: "How does WhatsApp communication work? Do parents need an app?",
    answer: "No parent app is required. GuruCool can send attendance, fee, and notice updates directly to parents through WhatsApp, using the institution's configured communication workflow."
  },
  {
    question: "Can modules be added later?",
    answer: "Absolutely. Our pricing and architecture are built around operational maturity. You can start with the Foundational tier and upgrade to the Academic & Admin or Full Institutional tiers as your team becomes comfortable with the system."
  },
  {
    question: "How does multi-campus visibility work?",
    answer: "For groups running multiple campuses, GuruCool provides a centralized executive dashboard. Leadership can view consolidated analytics across all branches while maintaining strict role-based access control at the individual campus level."
  },
  {
    question: "What does implementation usually involve?",
    answer: "Implementation involves data migration (importing student/staff lists), hardware setup (if using biometrics/QR gates), and workflow configuration (setting up your specific timetable and fee structures). Our team handles the heavy lifting."
  },
  {
    question: "What kind of training is needed?",
    answer: "Because we use a staged rollout, training is broken into small, digestible sessions per module. Staff only learn what they need for the current rollout phase. The interface is flat and intuitive, drastically reducing the learning curve."
  }
];

export default function FAQPage() {
  return (
    <>
      <SEO 
        title="Implementation & Rollout FAQs | GuruCool" 
        description="Common questions about implementing GuruCool, staged rollouts, WhatsApp integration, and multi-campus support."
        canonicalPath="/faq"
      />
      <PageHeader 
        variant="editorial"
        title="Questions about Implementation" 
        description="Real answers about how GuruCool rolls out in your institution."
      />
      
      <SectionContainer>
        <div className="mx-auto grid max-w-[1240px] gap-10 py-16 lg:grid-cols-[0.42fr_1fr] lg:gap-20 lg:py-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-label section-label-olive">Implementation desk</span>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-foreground">Practical answers, grouped in one place.</h2>
            <p className="mt-4 max-w-sm leading-7 text-muted-foreground">Start with rollout, expand into workflows, and keep institutional ownership clear at every stage.</p>
          </aside>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[hsl(var(--gc-cobalt)/0.16)] bg-card px-6 sm:px-8">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>
    </>
  );
}
