"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import MapPlacehoder from "./MapPlacehoder";
export default function SidebarAndMap() {
  const t = useTranslations("contact");

  interface ContactMethod {
    icon: React.ReactNode;
    title: string;
    content: string;
    subcontent?: string;
    href?: string;
  }
  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("methods.email.title"),
      content: t("methods.email.content"),
      href: "mailto:info@rootsfoodsco.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("methods.phone.title"),
      content: t("methods.phone.content"),
      subcontent: t("methods.phone.hours"),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("methods.location.title"),
      content: t("methods.location.content"),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.div
      className="flex flex-col justify-between space-y-12"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Contact Details */}
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex gap-x-4 group"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2f5e5a]/10 dark:bg-[#2f5e5a]/20 text-[#2f5e5a] flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {method.icon}
            </motion.div>
            <div>
              <h3 className="text-base font-bold leading-7 text-[#243f3d] dark:text-white group-hover:text-[#2f5e5a] transition-colors duration-300">
                {method.title}
              </h3>
              {method.href ? (
                <p className="mt-1 leading-7">
                  <a
                    className="text-[#243f3d]/70 dark:text-white/70 hover:text-[#2f5e5a] font-medium underline underline-offset-4 transition-colors"
                    href={method.href}
                  >
                    {method.content}
                  </a>
                </p>
              ) : (
                <p className="mt-1 leading-7 text-[#243f3d]/70 dark:text-white/70 font-medium">
                  {method.content}
                </p>
              )}
              {method.subcontent && (
                <p className="text-sm text-[#243f3d]/50 dark:text-white/50 mt-1">
                  {method.subcontent}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

<MapPlacehoder/>     
    </motion.div>
  );
}
