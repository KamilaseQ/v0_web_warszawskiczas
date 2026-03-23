"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BoutiqueVisit() {
  return (
    <section className="py-24 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 border border-border mb-8">
            <Calendar className="h-7 w-7 text-muted-foreground" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Zaplanuj swoją <span className="italic">wizytę</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Umów się na indywidualną prezentację naszej kolekcji. 
            Nasz ekspert poświęci Ci czas i pomoże znaleźć idealny czasomierz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link href="/kontakt">
                Umów wizytę
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+48000000000">
                Zadzwoń teraz
              </a>
            </Button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Odpowiadamy na wszystkie zapytania w ciągu 24 godzin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
