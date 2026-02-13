import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // انتظر الـ locale
  let locale = await requestLocale;

  // لو مفيش locale، استخدم العربية
  if (!locale) {
    locale = "ar";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
