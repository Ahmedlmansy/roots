"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(`/${newLocale}${pathname.replace(/^\/(en|ar)/, "")}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-[#243f3d]/20 bg-white/50 hover:bg-[#9fbfba]/20 hover:border-[#2f5e5a] text-[#243f3d] transition-all duration-300"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {locale === "en" ? "English" : "عربي"}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[150px] bg-[#f2f4f2] border-[#243f3d]/10"
      >
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          disabled={locale === "en"}
          className="cursor-pointer hover:bg-[#9fbfba]/20 focus:bg-[#9fbfba]/30 disabled:opacity-50 disabled:cursor-not-allowed text-[#243f3d]"
        >
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => switchLanguage("ar")}
          disabled={locale === "ar"}
          className="cursor-pointer hover:bg-[#9fbfba]/20 focus:bg-[#9fbfba]/30 disabled:opacity-50 disabled:cursor-not-allowed text-[#243f3d]"
        >
          عربي
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
