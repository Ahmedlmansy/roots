"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#243f3d] via-[#2f5e5a] to-[#243f3d] relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
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
        className="absolute -top-40 -left-40 w-80 h-80 bg-[#2f5e5a]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-[#2f5e5a]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 w-72 h-72 bg-[#2f5e5a]/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 Number */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <motion.div
            className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white/10 leading-none select-none"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>

          {/* Floating Icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 bg-[#2f5e5a]/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/20 shadow-2xl">
              <Search className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* Suggestions */}
        <motion.div
          variants={itemVariants}
          className="mb-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: <Home className="w-5 h-5" />, text: t("suggestions.home") },
            {
              icon: <Search className="w-5 h-5" />,
              text: t("suggestions.search"),
            },
            {
              icon: <Sparkles className="w-5 h-5" />,
              text: t("suggestions.explore"),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#2f5e5a]/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-white"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(47, 94, 90, 0.5)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center gap-3">
                {item.icon}
                <span className="font-semibold">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-white text-[#243f3d] hover:bg-emerald-50 px-10 py-6 text-lg font-black rounded-xl shadow-2xl shadow-[#243f3d]/50 group"
              >
                <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("buttons.home")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-10 py-6 text-lg font-black rounded-xl group"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {t("buttons.back")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Help Text */}
        <motion.p
          variants={itemVariants}
          className="mt-12 text-sm text-emerald-200/70"
        >
          {t("helpText")}
        </motion.p>
      </motion.div>
    </div>
  );
};

