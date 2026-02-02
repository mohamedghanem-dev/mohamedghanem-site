"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  { icon: <FaGithub size={24} />, href: "https://github.com/mahmoudfalous", label: "GitHub", color: "hover:bg-gray-700" },
  { icon: <FaLinkedin size={24} />, href: "https://linkedin.com/in/mahmoud-mohamed-872897289", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: <FaWhatsapp size={24} />, href: "https://wa.me/201016808882", label: "WhatsApp", color: "hover:bg-green-500" },
  { icon: <FaEnvelope size={24} />, href: "mailto:mahmoudfalous@gmail.com", label: "Email", color: "hover:bg-red-500" },
];

const Contact: React.FC = () => {
  const { t } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:mahmoudfalous@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-dark px-6 py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-main/10 rounded-full blur-[150px]"
        animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
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
            {t("contact.badge")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-light">{t("contact.title")} </span>
            <span className="gradient-text">{t("contact.connect")}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-xl bg-main/20">
                  <HiSparkles className="text-main text-2xl" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-light">{t("contact.buildTogether")}</h3>
                  <p className="text-muted text-sm">{t("contact.openFor")}</p>
                </div>
              </div>
              
              <p className="text-muted leading-relaxed mb-6">
                {t("contact.bio")}
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 text-muted">
                <FaMapMarkerAlt className="text-main" />
                <span>{t("contact.location")}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-light mb-4">{t("contact.connectWith")}</h4>
              <div className="grid grid-cols-5 gap-3 text-center">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl glass border border-white/5 text-muted ${social.color} hover:text-white transition-all duration-300 flex items-center justify-center`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Email */}
            <motion.a
              href="mailto:mahmoudfalous@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="block glass-card rounded-2xl p-6 group hover:border-main/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-main/20 group-hover:bg-main/30 transition-colors">
                  <FaEnvelope className="text-main text-xl" />
                </div>
                <div>
                  <p className="text-muted text-sm">{t("contact.emailDirect")}</p>
                  <p className="text-light font-medium group-hover:text-main transition-colors">
                    mahmoudfalous@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-light mb-6">{t("contact.sendMessage")}</h3>
              
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-light text-sm font-medium mb-2">
                    {t("contact.yourName")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-3.5 rounded-xl input-premium text-light placeholder:text-muted/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-light text-sm font-medium mb-2">
                    {t("contact.yourEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-4 py-3.5 rounded-xl input-premium text-light placeholder:text-muted/50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label htmlFor="subject" className="block text-light text-sm font-medium mb-2">
                  {t("contact.subject")}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.subjectPlaceholder")}
                  className="w-full px-4 py-3.5 rounded-xl input-premium text-light placeholder:text-muted/50"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-light text-sm font-medium mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3.5 rounded-xl input-premium text-light placeholder:text-muted/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl btn-premium text-dark font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    {t("contact.send")}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
