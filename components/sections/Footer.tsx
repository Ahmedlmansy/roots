"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";



export default function Footer() {
    const t = useTranslations("layout.footer");
      const locale = useLocale();
    
    const currentYear = new Date().getFullYear();

    const footerLinks = {
      company: [
        { name: t("contact"), href: `/${locale}/contact` },
        { name: t("about"), href: `/${locale}/about` },
        { name: t("quality"), href: `/${locale}/quality` },
      ],
      products: [
        { name: t("facilities"), href: `/${locale}/facilities` },
        { name: t("our-products"), href: `/${locale}/our-products` },
        { name: t("production"), href: `/${locale}/production` },
      ],
    };
  return (
    <footer className="bg-[#f2f4f2] border-t border-[#243f3d]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <div className="h-12 w-48 relative flex items-center">
              {/*  Logo */}
              <div className="text-[#243f3d] font-bold text-2xl tracking-tighter flex items-center gap-2">
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
              </div>
            </div>
            <p className="text-[#2f5e5a] text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#243f3d] font-bold text-base mb-6">
              {t("company")}
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#2f5e5a] text-sm hover:text-[#243f3d] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-[#243f3d] font-bold text-base mb-6">
              {t("products")}
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#2f5e5a] text-sm hover:text-[#243f3d] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#243f3d] font-bold text-base mb-6">
              {t("title")}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[#2f5e5a] text-sm">
                <Mail className="h-4 w-4 text-[#9fbfba]" />
                <a
                  href={`mailto:${t("email")}`}
                  className="hover:text-[#243f3d] transition-colors"
                >
                  {t("email")}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#2f5e5a] text-sm">
                <Phone className="h-4 w-4 text-[#9fbfba]" />
                <a
                  href={`tel:${t("phone")}`}
                  className="hover:text-[#243f3d] transition-colors"
                >
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#2f5e5a] text-sm">
                <MapPin className="h-4 w-4 text-[#9fbfba] mt-0.5" />
                <span>{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#243f3d]/5 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-[#9fbfba] text-xs font-medium">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}

