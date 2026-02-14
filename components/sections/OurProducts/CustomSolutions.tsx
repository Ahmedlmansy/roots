"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Package, Globe, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function CustomSolutions() {
  const t = useTranslations("OurProductsPage.customSolutions");

  const solutions: Solution[] = [
    {
      icon: <Package className="w-12 h-12" />,
      title: t("solutions.packaging.title"),
      description: t("solutions.packaging.description"),
      features: [
        t("solutions.packaging.features.retail"),
        t("solutions.packaging.features.bulk"),
        t("solutions.packaging.features.custom"),
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: t("solutions.logistics.title"),
      description: t("solutions.logistics.description"),
      features: [
        t("solutions.logistics.features.tracking"),
        t("solutions.logistics.features.handling"),
        t("solutions.logistics.features.standards"),
      ],
    },
  ];

  const certifications = [
    "ISO 22000",
    "HACCP Certified",
    "BRC Global",
    "IFS Food",
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
    <section
      className="py-24 bg-gradient-to-br from-[#243f3d] to-[#2f5e5a] text-white relative overflow-hidden"
      id="solutions"
    >
      {/* Background Pattern */}
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

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-5xl font-black mb-6"
          >
           <span>
                        <Image
                          src={"/images/Icon_W.png"}
                          width={50}
                          height={50}
                          alt="Icon"
                          className="ml-2 inline-block"
                        />{" "}
                      </span>
                      <span> {t("title")}</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-white/80 text-lg leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm group"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                y: -8,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="text-white/40 mb-6 group-hover:text-white/60 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {solution.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-200 transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Features List */}
              <ul className="text-sm text-white/60 space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                    <span className="group-hover:text-white/80 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="flex flex-wrap justify-center items-center gap-12"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="text-center font-bold text-xl"
                initial={{ opacity: 0.6, filter: "grayscale(100%)" }}
                whileHover={{
                  opacity: 1,
                  filter: "grayscale(0%)",
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

