import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { AbstractDashboard } from "@/components/ui/AbstractDashboard";
import { ArrowRight, School, GraduationCap, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { getScrollRevealVariants, getStaggerRevealVariants, scrollRevealViewport } from "@/lib/scrollRevealMotion";

export default function SolutionsEducationalInstitutionsPage() {
  const reduceMotion = useReducedMotion();
  const reveal = getScrollRevealVariants(reduceMotion);
  const stagger = getStaggerRevealVariants(reduceMotion);

  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO 
        title="Solutions for Educational Institutions | GuruCool" 
        description="One connected system for attendance, academics, communication, exams, fees, and reporting."
        canonicalPath="/solutions/educational-institutions"
      />
      <PageHeader 
        variant="dark"
        eyebrow="Solutions"
        title="One Connected Operating Layer." 
        description="For educational institutions that need attendance, academics, communication, exams, fees, and reporting to work as one coordinated system."
        align="left"
      />
      
      {/* Main Umbrella System Logic Section */}
      <section className="py-20 relative overflow-hidden bg-ice-panel border-y border-border/40">
        <div className="site-canvas max-w-6xl relative z-10">
          <div className="institution-principles__intro mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Connecting Fragmented Operations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Whether you manage a single campus or a nationwide network, disconnected software creates operational drag. GuruCool replaces fragmented tools with a single, highly engineered operational layer that binds your institution together.
            </p>
          </div>
          
          <div className="institution-principles">
             <article className="institution-principle institution-principle--lead">
               <div className="institution-principle__icon">
                 <Building2 className="w-6 h-6 text-primary" />
               </div>
               <h3>Unified Identity</h3>
               <p>One profile per student, parent, and staff member across all operations.</p>
             </article>
             <article className="institution-principle">
               <div className="institution-principle__icon">
                 <ArrowRight className="w-6 h-6 text-primary" />
               </div>
               <h3>Automated Workflows</h3>
               <p>Attendance triggers communications and connected records. No manual syncing.</p>
             </article>
             <article className="institution-principle institution-principle--warm">
               <div className="institution-principle__icon">
                 <Users className="w-6 h-6 text-primary" />
               </div>
               <h3>Role-Based Views</h3>
               <p>Principals see institutional health, teachers see classes, and parents receive relevant updates.</p>
             </article>
          </div>
        </div>
      </section>

      {/* Sub-types Support Strip */}
      <section className="institution-models py-20 sm:py-28">
        <div className="site-canvas">
          <div className="institution-models__intro">
            <span>One architecture, different operating realities</span>
            <h2>Engineered for your exact model.</h2>
            <p>
              While the core engine remains the same, GuruCool adapts its interface and logic to match the specific operational reality of your institution.
            </p>
          </div>

          <motion.div
            className="institution-models__grid"
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
            variants={stagger}
          >
            {[
              {
                title: "Schools",
                icon: School,
                desc: "K-12 connected operations focused on daily attendance, parent comms, and student safety.",
                link: "/solutions/schools"
              },
              {
                title: "Colleges",
                icon: GraduationCap,
                desc: "Higher education scale with advanced timetable clash management and faculty allocation.",
                link: "/solutions/colleges"
              },
              {
                title: "Tuition & Coaching",
                icon: Users,
                desc: "Fast, batch-driven operations optimized for branch-level control and fee tracking.",
                link: "/solutions/tuition-coaching"
              },
              {
                title: "Multi-Campus Groups",
                icon: Building2,
                desc: "Top-level executive oversight and comparative analytics across your entire network.",
                link: "/solutions/multi-campus"
              }
            ].map((sol, i) => (
              <motion.div
                variants={reveal}
                key={i}
              >
                <Link to={sol.link} className={`institution-model institution-model--${i + 1} group`}>
                    <div className="institution-model__icon">
                      <sol.icon className="w-6 h-6" />
                    </div>
                    <div className="institution-model__copy">
                    <span>Institution model</span>
                    <h3>
                      {sol.title}
                    <ArrowRight className="institution-model__arrow" />
                    </h3>
                    <p>{sol.desc}</p>
                    </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
