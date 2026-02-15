"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutHeroSection() {
  const t = useTranslations("AboutPage.aboutHero");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section className="relative h-[100vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2lWjgL7okFB_SlTgCHot1Lm9Yz8v_KPW5yOHZscx2Vwvw_ihtCrxmDdd_rrKH8vWEjJVTSBcecl-5U_lW_7x5fKpkizjZZ8iigUzSvLQau3XKMWf7gNZXi7PpiCy9HejnAi7NGtcRIAwlTputiGLRAz2MuKlTMGb0jwTHlPY88LonBwmvqtDW6WJEq4ngwzJS6m9SIhvtXfFCqir68SNEJzgm5Lrmn3nSuVn9DBWex_RojecnkQLIQKy_SqMwXaCkzWWmb2EPBrOt')",
        }}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#243f3d]/70 via-[#2f5e5a]/60 to-[#243f3d]/70 z-10"
        initial="hidden"
        animate="visible"
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
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
        className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl z-10"
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
        className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl z-10"
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
        className="relative z-20 text-center px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* Optional Stats/Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { value: "1995", label: t("stats.founded") },
            { value: "50+", label: t("stats.countries") },
            { value: "100%", label: t("stats.quality") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
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

