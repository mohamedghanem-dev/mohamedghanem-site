"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";
type Language = "en" | "ar";

interface ThemeContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.journey": "Journey",
    "nav.contact": "Contact",
    "nav.hireMe": "Hire Me",
    "nav.menu": "Menu",
    "nav.workTogether": "Let's Work Together",

    // Hero
    "hero.welcome": "Welcome to my portfolio",
    "hero.iam": "I am",
    "hero.role": "Full Stack Developer",
    "hero.description":
      "A passionate Full Stack Developer focused on building modern, scalable, and high-quality web applications using the latest technologies.",
    "hero.and": "and",
    "hero.viewWork": "View My Work",
    "hero.downloadCV": "Download CV",
    "hero.findMe": "Find me on",
    "hero.scroll": "Scroll",
    "hero.available": "Available",

    // About
    "about.badge": "Get To Know Me",
    "about.title": "About",
    "about.me": "Me",
    "about.yearsExp": "Years Experience",
    "about.projectsBuilt": "Projects Built",
    "about.technologies": "Technologies",
    "about.studyingAt": "Focused on",
    "about.myStory": "My Story",
    "about.bio1":
      "I’m Mohamed Ghanem, a Full Stack Developer with a strong passion for building clean, efficient, and user-focused digital products.",
    "about.bio2":
      "I specialize in creating modern web applications that balance performance, scalability, and elegant user interfaces.",
    "about.bio3":
      "I enjoy turning complex problems into simple solutions and continuously improving my skills through real-world projects.",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.tools": "Tools & Others",

    // Services
    "services.badge": "What I Do",
    "services.title": "My",
    "services.services": "Services",
    "services.subtitle":
      "End-to-end solutions that combine strong backend systems with elegant and responsive user interfaces",
    "services.cta": "Have a project in mind?",
    "services.ctaBtn": "Let's Work Together",

    "services.frontend.title": "Frontend Development",
    "services.frontend.desc":
      "Building responsive, modern, and interactive user interfaces using React, Next.js, and TypeScript.",
    "services.backend.title": "Backend Development",
    "services.backend.desc":
      "Developing secure and scalable backend systems and APIs with clean architecture and best practices.",
    "services.mobile.title": "Mobile Development",
    "services.mobile.desc":
      "Creating cross-platform mobile applications with smooth performance and clean UI.",
    "services.database.title": "Database Design",
    "services.database.desc":
      "Designing efficient database schemas and optimizing queries for performance and scalability.",
    "services.devops.title": "DevOps & Deployment",
    "services.devops.desc":
      "Deploying and maintaining applications using modern DevOps tools and cloud environments.",
    "services.performance.title": "Performance Optimization",
    "services.performance.desc":
      "Optimizing applications for speed, SEO, and overall user experience.",

    // Projects
    "projects.badge": "My Work",
    "projects.title": "Featured",
    "projects.projects": "Projects",
    "projects.subtitle":
      "A selection of projects that reflect my skills and experience in full-stack development",
    "projects.demo": "Demo",
    "projects.repos": "Repos",
    "projects.viewMore": "View more projects on GitHub",

    // Journey
    "journey.badge": "My Path",
    "journey.title": "My",
    "journey.journey": "Journey",
    "journey.subtitle":
      "Key milestones that shaped my journey as a developer",
    "journey.continues": "And the journey continues...",

    // Contact
    "contact.badge": "Get In Touch",
    "contact.title": "Let's",
    "contact.connect": "Connect",
    "contact.subtitle":
      "Have an idea or a project? Let's talk and turn it into reality.",
    "contact.buildTogether": "Let's Build Together",
    "contact.openFor": "Open for opportunities",
    "contact.bio":
      "I’m always open to discussing new projects, collaborations, or opportunities. Feel free to reach out anytime.",
    "contact.connectWith": "Connect with me",
    "contact.emailDirect": "Email me directly",
    "contact.sendMessage": "Send a Message",

    // Footer
    "footer.madeWith": "Made with",
    "footer.in": "in Egypt",
    "footer.backToTop": "Back to top",
    "footer.role": "Full Stack Developer",
    "footer.copyright": "© 2025 Mohamed Ghanem",

    "contact.location": "Egypt",
  },

  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من أنا",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.journey": "رحلتي",
    "nav.contact": "تواصل",
    "nav.hireMe": "اشتغل معايا",
    "nav.menu": "القائمة",
    "nav.workTogether": "يلا نبدأ",

    // Hero
    "hero.welcome": "أهلاً بيك في الـ Portfolio",
    "hero.iam": "أنا",
    "hero.role": "Full Stack Developer",
    "hero.description":
      "مطور Full Stack شغوف ببناء تطبيقات ويب حديثة وقابلة للتوسع، مع التركيز على الجودة وتجربة المستخدم.",
    "hero.and": "و",
    "hero.viewWork": "شوف شغلي",
    "hero.downloadCV": "حمّل السيرة الذاتية",
    "hero.findMe": "تلاقيني على",
    "hero.scroll": "انزل",
    "hero.available": "متاح",

    // About
    "about.badge": "اعرف عني أكتر",
    "about.title": "عن",
    "about.me": "نفسي",
    "about.yearsExp": "سنين خبرة",
    "about.projectsBuilt": "مشاريع",
    "about.technologies": "التقنيات",
    "about.studyingAt": "متخصص في",
    "about.myStory": "قصتي",
    "about.bio1":
      "أنا محمد غانم، مطور Full Stack بحب أبني حلول عملية ونظيفة تخدم المستخدم بشكل فعلي.",
    "about.bio2":
      "بشتغل على تطوير تطبيقات ويب حديثة بتهتم بالأداء، القابلية للتوسع، وتجربة المستخدم.",
    "about.bio3":
      "بحب أتعلم باستمرار وأحوّل المشاكل المعقدة لحلول بسيطة وفعالة.",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.tools": "أدوات أخرى",

    // Services
    "services.badge": "بقدم إيه",
    "services.title": "خدماتي",
    "services.services": "",
    "services.subtitle":
      "حلول برمجية متكاملة من الواجهة الأمامية لحد الباك-إند",
    "services.cta": "عندك فكرة؟",
    "services.ctaBtn": "يلا ننفذها",

    // Projects
    "projects.badge": "شغلي",
    "projects.title": "مشاريع",
    "projects.projects": "مختارة",
    "projects.subtitle":
      "مجموعة من المشاريع اللي بتعكس خبرتي في تطوير الويب",
    "projects.demo": "عرض",
    "projects.repos": "الكود",
    "projects.viewMore": "مشاريع أكتر على GitHub",

    // Journey
    "journey.badge": "المسار",
    "journey.title": "رحلتي",
    "journey.journey": "في البرمجة",
    "journey.subtitle":
      "أهم المحطات في مشواري كمطور",
    "journey.continues": "والرحلة مستمرة...",

    // Contact
    "contact.badge": "تواصل",
    "contact.title": "خلينا",
    "contact.connect": "نتكلم",
    "contact.subtitle":
      "لو عندك مشروع أو فكرة، ابعتلي ونشوف نقدر ننفذها إزاي.",
    "contact.buildTogether": "نبني حاجة سوا",
    "contact.openFor": "متاح لفرص جديدة",
    "contact.bio":
      "مهتم بالتعاون على مشاريع جديدة أو فرص عمل. أي وقت تحب تتواصل معايا.",
    "contact.connectWith": "تواصل معايا",
    "contact.emailDirect": "إيميل مباشر",
    "contact.sendMessage": "ابعت رسالة",

    // Footer
    "footer.madeWith": "صُنع بـ",
    "footer.in": "في مصر",
    "footer.backToTop": "فوق",
    "footer.role": "Full Stack Developer",
    "footer.copyright": "© 2025 Mohamed Ghanem",

    "contact.location": "مصر",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLanguage = localStorage.getItem("language") as Language;

    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", language);

    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  }, [theme, language, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{ theme, language, toggleTheme, toggleLanguage, t }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}