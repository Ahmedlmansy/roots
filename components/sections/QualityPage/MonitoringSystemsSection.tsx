"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Thermometer, Search, ScanSearch } from "lucide-react";
import { useTranslations } from "next-intl";

interface MonitoringSystem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  progress: number;
  status: {
    left: string;
    right: string;
    color?: string;
  };
  image: string;
  alt: string;
}

export default function MonitoringSystemsSection() {
  const t = useTranslations("QualityPage.monitoringSystems");

  const systems: MonitoringSystem[] = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: t("systems.coldChain.title"),
      subtitle: t("systems.coldChain.subtitle"),
      progress: 94,
      status: {
        left: t("systems.coldChain.current"),
        right: t("systems.coldChain.target"),
      },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPG5-MJ7WWuv1M-kY7LZcIq8K5rmyT7gw1RWO13S2YtCiOG3Wc5saRGLM1KDS_GK2nY6wg0Jb2ZXNAEXIM9iiFRsgjevzoY6fCg62T_-h289gzyHAR8BHbXGdWOqz5CUZI8-cmy0sHuENVcEQb4uX19_5zyz5vfsRZG26eefHnVGSqIY6H3XMG_EhugfDp_oB3hg4P8NGoXCvMU5iXE7ghiNA4T2q_DsWh2XjdsO5Q-Z37JVklobboAaINXrRsTNvM3Jzt9Sfg9v21",
      alt: "Digital monitoring screen showing temperature graphs",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t("systems.microbial.title"),
      subtitle: t("systems.microbial.subtitle"),
      progress: 100,
      status: {
        left: t("systems.microbial.batch"),
        right: t("systems.microbial.status"),
        color: "text-green-600",
      },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHWI8dZg3vKIgM6itXtC2Umpahub9D2vRQ9Cak9Ac3eig-75hs_x7YrXmLHA9P2o9KPJoZsUwLvtCd6iUfQeYN3ceNqM-ODwULRIOTi3X2LBkgCcoHKIp_RvuWvoTIsONZyVzk3TJNDUany7AGxbAE5h3e-XmMqkzV7t0sr47Gd2FzZJ3dWZzP90F8yhOBXybpPucZFLEGB7hqnDVgcdfjs7MMbw3Ti8MMTevfBLwFh1TTdIWNrLffjpQEtqITfMqThCdklteH8VAC",
      alt: "Scientist working in a sterile laboratory environment",
    },
    {
      icon: <ScanSearch className="w-6 h-6" />,
      title: t("systems.detection.title"),
      subtitle: t("systems.detection.subtitle"),
      progress: 98,
      status: {
        left: t("systems.detection.label"),
        right: t("systems.detection.value"),
      },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEh0qht5d5jWA8quBi1eVBP2Gl0Q9wp12Twtfg98pKfBwex2jIqnifNm0434iTPfAKaXwtvBIOxkrZCw2oNnIT8w14hueldSmQGyMYwsuxA_TXS4KfpcCD7rwbWK70Zd0okeQDEv1Gj-qx23jBghfiD64Y_ILQ-an7dIw-fWEsDVIOrHvG2EhtJfELgTu4t2BgNf4xnQGZH1Q1VDeFNCZGBeRgtloUnmu5D68jOGDHhFIayNGSbSZURh7o9ihxIvXD3cL6rNQumt1T",
      alt: "Close up of a high tech scanner on a food production line",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    <section className="px-6 md:px-20 py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={headerVariants}
            className="text-4xl md:text-5xl font-black mb-6 text-[#243f3d] dark:text-white"
          >
            {t("title")}
          </motion.h3>
          <motion.p
            variants={headerVariants}
            className="text-lg text-[#243f3d]/60 dark:text-white/60 leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {systems.map((system, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-white/5 rounded-2xl shadow-xl overflow-hidden border border-[#2f5e5a]/10 dark:border-[#2f5e5a]/20 group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="font-bold text-xl text-[#243f3d] dark:text-white mb-1 group-hover:text-[#2f5e5a] transition-colors duration-300">
                      {system.title}
                    </h4>
                    <p className="text-sm text-[#243f3d]/60 dark:text-white/60">
                      {system.subtitle}
                    </p>
                  </div>
                  <motion.div
                    className="text-[#2f5e5a]/50"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {system.icon}
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-4">
                  <div className="h-2 bg-[#2f5e5a]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#243f3d] to-[#2f5e5a]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${system.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>

                  {/* Status */}
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#243f3d] dark:text-white">
                    <span>{system.status.left}</span>
                    <span className={system.status.color || ""}>
                      {system.status.right}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  alt={system.title}
                  className="w-full h-full object-cover"
                  src={system.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

