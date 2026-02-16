"use client";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

import React from 'react'

export default function HeroContact() {
      const t = useTranslations("contact");
    
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:px-12 lg:pt-24">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-black tracking-tight text-[#243f3d] dark:text-white sm:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h2>
        <p className="mt-6 text-lg leading-8 text-[#243f3d]/70 dark:text-white/70">
          {t("hero.description")}
        </p>
      </motion.div>
    </section>
  );
}
