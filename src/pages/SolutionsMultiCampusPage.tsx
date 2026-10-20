import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolutionOperationsStage } from "@/components/solutions/SolutionOperationsStage";

export default function SolutionsMultiCampusPage() {
  return (
    <>
      <SEO 
        title="Solutions for Multi-Campus Groups" 
        description="Centralized control, standardized operations, and total visibility across every branch of your educational group."
        canonicalPath="/solutions/multi-campus"
      />
      <PageHeader 
        variant="product"
        eyebrow="Solutions: Multi-campus"
        title="Centralized Command for Multi-Campus Groups" 
        description="Standardize your operations. Gain real-time visibility into every branch from one central headquarters dashboard."
      />
      <SolutionOperationsStage kind="network" reverse eyebrow="Group visibility" title="One system. Every branch." description="Don't let data silo by location. GuruCool's multi-campus architecture allows leadership to oversee attendance, fees, and academic performance across the entire network in real time." points={["Network-wide operating view", "Campus-level role-based access", "Comparable institutional records"]} />
    </>
  );
}
