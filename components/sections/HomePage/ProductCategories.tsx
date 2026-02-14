"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

interface ProductCategory {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

export default function ProductCategories() {
  const t = useTranslations("HomePage.productCategories");
      const locale = useLocale();

  const categories: ProductCategory[] = [
    {
      title: t("fruits.title"),
      description: t("fruits.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyyFZ5p-JkSoOFNC6OiWcSShMet_nVUJHoQrO54yfumdnn05iJVRs_7EBQX9eYNBLLkvCVhDRGONfbsiEUc78r6jI2hAHRhBiHz9I9L7Q3nJIFy_yyzw1mZeyRh6BxR31A3L4snUSUtdi81D1Q46klRDjvxuChIoJDXrZiW6kttoUSg9I8Um8cg7PKMcV3jSl631llMLHcm-s9t-WsmM0OitiKPPBfL4bRNCmIM-YIm8Hw6_g7Oj_XyGgAc2tczczVlucXQE7YlrDa",
      alt: "Close up of fresh frozen strawberries and blueberries",
      link: `/${locale}/our-products`,
    },
    {
      title: t("vegetables.title"),
      description: t("vegetables.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQHx4dct1jKTUD1gbu7KboJC2Ho775ovpD4ozX6tLsFNR7xz8q0kqtXhb-nf780f5tTpB9M5Zf_hTrhe4AOzZkNuQHMnxk7AK7-AO8jGTtorZE7LdZTmWEQsu2aUW2UAicL7UuEOOvl-aM3RvGltrykYUczCJJzzd6KnN2m4MShgtczLZQZvffLUv6RBao7uUxNrNqT1tlCTlWYjCFNrI-NCpUQnMDdjXJy_NF22c7A2s-0x6SZqF9rda4NmPGhg5qaOyGqxQcYfGY",
      alt: "Frozen vibrant green peas and mixed vegetables",
      link: `/${locale}/our-products`,
    },
    {
      title: t("fries.title"),
      description: t("fries.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbjzF1c52k2WD7PwVNQpnjFkdSzkbgTFmfpIT06A_zIGNCBnrnVA7gshHaQz1tbAIE4UofSrga2ov4mnAUvM3y_pqzqSRJV5AQMx9yx5f6-rH32gJqv4i9C6VMMIEuIY87VmpElhN2qeaDlM92OqwV6OFZycsMjO9ax6Mw35cFffFPVjscUETNHnZkyho4K-b7Xgb0N_AnHxMu7_E6J9D6nj9RK94ZSR_NBBPuQHbXqgvj810ixeLAsQxZb3CLByCNyNb45_RbP-Hi",
      alt: "Crispy golden frozen french fries ready for frying",
      link: `/${locale}/our-products`,
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

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center  mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-4 text-[#2f5e5a] dark:text-white flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span> <Image src={"/images/Icon.png"} width={50} height={50} alt="Icon" className="ml-2 inline-block" /> </span>
            <span> {t("sectionTitle")}</span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("sectionDescription")}
          </motion.p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                {/* Image Container */}
                <div className="h-72 overflow-hidden relative">
                  <motion.img
                    alt={category.title}
                    className="w-full h-full object-cover"
                    src={category.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {t("viewRange")}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#000] dark:text-white group-hover:text-[#2f5e5a] dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-black dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* CTA Link */}
                  <Link href={category.link}>
                    <motion.div
                      className="inline-flex items-center gap-2 text-[#2f5e5a] dark:text-blue-400 font-bold group/link"
                      whileHover={{ gap: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t("viewRange")}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

