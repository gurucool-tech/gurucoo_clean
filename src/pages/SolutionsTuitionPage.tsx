import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolutionOperationsStage } from "@/components/solutions/SolutionOperationsStage";

export default function SolutionsTuitionPage() {
  return (
    <>
      <SEO 
        title="Solutions for Tuition & Coaching" 
        description="Streamline branch operations, fee tracking, and parent communication for your tuition or coaching institution."
        canonicalPath="/solutions/tuition-coaching"
      />
      <PageHeader 
        variant="warm"
        eyebrow="Solutions: Coaching Centers"
        title="Growth Infrastructure for Coaching" 
        description="Keep parents in the loop, track attendance clearly, and coordinate fee collection across your branches."
        alignment="left"
      />
      <SolutionOperationsStage kind="tuition" eyebrow="Branch coordination" title="A clearer parent communication loop" description="WhatsApp integration prepares timely attendance and performance updates while branch records remain connected." points={["Batch-level attendance", "Prepared parent updates", "Connected fees and branch records"]} />
    </>
  );
}
