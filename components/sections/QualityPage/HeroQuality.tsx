"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function QualityHeroSection() {
  const t = useTranslations("QualityPage.qualityHero");

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
    <section className="relative h-[100vh] w-full flex items-center justify-start overflow-hidden bg-gradient-to-br from-[#243f3d] to-[#2f5e5a]">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 opacity-40"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          alt="Industrial food production facility"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1VRDu7rQqxTrySYspl6z6mlMjyiIuKo3ue1NQY3Nx301x3yNO3tgCNbQiUxIbiT_f68Gx2CsD9ei1KJOyX4veDqVTKefr2DOHyioUahmVn4-FqW48cCBD-j-_ZDLCNpqFn3ibq2Z8baDydBgCjB2zeNCrbIkIIQIAPxkEmYtbTlagUAf7gwBG6JF98p9ax-DCi5rHx59JaS_w3unUoQTVF7YgfkwbDQkjp9k6BvFScpHXn169j8hzPab9Oox9yvWHxfLz_3qJILDO"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#243f3d] via-[#243f3d]/80 to-transparent"
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



      {/* Content */}
      <motion.div
        className="relative z-10 px-6 md:px-20 max-w-4xl flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase self-start"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {t("badge")}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter"
        >
          {t("title.main")}
          <br />
          <span className="text-green-200/80">{t("title.highlight")}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-white/90 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="/certifications">
              <Button
                size="lg"
                className="bg-white text-[#243f3d] hover:bg-emerald-50 px-8 py-6 text-base font-bold rounded-xl group w-full sm:w-auto"
              >
                {t("buttons.certifications")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="/audit-2024.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base font-bold rounded-xl group w-full sm:w-auto"
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                {t("buttons.audit")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

