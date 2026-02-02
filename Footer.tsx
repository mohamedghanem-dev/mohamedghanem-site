"use client";

import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaHeart, FaArrowUp } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";
import { useTheme } from "../context/ThemeContext";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const Footer: React.FC = () => {
  const { t } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-main/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className={`${greatVibes.className} text-3xl gradient-text`}>
              Mohamed Ghanem
            </span>
            <p className="text-muted text-sm mt-2">{t("footer.role")}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {[
              {
                icon: <FaGithub size={20} />,
                href: "https://github.com/mohamedghanem-dev/mohamedghanem-site",
                label: "GitHub",
              },
              {
                icon: <FaFacebook size={20} />,
                href: "https://www.facebook.com/share/1CHY11VjKi/",
                label: "Facebook",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl glass border border-white/5 text-muted hover:text-main hover:border-main/30 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-muted hover:text-main hover:border-main/30 transition-all"
          >
            <FaArrowUp size={14} />
            <span className="text-sm font-medium">{t("footer.backToTop")}</span>
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted text-sm flex items-center justify-center gap-2">
            <span>
              © {new Date().getFullYear()} Mohamed Ghanem. {t("footer.madeWith")}
            </span>
            <FaHeart className="text-main animate-pulse" />
            <span>{t("footer.in")}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
