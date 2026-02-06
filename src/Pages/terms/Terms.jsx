import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import {Section} from "../../components/PolicyComponents"

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2C] via-[#0B1A4A] to-[#081029] text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8">
        <Nav />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Terms of Use
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Last Updated: February 2026
          </p>

          {/* Sections */}
          <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            <Section title="1. Acceptance of Terms">
              By accessing or using AxiomVault, you agree to be bound by these
              Terms of Use and all applicable laws and regulations.
            </Section>

            <Section title="2. Eligibility">
              You must be at least 18 years old and legally capable of entering
              binding agreements to use our Services.
            </Section>

            <Section title="3. Account Responsibilities">
              You are responsible for maintaining the confidentiality of your
              account credentials and all activities conducted under your
              account.
            </Section>

            <Section title="4. Permitted Use">
              You agree to use the Services only for lawful purposes and in
              accordance with these Terms.
            </Section>

            <Section title="5. Prohibited Activities">
              You must not attempt unauthorized access, distribute malware,
              reverse engineer our systems, or misuse platform resources.
            </Section>

            <Section title="6. Intellectual Property">
              All content, software, and trademarks belong to AxiomVault. No
              rights are transferred to users.
            </Section>

            <Section title="7. User Data">
              You retain ownership of submitted data but grant AxiomVault
              permission to process it for service delivery.
            </Section>

            <Section title="8. Fees and Billing">
              Certain services may require payment. All fees are non-refundable
              unless stated otherwise.
            </Section>

            <Section title="9. Privacy">
              Your use of AxiomVault is governed by our Privacy Policy. We
              implement reasonable security measures to protect data.
            </Section>

            <Section title="10. Third-Party Services">
              We are not responsible for third-party platforms integrated into
              our Services.
            </Section>

            <Section title="11. Service Availability">
              We do not guarantee uninterrupted access and may modify or
              discontinue services at any time.
            </Section>

            <Section title="12. Disclaimer">
              Services are provided "as is" without warranties of any kind.
            </Section>

            <Section title="13. Limitation of Liability">
              AxiomVault shall not be liable for indirect or consequential
              damages. Liability is limited to fees paid in the last 12 months.
            </Section>

            <Section title="14. Indemnification">
              You agree to indemnify AxiomVault from claims arising from misuse
              of the Services.
            </Section>

            <Section title="15. Termination">
              We may suspend or terminate access for violations or security
              concerns.
            </Section>

            <Section title="16. Governing Law">
              These Terms are governed by the laws of the applicable
              jurisdiction.
            </Section>

            <Section title="17. Changes to Terms">
              We may update these Terms at any time. Continued use indicates
              acceptance.
            </Section>

            <Section title="18. Contact Information">
              For inquiries, contact us at legal@axiomvault.com.
            </Section>

            <Section title="19. Service Level and Support">
              AxiomVault provides support and maintenance on a best-effort basis
              unless otherwise stated in a separate Service Level Agreement
              (SLA). We do not guarantee response times or issue resolution.
            </Section>

            <Section title="20. Compliance and Regulatory Obligations">
              Users are responsible for ensuring that their use of the Services
              complies with applicable data protection, financial, and
              cybersecurity regulations.
            </Section>

            <Section title="21. Data Retention and Deletion">
              We may retain user data for legal, operational, or compliance
              purposes. Upon account termination, data may be deleted in
              accordance with our retention policies.
            </Section>

            <Section title="22. Export Controls and Sanctions">
              You agree to comply with all applicable export control laws and
              economic sanctions. You may not use the Services in restricted
              jurisdictions.
            </Section>

            <Section title="23. Assignment and Transfer">
              You may not assign or transfer your rights under these Terms
              without prior written consent. AxiomVault may assign these Terms
              freely.
            </Section>

            <Section title="24. No Partnership or Agency">
              Nothing in these Terms creates any partnership, employment, or
              agency relationship between you and AxiomVault.
            </Section>

            <Section title="25. Survival of Provisions">
              Sections relating to intellectual property, liability,
              indemnification, dispute resolution, and governing law shall
              survive termination.
            </Section>
          </div>
        </motion.div>
      </main>


      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        <Footer />
      </footer>
    </div>
  );
}

/* Reusable Section Component */

