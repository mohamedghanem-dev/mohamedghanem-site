"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaPlay,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

type Repo = { labelKey: string; url: string };

type Project = {
  titleKey: string;
  descKey: string;
  emoji: string;
  video: string;
  tech: string[];
  featureKeys: string[];
  repos: Repo[];
  gradient: string;
};

const projectsData: Project[] = [
  {
    titleKey: "projects.shop.title",
    descKey: "projects.shop.desc",
    emoji: "🛒",
    video: "#",
    tech: ["React", "Next.js", "Tailwind CSS"],
    featureKeys: [
      "projects.shop.f1",
      "projects.shop.f2",
      "projects.shop.f3",
    ],
    repos: [
      { labelKey: "projects.repo.frontend", url: "#" },
      { labelKey: "projects.repo.backend", url: "#" },
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    titleKey: "projects.dashboard.title",
    descKey: "projects.dashboard.desc",
    emoji: "📊",
    video: "#",
    tech: ["React", "TypeScript", "Chart.js"],
    featureKeys: [
      "projects.dashboard.f1",
      "projects.dashboard.f2",
      "projects.dashboard.f3",
    ],
    repos: [{ labelKey: "projects.repo.github", url: "#" }],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    titleKey: "projects.portfolio.title",
    descKey: "projects.portfolio.desc",
    emoji: "💼",
    video: "#",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    featureKeys: [
      "projects.portfolio.f1",
      "projects.portfolio.f2",
      "projects.portfolio.f3",
    ],
    repos: [{ labelKey: "projects.repo.github", url: "#" }],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    titleKey: "projects.blog.title",
    descKey: "projects.blog.desc",
    emoji: "✍️",
    video: "#",
    tech: ["Next.js", "Markdown", "SEO"],
    featureKeys: [
      "projects.blog.f1",
      "projects.blog.f2",
      "projects.blog.f3",
    ],
    repos: [{ labelKey: "projects.repo.github", url: "#" }],
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { t } = useTheme();

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center bg-dark px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-main/20 text-main text-sm font-medium mb-4">
            {t("projects.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-light">{t("projects.title")} </span>
            <span className="gradient-text">{t("projects.projects")}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div
                  className={`h-36 bg-gradient-to-br ${project.gradient} p-6 flex items-end relative`}
                >
                  <span className="absolute top-4 left-4 text-4xl">
                    {project.emoji}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {t(project.titleKey)}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <p className="text-muted text-sm">
                    {t(project.descKey)}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-main/10 text-main rounded-full border border-main/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.featureKeys.map((key) => (
                      <div
                        key={key}
                        className="flex items-center gap-2 text-muted text-sm"
                      >
                        <FaChevronRight className="text-main" />
                        {t(key)}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex gap-3 pt-4 border-t border-white/5">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl btn-premium text-dark text-sm font-semibold"
                    >
                      <FaPlay size={12} />
                      {t("projects.demo")}
                    </a>

                    <button
                      onClick={() =>
                        setSelectedProject(
                          selectedProject === index ? null : index
                        )
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-main/30 text-main text-sm"
                    >
                      <FaGithub size={14} />
                      {t("projects.repos")}
                    </button>
                  </div>

                  {/* Repos */}
                  <AnimatePresence>
                    {selectedProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-4 space-y-2"
                      >
                        {project.repos.map((repo) => (
                          <div
                            key={repo.labelKey}
                            className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10"
                          >
                            <span className="text-sm text-muted">
                              {t(repo.labelKey)}
                            </span>
                            <FaExternalLinkAlt className="text-xs text-muted" />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
