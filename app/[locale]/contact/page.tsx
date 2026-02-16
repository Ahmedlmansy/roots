import FormContact from '@/components/sections/ContactPage/FormContact';
import HeroContact from '@/components/sections/ContactPage/HeroContact';
import SidebarAndMap from '@/components/sections/ContactPage/SidebarAndMap';
import React from 'react'

export default function Contact() {
  return (
    <div>
      {/* Hero Contact */}
      <HeroContact />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
          <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
            <FormContact />
            <SidebarAndMap />
          </div>
        </section>
      </main>
    </div>
  );
}
