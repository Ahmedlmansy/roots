"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface GalleryImage {
  image: string;
  alt: string;
  className: string;
}

export default function IndustrialPuritySection () {
  const t = useTranslations("FacilitiesPage.industrialPurity");
  const locale = useLocale();

  const images: GalleryImage[] = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQfsiYdUpYeQHCC5-iewj_4NtqTa3KYAmutip2u1V28E9ZA8Lwt8wLNsTWIIAF-j_lAPE2fDBGD1NVA7ZQTO2-VD8osg8fBcdHQy6HuP2UKGs-03poTjdNevuQGLz4fiRD7250XXR5L4R98Q3minxnGvmk9Ftci4Sf_QYO_u83M4B8HpoRvN1FesuhHyEH-RfEt6zb6PLE-fNZNQsk1JOLGVBc9X3GbV4qR30gqZ7CC895Zq1Bz3OF83BrQtnzU6AsCGcCByDrTqNZ",
      alt: "Large scale industrial stainless steel production line",
      className: "col-span-2 row-span-2 h-[500px]",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVX6Y_sqU0ts4_J2aUdHm_9pm4nUEeqm_P53oH6tyE_SpORs05ESI5Y1VPFrHufuZJAC2mFtjZSG_UJDW3zMozKKsU9MUFjCshQcUCxaNTxDqdfdpT-Y2bit8HYekg16xOgbNo6hmycEgcRULMZ1ER4G2zG-ndANGj0yd58lYo7OIphnZkqqEyhch_Lb91kZsl62LhkChqhkDMelaG7z8UqQ8AZoh44J2V1X6rN2S1eS37yXS84Oq3MX1-KXekaaEhsxeFCV1s_JgP",
      alt: "Close up of high quality food grade valves",
      className: "h-[242px]",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2mviHp_GkcC1zo08l3i5aDJUuCn5ptZ7Aq2kcEokY_UFGBCTq-tSfI1EPzQRNd3f8iESEpFp_MlpHlZK1Q3vD88E7X1A0APPq_B6Z7dFXoPW8BCBzeYVJr_E4xu1Af4bnq5LBnDAraHXrjX5E-fVDfJjGFGckY05b99aptMntNGlIDrvqZEYVScadZRdKxfuuXDAmVCdB63L6xRSzDq2IrNYH6IefHX_KtP21X1jOhP7a4w4CoNKR134ezSYZ_ddrl-aRmQpxD4Go",
      alt: "Clean industrial warehouse environment",
      className: "h-[242px]",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLhCbtBFrZTnEbHSOBq7pfFSDlZB0hIj2EVOkz1XfjSOrMw0h2D07Qy33nGmlGICrrE7MpGMwhMq0Fgsz7oZ97x4DyjwR3Eh4mOERrmkBEfVKA0_N2T8SIy-NBadN0qrEqYKryfymX1TG6V6BhgfEuzk_BS9OxMN7Y5Ik4SpWIKxi405tF7ih9LueBW7YZ1ooYvYrlNxM3CqfYEGNs4tx4njJBQh3kx_QfsGa__W6-S1jYbG6z5EOjw83_r0aWd_cgd0iOn7DIq8Pt",
      alt: "Wide shot of massive warehouse racking system",
      className: "col-span-2 h-[242px]",
    },
  ];

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div>
          <motion.h2
            variants={headerVariants}
            className="text-[#243f3d] dark:text-white text-4xl md:text-5xl font-black mb-2"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-[#243f3d]/70 dark:text-white/70 text-lg"
          >
            {t("description")}
          </motion.p>
        </div>

        <Link href={`/${locale}/quality`}>
          <motion.div
            className="text-[#2f5e5a] font-bold flex items-center gap-2 group cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {t("linkText")}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            className={`${item.className} rounded-2xl bg-cover bg-center shadow-lg overflow-hidden relative group`}
            style={{ backgroundImage: `url('${item.image}')` }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover Info */}
            <motion.div
              className="absolute inset-0 flex items-end p-6"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white text-sm font-semibold leading-tight">
                {item.alt}
              </p>
            </motion.div>

            {/* Border on Hover */}
            <motion.div className="absolute inset-0 border-2 border-[#2f5e5a] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

