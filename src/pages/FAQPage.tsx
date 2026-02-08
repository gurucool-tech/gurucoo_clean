import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO, structuredData } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20have%20a%20question%20about%20your%20product.";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is GuruCool?",
        a: "GuruCool is a smart school management system designed specifically for Indian schools. It combines QR-based attendance tracking, WhatsApp communication, and comprehensive administrative tools to help schools run smoothly from Day 1. Our focus is on practical features that solve real problems Indian schools face daily.",
      },
      {
        q: "Who can use GuruCool?",
        a: "GuruCool is built for K-12 schools of all sizes across India. Whether you're a small school with 200 students or a large institution with 2000+ students, GuruCool can be configured to fit your needs. We also support school groups and trusts with multi-school dashboards.",
      },
      {
        q: "How is GuruCool different from other school ERPs?",
        a: "GuruCool is built specifically for Indian school operations. We focus on QR + Face attendance for safety, WhatsApp-first parent communication (no app needed), and a staged rollout approach so you can start simple and add features as you grow. We don't overwhelm you with features you don't need.",
      },
    ],
  },
  {
    category: "Attendance & Safety",
    questions: [
      {
        q: "How does the QR attendance system work?",
        a: "Each student gets a unique QR-coded ID card. At school gates or classrooms, staff scan the QR code using a tablet or phone. The attendance is recorded instantly with timestamp, and parents receive a WhatsApp alert with their child's photo and entry time.",
      },
      {
        q: "Do you support face recognition attendance?",
        a: "Yes, face recognition is available in all plans including Safety Core. It's optional — schools can start with QR attendance and add face recognition later. The system is contactless and includes anti-spoofing measures for security.",
      },
      {
        q: "What happens if a student forgets their ID card?",
        a: "Admins can manually mark attendance or use backup methods like student ID numbers. The system tracks these exceptions for review. Parents can also be notified if a child arrives without their ID.",
      },
    ],
  },
  {
    category: "Parent Communication",
    questions: [
      {
        q: "Do parents need to download an app?",
        a: "No. This is one of our core differentiators. Parents receive all updates — attendance alerts, fee reminders, exam notifications, school announcements — directly on WhatsApp. No app downloads, no login issues, and near-100% message delivery since parents already use WhatsApp daily.",
      },
      {
        q: "How does WhatsApp messaging work?",
        a: "We integrate with WhatsApp Business API to send automated messages. Attendance alerts are sent instantly when a child enters/exits. Other messages like fee reminders and announcements can be scheduled or triggered by admin actions. All messages are delivered to parents' WhatsApp numbers.",
      },
      {
        q: "Is WhatsApp messaging included in all plans?",
        a: "Yes, WhatsApp attendance alerts are included in all plans. The Academic Suite and Flagship Plan include additional features like result notifications, scheduled announcements, and bulk messaging.",
      },
    ],
  },
  {
    category: "Modules & Features",
    questions: [
      {
        q: "Can we start with only attendance and add modules later?",
        a: "Absolutely. This is exactly how we recommend schools start. Begin with our Safety Core plan which includes attendance, basic dashboards, and core academics. As you get comfortable, you can upgrade to Academic Suite or Flagship Plan to add examination management, payroll, analytics, and more.",
      },
      {
        q: "Does GuruCool include fee management?",
        a: "Basic fee status (paid/unpaid view) is available in all plans. Fee receipts and reminders are part of the Academic Suite. The Flagship Plan includes the full payroll system with salary slips and compliance features.",
      },
      {
        q: "Can we generate report cards with GuruCool?",
        a: "Yes. Basic report cards are included in the Safety Core plan. The Academic Suite and Flagship Plan offer advanced features like exam management, gamified feedback, and comparative analytics.",
      },
    ],
  },
  {
    category: "Technical & Deployment",
    questions: [
      {
        q: "Is GuruCool cloud-based or on-premise?",
        a: "GuruCool is primarily cloud-based for easy access and updates. However, for schools with specific data residency requirements, we also offer on-premise deployment options as part of enterprise engagements.",
      },
      {
        q: "Do you offer on-premise deployment?",
        a: "Yes, on-premise deployment is available for enterprise customers with specific requirements. This includes dedicated infrastructure, custom security configurations, and data residency compliance. Contact us to discuss your needs.",
      },
      {
        q: "Is training included?",
        a: "Yes. All plans include comprehensive training for your admin staff and teachers. We conduct hands-on sessions to ensure everyone is comfortable using the system before going live. Additional training sessions can be scheduled as needed.",
      },
      {
        q: "How do we get started?",
        a: "Contact us on WhatsApp or book a demo. We'll understand your requirements, show you the relevant features, and create a customized proposal. Setup is free, and we support you through the entire implementation process.",
      },
    ],
  },
  {
    category: "Multi-School & Groups",
    questions: [
      {
        q: "Do you support multi-school groups?",
        a: "Yes. Our Multi-School Dashboard (available as an add-on) allows school groups and trusts to manage multiple campuses from a single interface. You get consolidated analytics, role-based access by campus, and standardized operations across all schools.",
      },
      {
        q: "Can each school in a group have different configurations?",
        a: "Yes. Each school can have its own classes, sections, fee structures, and settings while still being part of the group dashboard. Group admins can see consolidated reports while school-level admins manage their individual campuses.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "How do we get pricing?",
        a: "Contact us on WhatsApp or book a demo call. We'll understand your school's size, requirements, and priorities, then create a customized proposal. We believe in transparent, fair pricing based on your actual needs.",
      },
      {
        q: "Is there a setup cost?",
        a: "For a limited time, we're offering free setup for new schools. This includes system configuration, data import, and initial training. Contact us to learn more.",
      },
      {
        q: "Can we upgrade plans later?",
        a: "Yes. You can start with Safety Core and upgrade to Academic Suite or Flagship Plan as your needs grow. Your data and configurations are preserved, and we handle the migration seamlessly.",
      },
    ],
  },
];

export default function FAQPage() {
  // Generate FAQ structured data from all questions
  const allFaqs = faqs.flatMap((category) =>
    category.questions.map((q) => ({ question: q.q, answer: q.a }))
  );

  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="FAQ | GuruCool School Management System"
        description="Find answers to common questions about GuruCool school management system, attendance tracking, WhatsApp communication, and pricing."
        canonical="/faq"
        structuredData={structuredData.faqPage(allFaqs)}
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about GuruCool. Can't find what you're looking for? Contact us on WhatsApp."
      />

      {/* FAQ Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-heading-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6"
                    >
                      <AccordionTrigger className="text-left text-body-md font-medium text-foreground hover:no-underline py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-body-sm text-muted-foreground pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
