import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  icon?: React.ReactNode;
}

export function ProjectCard({
  title,
  description,
  techs,
  icon,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Pour l'effet de lumière
  const bgGradient = useTransform([mouseX, mouseY], ([x, y]) => {
    if (!cardRef.current) return "";
    const rect = cardRef.current.getBoundingClientRect();
    const px = typeof x === "number" ? x - rect.left : 0;
    const py = typeof y === "number" ? y - rect.top : 0;
    return `radial-gradient(600px circle at ${px}px ${py}px, rgba(59,130,246,0.20), transparent 60%)`;
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{
        scale: 1.018,
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
      }}
      style={{ background: bgGradient }}
      className="w-full max-w-3xl mx-auto bg-slate-950/80 border border-slate-800 rounded-sm p-0 overflow-hidden flex flex-col md:flex-row items-stretch shadow-lg cursor-pointer min-h-[200px] group"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center gap-0 md:gap-8 p-8">
        <div className="flex items-center justify-center w-20 h-20 text-4xl bg-slate-900 text-slate-500 border border-slate-800 rounded-sm shrink-0 mb-6 md:mb-0 md:mr-8 group-hover:text-blue-400 transition-colors">
          {icon}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-slate-100 mb-1 tracking-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-base mb-2 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-slate-800/80 text-slate-300 text-xs rounded-xs border border-slate-700 font-mono tracking-tight group-hover:bg-blue-900/60 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
