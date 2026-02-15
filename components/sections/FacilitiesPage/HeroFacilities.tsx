"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function FacilitiesHeroSection() {
  const t = useTranslations("FacilitiesPage.facilitiesHero");
  const locale = useLocale();

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
    hidden: { opacity: 0, y: 40 },
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
    <section className="relative w-full h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDY7z-dmHR-HMGLyEtixDyRxVc1nnnlxcGKqp4Fp7DA68en8526k9W8DLcDMbkAD9bH61rxQ-Q_u631Is_4DkNDtx8idSmnNnjlmIHM3Lq2Bqx4yXlzXV-FpUd2Ou3S_0fN3Y8EkA_xCg4yhnsNZnXzy7qmtTNbKJTyMYRDI7wuxcW_wsOPcMFieXy0owDnkUCcW774MtJcHLT0qbt0uTwF4M-gm3hCzpH4ypqe4uRftKyS0Tbe9y2Ao84W1JBn_ekW0wSEGVPZ6KWX')",
          }}
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#243f3d]/80 via-[#2f5e5a]/70 to-[#243f3d]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
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

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
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
        className="relative max-w-7xl mx-auto px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/30"
          >
            {t("badge")}
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          >
            {t("title")}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-normal text-white/90 mb-8 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={`/${locale}/production`}>
                <Button
                  size="lg"
                  className="bg-white text-[#243f3d] hover:bg-emerald-50 px-8 py-6 text-lg font-bold rounded-xl shadow-2xl group w-full sm:w-auto"
                >
                  <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  {t("buttons.specs")}
                </Button>
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={`/${locale}/about`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg font-bold rounded-xl group w-full sm:w-auto"
                >
                  <Eye className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t("buttons.tour")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

