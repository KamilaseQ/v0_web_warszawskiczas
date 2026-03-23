"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Usługi
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Kompleksowa <span className="italic">obsługa</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Oferujemy pełen zakres usług dla posiadaczy luksusowych zegarków. 
            Od profesjonalnego serwisu, przez skup, po dyskretny komis — 
            jesteśmy z Tobą na każdym etapie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
