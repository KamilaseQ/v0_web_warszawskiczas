"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="pt-32 pb-8 lg:pt-40 lg:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Kontakt
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Porozmawiajmy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Niezależnie czy szukasz konkretnego zegarka, chcesz sprzedać swój czasomierz, 
            czy po prostu masz pytania — jesteśmy do Twojej dyspozycji.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
