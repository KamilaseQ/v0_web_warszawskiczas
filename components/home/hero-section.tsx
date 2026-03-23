"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-border/30" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-border/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Butik Mokotowska 71
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-8">
              Gdzie czas spotyka się z{" "}
              <span className="italic">elegancją</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
              Ekskluzywna kolekcja luksusowych zegarków i biżuterii, starannie wyselekcjonowana dla koneserów. 
              Odkryj wyjątkowe czasomierze w sercu Warszawy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="premium" size="lg">
                <Link href="/oferta">
                  Odkryj Kolekcję
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ukryta-kolekcja">
                  Ukryta Kolekcja
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-7 lg:pl-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              {/* Premium placeholder - editorial composition */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary/80" />
              
              {/* Overlapping frames for editorial effect */}
              <div className="absolute top-8 left-8 right-8 bottom-8 border border-border/40" />
              <div className="absolute top-16 left-16 right-16 bottom-16 border border-accent/20" />
              
              {/* Central content placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-border/50 flex items-center justify-center">
                    <span className="font-serif text-3xl text-muted-foreground">WC</span>
                  </div>
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                    Luksusowe Zegarki
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Przewiń
            </span>
            <motion.div 
              className="w-px h-12 bg-border"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
