"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Shield, Banknote, Clock } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Bezpieczna transakcja" },
  { icon: Banknote, label: "Uczciwa wycena" },
  { icon: Clock, label: "Szybka realizacja" },
];

export function PurchaseHero() {
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
          className="max-w-3xl"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Usługi
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Skup <span className="italic">zegarków</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Oferujemy uczciwy skup luksusowych zegarków. Transparentne warunki, 
            bezpłatna wycena i natychmiastowa płatność. Twoja satysfakcja i bezpieczeństwo 
            są dla nas priorytetem.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
