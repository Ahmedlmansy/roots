"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";


export  default function HeroSections(): React.ReactNode {
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
        ease: [0.6, -0.05, 0.01, 0.99],
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

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

    const t = useTranslations("HomePage.heroSection");
    

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br 
from-[#162b29] 
via-[#1f3f3c] 
to-[#243f3d]"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          alt="Premium Frozen Produce"
          fill
          priority
          className="object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVanUwfiZogCbIBaPdM2VETS-GGdJoz0h2Pifbw8mXDpMKFkWxCjA2gF4w4qJxOfUQqJPXGC_WtTTiwVJf2cHzXvCnwIBQ5v3t-0HheGHlaMrgqPDhjiyTbS_bPYk2GSnj1RV1V4RGoirTYCLB7fKwRuIHM_EK90edzDJ5sHXdQYSbsscQOtZBlIewZnn457wk3dHq7nlbVRB766gGuPLswS6T00wKGx2c9_SUZ_r8gwJXlUh61pViRGCzP5da04I24V8uOgA3zrlF"
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r 
from-[#162b29]/90 
via-[#274f4b]/80 
to-transparent"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-flex items-center gap-2 bg-gradient-to-r 
from-[#162b29]/90 
via-[#274f4b]/80 
to-transparent text-blue-200 px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              {t("Since")}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-8 tracking-tight"
          >
            {t("title_one")}
            <br />
            <span
              className="bg-gradient-to-r 
from-[#2f5e5a] 
via-[#9fbfba] 
to-[#f2f4f2] 
bg-clip-text text-transparent"
            >
              {t("title_two")}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-xl text-blue-100/90 mb-12 leading-relaxed font-light max-w-2xl"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="sm"
                className="bg-white text-slate-900 hover:bg-blue-50 px-8 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-blue-500/20 transition-all group"
              >
                {t("btn_one")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg font-bold rounded-xl transition-all"
              >
                {t("btn_two")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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

