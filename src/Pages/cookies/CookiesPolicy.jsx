import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import {Section2} from "../../components/PolicyComponents"

export default function CookiePolicy() {
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
            Cookie Policy
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Last Updated: February 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            <Section2 title="1. Introduction">
              This Cookie Policy explains how AxiomVault uses cookies and
              similar technologies to recognize users, enhance functionality,
              and improve security across our platform.
            </Section2>

            <Section2 title="2. What Are Cookies?">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember your preferences and
              activities.
            </Section2>

            <Section2 title="3. Types of Cookies We Use">
              We use essential cookies for core functionality, performance
              cookies for analytics, functional cookies for personalization, and
              advertising cookies where permitted by law.
            </Section2>

            <Section2 title="4. Essential Cookies">
              These cookies are necessary for website operation, security,
              authentication, and fraud prevention. They cannot be disabled.
            </Section2>

            <Section2 title="5. Performance and Analytics Cookies">
              These cookies collect anonymous usage data to help us understand
              how visitors interact with our Services and improve performance.
            </Section2>

            <Section2 title="6. Functional Cookies">
              Functional cookies remember user preferences, language settings,
              and region selections to enhance user experience.
            </Section2>

            <Section2 title="7. Advertising and Marketing Cookies">
              Where applicable, marketing cookies may be used to deliver
              relevant advertisements and measure campaign effectiveness.
            </Section2>

            <Section2 title="8. Third-Party Cookies">
              Some cookies are placed by third-party service providers such as
              analytics platforms and payment processors. We do not control
              these cookies.
            </Section2>

            <Section2 title="9. How We Use Cookie Data">
              Cookie data is used to maintain platform security, analyze
              performance, personalize content, and comply with legal
              obligations.
            </Section2>

            <Section2 title="10. Managing Cookies">
              You can control and delete cookies through your browser settings.
              Disabling certain cookies may affect website functionality.
            </Section2>

            <Section2 title="11. Consent Management">
              Where required by law, we obtain your consent before placing
              non-essential cookies. You may withdraw consent at any time.
            </Section2>

            <Section2 title="12. Data Protection and Privacy">
              Information collected through cookies is handled in accordance
              with our Privacy Policy and applicable data protection laws.
            </Section2>

            <Section2 title="13. International Data Transfers">
              Cookie-related data may be processed in countries outside your
              jurisdiction with appropriate safeguards.
            </Section2>

            <Section2 title="14. Retention Period">
              Cookies may be session-based or persistent. Persistent cookies
              remain until deleted or expired according to policy.
            </Section2>

            <Section2 title="15. Changes to This Policy">
              We may update this Cookie Policy periodically. Continued use of
              our Services constitutes acceptance of any changes.
            </Section2>

            <Section2 title="16. Contact Information">
              For cookie-related questions, contact us at
              privacy@axiomvault.com.
            </Section2>
               
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

