"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TramFront, Snowflake, Package, Truck } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PrecisionFlowSection() {
  const t = useTranslations("ProductionPage.precisionFlow");

  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: <TramFront className="w-12 h-12" />,
      title: t("steps.intake.title"),
      description: t("steps.intake.description"),
    },
    {
      number: "02",
      icon: <Snowflake className="w-12 h-12" />,
      title: t("steps.iqf.title"),
      description: t("steps.iqf.description"),
    },
    {
      number: "03",
      icon: <Package className="w-12 h-12" />,
      title: t("steps.storage.title"),
      description: t("steps.storage.description"),
    },
    {
      number: "04",
      icon: <Truck className="w-12 h-12" />,
      title: t("steps.logistics.title"),
      description: t("steps.logistics.description"),
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

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-[#243f3d] via-[#2f5e5a] to-[#243f3d] py-24 px-6 text-white overflow-hidden relative">
      {/* Background Pattern */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={headerVariants}
            className="text-sm font-bold uppercase tracking-[0.3em] text-white/60 mb-4"
          >
            {t("badge")}
          </motion.h2>
          <motion.h3
            variants={headerVariants}
            className="text-4xl md:text-5xl font-black italic tracking-tight"
          >
            {t("title")}
          </motion.h3>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block origin-left"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm group"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  y: -8,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Number Badge */}
                <motion.span
                  className="absolute -top-4 -left-4 w-12 h-12 bg-white text-[#243f3d] flex items-center justify-center font-black rounded-xl text-xl shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.span>

                {/* Icon */}
                <motion.div
                  className="mb-6 pt-4 text-white/40 group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>

                {/* Title */}
                <h4 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

