import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Calendar, CreditCard, FileText, Smartphone, ScanFace, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProductPage() {
  return (
    <>
      <SEO 
        title="Product Overview | The Operating Layer" 
        description="Explore the connected modules of GuruCool: Attendance, Operations, Finance, Communications, and Assessments."
        canonicalPath="/product"
      />
      
      <div className="relative overflow-hidden bg-background">
        {/* Removed blurry backgrounds for clean crisp product framing */}
        
        <PageHeader 
          eyebrow="Platform Architecture"
          title="One Operational Structure" 
          description="GuruCool is not just a collection of features. It is a connected operating layer designed to handle the complexity of your entire institution."
          alignment="center"
        />
        
        <SectionContainer>
          <div className="max-w-6xl mx-auto py-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-display-sm font-bold mb-6 text-foreground">How the system flows</h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                Data moves seamlessly through the system, eliminating double-entry and ensuring total visibility across your institution.
              </p>
            </motion.div>
            
            <div className="space-y-24">
              
              {/* Flow 1: Identity */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="card-premium aspect-video flex items-center justify-center p-6 md:p-8 bg-muted/20 border-border/80 relative">
                  {/* High Fidelity UI Representation: Attendance List */}
                  <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden flex flex-col">
                    <div className="bg-muted/30 p-3 border-b border-border/50 flex justify-between items-center">
                      <span className="text-sm font-bold text-foreground">Live Check-ins</span>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Campus A</span>
                    </div>
                    <div className="flex flex-col">
                      {[
                        { name: "Rahul Sharma", grade: "11th Science", time: "08:15 AM", status: "Present", color: "text-green-600", bg: "bg-green-50" },
                        { name: "Priya Desai", grade: "11th Commerce", time: "08:18 AM", status: "Present", color: "text-green-600", bg: "bg-green-50" },
                        { name: "Arjun Verma", grade: "10th A", time: "--:--", status: "Absent", color: "text-red-600", bg: "bg-red-50" },
                      ].map((student, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border-b border-border/40 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground leading-tight">{student.name}</div>
                              <div className="text-xs text-muted-foreground">{student.grade}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xs font-bold ${student.color} ${student.bg} px-2 py-0.5 rounded-sm inline-block mb-1`}>{student.status}</div>
                            <div className="text-xs text-muted-foreground block">{student.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* WhatsApp Popup Overlay */}
                  <motion.div 
                    className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-2xl border border-border/50 p-3 flex gap-3 z-20"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 mt-1">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground mb-0.5">GuruCool Alerts</div>
                      <div className="text-xs text-muted-foreground leading-snug">Rahul Sharma checked in at Campus A at 08:15 AM.</div>
                    </div>
                  </motion.div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 border border-primary/20">
                    <ScanFace className="w-6 h-6" />
                  </div>
                  <h3 className="text-heading-xl font-bold mb-4 text-foreground">1. Identity & Attendance</h3>
                  <p className="text-body-lg text-muted-foreground">It starts at the gate. Hardware integration instantly records presence, triggering a WhatsApp notification to parents and updating the daily operations log.</p>
                </div>
              </motion.div>

              {/* Flow 2: Operations */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-secondary-foreground mb-6 border border-border">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-heading-xl font-bold mb-4 text-foreground">2. Operations & Academics</h3>
                  <p className="text-body-lg text-muted-foreground">Timetable generation automatically assigns staff. Proxy rules adjust for leaves. Daily operations run without friction using intelligent structural planning.</p>
                </div>
                <div className="order-1 md:order-2 card-premium aspect-video flex items-center justify-center p-6 bg-muted/20 border-border/80">
                  {/* High Fidelity Timetable UI */}
                  <div className="w-full h-full max-w-md bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden flex flex-col">
                    <div className="bg-primary text-primary-foreground p-3 text-sm font-bold flex justify-between">
                      <span>Weekly Master Timetable</span>
                      <span className="font-medium opacity-80">Class 11-A</span>
                    </div>
                    <div className="grid grid-cols-4 bg-muted/50 text-xs font-bold text-muted-foreground border-b border-border/50">
                      <div className="p-2 border-r border-border/50">Time</div>
                      <div className="p-2 border-r border-border/50">Monday</div>
                      <div className="p-2 border-r border-border/50">Tuesday</div>
                      <div className="p-2">Wednesday</div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      {[
                        { time: "08:00 AM", m: "Physics (DR)", t: "Math (SS)", w: "Chemistry (AP)" },
                        { time: "09:00 AM", m: "Math (SS)", t: "Physics (DR)", w: "Biology (KV)" },
                        { time: "10:00 AM", m: "English (MJ)", t: "Chemistry (AP)", w: "Math (SS)" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-4 text-xs border-b border-border/40 last:border-0 flex-1 items-center">
                          <div className="p-2 border-r border-border/40 font-medium text-muted-foreground">{row.time}</div>
                          <div className="p-2 border-r border-border/40 text-foreground font-semibold bg-blue-50/50">{row.m}</div>
                          <div className="p-2 border-r border-border/40 text-foreground font-semibold">{row.t}</div>
                          <div className="p-2 text-foreground font-semibold bg-blue-50/50">{row.w}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Flow 3: Finance */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="card-premium aspect-video p-6 bg-muted/20 flex items-center justify-center relative overflow-hidden border-border/80">
                  {/* High Fidelity Ledger UI */}
                  <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-border/50 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-foreground">Fee Ledger: Arjun Verma</div>
                        <div className="text-xs text-muted-foreground">ID: STU-2026-0042</div>
                      </div>
                      <Button size="sm" className="h-8 text-xs px-3">Generate Receipt</Button>
                    </div>
                    <div className="p-0">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 text-xs text-muted-foreground">
                          <tr>
                            <th className="p-3 font-medium border-b border-border/50">Particulars</th>
                            <th className="p-3 font-medium border-b border-border/50 text-right">Amount</th>
                            <th className="p-3 font-medium border-b border-border/50 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border-b border-border/40 text-foreground font-medium">Term 1 Tuition Fee</td>
                            <td className="p-3 border-b border-border/40 text-right font-medium">₹ 45,000</td>
                            <td className="p-3 border-b border-border/40 text-center"><span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-sm">PAID</span></td>
                          </tr>
                          <tr>
                            <td className="p-3 border-b border-border/40 text-foreground font-medium">Laboratory Fee</td>
                            <td className="p-3 border-b border-border/40 text-right font-medium">₹ 5,000</td>
                            <td className="p-3 border-b border-border/40 text-center"><span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded-sm">DUE: OCT 15</span></td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="p-3 font-bold text-foreground">Total Balance</td>
                            <td className="p-3 text-right font-bold text-primary">₹ 5,000</td>
                            <td className="p-3"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/5 text-foreground mb-6 border border-border">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-heading-xl font-bold mb-4 text-foreground">3. Finance & Admin</h3>
                  <p className="text-body-lg text-muted-foreground">Dues are tracked accurately. Receipts are generated instantly. The finance team has a clear, actionable view of the institution's health.</p>
                </div>
              </motion.div>

              {/* Flow 4: Assessments */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 border border-primary/20">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-heading-xl font-bold mb-4 text-foreground">4. Assessments</h3>
                  <p className="text-body-lg text-muted-foreground">Exam seating, invigilator allotment, marks entry, and final report card generation happen in one unified, auditable workflow.</p>
                </div>
                <div className="order-1 md:order-2 card-premium aspect-video flex items-center justify-center p-6 bg-muted/20 border-border/80">
                  {/* High Fidelity Assessment UI */}
                  <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-border/50 flex justify-between items-end">
                      <div>
                        <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Physics Unit Test 1</div>
                        <div className="text-sm font-bold text-foreground">Student: Neha Gupta</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-primary">17<span className="text-lg text-muted-foreground font-medium">/20</span></div>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                       <div className="flex justify-between items-center text-sm border-b border-border/40 pb-2">
                         <span className="text-foreground font-medium">Q1: Thermodynamics</span>
                         <span className="font-bold text-foreground">8/10</span>
                       </div>
                       <div className="flex justify-between items-center text-sm border-b border-border/40 pb-2">
                         <span className="text-foreground font-medium">Q2: Kinematics</span>
                         <span className="font-bold text-foreground">9/10</span>
                       </div>
                       <div className="pt-2 flex justify-between items-center">
                         <span className="text-sm text-muted-foreground font-medium">Final Grade</span>
                         <span className="text-lg font-black text-primary bg-primary/10 px-3 py-1 rounded-md">A</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-24 text-center border-t border-border/50 pt-16">
              <h2 className="text-display-sm font-bold mb-8 text-foreground">Ready to see the flow in action?</h2>
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base shadow-[var(--shadow-glow)]">
                <Link to="/book-demo">
                  Book a structural walkthrough <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
