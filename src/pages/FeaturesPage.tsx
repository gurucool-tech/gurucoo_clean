import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Shield, BookOpen, MessageCircle, PenTool, CreditCard, BarChart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getScrollRevealVariants, getStaggerRevealVariants, scrollRevealViewport } from "@/lib/scrollRevealMotion";

export default function FeaturesPage() {
  const reduceMotion = useReducedMotion();
  const fadeInUp = getScrollRevealVariants(reduceMotion);
  const staggerContainer = getStaggerRevealVariants(reduceMotion);

  return (
    <>
      <SEO 
        title="Features & Workflows | GuruCool" 
        description="Explore the comprehensive workflows of GuruCool: Attendance, Academics, Communication, Assessments, and Fees."
        canonicalPath="/features"
      />
      <div className="relative overflow-hidden bg-background">
        <PageHeader 
          variant="product"
          eyebrow="Workflow architecture"
          title="Features by Institutional Workflow" 
          description="Our platform is built around the actual workflows of educational institutions, not disconnected toolkits."
          alignment="left"
        />
      
      <SectionContainer>
        <div className="max-w-[1240px] mx-auto py-14">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-6"
          >
            
            {/* Workflow 1 */}
            <motion.div variants={fadeInUp} className="feature-card group lg:col-span-4">
              <Shield className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Attendance & Identity</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> QR Code ID Cards for students & staff</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Facial recognition gate entry</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Real-time absentee tracking</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Staff proxy and leave management</li>
              </ul>
            </motion.div>

            {/* Workflow 2 */}
            <motion.div variants={fadeInUp} className="feature-card group lg:col-span-2">
              <BookOpen className="w-10 h-10 text-guru-sky mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-guru-sky transition-colors">Academic Operations</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Automated timetable generation</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Teacher workload balancing</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Syllabus tracking and completion</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Homework and assignment distribution</li>
              </ul>
            </motion.div>

            {/* Workflow 3 */}
            <motion.div variants={fadeInUp} className="feature-card group lg:col-span-3 bg-[hsl(var(--gc-ice)/0.32)]">
              <MessageCircle className="w-10 h-10 text-[#25D366] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-[#25D366] transition-colors">Parent Communication</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#25D366]/50 mt-1.5 shrink-0" /> Automated WhatsApp attendance alerts</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#25D366]/50 mt-1.5 shrink-0" /> Fee reminder broadcasts</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#25D366]/50 mt-1.5 shrink-0" /> Event and holiday notifications</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#25D366]/50 mt-1.5 shrink-0" /> No parent app installation required</li>
              </ul>
            </motion.div>

            {/* Workflow 4 */}
            <motion.div variants={fadeInUp} className="feature-card group lg:col-span-3">
              <PenTool className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Exams & Assessments</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Exam seating arrangement generator</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Invigilator duty allotment</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Bulk marks entry interface</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" /> Automated report card generation</li>
              </ul>
            </motion.div>

            {/* Workflow 5 */}
            <motion.div variants={fadeInUp} className="feature-card group lg:col-span-2 bg-[hsl(var(--gc-cream)/0.55)]">
              <CreditCard className="w-10 h-10 text-foreground mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Fees & Records</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-1.5 shrink-0" /> Custom fee structure creation</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-1.5 shrink-0" /> Automated digital receipts</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-1.5 shrink-0" /> Defaulter list tracking</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-1.5 shrink-0" /> Secure document portal (KYC)</li>
              </ul>
            </motion.div>

            {/* Workflow 6 */}
            <motion.div variants={fadeInUp} className="feature-card group lg:col-span-4">
              <BarChart className="w-10 h-10 text-guru-sky mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-guru-sky transition-colors">Reporting & Visibility</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Executive dashboard for leadership</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Teacher performance analytics</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Financial health summaries</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-guru-sky/50 mt-1.5 shrink-0" /> Multi-campus consolidated views</li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </SectionContainer>
      </div>
    </>
  );
}
