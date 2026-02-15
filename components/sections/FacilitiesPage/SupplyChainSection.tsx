"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Truck, GitBranch, Package } from "lucide-react";
import { useTranslations } from "next-intl";

interface NetworkFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SupplyChainSection() {
  const t = useTranslations("FacilitiesPage.supplyChain");

  const features: NetworkFeature[] = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: t("features.fleet.title"),
      description: t("features.fleet.description"),
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: t("features.locations.title"),
      description: t("features.locations.description"),
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: t("features.sorting.title"),
      description: t("features.sorting.description"),
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
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };



  return (
    <section className="bg-gradient-to-br from-[#243f3d] via-[#2f5e5a] to-[#243f3d] py-24 text-white overflow-hidden relative">
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



      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="text-emerald-400 dark:text-emerald-300 font-bold uppercase tracking-widest text-xs mb-4 block"
            >
              {t("badge")}
            </motion.span>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black mb-8"
            >
              {t("title")}
            </motion.h2>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex-shrink-0 flex items-center justify-center border border-white/20"
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-bold mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Image Container */}
            <motion.div
              className="aspect-square rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-full h-full rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8iOmG0s1zSrbahtpjB4mK5ndn7n03_3zH68yHrYcO1e8ftzi1MoRZPlx_2FyGWpgagHKZPWqLF9-QTyf4n9mQwxMSfGUPCVfc7qBkJDXcFSj8awPgYvWM9UC50Wfd6Q21Y81siIASuXaH3kbItvzyzGQcETqpzT5MstxhvKGLQw__gmwffD7fVgkJJz7nu3DxLVkU6Av9jGUfTQkNjh8hcD3GSCfI6WkScH-JwwDeY_1Lk3wGI_YjRCt4C6Me1TPWmAk3sF_meb0J')",
                  filter: "grayscale(70%) opacity(70%)",
                }}
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl text-[#243f3d] font-bold shadow-2xl border border-emerald-400/20"
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-sm uppercase tracking-tight opacity-90 mb-1"
                animate={{
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {t("badge2.coverage.label")}
              </motion.p>
              <motion.p
                className="text-3xl md:text-4xl"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {t("badge2.coverage.value")}
              </motion.p>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

