"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaMobileAlt,
  FaRocket,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Front-End Development",
    description:
      "Designing modern, fast, and responsive user interfaces with clean code and smooth animations.",
    icon: <FaReact size={32} />,
    features: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
    gradient: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Back-End Development",
    description:
      "Building secure and scalable server-side logic with APIs that power modern applications.",
    icon: <FaDatabase size={32} />,
    features: ["APIs", "Authentication", "Databases", "Clean Architecture"],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile apps with smooth performance and native-like experience.",
    icon: <FaMobileAlt size={32} />,
    features: ["Cross-Platform", "Modern UI", "Fast Performance", "App Ready"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Database Design",
    description:
      "Structuring and organizing data efficiently to ensure speed, reliability, and scalability.",
    icon: <FaDatabase size={32} />,
    features: ["Data Modeling", "Optimization", "Scalable Design", "Security"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Preparing applications for production with optimized builds and stable deployments.",
    icon: <FaCloud size={32} />,
    features: ["Production Ready", "Optimized Builds", "Secure Setup", "Monitoring"],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving loading speed, animations, and overall user experience for best results.",
    icon: <FaRocket size={32} />,
    features: ["Fast Loading", "SEO Basics", "Code Splitting", "Best Practices"],
    gradient: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-dark px-6 py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-main/20 text-main text-sm mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-light">My </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            I provide a wide range of digital solutions focused on quality,
            performance, and modern design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative glass-card rounded-2xl p-8 h-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                >
                  <span className={service.iconColor}>{service.icon}</span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-light mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-6">
            Interested in working together in the future?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-premium text-dark font-semibold">
            Get In Touch
            <FaRocket />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
