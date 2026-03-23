"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function ConsignmentHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/30">
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
              Komis <span className="italic">zegarków</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sprzedaj swój zegarek z naszą pomocą i uzyskaj najlepszą cenę. 
              Dzięki naszej sieci kontaktów docieramy do wyselekcjonowanego 
              grona kolekcjonerów szukających wyjątkowych czasomierzy.
            </p>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "15%", label: "Minimalna prowizja" },
              { value: "30", label: "Dni ekspozycji" },
              { value: "100%", label: "Bezpieczeństwo" },
              { value: "1000+", label: "Kolekcjonerów" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-background p-6 border border-border"
              >
                <span className="block font-serif text-3xl text-accent mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
