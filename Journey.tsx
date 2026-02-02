"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaRocket, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const journeyData = [
  {
    year: "2025",
    titleKey: "journey.2025.title",
    descKey: "journey.2025.desc",
    icon: <FaBriefcase />,
    type: "work",
    highlights: ["Rails Backend", "React Frontend", "Team Collaboration"],
  },
  {
    year: "2024",
    titleKey: "journey.2024.title",
    descKey: "journey.2024.desc",
    icon: <FaCode />,
    type: "milestone",
    highlights: ["React", "Ruby on Rails", "MySQL"],
  },
  {
    year: "2023",
    titleKey: "journey.2023.title",
    descKey: "journey.2023.desc",
    icon: <FaRocket />,
    type: "start",
    highlights: ["HTML/CSS", "JavaScript", "Responsive Design"],
  },
];

const Journey: React.FC = () => {
  const { t } = useTheme();
  return (
    <section
      id="journey"
      className="relative min-h-screen flex flex-col justify-center items-center bg-dark px-6 py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      <motion.div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-main/10 rounded-full blur-[150px]"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass border border-main/20 text-main text-sm font-medium mb-4"
          >
            {t("journey.badge")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-light">{t("journey.title")} </span>
            <span className="gradient-text">{t("journey.journey")}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("journey.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-main via-accent to-main/20 -translate-x-1/2 hidden md:block" />
          
          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-main via-accent to-main/20 md:hidden" />

          {/* Items */}
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-dark border-2 border-main flex items-center justify-center text-main shadow-glow">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-2xl p-6 group hover:border-main/40 transition-all"
                  >
                    {/* Year Badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-main/20 text-main text-xs font-semibold mb-3">
                      {item.year}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-light mb-2 group-hover:text-main transition-colors">
                      {t(item.titleKey)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {t(item.descKey)}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs font-medium bg-white/5 text-muted rounded-lg border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>

          {/* End Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-8"
          >
            <div className="w-4 h-4 rounded-full bg-main animate-pulse" />
          </motion.div>
        </div>

        {/* Continue Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-muted mt-20 italic"
        >
          {t("journey.continues")}
        </motion.p>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Journey;
