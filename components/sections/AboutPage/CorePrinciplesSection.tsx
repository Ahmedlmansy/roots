"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Rocket, Eye, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

export default function CorePrinciplesSection() {
  const t = useTranslations("AboutPage.corePrinciples");

  const principles: Principle[] = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t("mission.title"),
      description: t("mission.description"),
      points: [t("mission.points.0"), t("mission.points.1")],
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t("vision.title"),
      description: t("vision.description"),
      points: [t("vision.points.0"), t("vision.points.1")],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-24 bg-[#f0f4f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl font-black text-[#243f3d] dark:text-white mb-4"
          >
            {t("sectionTitle")}
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-[#243f3d]/70 dark:text-white/70 text-lg leading-relaxed"
          >
            {t("sectionDescription")}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-10 rounded-2xl border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 shadow-lg hover:shadow-xl group"
              whileHover={{
                y: -8,
                borderColor: "rgba(47, 94, 90, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-[#2f5e5a]/10 dark:bg-[#2f5e5a]/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(47, 94, 90, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[#2f5e5a] group-hover:text-[#243f3d] transition-colors duration-300">
                  {principle.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#243f3d] dark:text-white mb-4 group-hover:text-[#2f5e5a] transition-colors duration-300">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-[#243f3d]/70 dark:text-white/70 leading-relaxed mb-6">
                {principle.description}
              </p>

              {/* Points List */}
              <ul className="space-y-3">
                {principle.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    className="flex items-start gap-3 text-sm font-medium text-[#243f3d]/80 dark:text-white/80"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.4 }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#2f5e5a]" />
                    </motion.div>
                    <span className="group-hover:text-[#243f3d] dark:group-hover:text-white transition-colors duration-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

