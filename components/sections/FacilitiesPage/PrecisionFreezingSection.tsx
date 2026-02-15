"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Snowflake, Wind, Activity } from "lucide-react";
import { useTranslations } from "next-intl";

interface FreezingSystem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function PrecisionFreezingSection() {
  const t = useTranslations("FacilitiesPage.precisionFreezing");

  const systems: FreezingSystem[] = [
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: t("systems.iqf.title"),
      description: t("systems.iqf.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-OK9Ir9hOHZ1gKf8WvLD36Jlw2C5sMm7fQIJdu-HNtewBFYQ7u5uNimiEuJsKJo19Hd9aZT6LVUpZav53jnQpwixY_L_JB7OMPhPyjwPPWYu7WbGgmzaV0WhVTmz6kxRna_vlAOYR8WiKZoaN4ec8SRaGblYxJbihnJgJFJW-DRYd1PySP72P-Dkm5dA0j9hf0wvzg6M8g3cC6j8niSn6wJRFReqF2g-NCGX4A6g9JhCD3GTuepnAWtLFLwidcjfNXoedMM3pt0iI",
      alt: "Close up of stainless steel IQF freezing machinery",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: t("systems.blast.title"),
      description: t("systems.blast.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB1k-PuYU9F-N4BU7Tt4xBDd2ALOJseCfwsxcaUQatv-LFQdtMCTKA5HduTHKkdEO6d7c4TEFkAU1LQAaw6jkWN9EHzviju-H7aml1hM6g-2tlt1d8ku9YSDNRyyMmFyXLhy4bS2dx5Uq3FAjU8nLcctynP0Fnd27vLQCzCzM4nfHRD77sSEYi00K8R7rpC9C4j6w1IaDqS5n8YPCSAV_HjiDb9fwHrQXxYrUOqT4Z9TQWBKw63nSAZsFUVmkZPI7Sa1suc7l0Eqi3x",
      alt: "Interior of a large industrial blast freezer unit",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: t("systems.monitoring.title"),
      description: t("systems.monitoring.description"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8rWxuecfXuMdzSx3mDyMEVapZHZu1x_UWbDuR9gr6pNMMMKMHDYV0bX80tGKfL-sG7UsKxF5_9mGrprvYlHBNiPG1b0ckuhuPHX4KfyneM9wojruak0JNj57kZ_VukL3n3Y0T_6-5YfpddyHTXm2x6-ST69zNTdoV7g6sIS_DZygkrMFMmqU0aFtcdtr-xzs9ccwO34CgfV6noyI4wbpatiqvTEY3Vec_CGFKejWfigQtiNMrDN88qj8k4MyEyXC02U5WLuFj1s2",
      alt: "Dashboard showing temperature monitoring data analytics",
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
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={headerVariants}
          className="text-[#243f3d] dark:text-white text-4xl md:text-5xl font-black mb-4"
        >
          {t("sectionTitle")}
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="text-[#243f3d]/70 dark:text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {t("sectionDescription")}
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {systems.map((system, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 shadow-lg hover:shadow-2xl transition-all"
            whileHover={{
              y: -8,
              borderColor: "rgba(47, 94, 90, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            <motion.div
              className="w-16 h-16 bg-[#2f5e5a]/10 dark:bg-[#2f5e5a]/20 rounded-xl flex items-center justify-center text-[#2f5e5a] mb-6"
              whileHover={{
                backgroundColor: "#2f5e5a",
                color: "#ffffff",
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              {system.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
              {system.title}
            </h3>

            {/* Description */}
            <p className="text-[#243f3d]/70 dark:text-white/70 text-sm leading-relaxed mb-6">
              {system.description}
            </p>

            {/* Image */}
            <motion.div
              className="h-40 rounded-xl bg-cover bg-center overflow-hidden relative"
              style={{ backgroundImage: `url('${system.image}')` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/40 to-transparent group-hover:from-[#243f3d]/20 transition-all duration-300" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

