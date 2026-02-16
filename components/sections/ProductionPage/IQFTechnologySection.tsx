"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Zap, Layers, Microscope, Leaf } from "lucide-react";
import { useTranslations } from "next-intl";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function IQFTechnologySection() {
  const t = useTranslations("ProductionPage.iqfTechnology");

  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("features.flash.title"),
      description: t("features.flash.description"),
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: t("features.airflow.title"),
      description: t("features.airflow.description"),
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: t("features.brix.title"),
      description: t("features.brix.description"),
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t("features.chemical.title"),
      description: t("features.chemical.description"),
    },
  ];

  const containerVariants = {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Content Section */}
        <motion.div
          className="flex-1 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f5e5a]/60 dark:text-[#2f5e5a]">
              {t("badge")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#243f3d] dark:text-white leading-tight">
              {t("title")}
            </h3>
            <p className="text-lg text-[#243f3d]/70 dark:text-white/70 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="text-[#2f5e5a] flex-shrink-0"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div>
                  <h4 className="font-bold mb-1 text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#243f3d]/60 dark:text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 w-full relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Image Container */}
          <motion.div
            className="aspect-square bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBX02FEoLD-D9tq6CX-7Qk1b-Q_EY-FdiwOzY40bVASSWrAU3TOkJCIHpVMrKzjiQtBCIU696NqbQ5lGAxo6DyU0C3OwwoWPdJUjF5oBmXQjpuSYGDr069Hj14WcOPruFrxCzbY7iNm7961CQag2GXO_PHkrUl63EzveNrUuGA7WDYSqrkDNvVHS3l7xpc71_2QVI92JKSWEofpdpBX4rt16cBt49uA6Etn4U24fXYBpsofqtu_eY8hSB9hD652boVS6We0YJq-R76D')",
              }}
            />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#243f3d] to-[#2f5e5a] text-white p-8 rounded-2xl hidden lg:block max-w-xs shadow-2xl border border-[#2f5e5a]/20"
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(36, 63, 61, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-3xl font-bold mb-2"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {t("badge2.stat.value")}
            </motion.p>
            <p className="text-xs uppercase tracking-widest font-medium text-white/80">
              {t("badge2.stat.label")}
            </p>
          </motion.div>

          {/* Decorative Circle */}
          <motion.div
            className="absolute -top-4 -right-4 w-32 h-32 bg-[#2f5e5a]/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

