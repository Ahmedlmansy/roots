"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Thermometer, Bell, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

interface SecurityFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ClimateControlSection() {
  const t = useTranslations("ProductionPage.climateControl");

  const features: SecurityFeature[] = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: t("features.alerts.title"),
      description: t("features.alerts.description"),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("features.power.title"),
      description: t("features.power.description"),
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
    hidden: { opacity: 0, x: 30 },
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
    hidden: { opacity: 0, scale: 0.95, x: -50 },
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

  const overlayVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <motion.div
          className="order-2 lg:order-1"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            {/* Main Image */}
            <motion.div
              className="aspect-video bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiQbrffsdK1kzUMhXRMvAVwAefEv-L63MPd8ObBcH9nTrS_BD2H8yeljTUo-a4jFLyTh58CUm-boxucPteGSRJ5vwOAYY50DR2R8UpF8w6FZZP8V0bLQJkrYPj-Ry-_FUqtR5tTWVTJ35FclB9dwiE9XLf_pBKYYKpUlCPIl0f8Byw3pt-B-tX1jsRaWRCIcug5aOfnrMzB4jNN4anztODbQh_RkrP02OMdGq7m0dLOn0vXxF9Mi0chUYeay27nJrL09sj-uNOYGQi')",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Overlay Tech Data */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={overlayVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#243f3d]/90 to-[#2f5e5a]/90 backdrop-blur-md p-8 rounded-2xl text-white text-center border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Thermometer className="w-10 h-10 mx-auto mb-3" />
                </motion.div>
                <motion.div
                  className="text-4xl font-black mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {t("overlay.temperature")}
                </motion.div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {t("overlay.status")}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="order-1 lg:order-2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-black text-[#243f3d] dark:text-white leading-tight"
          >
            {t("title")}
          </motion.h2>

          {/* Quote */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#243f3d]/70 dark:text-white/70 italic border-l-4 border-[#2f5e5a] pl-4"
          >
            {t("quote")}
          </motion.p>

          {/* Features List */}
          <motion.div variants={containerVariants} className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 group"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(47, 94, 90, 0.3)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 shrink-0 bg-[#2f5e5a]/10 dark:bg-[#2f5e5a]/20 rounded-xl flex items-center justify-center text-[#2f5e5a]"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "#2f5e5a",
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div>
                  <h4 className="font-bold text-[#243f3d] dark:text-white mb-1 group-hover:text-[#2f5e5a] transition-colors duration-300">
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
      </div>
    </section>
  );
};

