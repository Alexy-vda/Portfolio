"use client";
import { motion } from "motion/react";
import { ProjectCard, ProjectCardProps } from "@/components/ProjectCard";
import { Typewriter } from "react-simple-typewriter";

const projects: ProjectCardProps[] = [
  {
    title: "API SaaS Boilerplate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    techs: ["Node.js", "TypeScript", "PostgreSQL", "Prisma"],
    icon: "🗄️",
  },
  {
    title: "Microservices Platform",
    description:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    techs: ["Go", "gRPC", "Docker", "Kubernetes"],
    icon: "⚙️",
  },
  {
    title: "Realtime Chat Backend",
    description:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    techs: ["Python", "FastAPI", "Redis", "WebSocket"],
    icon: "🔗",
  },
];

const consoleLines = [
  "Fullstack Engineer (Backend Oriented)",
  "Go, Python,Next.js, TypeScript...",
  "API Design Enthusiast",
  "DevOps & Cloud Native",
  "Open Source Contributor",
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-transparent">
      {/* Section Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen h-screen py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[clamp(2.5rem,10vw,7rem)] font-extrabold tracking-tight text-center bg-gradient-to-br from-white via-slate-300 to-slate-500 bg-clip-text text-transparent mb-6"
        >
          Alexy Van Den Abele
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <div className="bg-black/80 border border-slate-800 rounded-sm px-4 py-2 font-mono text-lg md:text-2xl text-blue-400 shadow-inner text-left md:w-[640px] sm:w-[400px] max-md:h-[70px] max-sm:w-[300px]">
            <span>&gt; </span>
            <Typewriter
              words={consoleLines}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </div>
        </motion.div>
      </section>

      {/* Section À propos */}
      <section className="flex flex-col items-center justify-center min-h-screen h-screen px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 text-center"
        >
          À propos de moi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-slate-400 text-center max-w-2xl mb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta.
        </motion.p>
        {/* Micro-interactions : badges animés */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {[
            { label: "Backend" },
            { label: "API Design" },
            { label: "DevOps" },
            { label: "TypeScript" },
            { label: "Open Source" },
          ].map((badge, i) => (
            <motion.span
              key={badge.label}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3 + i * 0.08, duration: 0.5 },
              }}
              viewport={{ once: true }}
              transition={{
                ease: "easeOut",
                duration: 0.2,
              }}
              className={`px-4 py-1 rounded-sm border border-slate-700 text-slate-200 font-mono text-sm shadow cursor-pointer select-none`}
            >
              {badge.label}
            </motion.span>
          ))}
        </div>
        {/* Micro-interaction : effet de survol sur la section */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.12 }}
          transition={{ duration: 0.5 }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, #60a5fa33 0%, transparent 70%)",
          }}
        />
      </section>

      {/* Section Projets épurée avec ProjectCard */}
      <section className="flex flex-col items-center justify-center min-h-screen h-screen w-full max-w-4xl mx-auto px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-slate-200 mb-16 text-center"
        >
          Projets récents
        </motion.h2>
        <div className="flex flex-col gap-16 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Section Contact minimaliste */}
      <section className="flex flex-col items-center justify-center min-h-screen h-screen w-full max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 text-center"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-slate-400 text-center mb-8"
        >
          Un projet backend ambitieux ? Discutons-en ou retrouvez-moi sur
          GitHub.
        </motion.p>
        <a
          href="mailto:alexy@votre-domaine.com"
          className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-200 hover:bg-slate-800 transition-colors font-semibold"
        >
          Me contacter
        </a>
      </section>
    </div>
  );
}
