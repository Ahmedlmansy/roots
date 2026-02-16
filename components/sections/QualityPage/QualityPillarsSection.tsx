"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Droplet, Settings, BadgeCheck, FileCheck } from "lucide-react";
import { useTranslations } from "next-intl";

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function QualityPillarsSection() {
  const t = useTranslations("QualityPage.qualityPillars");

  const pillars: Pillar[] = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: t("pillars.hygiene.title"),
      description: t("pillars.hygiene.description"),
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t("pillars.monitoring.title"),
      description: t("pillars.monitoring.description"),
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: t("pillars.sourcing.title"),
      description: t("pillars.sourcing.description"),
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: t("pillars.compliance.title"),
      description: t("pillars.compliance.description"),
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
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-900">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-2xl">
            <motion.h2
              variants={headerVariants}
              className="text-sm font-black text-[#2f5e5a]/60 dark:text-[#2f5e5a] uppercase tracking-[0.2em] mb-4"
            >
              {t("badge")}
            </motion.h2>
            <motion.h3
              variants={headerVariants}
              className="text-4xl md:text-5xl font-black text-[#243f3d] dark:text-white leading-tight"
            >
              {t("title")}
            </motion.h3>
            <motion.p
              variants={headerVariants}
              className="mt-6 text-lg text-[#243f3d]/60 dark:text-white/60 leading-relaxed"
            >
              {t("description")}
            </motion.p>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 bg-slate-50 dark:bg-white/5 hover:border-[#2f5e5a] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Container */}
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#243f3d] to-[#2f5e5a] text-white flex items-center justify-center mb-6 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {pillar.icon}
              </motion.div>

              {/* Title */}
              <h4 className="text-xl font-bold mb-3 text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
                {pillar.title}
              </h4>

              {/* Description */}
              <p className="text-[#243f3d]/60 dark:text-white/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

