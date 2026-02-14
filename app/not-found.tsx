// app/not-found.tsx
import NotFoundPage from "@/components/NotFoundClient";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./styles/globals.css";
import "./styles/index.css";

export default async function NotFound() {
     const messages = await getMessages();
   return (
     <NextIntlClientProvider messages={messages}>
       <NotFoundPage />
     </NextIntlClientProvider>
   );
}
