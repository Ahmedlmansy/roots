"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Award } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroProducts() {
  const t = useTranslations("OurProductsPage.Hero");
  const locale= useLocale();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="relative bg-gradient-to-br from-[#243f3d] to-[#2f5e5a] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 opacity-40"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRSEGT6H3QIlhgVvxazj8sexOQsf2U2Fmaj2VV3qhY_NjT0O1T8fVVG1H4L3dBVgWU9TNMTnmG7LyMpV5siPHbZhDu2ElOFqOyGu-GdSgYVXRd0c8OjtUuJJfdzBDeSv2rxe95bIBrg4lWaDXEQ60NjpkSNMzZ-Xdf_yK1_pq9R_kUbibmDIt9P8tCt9Ffjb3QlX4EYoZ2yWgZYB4h_CM3IH-YpA4Lp_cmNQqVCg13bouq9X_zMud2KObdjJVT8VCDGUNuNMaLoPno')",
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#243f3d] via-[#243f3d]/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Additional Pattern Overlay */}
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

    
      {/* Decorative Circles */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-[#2f5e5a]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2f5e5a]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-30 px-6 py-24 sm:py-32 flex flex-col items-start gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Award className="w-4 h-4" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl"
        >
          {t("title.main")}
          <br />
          <span className="text-emerald-200">{t("title.highlight")}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-white text-[#243f3d] hover:bg-emerald-50 px-8 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-[#243f3d]/50 group"
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                {t("buttons.catalog")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="#">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg font-bold rounded-xl group"
              >
                {t("buttons.process")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats/Features */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl"
        >
          {[
            { value: "IQF", label: t("stats.iqf") },
            { value: "ISO", label: t("stats.iso") },
            { value: "24/7", label: t("stats.support") },
            { value: "Global", label: t("stats.shipping") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-emerald-200 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

