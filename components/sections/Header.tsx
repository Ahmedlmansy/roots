"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("layout.header");
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: t("home"), href: "/" },
    { name: t("facilities"), href: `/${locale}/facilities` },
    { name: t("our-products"), href: `/${locale}/our-products` },
    { name: t("production"), href: `/${locale}/production` },
    { name: t("quality"), href: `/${locale}/quality` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f2f4f2]/95 backdrop-blur-md border-b border-[#243f3d]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[140px] sm:w-[180px] lg:w-[220px] h-[50px] sm:h-[60px] lg:h-[80px] flex-shrink-0"
          >
            <Image
              src="/images/Logo_H.svg"
              alt="Roots Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm xl:text-base font-medium text-[#243f3d] hover:text-[#2f5e5a] transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2f5e5a] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher - Desktop */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-[#243f3d] hover:text-[#2f5e5a] hover:bg-[#9fbfba]/20"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side={locale === "ar" ? "left" : "right"}
                className="w-[300px] sm:w-[400px] bg-[#f2f4f2] border-l border-[#243f3d]/10"
              >
                <div className="flex flex-col gap-8 mt-8">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4">
                    {navlinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-[#243f3d] hover:text-[#2f5e5a] hover:translate-x-2 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#9fbfba]/20"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Language Switcher - Mobile */}
                  <div className="pt-4 border-t border-[#243f3d]/10">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

