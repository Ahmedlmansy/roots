"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link?: string;
  certifications?: string[];
}

export default function ProcessStepsSection() {
  const t = useTranslations("AboutPage.processSteps");
  const locale = useLocale();
    
  const steps: Step[] = [
    {
      stepNumber: t("step1.number"),
      title: t("step1.title"),
      description: t("step1.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMxWsGPAhhPS0LXiyUKJlu8C0VNK345pEqxC5At5JhFPzcnO2QQdW6Z_qUSIbHa3JCKksIzGYRfZbGsuM5zHV5UUIdh7bKy1FNmuXSsyWoFfAdeBKQ6kPgO1_r5XrjBLfGkqFeiFJxSjRyNQxz4ZFFFvg-myZIus43d6dcLmQw-Ye8Urrc9mDiWgGpBfz4QYey0CCPxcDG2n8dkx51UVrx7Ex9si3DgRuAWE_JKn-TlCb1so67GwsJUF9a0ytvKGHHdH052mZE8Pr0",
      alt: "Massive distribution warehouse with shipping containers",
      link: `/${locale}/contact`,
    },
    {
      stepNumber: t("step2.number"),
      title: t("step2.title"),
      description: t("step2.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOhXINScsJWcNnyEjq2zWk0hskGutau63-bKDYKH-eiCf9ZV5aAFMws-P_x78zOrplSLR3pCd_7tyPND7BJ9HI4zBp3BT1OH32fJuRMNnzZMtRiqtIi9Y7RVk3xkfz5NnDmnCMVTpqpuBSuFMW6ZKWqt-YhER4HIWTYNqtdddTmY9UUHuX70ldyJeml2xMyu2vOBZqMsyCykhAd6mWftUApKTH4c7Qp0tW11NSTQoo6LoH0pu84b0nhWjXfsf8D1bsqxWmp8oLWul-",
      alt: "Laboratory technician testing food samples",
      certifications: ["ISO 22000", "HACCP"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Step 1 - Image Right */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image - Order 2 on mobile, 1 on desktop */}
          <motion.div className="order-2 md:order-1" variants={imageVariants}>
            <motion.div
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-full object-cover"
                alt={steps[0].alt}
                src={steps[0].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content - Order 1 on mobile, 2 on desktop */}
          <motion.div
            className="order-1 md:order-2 space-y-6"
            variants={itemVariants}
          >
            <motion.span
              className="text-[#2f5e5a]/60 dark:text-[#2f5e5a] font-bold uppercase tracking-widest text-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {steps[0].stepNumber}
            </motion.span>

            <h3 className="text-3xl md:text-4xl font-black text-[#243f3d] dark:text-white">
              {steps[0].title}
            </h3>

            <p className="text-[#243f3d]/70 dark:text-white/70 text-lg leading-relaxed">
              {steps[0].description}
            </p>

            {steps[0].link && (
              <Link href={steps[0].link}>
                <motion.div
                  className="text-[#2f5e5a] font-bold flex items-center gap-2 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("step1.linkText")}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Step 2 - Image Left */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.span
              className="text-[#2f5e5a]/60 dark:text-[#2f5e5a] font-bold uppercase tracking-widest text-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {steps[1].stepNumber}
            </motion.span>

            <h3 className="text-3xl md:text-4xl font-black text-[#243f3d] dark:text-white">
              {steps[1].title}
            </h3>

            <p className="text-[#243f3d]/70 dark:text-white/70 text-lg leading-relaxed">
              {steps[1].description}
            </p>

            {/* Certifications */}
            {steps[1].certifications && (
              <motion.div
                className="flex gap-6 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {steps[1].certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0.6, filter: "grayscale(100%)" }}
                    whileHover={{
                      opacity: 1,
                      filter: "grayscale(0%)",
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <BadgeCheck className="w-5 h-5 text-[#2f5e5a]" />
                    <span className="text-sm font-bold text-[#243f3d] dark:text-white">
                      {cert}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div variants={imageVariants}>
            <motion.div
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-full object-cover"
                alt={steps[1].alt}
                src={steps[1].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/20 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

