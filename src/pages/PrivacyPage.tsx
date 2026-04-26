import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Privacy Policy | GuruCool"
        description="Privacy Policy for GuruCool school management platform."
        canonical="/privacy"
      />
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground mb-8">Last updated: 31st March 2025</p>

            <p className="mb-8">
              GuruCool respects your privacy and is committed to protecting personal information collected through our platform.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Names, IDs, class details</li>
              <li>Contact information (phone numbers for communication)</li>
              <li>Attendance records</li>
              <li>Photographs captured during attendance</li>
              <li>Academic and administrative data provided by schools</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Information</h2>
            <p className="mb-4">Information is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Record and manage attendance</li>
              <li>Send notifications via WhatsApp or in-app messages</li>
              <li>Generate academic and administrative reports</li>
              <li>Improve platform functionality</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Photographs & Face Data</h2>
            <p>
              Photographs captured during attendance are used solely for verification and communication purposes. GuruCool does not sell or publicly share biometric or photographic data.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. WhatsApp Communication</h2>
            <p>
              By registering with GuruCool, users consent to receive automated messages related to attendance, academic updates, and administrative notices via WhatsApp.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect data against unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Data Sharing</h2>
            <p className="mb-4">Data is shared only:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>With the respective school administration</li>
              <li>With authorized service providers required for system functionality</li>
            </ul>
            <p>We do not sell personal data to third parties.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Data Retention</h2>
            <p>
              Data is retained only as long as required for operational and legal purposes or as instructed by the institution.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. Children's Privacy</h2>
            <p>
              GuruCool processes student data strictly under authorization from educational institutions. Parents or guardians may contact the school for access or corrections.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. User Rights</h2>
            <p>
              Users may request access, correction, or deletion of data through their institution or by contacting GuruCool.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">10. Policy Updates</h2>
            <p>
              This policy may be updated periodically. Continued use of the platform implies acceptance of changes.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Contact</h2>
            <p className="mb-2">For privacy-related concerns, contact:</p>
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
