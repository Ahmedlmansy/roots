'use client';

import React, { useState } from 'react';
import { motion, Variants } from "framer-motion";

import { useTranslations } from 'next-intl';



export default function FormContact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            className="rounded-2xl bg-white dark:bg-white/5 p-8 shadow-lg ring-1 ring-[#2f5e5a]/10 dark:ring-[#2f5e5a]/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-sm font-semibold leading-6 text-[#243f3d] dark:text-white"
                  htmlFor="name"
                >
                  {t("form.name.label")}
                </label>
                <div className="mt-2.5">
                  <input
                    className="block w-full rounded-lg border-0 px-3.5 py-4 text-[#243f3d] dark:text-white dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#2f5e5a]/20 placeholder:text-[#243f3d]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#2f5e5a] sm:text-sm sm:leading-6 transition-all"
                    id="name"
                    name="name"
                    placeholder={t("form.name.placeholder")}
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-sm font-semibold leading-6 text-[#243f3d] dark:text-white"
                  htmlFor="email"
                >
                  {t("form.email.label")}
                </label>
                <div className="mt-2.5">
                  <input
                    className="block w-full rounded-lg border-0 px-3.5 py-4 text-[#243f3d] dark:text-white dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#2f5e5a]/20 placeholder:text-[#243f3d]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#2f5e5a] sm:text-sm sm:leading-6 transition-all"
                    id="email"
                    name="email"
                    placeholder={t("form.email.placeholder")}
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-sm font-semibold leading-6 text-[#243f3d] dark:text-white"
                  htmlFor="phone"
                >
                  {t("form.phone.label")}
                </label>
                <div className="mt-2.5">
                  <input
                    className="block w-full rounded-lg border-0 px-3.5 py-4 text-[#243f3d] dark:text-white dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#2f5e5a]/20 placeholder:text-[#243f3d]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#2f5e5a] sm:text-sm sm:leading-6 transition-all"
                    id="phone"
                    name="phone"
                    placeholder={t("form.phone.placeholder")}
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-sm font-semibold leading-6 text-[#243f3d] dark:text-white"
                  htmlFor="message"
                >
                  {t("form.message.label")}
                </label>
                <div className="mt-2.5">
                  <textarea
                    className="block w-full rounded-lg border-0 px-3.5 py-4 text-[#243f3d] dark:text-white dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#2f5e5a]/20 placeholder:text-[#243f3d]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#2f5e5a] sm:text-sm sm:leading-6 transition-all resize-none"
                    id="message"
                    name="message"
                    placeholder={t("form.message.placeholder")}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  className="w-full rounded-lg bg-gradient-to-r from-[#243f3d] to-[#2f5e5a] px-6 py-4 text-center text-sm font-bold text-white shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f5e5a] transition-all"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {t("form.submit")}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
  );
};

