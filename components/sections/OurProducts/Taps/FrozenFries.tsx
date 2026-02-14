"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Check } from "lucide-react";
import {  useTranslations } from "next-intl";

interface Feature {
  title: string;
  description: string;
}

export default function FrozenFries() {
    const t = useTranslations("OurProductsPage.TabFrozenFries");
    

  const features: Feature[] = [
    {
      title: t("features.consistency.title"),
      description: t("features.consistency.description"),
    },
    {
      title: t("features.cut.title"),
      description: t("features.cut.description"),
    },
    {
      title: t("features.recovery.title"),
      description: t("features.recovery.description"),
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="fries">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background Glow */}
            <motion.div
              className="absolute -inset-4 bg-[#2f5e5a]/10 rounded-3xl"
              whileHover={{
                backgroundColor: "rgba(47, 94, 90, 0.15)",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Image */}
            <motion.img
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              alt="Golden crisp frozen french fries"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_K1WwbD9l2v6z1IsoJtJZ4BB4FBt1h2KbTZBi3pbh5tn6uiIl8G_kqaAt6SCCG-k2lHfVtfdicC3JMiO1YiiuboaHTwciNM3SAQY5guptKN55SGgjKDox8Usy6ttX1WR4bMpTgGMZwQJvDfKcfwnjlTnpuTb3qgiJuWmuERDJClfn8UHL5hA5rHtQBUzNY6Lh7GnsSyfPuGoaeogGzE2vukYYWsvd5XdOoC9vTre_sMLy49dfMUmDvspwUzN8zecTf2CrUf81Isr"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Premium Badge */}
            <motion.div
              className="absolute top-8 right-8 bg-gradient-to-br from-[#243f3d] to-[#2f5e5a] text-white p-4 rounded-full shadow-2xl"
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
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

            {/* Features List */}
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 group/item"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Check Icon */}
                  <motion.div
                    className="mt-1 w-7 h-7 rounded-full bg-[#2f5e5a]/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      backgroundColor: "rgba(47, 94, 90, 0.2)",
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-[#2f5e5a]" />
                  </motion.div>

                  {/* Feature Content */}
                  <div>
                    <h4 className="font-bold text-[#243f3d] dark:text-white mb-1 group-hover/item:text-[#2f5e5a] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#243f3d]/70 dark:text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

