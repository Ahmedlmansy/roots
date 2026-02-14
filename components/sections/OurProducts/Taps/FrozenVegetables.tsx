"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface VegetableFeature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function FrozenVegetables() {
  const t = useTranslations("OurProductsPage.TabFrozenVegetables");
const locale = useLocale();
  const features: VegetableFeature[] = [
    {
      title: t("features.harvest.title"),
      description: t("features.harvest.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRzyExn1xBWy7j_-5jslrxAGXnNdOD1ay6y8e1viZmhYyIPEfpPWPApUza4zdS5cJxXq_I7C69H7BZqh88NkCCI99zh6PuKl5JVjTOLBAXkNPQSgUR0KbXH71b8qE-Rsp1NUgLUicuXu60crWqXRESjJ2-DBfDmnZAoqyeOVIpe4CmgJ-ufOsWAjzvRY2J8sK9xGc35nnsgRKh-iRMFMHqFXamCrtcrNLVvsLCj__ktKoJPPtx-WWX31CHVhC6q8BZxjD5W6ZuKbjn",
      alt: "Freshly frozen green peas in bulk packaging",
    },
    {
      title: t("features.sorting.title"),
      description: t("features.sorting.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGCN-GmbSQ9Xp4R9vtRRZcWUJpueFfJKzM5rRy4h5_tap7aUrUQGaNSMx12ur9pDDtGK8zFg0gvwRGqk8pKecko3BzbLg3G_K4hAcQgpmQlfoM3KBO13IalRzY-FzDWNu1KgCg4THbQhPnO6ZGjBfo9w5rIXVx9wZuYcXy-0Rr4CKzLUt20VkSvidK5Ym2aROReRsRdlJLcr21xiuP0ED3U0h7LJfLnxqdN5fgPWxq-VCPFXRPoRcNgDYaqEkezPJz1IsSnLNqP_f2",
      alt: "Close up of high-tech vegetable processing facility",
    },
    {
      title: t("features.cleanLabel.title"),
      description: t("features.cleanLabel.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBl-l8HFnoLOfzG9vaY0E92mpI3GUA1e6uJ8-eaxJvujhbpcu08xVaVN8pS6AqQq4ck-lxhmz4VpK1uZ4MljsLMiV6dWwPzEo7RcjtfNNOMJkR6E0gNB21VgBiU43PZ1lcgkTLx6or8zinRcvdWFnpTih3-bp0V1BqSZAyJJnqb-QOpPmoMt5FgGlMz1ae5SQwNLMK26fvUAj2J7PHRBGNIaVIAvMoBXNZRsp5lUW4FhzgIRFZsjQNd3jHxn9SxRBEE6M-d8xgOHIXQ",
      alt: "Sorted and sliced frozen carrots ready for transport",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const headerVariants: Variants = {
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

  return (
    <section className="py-20  dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto mb-12 text-center"
          dir={locale === "ar" ? "rtl" : "ltr"}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-black text-[#243f3d] dark:text-white mb-4 flex items-center justify-center gap-2"
            variants={headerVariants}
          >
            <span>
              <Image
                src={"/images/Icon.png"}
                width={50}
                height={50}
                alt="Icon"
                className="ml-2 inline-block"
              />{" "}
            </span>
            <span> {t("title")}</span>
          </motion.h2>
          <motion.p
            className="text-[#243f3d]/70 dark:text-white/70 text-lg leading-relaxed"
            variants={headerVariants}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-[#2f5e5a]/10 hover:border-[#2f5e5a]/30 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <motion.div
                className="h-48 rounded-xl bg-cover bg-center mb-6 overflow-hidden"
                style={{ backgroundImage: `url('${feature.image}')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full bg-gradient-to-t from-[#243f3d]/20 to-transparent group-hover:from-[#243f3d]/10 transition-all duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-[#243f3d]/70 dark:text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

