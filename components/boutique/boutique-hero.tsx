"use client";

import { motion } from "framer-motion";

export function BoutiqueHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with warm overlay */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />

      {/* Decorative frame */}
      <div className="absolute inset-8 lg:inset-16 border border-border/30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8">
            Mokotowska 71, Warszawa
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
            Nasz <span className="italic">butik</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ekskluzywna przestrzeń w sercu warszawskiego Mokotowa, 
            gdzie pasja do zegarmistrzostwa spotyka się z dyskretną elegancją.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
