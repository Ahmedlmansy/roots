"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocale, useTranslations } from "next-intl";
import FrozenFruits from "./Taps/FrozenFruits";
import FrozenVegetables from "./Taps/FrozenVegetables";
import FrozenFries from "./Taps/FrozenFries";

export default function ProductTabs() {
  const t = useTranslations("OurProductsPage.productTabs");
const locale = useLocale();
  const tabs = [
    { value: "frozen-fruits", label: t("tabs.frozenFruits") },
    { value: "vegetables", label: t("tabs.vegetables") },
    { value: "french-fries", label: t("tabs.frenchFries") },
  ];

  return (
    <section className=" to-slate-50 dark:from-slate-900 dark:to-slate-800 py-5 container mx-auto">
      <div className="w-full mx-auto px-5">
        <Tabs defaultValue="frozen-fruits" className="w-full">
          {/* Tabs Navigation */}
          <TabsList
            className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-700 rounded-none h-auto pb-11 gap-0 justify-start mb-12"
            variant="line"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.value}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TabsTrigger
                  value={tab.value}
                  className="
                  pt-10 pb-3 px-1  sm:px-10 text-[18px] font-sm font-bold 
  "
                >
                  {tab.label}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          {/* Tab Contents */}
          <TabsContent
            value="frozen-fruits"
            className="mt-0"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <FrozenFruits />
          </TabsContent>

          <TabsContent
            value="vegetables"
            className="mt-0"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <FrozenVegetables />
          </TabsContent>

          <TabsContent
            value="french-fries"
            className="mt-0"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <FrozenFries />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

