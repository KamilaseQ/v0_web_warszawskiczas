"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfferCta() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Szukasz czegoś konkretnego?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-6">
              Nie znalazłeś tego, czego szukasz?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Nasza oferta online to tylko część kolekcji. Skontaktuj się z nami, 
              a pomożemy znaleźć Twój wymarzony zegarek. Mamy dostęp do szerokiej 
              sieci kontaktów i możemy pozyskać wiele wyjątkowych modeli.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Button asChild variant="premium" size="lg">
              <Link href="/kontakt">
                Zapytaj o zegarek
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
      </div>
    </section>
  );
}
