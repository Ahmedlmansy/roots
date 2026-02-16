"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, BadgeCheck, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface StatusCard {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  label: string;
  value: string;
  valueColor: string;
}

export default function TransparencySection() {
  const t = useTranslations("QualityPage.transparency");

  const statusCards: StatusCard[] = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-700 dark:text-green-400",
      label: t("cards.status.label"),
      value: t("cards.status.value"),
      valueColor: "text-green-700 dark:text-green-400",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-700 dark:text-blue-400",
      label: t("cards.audit.label"),
      value: t("cards.audit.value"),
      valueColor: "text-blue-700 dark:text-blue-400",
    },
  ];

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-900">
      <motion.div
        className="max-w-[1200px] mx-auto bg-[#2f5e5a]/10 dark:bg-white/5 rounded-3xl p-12 border border-[#2f5e5a]/20 dark:border-[#2f5e5a]/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black mb-6 text-[#243f3d] dark:text-white"
            >
              {t("title")}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-[#243f3d]/60 dark:text-white/60 mb-8 leading-relaxed text-lg"
            >
              {t("description")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/datasheets">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#243f3d] to-[#2f5e5a] text-white px-6 py-6 rounded-xl font-bold group"
                  >
                    <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    {t("buttons.datasheets")}
                  </Button>
                </Link>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/contact-qa">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#2f5e5a] text-[#2f5e5a] hover:bg-[#2f5e5a] hover:text-white px-6 py-6 rounded-xl font-bold group"
                  >
                    <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    {t("buttons.contact")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Status Cards Grid */}
          <motion.div
            className="lg:w-1/2 grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {statusCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 text-center group"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 mx-auto ${card.bgColor} ${card.iconColor} rounded-full flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>

                {/* Label */}
                <h6 className="font-bold text-xs uppercase tracking-wider text-[#243f3d]/40 dark:text-white/40 mb-2">
                  {card.label}
                </h6>

                {/* Value */}
                <p className={`font-black text-lg ${card.valueColor}`}>
                  {card.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

