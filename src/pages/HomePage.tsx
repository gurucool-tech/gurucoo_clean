import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Activity, Users, ShieldCheck, Link2, TrendingUp, Layers, CheckCircle, Fingerprint, CreditCard, Bell, FileText, ArrowRight, GraduationCap, Globe } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { AbstractDashboard } from "@/components/ui/AbstractDashboard";
import logo from "@/assets/logo-new-blue.png";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20the%20platform.";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background relative">
      <SEO
        title="The Operating Layer for Modern Educational Institutions"
        description="Connected operations for attendance, academics, communication, exams, fees, and reporting."
        canonicalPath="/"
      />

      {/* Clean background without blur */}
      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-ice-panel">
        {/* Fading structural grid */}
        <div className="absolute inset-0 bg-grid-hero pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Next-Gen Education Platform
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-display-sm sm:text-display-md lg:text-display-xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              The <span className="text-primary">Operating Layer</span> for<br/>Modern Institutions.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-body-lg sm:text-heading-md text-muted-foreground mb-10 max-w-2xl mx-auto">
              Connected operations for attendance, academics, communication, exams, fees, and reporting. No silos, just flow.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="gap-2 px-8 rounded-full shadow-[var(--shadow-glow)] w-full sm:w-auto h-14 text-base">
                <Link to="/book-demo">
                  <Calendar className="w-5 h-5" />
                  Book a Demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 px-8 rounded-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 w-full sm:w-auto h-14 text-base transition-all">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Contact on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* Section 2: The Problem (Bento Grid) */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-heading-xl md:text-display-sm font-bold text-foreground mb-4">
              Fragmented systems slow you down.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Too much admin steals time from teaching. Records get scattered. Operations run in parallel instead of in one flow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="card-premium p-8 md:col-span-2 group"
            >
              <Activity className="w-10 h-10 text-destructive mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-heading-lg font-bold text-foreground mb-3">Scattered Records</h3>
              <p className="text-body-md text-muted-foreground max-w-md">Data trapped in silos makes reporting a nightmare. When academic, financial, and attendance data don't talk, your leadership flies blind.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="card-premium p-8 group"
            >
              <Users className="w-10 h-10 text-guru-sky mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-heading-lg font-bold text-foreground mb-3">Reactive Comms</h3>
              <p className="text-body-md text-muted-foreground">Parents only find out about issues when it's too late. Apps get ignored.</p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="card-premium p-8 md:col-span-3 group"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <TrendingUp className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-heading-lg font-bold text-foreground mb-3">Manual Admin Drag</h3>
                  <p className="text-body-md text-muted-foreground max-w-2xl">Staff waste hours on tasks software should do instantly. Generating report cards, collecting fees, and tracking leaves shouldn't require three different spreadsheets.</p>
                </div>
                {/* Elegant automation visual */}
                <div className="w-full md:w-1/3 h-32 rounded-xl border border-border/50 bg-background flex flex-col justify-center gap-3 p-5 shadow-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                  
                  {[
                    { width: "w-3/4", delay: 0 },
                    { width: "w-1/2", delay: 1 },
                    { width: "w-5/6", delay: 2 }
                  ].map((line, i) => (
                    <div key={i} className="flex items-center gap-3 z-10">
                      <motion.div 
                        className="w-4 h-4 rounded-full border-2 border-border/50 flex items-center justify-center bg-card flex-shrink-0"
                        initial={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--card))" }}
                        animate={{ borderColor: "hsl(var(--primary))", backgroundColor: "hsl(var(--primary))" }}
                        transition={{ duration: 0.5, delay: line.delay, repeat: Infinity, repeatDelay: 5 }}
                      >
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </motion.div>
                      <div className={`h-2 ${line.width} bg-border/40 rounded-full overflow-hidden relative`}>
                        <motion.div 
                          className="absolute inset-0 bg-foreground/20"
                          initial={{ x: "-100%" }}
                          animate={{ x: "0%" }}
                          transition={{ duration: 0.5, delay: line.delay, repeat: Infinity, repeatDelay: 5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Architecture Bento Grid */}
      <section className="section-padding relative overflow-hidden bg-ice-panel border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-heading-xl md:text-display-sm font-bold text-foreground mb-4">
              One connected stack.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Six modular layers built to communicate perfectly with each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* Foundation */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="feature-card lg:col-span-2 flex flex-col justify-between min-h-[280px] group bg-white hover:bg-muted/10">
              <div className="flex-1">
                <h3 className="text-heading-md font-bold text-foreground mb-2 flex items-center gap-2"><Fingerprint className="w-5 h-5 text-primary" /> 1. Foundation</h3>
                <p className="text-muted-foreground text-sm max-w-sm mb-6">Identity, profiles, roles, and structural setup for the institution. The secure base layer.</p>
              </div>
              <div className="mt-auto bg-muted/20 border border-border/50 rounded-xl p-3 flex items-center gap-3 w-max max-w-full overflow-hidden relative">
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-muted/20 to-transparent pointer-events-none" />
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">JS</div>
                <div className="flex-1">
                   <div className="text-sm font-bold text-foreground leading-tight">J. Smith</div>
                   <div className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Super Admin</div>
                </div>

              </div>
            </motion.div>

            {/* Operations */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="feature-card lg:col-span-2 flex flex-col justify-between min-h-[280px] group bg-white hover:bg-muted/10">
              <div className="flex-1">
                <h3 className="text-heading-md font-bold text-foreground mb-2 flex items-center gap-2"><Layers className="w-5 h-5 text-guru-sky" /> 2. Operations</h3>
                <p className="text-muted-foreground text-sm max-w-sm mb-6">Timetable generation, attendance tracking, and daily logistics running on autopilot.</p>
              </div>
              <div className="mt-auto flex flex-col gap-1.5 w-full bg-card rounded-xl border border-border/50 p-2 shadow-sm">
                <div className="flex gap-1.5">
                   <div className="flex-1 bg-muted rounded p-1.5 text-[9px] font-semibold text-muted-foreground text-center">Mon</div>
                   <div className="flex-[2] bg-blue-50 border border-blue-100 rounded p-1.5 text-[9px] font-bold text-blue-800">Physics (10A)</div>
                   <div className="flex-[2] bg-card border border-border/50 rounded p-1.5 text-[9px] font-bold text-foreground">Math (10B)</div>
                </div>
                <div className="flex gap-1.5">
                   <div className="flex-1 bg-muted rounded p-1.5 text-[9px] font-semibold text-muted-foreground text-center">Tue</div>
                   <div className="flex-[2] bg-card border border-border/50 rounded p-1.5 text-[9px] font-bold text-foreground">Chemistry</div>
                   <div className="flex-[2] bg-blue-50 border border-blue-100 rounded p-1.5 text-[9px] font-bold text-blue-800">Physics (11A)</div>
                </div>
              </div>
            </motion.div>

            {/* Finance */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="feature-card flex flex-col justify-between min-h-[240px] group bg-white hover:bg-muted/10">
              <div className="flex-1">
                <h3 className="text-heading-md font-bold text-foreground mb-2 flex items-center gap-2"><CreditCard className="w-5 h-5 text-foreground" /> 3. Finance</h3>
                <p className="text-muted-foreground text-sm mb-6">Fee structures, receipts, dues, and payroll.</p>
              </div>
              <div className="mt-auto bg-card rounded-xl border border-border/50 p-3 shadow-sm flex items-end justify-between">
                 <div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase">Collections</div>
                    <div className="text-lg font-black text-foreground">₹84.5k</div>
                 </div>
                 <div className="text-[10px] font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-sm">+12%</div>
              </div>
            </motion.div>

            {/* Comms */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="feature-card flex flex-col justify-between min-h-[240px] group bg-white hover:bg-muted/10">
              <div className="flex-1">
                <h3 className="text-heading-md font-bold text-foreground mb-2 flex items-center gap-2"><Bell className="w-5 h-5 text-[#25D366]" /> 4. Comms</h3>
                <p className="text-muted-foreground text-sm mb-6">WhatsApp integration and instant parent loop.</p>
              </div>
              <div className="mt-auto bg-card rounded-xl border border-border/50 p-3 shadow-sm flex items-start gap-2">
                 <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                 </div>
                 <div className="bg-[#25D366]/10 p-2 rounded-md rounded-tl-none border border-[#25D366]/20">
                    <div className="text-[10px] text-[#25D366] font-medium leading-tight">Student marked present at 08:15 AM.</div>
                 </div>
              </div>
            </motion.div>

            {/* Assessments */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="feature-card lg:col-span-2 flex flex-col justify-between min-h-[240px] group bg-white hover:bg-muted/10">
              <div className="flex-1">
                <h3 className="text-heading-md font-bold text-foreground mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> 5. Assessments</h3>
                <p className="text-muted-foreground text-sm max-w-sm mb-6">Exam seating, invigilator allotment, marks entry, and automated report cards.</p>
              </div>
              <div className="mt-auto bg-card rounded-xl border border-border/50 p-3 shadow-sm w-full max-w-xs flex flex-col gap-2">
                 <div className="flex justify-between items-center text-xs font-bold border-b border-border/50 pb-1.5">
                    <span className="text-foreground">Unit Test 1</span>
                    <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Grade A+</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] text-muted-foreground font-medium">
                    <span>Physics (17/20)</span>
                    <div className="w-1/2 h-1.5 bg-muted rounded-full overflow-hidden"><div className="h-full w-[85%] bg-primary" /></div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 6: Rollout Model */}
      <section className="section-padding bg-background relative border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative flex items-center justify-center h-[400px] perspective-1000"
            >
              {/* 3D Isometric Stack Base */}
              <div className="relative w-64 h-64 [transform-style:preserve-3d] [transform:rotateX(60deg)_rotateZ(-45deg)]">
                {[0, 1, 2].map((layer) => (
                  <motion.div
                    key={layer}
                    className="absolute inset-0 rounded-2xl border-2 border-primary/20 bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center"
                    initial={{ translateZ: 0, opacity: 0 }}
                    whileInView={{ translateZ: layer * 40, opacity: 1 }}
                    transition={{ duration: 1, delay: layer * 0.2 }}
                  />
                ))}
                
                {/* The 3D Shield Popping Out */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
                  initial={{ translateZ: 0, opacity: 0 }}
                  whileInView={{ translateZ: 160, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, type: "spring", bounce: 0.4 }}
                >
                   {/* We counter the parent's rotation so the shield stands straight up, then we rotate it endlessly on Y */}
                   <div className="relative w-24 h-24 [transform-style:preserve-3d] [transform:rotateZ(45deg)_rotateX(-60deg)]">
                     <motion.div 
                       className="absolute inset-0 [transform-style:preserve-3d]"
                       animate={{ rotateY: 360 }}
                       transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     >
                       {/* 3D Thickness by stacking 10 icons closely */}
                       {[...Array(10)].map((_, i) => (
                         <ShieldCheck 
                           key={i} 
                           className={`absolute inset-0 w-24 h-24 ${i === 0 || i === 9 ? 'text-primary' : 'text-primary/80'}`}
                           style={{ transform: `translateZ(${i * 2}px)` }}
                         />
                       ))}
                     </motion.div>
                   </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <h2 className="text-heading-xl font-bold text-foreground mb-6">Staged Rollout. <br/>Zero Fatigue.</h2>
              <p className="text-body-lg text-muted-foreground mb-10">
                Don't overwhelm your staff. GuruCool is engineered to be adopted in intelligent layers.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Start with foundations", desc: "Identity and basic attendance tracking." },
                  { title: "Add daily workflows", desc: "Timetables and instant WhatsApp alerts." },
                  { title: "Expand into finance", desc: "Fee tracking, dues, and digital receipts." },
                  { title: "Launch assessments", desc: "Exams, grading, and automated reports." }
                ].map((step, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors border border-transparent hover:border-border/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-1 border border-primary/30">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-ice-panel border-t border-border/40">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        
        <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-display-sm md:text-display-md font-bold mb-6 text-foreground">
              Ready to upgrade your infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Book a structural walkthrough of the platform and see how GuruCool connects your institution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base shadow-[var(--shadow-glow)]">
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base glass hover:bg-white/10">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Contact on WhatsApp</a>
              </Button>
            </div>
            
            <div className="mt-16 pt-10 border-t border-border/40 flex flex-wrap items-center justify-center gap-12 text-muted-foreground text-sm font-bold uppercase tracking-widest">
               <span className="flex items-center gap-2 transition-colors hover:text-foreground"><ShieldCheck className="w-4 h-4 text-primary" /> Bank-grade Security</span>
               <span className="flex items-center gap-2 transition-colors hover:text-foreground"><Layers className="w-4 h-4 text-primary" /> Modular Architecture</span>
               <span className="flex items-center gap-2 transition-colors hover:text-foreground"><Globe className="w-4 h-4 text-primary" /> Cloud Native</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
