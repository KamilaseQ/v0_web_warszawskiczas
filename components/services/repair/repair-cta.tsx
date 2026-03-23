"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RepairCta() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Twój zegarek potrzebuje <span className="italic text-accent">serwisu</span>?
          </h2>
          <p className="text-background/60 leading-relaxed max-w-xl mx-auto mb-10">
            Skontaktuj się z nami, aby umówić wizytę lub uzyskać wstępną wycenę. 
            Odpowiadamy w ciągu 24 godzin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-accent text-foreground hover:bg-accent/90"
              size="lg"
            >
              <Link href="/kontakt">
                Umów serwis
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/20 text-background hover:bg-background/10"
            >
              <a href="tel:+48000000000">
                Zadzwoń teraz
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
