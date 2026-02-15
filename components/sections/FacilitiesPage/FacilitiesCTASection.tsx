"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function FacilitiesCTASection() {
  const t = useTranslations("FacilitiesPage.facilitiesCTA");
  const locale = useLocale();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        staggerChildren: 0.2,
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
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        className="bg-gradient-to-br from-[#243f3d] via-[#2f5e5a] to-[#243f3d] rounded-3xl p-12 md:p-20 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative Circles */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl -ml-40 -mb-40"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

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



        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            {t("title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-white/90 max-w-xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={`/${locale}/contact`} >
                <Button
                  size="lg"
                  className="bg-white text-[#243f3d] hover:bg-emerald-50 px-10 py-6 text-lg font-black rounded-xl shadow-2xl group"
                >
                  <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t("buttonText")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Optional Stats/Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              { value: "1.2M+", label: t("stats.sqft") },
              { value: "24/7", label: t("stats.operations") },
              { value: "100%", label: t("stats.certified") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

