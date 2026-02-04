import { motion } from "framer-motion";
import { Shield, Users, Target, Globe } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2C] via-[#0B1A4A] to-[#081029] text-white">
      {/* Header */}
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-35 pb-24 text-center">
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

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold mb-4 text-center">Our Story</h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            et fugiat architecto eius pariatur nisi ab minus? Eum hic
            praesentium voluptatem officia quasi dolorem eius, dolore nemo
            doloremque beatae, architecto animi, aspernatur fuga. Cum nostrum
            quis et sunt qui recusandae ipsa rerum consequuntur omnis autem quam
            aliquam, temporibus corrupti assumenda.
          </p>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Fraud Detection & Prevention",
              desc: "We analyze millions of transactions in real time to identify suspicious patterns, prevent unauthorized access, and reduce financial losses.",
            },
            {
              title: "Cybersecurity Monitoring",
              desc: "Our platform continuously monitors systems and networks, providing early warnings and automated responses to emerging threats.",
            },
            {
              title: "Risk Intelligence",
              desc: "We transform complex security data into actionable insights, helping organizations make informed decisions.",
            },
            {
              title: "Compliance & Reporting",
              desc: "Our tools simplify regulatory compliance with automated reports, audit trails, and industry-standard controls.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur rounded-xl p-8"
            >
              <h4 className="text-xl font-semibold mb-3 text-orange-500">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            Our Technology
          </h3>

          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
            AxiomVault is powered by advanced machine learning, behavioral
            analytics, and cloud-native infrastructure. Our intelligent engines
            adapt to new attack patterns, learn from historical data, and
            continuously improve accuracy. This ensures our clients stay
            protected against both known and unknown threats.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "AI-Powered Detection",
              "Real-Time Processing",
              "Cloud Scalability",
              "Zero-Trust Architecture",
              "Encrypted Data Pipelines",
              "Automated Incident Response",
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-lg p-4 text-center text-sm text-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leadership & Culture */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-10">
          Leadership & Culture
        </h3>

        <p className="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          Our leadership team brings together experts in cybersecurity, data
          science, finance, and software engineering. At AxiomVault, we foster a
          culture of transparency, collaboration, and continuous learning. We
          believe that strong teams build strong security.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            "Integrity & Accountability",
            "Diversity & Inclusion",
            "Customer-Centric Thinking",
            "Continuous Innovation",
            "Global Collaboration",
            "Ethical Technology",
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 text-center text-sm text-gray-300"
            >
              {value}
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
