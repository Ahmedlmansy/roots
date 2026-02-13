"use client";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";




export default function ColdChainSection() {
        const t = useTranslations("HomePage.ColdChainSection");

  // Animation Variants
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  //
  const titleLines = t("title").split("\n");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 bg-[#9fbfba]/30 text-[#243f3d] rounded-full text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                {t("badge")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-[#243f3d] dark:text-white"
            >
              {titleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            {/* Features List */}
            <ul className="space-y-3 sm:space-y-4">
              {(t.raw("items") as Array<{ title: string }>).map(
                (feature, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={featureVariants}
                    className="flex items-center gap-3 text-[#243f3d] dark:text-gray-300 font-semibold"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2f5e5a] flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.4 },
                      }}
                    >
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </motion.div>
                    <span className="text-sm sm:text-base">
                      {feature.title}
                    </span>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="order-1 md:order-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Background Accent */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#9fbfba]/40 to-[#2f5e5a]/30 rounded-xl -z-10 group-hover:from-[#9fbfba]/50 group-hover:to-[#2f5e5a]/40 transition-all duration-300" />

              {/* Image Container */}
              <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDBQortw5T2uox5wv-DTXb4foeNLFVkgi_3IUoqnBT8fpdsy0LEWzK0WiRACRMz3ntksSCIPa56Zz5FidNFalP_eaf3wiTnwmnzZ7AxCxjPG2lNckHmq_CEl0bQ9HA4wjoaCNdiHQNVpnp_seqa3YhTo9hBSJefcsNKYiK7FhMqnoKB8LqqiK6-9XWYYenZCrIeMWwy3x6juT--oAlZB73e6x7uaJQX_2AESFzD5sLEwR-59aZIg6tXVoOWVYNQsM8mSTX1D55VXyQ3"
                  }
                  alt={t("imageAlt")}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#243f3d]/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-[#2f5e5a]/0 group-hover:border-[#2f5e5a]/30 rounded-xl transition-all duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

