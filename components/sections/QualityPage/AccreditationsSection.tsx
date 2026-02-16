"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Check,
  Gavel,
  Microscope,
  BookOpen,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface Certification {
  title: string;
  description: string;
}

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function AccreditationsSection() {
  const t = useTranslations("QualityPage.accreditations");

  const certifications: Certification[] = [
    {
      title: t("certifications.iso.title"),
      description: t("certifications.iso.description"),
    },
    {
      title: t("certifications.brcgs.title"),
      description: t("certifications.brcgs.description"),
    },
    {
      title: t("certifications.haccp.title"),
      description: t("certifications.haccp.description"),
    },
  ];

  const metrics: Metric[] = [
    {
      icon: <Gavel className="w-12 h-12" />,
      value: t("metrics.audit.value"),
      label: t("metrics.audit.label"),
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      value: t("metrics.testing.value"),
      label: t("metrics.testing.label"),
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      value: t("metrics.traceability.value"),
      label: t("metrics.traceability.label"),
    },
    {
      icon: <Globe className="w-12 h-12" />,
      value: t("metrics.countries.value"),
      label: t("metrics.countries.label"),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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

  const metricsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-[#243f3d] via-[#2f5e5a] to-[#243f3d] text-white overflow-hidden relative">
      {/* Background Decorative Icon */}
      <motion.div
        className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ShieldCheck className="w-full h-full" />
      </motion.div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-sm font-black text-white/60 uppercase tracking-[0.2em] mb-4"
            >
              {t("badge")}
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black mb-8 leading-tight"
            >
              {t("title")}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-white/80 text-lg mb-10 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            {/* Certifications List */}
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mt-1 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      rotate: 360,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                      {cert.title}
                    </h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={metricsVariants}
                className="aspect-square bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 border border-white/10 group cursor-default"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  y: -8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-white/40 group-hover:text-white mb-4 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {metric.icon}
                </motion.div>
                <motion.span
                  className="font-black text-2xl md:text-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {metric.value}
                </motion.span>
                <span className="text-xs uppercase tracking-widest text-white/60 mt-2 text-center">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

