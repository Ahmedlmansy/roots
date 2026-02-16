"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Snowflake } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProductionHeroSection() {
  const t = useTranslations("ProductionPage.ProductionHero");

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
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[#243f3d] to-[#2f5e5a]">
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
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHJaDhAEhNBYUdbir19kERN2u8G1AFxJk-TEGHTJW_-60GdY-qsj63edpWp6awmlUtHCEAvJ-DYdceqvvFxgjI4Mmb_-sIgqvvFHBKuKlsbvje5hmK9KGHRMkAZPEZvmfnBFdRBRNzPxrsV63OMK5cHz3zYRd4suWEgmMNSK36WDr-gc6TyvxXk6bUZKfEbmcuOcZwwwcpQN-spCvGMEGQYNGYtDe9H_vH35w4sV0biPi5NB4db82N3wqotm_F_wYqh_QxCiUU-b8Y')",
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#243f3d] via-[#243f3d]/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
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



      {/* Decorative Circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-[#2f5e5a]/20 rounded-full blur-3xl"
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

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest mb-6 border border-white/20"
          >
            <Snowflake className="w-4 h-4" />
            {t("badge")}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            {t("title.main")}
            <br />
            <span className="text-white/60 italic">{t("title.subtitle")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/90 font-light leading-relaxed mb-10 max-w-lg"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href="/technical-specs">
                <Button
                  size="lg"
                  className="bg-white text-[#243f3d] hover:bg-emerald-50 px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-lg group"
                >
                  <FileText className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
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
              <Link href="/facility-tour">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-lg group"
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

