"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function RepairHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/uslugi"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Wszystkie usługi
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Usługi
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Naprawa i <span className="italic">serwis</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Twój zegarek zasługuje na najlepszą opiekę. Oferujemy profesjonalny 
              serwis luksusowych czasomierzy z wykorzystaniem oryginalnych części 
              i wieloletniego doświadczenia.
            </p>
          </div>

          {/* Visual placeholder */}
          <div className="aspect-square bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-border/50 flex items-center justify-center">
                  <span className="font-serif text-2xl text-muted-foreground/50">S</span>
                </div>
                <p className="text-sm tracking-wider uppercase text-muted-foreground/50">
                  Serwis
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
