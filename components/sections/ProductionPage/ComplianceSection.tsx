"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, ShieldCheck, Leaf, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

interface Certification {
  icon: React.ReactNode;
  label: string;
}

export default function ComplianceSection() {
  const t = useTranslations("ProductionPage.compliance");

  const certifications: Certification[] = [
    {
      icon: <Award className="w-10 h-10" />,
      label: t("certifications.iso"),
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      label: t("certifications.haccp"),
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      label: t("certifications.leed"),
    },
    {
      icon: <Globe className="w-10 h-10" />,
      label: t("certifications.gap"),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-16 px-6 border-t border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Header/Description */}
        <motion.div
          className="max-w-xs"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#2f5e5a]/50 dark:text-[#2f5e5a] mb-2">
            {t("title")}
          </h4>
          <p className="text-sm font-bold text-[#243f3d]/60 dark:text-white/60 italic leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-[#243f3d] dark:text-white group"
              initial={{
                opacity: 0.4,
                filter: "grayscale(100%)",
              }}
              whileInView={{
                opacity: 1,
                filter: "grayscale(0%)",
              }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
                filter: "grayscale(0%)",
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="text-[#2f5e5a] group-hover:text-[#243f3d] transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {cert.icon}
              </motion.div>

              {/* Label */}
              <span className="text-[10px] font-bold uppercase mt-2 tracking-wider text-center group-hover:text-[#2f5e5a] transition-colors duration-300">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

