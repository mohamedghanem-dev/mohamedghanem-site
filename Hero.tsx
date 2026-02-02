"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaArrowRight } from "react-icons/fa"; // شيلنا FaDownload
import { useTheme } from "../context/ThemeContext";

const Hero: React.FC = () => {
  const { t } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark px-6 pt-20 pb-8 md:pb-24"
    >
      {/* === Premium Mesh Background === */}
      <div className="absolute inset-0 mesh-bg" />

      {/* === Animated Gradient Orbs === */}
      <motion.div
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-main/20 rounded-full blur-[120px]"
        animate={{ y: [0, 50, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px]"
        animate={{ y: [0, -60, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-main/10 rounded-full blur-[200px]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* === Noise Overlay === */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* === Grid Pattern === */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* === Main Content === */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
        {/* === Profile Image === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-dashed border-main/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-main via-accent to-main opacity-50 blur-2xl animate-pulse" />

          <div className="relative p-1 rounded-full bg-gradient-to-r from-main via-accent to-main">
            <div className="p-1 rounded-full bg-dark">
              <Image
                src="/profile.png"
                alt="Mohamed Ghanem"
                width={280}
                height={280}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full glass border border-main/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-light">
              {t("hero.available")}
            </span>
          </motion.div>
        </motion.div>

        {/* === Text === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-main/20 mb-6">
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium text-muted">
              {t("hero.welcome")}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="text-light">{t("hero.iam")} </span>
            <span className="gradient-text">Mohamed</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-[2px] w-8 bg-gradient-to-r from-main to-accent" />
            <h2 className="text-xl md:text-2xl text-muted font-medium">
              {t("hero.role")}{" "}
              <span className="text-main font-semibold">Web Developer</span>
            </h2>
          </div>

          <p className="text-muted leading-relaxed mb-8 text-lg max-w-xl mx-auto lg:mx-0">
            {t("hero.description")}{" "}
            <span className="text-main">React</span>,{" "}
            <span className="text-main">Next.js</span> {t("hero.and")}{" "}
            <span className="text-main">Modern Web Apps</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full btn-premium text-dark font-semibold flex items-center gap-2"
            >
              {t("hero.viewWork")}
              <FaArrowRight />
            </motion.a>

            {/* === الزر الجديد لفتح صفحة CV === */}
            <motion.a
              href="/cv"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border-2 border-main/50 text-main font-semibold hover:bg-main/10 transition-all flex items-center gap-2"
            >
              {t("hero.downloadCV")}
            </motion.a>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="text-muted text-sm">{t("hero.findMe")}</span>
            <div className="flex gap-3">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/mohamedghanem-dev/mohamedghanem-site",
                  label: "GitHub",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/share/1CHY11VjKi/",
                  label: "Facebook",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl glass border border-white/5 text-muted hover:text-main hover:border-main/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
