"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX, HiSun, HiMoon } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { Great_Vibes } from "next/font/google";
import { useTheme } from "../context/ThemeContext";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.journey", href: "#journey" },
  { key: "nav.contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, language, toggleTheme, toggleLanguage, t } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 nav-glass ${
          scrolled 
            ? "py-3 nav-glass-active" 
            : "py-5 nav-glass-inactive"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <span className={`${greatVibes.className} text-3xl gradient-text`}>
              Mahmoud
            </span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-main to-accent"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? "text-main" 
                      : "text-muted hover:text-light"
                  }`}
                >
                  {t(link.key)}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-main/10 border border-main/20 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl glass border border-white/10 text-muted hover:text-main hover:border-main/30 transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl glass border border-white/10 text-muted hover:text-main hover:border-main/30 transition-all flex items-center gap-1"
              aria-label="Toggle language"
            >
              <MdLanguage size={18} />
              <span className="text-xs font-semibold uppercase">{language}</span>
            </motion.button>

            {/* CTA Button - Desktop only */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex px-5 py-2.5 rounded-full btn-premium text-dark text-sm font-semibold"
            >
              {t("nav.hireMe")}
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl glass border border-white/10 text-light"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: language === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: language === "ar" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${language === "ar" ? "left-0 border-r" : "right-0 border-l"} h-full w-[280px] glass border-white/10 z-50 lg:hidden`}
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                  <span className={`${greatVibes.className} text-2xl gradient-text`}>
                    {t("nav.menu")}
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl glass border border-white/10 text-light hover:text-main transition-colors"
                  >
                    <HiX size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.key}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive 
                            ? "text-main bg-main/10 border border-main/20" 
                            : "text-muted hover:text-light hover:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-full ${isActive ? "bg-main" : "bg-muted/30"}`} />
                          {t(link.key)}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-auto">
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="block w-full py-3 rounded-xl btn-premium text-dark text-center font-semibold"
                  >
                    {t("nav.workTogether")}
                  </motion.a>
                  
                  <p className="text-center text-muted text-xs mt-4">
                    {t("footer.copyright")}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
