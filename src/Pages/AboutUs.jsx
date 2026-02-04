import { motion } from "framer-motion";
import { Shield, Users, Target, Globe } from "lucide-react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2C] via-[#0B1A4A] to-[#081029] text-white">
      {/* Header */}
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Securing the Digital Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg"
        >
          At AxiomVault, we provide next-generation cybersecurity and fraud
          prevention solutions that help organizations stay ahead of evolving
          digital threats.
        </motion.p>
      </section>

      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-8"
        >
          <Target className="text-orange-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            To empower businesses with intelligent security systems that detect,
            prevent, and respond to threats in real time.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-8"
        >
          <Globe className="text-orange-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To become the global standard for digital security and fraud
            intelligence, protecting millions of users worldwide.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield />,
              title: "Security First",
              desc: "We prioritize protection, privacy, and trust in every solution.",
            },
            {
              icon: <Users />,
              title: "Customer Focus",
              desc: "We build scalable tools designed around real user needs.",
            },
            {
              icon: <Target />,
              title: "Innovation",
              desc: "We continuously improve through research and technology.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur rounded-xl p-6"
            >
              <div className="text-orange-500 mb-3">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 rounded-2xl p-8 text-center">
          {[
            {
              label: "Clients",
              value: "500+",
            },
            {
              label: "Threats Blocked",
              value: "50M+",
            },
            {
              label: "Countries",
              value: "40+",
            },
            {
              label: "Uptime",
              value: "99.9%",
            },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32 text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Partner With AxiomVault</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Join thousands of organizations protecting their digital assets with
            our intelligent security platform.
          </p>

          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Contact Our Team
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        <Footer />
      </footer>
    </div>
  );
}
