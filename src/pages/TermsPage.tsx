import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

export default function TermsPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Terms of Service | GuruCool"
        description="Terms of Service for GuruCool school management platform."
        canonical="/terms"
      />
      <PageHeader
        title="Terms of Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground mb-8">Last updated: 31st March 2025</p>

            <p className="mb-8">
              Welcome to GuruCool. By accessing or using our website, platform, or services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Description of Service</h2>
            <p>
              GuruCool is a school management software platform that provides tools for attendance automation, communication, academic management, and administrative operations for educational institutions.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Eligibility</h2>
            <p className="mb-4">Our services are intended for use by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Schools and educational institutions</li>
              <li>Authorized administrators, teachers, students, and parents</li>
            </ul>
            <p>Users must be authorized by their respective institution to access the platform.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. User Responsibilities</h2>
            <p className="mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and authorized information</li>
              <li>Use the platform only for lawful educational purposes</li>
              <li>Not misuse, modify, or attempt to disrupt the system</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Attendance & Communication</h2>
            <p>
              GuruCool may capture attendance data, photographs, and timestamps as part of its attendance system. WhatsApp or other notifications may be sent to registered contact numbers provided by the institution.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Data Usage</h2>
            <p>
              All data collected is processed as per our Privacy Policy. GuruCool does not sell personal data to third parties.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Intellectual Property</h2>
            <p>
              All software, designs, logos, and content are the property of GuruCool. Unauthorized copying or redistribution is prohibited.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Service Availability</h2>
            <p>
              We strive to maintain high availability but do not guarantee uninterrupted service. Maintenance, updates, or technical issues may cause temporary downtime.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. Termination</h2>
            <p>
              GuruCool reserves the right to suspend or terminate access in cases of misuse, violation of terms, or legal requirements.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. Limitation of Liability</h2>
            <p>
              GuruCool is not liable for indirect, incidental, or consequential damages arising from the use of the platform.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">10. Governing Law</h2>
            <p>These terms are governed by the laws of India.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Contact</h2>
            <p className="mb-2">For questions regarding these terms, contact us at:</p>
            <p>
              Email:{" "}
              <a href="mailto:edu.gurucool@gmail.com" className="text-primary hover:underline">
                edu.gurucool@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
