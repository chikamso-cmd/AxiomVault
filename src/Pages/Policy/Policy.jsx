import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import {Section3} from "../../components/PolicyComponents"


export default function PrivacyPolicy() {
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
            Privacy Policy
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Last Updated: February 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            <Section3 title="1. Introduction">
              This Privacy Policy explains how AxiomVault collects, uses,
              discloses, and protects your personal information when you use our
              Services.
            </Section3>

            <Section3 title="2. Information We Collect">
              We may collect personal information such as name, email address,
              billing details, IP address, device information, and usage data.
            </Section3>

            <Section3 title="3. How We Use Your Information">
              We use collected information to provide, maintain, secure, and
              improve our Services, process payments, and communicate with
              users.
            </Section3>

            <Section3 title="4. Legal Basis for Processing">
              We process personal data based on consent, contractual necessity,
              legal obligations, and legitimate business interests.
            </Section3>

            <Section3 title="5. Cookies and Tracking Technologies">
              We use cookies, analytics tools, and similar technologies to
              enhance user experience and analyze platform performance.
            </Section3>

            <Section3 title="6. Data Sharing and Disclosure">
              We may share information with service providers, partners,
              regulators, and law enforcement where legally required.
            </Section3>

            <Section3 title="7. Data Retention">
              We retain personal data only as long as necessary for business,
              legal, and compliance purposes.
            </Section3>

            <Section3 title="8. Data Security">
              We implement administrative, technical, and physical safeguards to
              protect personal data against unauthorized access.
            </Section3>

            <Section3 title="9. International Data Transfers">
              Your data may be transferred and processed in countries outside
              your jurisdiction with appropriate safeguards.
            </Section3>

            <Section3 title="10. Your Rights">
              You may have rights to access, correct, delete, restrict, or
              object to processing of your personal data.
            </Section3>

            <Section3 title="11. Children’s Privacy">
              Our Services are not intended for individuals under 18 years of
              age. We do not knowingly collect their data.
            </Section3>

            <Section3 title="12. Automated Decision-Making">
              We may use automated systems and AI-driven tools for fraud
              detection and risk assessment, subject to applicable laws.
            </Section3>

            <Section3 title="13. Data Breach Notification">
              In the event of a data breach, we will notify affected users and
              authorities in accordance with applicable regulations.
            </Section3>

            <Section3 title="14. Third-Party Links">
              Our platform may contain links to external websites. We are not
              responsible for their privacy practices.
            </Section3>

            <Section3 title="15. Marketing Communications">
              We may send promotional messages. You may opt out at any time.
            </Section3>

            <Section3 title="16. Do Not Track Signals">
              Our Services do not currently respond to browser Do Not Track
              signals.
            </Section3>

            <Section3 title="17. Changes to This Policy">
              We may update this Privacy Policy periodically. Continued use
              constitutes acceptance of changes.
            </Section3>

            <Section3 title="18. Contact Information">
              For privacy-related inquiries, contact us at
              privacy@axiomvault.com.
            </Section3>
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
