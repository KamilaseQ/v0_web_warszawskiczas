"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section className="py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Rozpocznij Rozmowę
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
            Znajdźmy Twój <span className="italic">idealny</span> czasomierz
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            Niezależnie czy szukasz konkretnego modelu, chcesz sprzedać zegarek, 
            czy potrzebujesz porady eksperta — jesteśmy do Twojej dyspozycji.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link href="/kontakt">
                Skontaktuj się
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+48000000000">
                Zadzwoń: +48 000 000 000
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-12 text-sm text-muted-foreground">
            Odpowiadamy w ciągu 24 godzin
          </p>
        </motion.div>
      </div>
    </section>
  );
}
