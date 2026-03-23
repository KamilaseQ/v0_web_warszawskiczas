"use client";

import { motion } from "framer-motion";

export function OfferHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Kolekcja
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Wyselekcjonowana <span className="italic">oferta</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Każdy zegarek w naszej kolekcji został starannie wybrany i zweryfikowany. 
            Oferujemy tylko oryginalne czasomierze najwyższej jakości.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
