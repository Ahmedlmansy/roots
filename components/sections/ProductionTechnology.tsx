"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Snowflake, Sparkles, Thermometer } from "lucide-react";
import { useTranslations } from "next-intl";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProductionTechnology() {
  const t = useTranslations("HomePage.productionTechnology");

  const features: Feature[] = [
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: t("features.freezing.title"),
      description: t("features.freezing.description"),
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("features.hygiene.title"),
      description: t("features.hygiene.description"),
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: t("features.storage.title"),
      description: t("features.storage.description"),
    },
  ];

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                alt="Production Technology"
                className="h-[450px] w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr6G1EDe3E0yhlWmRWJ0hmVzWh939sa6BWJJJoI4neQ2xIhe9M1sAPbEfAkH9weTngyFOjkpAKOeQ92SPJlMGSwTy79djvQK2OMXqzKaUllozk_K9eLsnN5N9ecO4JnLGfZCTkVUi9rDy38c2VAYDQGCN4YUrkHu9Sb94r_M0lkkYGkIvW0W37nfgqHZJpCroSjbmXxtRi5pR7mYHdMxb8qneTRU3B3m22wSc6o4x1u3t_MAk23zPKc1-VjgoCDOX0BGnWm4rRfDA5"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br 
from-[#2f5e5a] 
to-[#243f3d] text-white p-8 rounded-2xl shadow-2xl hidden md:block"
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 },
              }}
            >
              <motion.div
                className="text-5xl font-black mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                99.9%
              </motion.div>
              <div className="text-sm font-semibold opacity-90 uppercase tracking-widest">
                {t("purityGuarantee")}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("title")}
              <br />
              <span className="text-[#2f5e5a]">{t("subtitle")}</span>
            </motion.h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 group"
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br 
from-[#f2f4f2] 
to-[#9fbfba] 
dark:from-[#243f3d]/30 dark:to-cyan-900/30 rounded-xl flex items-center justify-center text-[#2f5e5a] dark:text-blue-400 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-[#2f5e5a] dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { value: "24/7", label: t("stats.monitoring") },
                { value: "-18°C", label: t("stats.temperature") },
                { value: "ISO", label: t("stats.certified") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-black text-[#2f5e5a] dark:text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

