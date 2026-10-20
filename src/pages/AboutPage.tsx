import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About GuruCool | Why Connected Systems Matter" 
        description="We believe educational institutions deserve better than fragmented software. Learn why GuruCool exists."
        canonicalPath="/about"
      />
      <PageHeader 
        variant="editorial"
        eyebrow="About GuruCool"
        title="Why We Exist" 
        description="Educational institutions deserve better than fragmented software and manual administrative drag."
      />
      
      <SectionContainer>
        <div className="about-story py-16 lg:py-28">
          <article className="about-story__lead">
            <span>Why the system matters</span>
            <h2>The problem with education software today</h2>
            <p>For years, educational institutions have been sold "solutions" that only solve one piece of the puzzle. An app for attendance. A different portal for fees. Another tool for exams.</p>
            <p>This fragmentation steals time from teaching and weakens leadership visibility. When systems don't talk to each other, the institution slows down.</p>
            <div><i />Fragmented records become institutional drag.</div>
          </article>
          <div className="about-story__chapters">
            <article><span>Connected structure</span><h2>Why connected systems matter</h2><p>We believe modern institutions require an operating layer: a single, connected system where workflows feed into each other naturally. Attendance can update daily operations and prepare parent communication. Exam marks can move into report cards without duplicate spreadsheet work.</p></article>
            <article><span>Practical adoption</span><h2>The importance of modular rollout</h2><p>Software fatigue is real. GuruCool is designed for staged implementation. Start with the foundation, get daily workflows right, and expand at your institution's pace.</p></article>
            <article><span>Institution fit</span><h2>Who we help</h2><p>GuruCool supports K-12 schools, colleges, tuition centres, and multi-campus groups that need clearer operations and connected institutional records.</p></article>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
