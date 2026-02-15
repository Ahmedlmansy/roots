"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export default function WhoWeAreSection() {
  const t = useTranslations("AboutPage.whoWeAre");

  const stats = [
    {
      value: t("stats.years.value"),
      label: t("stats.years.label"),
    },
    {
      value: t("stats.countries.value"),
      label: t("stats.countries.label"),
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
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Content Section */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-[#2f5e5a] dark:text-emerald-300 text-xs font-bold uppercase tracking-widest rounded-full border border-[#2f5e5a]/20"
          >
            {t("badge")}
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black text-[#243f3d] dark:text-white leading-tight"
          >
            {t("title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#243f3d]/70 dark:text-white/70 text-lg leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-8 pt-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <p className="text-3xl md:text-4xl font-black text-[#2f5e5a] group-hover:text-[#243f3d] transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm text-[#243f3d]/60 dark:text-white/60 font-medium mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Image */}
          <motion.div
            className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-full object-cover"
              alt="Vibrant green vegetable farm at sunrise"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCQGmWSNUvzfjroA4EE53ABlTvlKZTslgm5_mA0MLZLHDa-XAlQtUD90Khr7GP6XGSfnjJOWeooBj1jW46Ym0eAwR-htVCCjbGhj-aRGh60yZP5fMInk7t6phcLqR3fIkjdDEr06LC_d0n4Y1MpPBLYEzrP8OldI1v3Q9qg14mz6V03wGZf6wbDz-P5I7AyNQHNow93a_aHg94ytQiS7f8NNPbEXi50qtgZFdWKEPVG_lqZst_cGrUPrrOj4A2DBOWO_GRiRH7AKVv"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/30 to-transparent" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#243f3d] to-[#2f5e5a] text-white p-8 rounded-2xl shadow-2xl hidden lg:block border border-white/10"
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-2xl font-bold mb-1"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {t("badge2.industrial.title")}
            </motion.p>
            <p className="text-sm opacity-90">
              {t("badge2.industrial.subtitle")}
            </p>
          </motion.div>

          {/* Decorative Elements */}
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

