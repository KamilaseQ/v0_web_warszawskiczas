"use client";

import { motion } from "framer-motion";

export function HiddenHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Dark atmospheric background */}
      <div className="absolute inset-0 bg-foreground" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-background/5 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-accent/10 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-background/50 mb-8">
            Dostęp ograniczony
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-background mb-8">
            Ukryta <span className="italic text-accent">Kolekcja</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto">
            Najrzadsze i najbardziej poszukiwane czasomierze, dostępne wyłącznie 
            dla wyselekcjonowanego grona kolekcjonerów.
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-background/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
