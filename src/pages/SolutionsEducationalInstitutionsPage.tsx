import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { AbstractDashboard } from "@/components/ui/AbstractDashboard";
import { ArrowRight, School, GraduationCap, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SolutionsEducationalInstitutionsPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO 
        title="Solutions for Educational Institutions | GuruCool" 
        description="One connected system for attendance, academics, communication, exams, fees, and reporting."
        canonicalPath="/solutions/educational-institutions"
      />
      <PageHeader 
        eyebrow="Solutions"
        title="The Operating Layer for Educational Institutions" 
        description="One connected system for attendance, academics, communication, exams, fees, and reporting."
        align="center"
      />
      
      {/* Main Umbrella System Logic Section */}
      <section className="py-20 relative overflow-hidden bg-ice-panel border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Connecting Fragmented Operations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you manage a single campus or a nationwide network, disconnected software creates operational drag. GuruCool replaces fragmented tools with a single, highly engineered operational layer that binds your institution together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="p-6 bg-white rounded-2xl border border-border/60 shadow-sm flex flex-col items-center">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                 <Building2 className="w-6 h-6 text-primary" />
               </div>
               <h3 className="font-bold text-lg mb-2 text-foreground">Unified Identity</h3>
               <p className="text-sm text-muted-foreground">One profile per student, parent, and staff member across all operations.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-border/60 shadow-sm flex flex-col items-center">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                 <ArrowRight className="w-6 h-6 text-primary" />
               </div>
               <h3 className="font-bold text-lg mb-2 text-foreground">Automated Workflows</h3>
               <p className="text-sm text-muted-foreground">Attendance triggers comms, comms trigger reports. No manual syncing.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-border/60 shadow-sm flex flex-col items-center">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                 <Users className="w-6 h-6 text-primary" />
               </div>
               <h3 className="font-bold text-lg mb-2 text-foreground">Role-Based Views</h3>
               <p className="text-sm text-muted-foreground">Principals see health, teachers see classes, parents see updates.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Sub-types Support Strip */}
      <section className="py-24 bg-slate-50 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Engineered for your exact model.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While the core engine remains the same, GuruCool adapts its interface and logic to match the specific operational reality of your institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
              >
                <Link to={sol.link} className="block group">
                  <div className="p-8 rounded-2xl bg-white border border-border/60 shadow-sm hover:shadow-[var(--shadow-glow)] hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <sol.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-between">
                      {sol.title}
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-muted-foreground">{sol.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
