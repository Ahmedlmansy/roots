"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Gauge, Activity, Microscope } from "lucide-react";
import { useTranslations } from "next-intl";

interface MetricCard {
  terminalId: string;
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string;
  unit?: string;
  footer: {
  text: string;
  color: string;
  };
  progress?: number;
}

export default function ProductionMetricsSection() {
  const t = useTranslations("ProductionPage.productionMetrics");

  const metrics: MetricCard[] = [
    {
      terminalId: t("cards.temperature.id"),
      icon: <CheckCircle2 className="w-5 h-5" />,
      iconColor: "text-green-600",
      label: t("cards.temperature.label"),
      value: t("cards.temperature.value"),
      unit: "",
      footer: {
        text: "",
        color: "",
      },
      progress: 94,
    },
    {
      terminalId: t("cards.throughput.id"),
      icon: <Gauge className="w-5 h-5" />,
      iconColor: "text-[#2f5e5a]/40",
      label: t("cards.throughput.label"),
      value: t("cards.throughput.value"),
      unit: t("cards.throughput.unit"),
      footer: {
        text: t("cards.throughput.footer"),
        color: "text-green-600",
      },
    },
    {
      terminalId: t("cards.sensors.id"),
      icon: <Activity className="w-5 h-5" />,
      iconColor: "text-[#2f5e5a]/40",
      label: t("cards.sensors.label"),
      value: t("cards.sensors.value"),
      unit: "",
      footer: {
        text: t("cards.sensors.footer"),
        color: "text-[#243f3d]/40",
      },
    },
    {
      terminalId: t("cards.nutrient.id"),
      icon: <Microscope className="w-5 h-5" />,
      iconColor: "text-[#2f5e5a]/40",
      label: t("cards.nutrient.label"),
      value: t("cards.nutrient.value"),
      unit: "",
      footer: {
        text: t("cards.nutrient.footer"),
        color: "text-green-600",
      },
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
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
    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl border-l-4 border-[#2f5e5a] group"
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#243f3d]/40 dark:text-white/40">
                {metric.terminalId}
              </span>
              <motion.div
                className={metric.iconColor}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {metric.icon}
              </motion.div>
            </div>

            {/* Label */}
            <p className="text-sm font-medium text-[#243f3d]/60 dark:text-white/60 mb-1">
              {metric.label}
            </p>

            {/* Value */}
            <h3 className="text-4xl font-bold tracking-tight text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
              {metric.value}
              {metric.unit && (
                <span className="text-xl ml-1">{metric.unit}</span>
              )}
            </h3>

            {/* Progress Bar */}
            {metric.progress && (
              <div className="mt-4 w-full bg-[#2f5e5a]/10 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="bg-[#2f5e5a] h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            )}

            {/* Footer */}
            {metric.footer.text && (
              <p
                className={`text-[10px] font-bold mt-2 ${metric.footer.color}`}
              >
                {metric.footer.text}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

