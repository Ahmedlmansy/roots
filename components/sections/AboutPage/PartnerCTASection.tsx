"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function PartnerCTASection() {
  const t = useTranslations("AboutPage.partnerCTA");
  const locale = useLocale();

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
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };


  return (
    <section className="py-20 bg-gradient-to-br from-[#243f3d] via-[#2f5e5a] to-[#243f3d] text-white relative overflow-hidden">
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

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
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
        className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
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
        className="max-w-7xl mx-auto px-6 lg:px-20 text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
        >
          {t("title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-auto"
          >
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-white text-[#243f3d] hover:bg-emerald-50 px-10 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-[#243f3d]/50 w-full sm:w-auto group"
              >
                <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("buttons.quote")}
              </Button>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-auto"
          >
            <Link href={`/${locale}/our-products`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-10 py-6 text-lg font-bold rounded-xl w-full sm:w-auto group"
              >
                <FileText className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("buttons.catalog")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {[
            { value: "24/7", label: t("indicators.support") },
            { value: "50+", label: t("indicators.countries") },
            { value: "ISO", label: t("indicators.certified") },
          ].map((indicator, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                {indicator.value}
              </div>
              <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wider">
                {indicator.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

