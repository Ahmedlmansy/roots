"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Microscope, Leaf, UtensilsCrossed, BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FrozenFruits() {
  const t = useTranslations("OurProductsPage.TabFrozenFruits");

  const features = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: t("features.texture.title"),
      description: t("features.texture.description"),
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t("features.nutrient.title"),
      description: t("features.nutrient.description"),
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: t("features.taste.title"),
      description: t("features.taste.description"),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <section className="py-20 bg-white dark:bg-slate-900" id="fruits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-[#243f3d] dark:text-white mb-6 leading-tight"
            >
              {t("title")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#243f3d]/70 dark:text-white/70 text-lg leading-relaxed mb-8"
            >
              {t("description")}
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col gap-3 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-[#2f5e5a] group-hover:text-[#243f3d] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-bold text-sm text-[#243f3d] dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-[#243f3d]/60 dark:text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-[400px] object-cover"
                alt="Vibrant IQF frozen blueberries"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBludCHmou8rAcStqs2Mf-LmnN7KwwK3UGdEXTLUfL2jW4pzBM3Zt29f1ia4vcr5EVrcPp5SC-MTdyjyZysZu8BL_7GX59vtGnp0eUiHboSm7oDU8U8qhlGGTK6fdbd96KmMP1sCPEwB7yiqvBAGaKBKccXzRPAzbRMlX1v7tPsCoxMbMPT_nfAiyAWvgXNy6qK65GtkpvKlau33k0kY2oxmPzbAXn6ly2QmhOfFYHXjFqd_-yrH3UeJCWAjSlwB7Sya0d592z7UA3X"
              />

              {/* Badge Overlay */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center border border-[#2f5e5a]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <p className="font-bold text-[#243f3d] dark:text-white">
                    {t("badge.title")}
                  </p>
                  <p className="text-xs text-[#243f3d]/60 dark:text-white/60 tracking-wide uppercase font-semibold">
                    {t("badge.grade")}
                  </p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <BadgeCheck className="w-6 h-6 text-[#2f5e5a]" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

