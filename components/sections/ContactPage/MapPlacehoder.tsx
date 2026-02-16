"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css"; 
import MapContent from "./MapContent";

export default function MapPlaceholder() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const position: [number, number] = [30.29264930331252, 31.822232362096496];

useEffect(() => {
  setMapLoaded(true);

  if (typeof window !== "undefined") {
    import("leaflet").then((L) => {
      // Fix للأيقونات - حل بدون any
      const iconProto = L.Icon.Default
        .prototype as typeof L.Icon.Default.prototype & {
        _getIconUrl?: () => string;
      };
      delete iconProto._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
  }
}, []);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-[#2f5e5a]/10 aspect-video md:aspect-auto md:flex-1 shadow-lg ring-1 ring-[#2f5e5a]/10"
      style={{ minHeight: "400px" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {!mapLoaded ? (
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-[#2f5e5a]">جاري تحميل الخريطة...</p>
        </div>
      ) : (
        <MapContent position={position} />
      )}
    </motion.div>
  );
}



// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2147.2296790855603!2d31.668126551088587!3d31.42572277002698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855e126df199d%3A0x24a6cf9d2fda5678!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1771269033463!5m2!1sen!2seg" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
