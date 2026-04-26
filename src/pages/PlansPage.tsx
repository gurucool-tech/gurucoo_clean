import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function PlansPage() {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Plans & Operational Maturity | GuruCool" 
        description="Choose a staged rollout plan that fits the operational maturity of your educational institution."
        canonicalPath="/plans"
      />
      <PageHeader 
        eyebrow="Implementation Tiers"
        title="Designed for Operational Maturity" 
        description="We don't sell disconnected features. We partner with you through staged rollout layers as your institution's operations mature."
        alignment="center"
      />
      
      <SectionContainer>
        <div className="max-w-6xl mx-auto py-12">
          {/* Main Tier Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 mb-24"
          >
            {/* Tier 1 */}
            <motion.div variants={fadeInUp} className="plan-card">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Foundation</h3>
                <p className="text-muted-foreground">Establish identity and daily discipline.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Facial Recognition Attendance</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Instant WhatsApp Alerts</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Basic Student Directory</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Staff Leaves & Proxy</span></li>
              </ul>
              <Button asChild variant="outline" className="w-full h-12 text-base rounded-full">
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
            </motion.div>

            {/* Tier 2 */}
            <motion.div variants={fadeInUp} className="plan-card border-primary/50 shadow-xl relative overflow-visible transform lg:-translate-y-4 bg-white dark:bg-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-2">Growth</h3>
                <p className="text-muted-foreground">Connect the classroom to the back office.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground font-medium">Everything in Foundation</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Automated Timetables</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Homework via WhatsApp</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Fee Tracking & Receipts</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Syllabus Completion Tracker</span></li>
              </ul>
              <Button asChild className="w-full h-12 text-base rounded-full shadow-[var(--shadow-glow)]">
                <Link to="/book-demo">Talk to Sales</Link>
              </Button>
            </motion.div>

            {/* Tier 3 */}
            <motion.div variants={fadeInUp} className="plan-card">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                <p className="text-muted-foreground">Complete closed-loop operations.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground font-medium">Everything in Growth</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Assessment Workflows</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Payroll & HR Management</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Executive Analytics Dashboard</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">Multi-Campus Rollup</span></li>
              </ul>
              <Button asChild variant="outline" className="w-full h-12 text-base rounded-full">
                <Link to="/contact">Contact Enterprise Sales</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Detailed Feature Matrix */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Compare all features</h2>
            
            <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="p-6 text-foreground font-bold border-b border-border/50 w-1/3">Features</th>
                    <th className="p-6 text-foreground font-bold border-b border-border/50 text-center w-2/9">Foundation</th>
                    <th className="p-6 text-foreground font-bold border-b border-border/50 text-center w-2/9 text-primary">Growth</th>
                    <th className="p-6 text-foreground font-bold border-b border-border/50 text-center w-2/9">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Category */}
                  <tr>
                    <td colSpan={4} className="bg-muted/10 p-4 font-bold text-muted-foreground text-sm uppercase tracking-wider">Identity & Access</td>
                  </tr>
                  {[
                    { name: "QR / Biometric Gate Entry", f: true, g: true, e: true },
                    { name: "Facial Recognition Check-in", f: true, g: true, e: true },
                    { name: "Visitor Management", f: false, g: true, e: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                      <td className="p-4 pl-6 text-foreground">{row.name}</td>
                      <td className="p-4 text-center">{row.f ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                      <td className="p-4 text-center">{row.g ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                      <td className="p-4 text-center">{row.e ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                    </tr>
                  ))}
                  
                  {/* Category */}
                  <tr>
                    <td colSpan={4} className="bg-muted/10 p-4 font-bold text-muted-foreground text-sm uppercase tracking-wider">Communication</td>
                  </tr>
                  {[
                    { name: "Automated WhatsApp Alerts", f: true, g: true, e: true },
                    { name: "Homework & Assignment Broadcasts", f: false, g: true, e: true },
                    { name: "Custom Bulk Messaging", f: false, g: false, e: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                      <td className="p-4 pl-6 text-foreground">{row.name}</td>
                      <td className="p-4 text-center">{row.f ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                      <td className="p-4 text-center">{row.g ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                      <td className="p-4 text-center">{row.e ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                    </tr>
                  ))}

                  {/* Category */}
                  <tr>
                    <td colSpan={4} className="bg-muted/10 p-4 font-bold text-muted-foreground text-sm uppercase tracking-wider">Operations & Finance</td>
                  </tr>
                  {[
                    { name: "Timetable Generation", f: false, g: true, e: true },
                    { name: "Fee Tracking & Digital Receipts", f: false, g: true, e: true },
                    { name: "Exam & Assessment Engine", f: false, g: false, e: true },
                    { name: "Payroll & HR", f: false, g: false, e: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                      <td className="p-4 pl-6 text-foreground">{row.name}</td>
                      <td className="p-4 text-center">{row.f ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                      <td className="p-4 text-center">{row.g ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                      <td className="p-4 text-center">{row.e ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
