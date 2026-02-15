"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

interface Stat {
  label: string;
  value: string;
  unit: string;
}

export default function FacilityStatsSection() {
  const t = useTranslations("FacilitiesPage.facilityStats");

  const stats: Stat[] = [
    {
      label: t("stats.footprint.label"),
      value: t("stats.footprint.value"),
      unit: t("stats.footprint.unit"),
    },
    {
      label: t("stats.throughput.label"),
      value: t("stats.throughput.value"),
      unit: t("stats.throughput.unit"),
    },
    {
      label: t("stats.storage.label"),
      value: t("stats.storage.value"),
      unit: t("stats.storage.unit"),
    },
    {
      label: t("stats.zones.label"),
      value: t("stats.zones.value"),
      unit: t("stats.zones.unit"),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        staggerChildren: 0.1,
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

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`
              flex flex-col gap-2 px-4 py-2
              border-r border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20
              last:border-0
              md:border-r
              ${index % 2 === 1 ? "border-r-0 md:border-r" : ""}
              ${index === stats.length - 1 ? "md:border-r-0" : ""}
              group
            `}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Label */}
            <motion.span
              className="text-[#243f3d]/60 dark:text-white/60 text-xs font-bold uppercase tracking-tight"
              whileHover={{ color: "#2f5e5a" }}
            >
              {stat.label}
            </motion.span>

            {/* Value */}
            <motion.span
              className="text-3xl md:text-4xl font-black text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {stat.value}
            </motion.span>

            {/* Unit */}
            <motion.span
              className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {stat.unit}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

