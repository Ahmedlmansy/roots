"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BadgeCheck, Shield, Leaf, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

interface Certification {
  icon: React.ReactNode;
  label: string;
}

export default function CertificationsBadgesSection() {
  const t = useTranslations("FacilitiesPage.certificationsBadges");

  const certifications: Certification[] = [
    {
      icon: <BadgeCheck className="w-10 h-10" />,
      label: t("badges.gfsi"),
    },
    {
      icon: <Shield className="w-10 h-10" />,
      label: t("badges.sqf"),
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      label: t("badges.usda"),
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      label: t("badges.haccp"),
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

  return (
    <section className="border-y border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 py-12 bg-white dark:bg-slate-900">
      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-3 group"
            initial={{
              opacity: 0.5,
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
            <span className="font-black text-xl tracking-tighter text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
              {cert.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

