"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function BoutiqueLocation() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square lg:aspect-auto bg-background/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-sm tracking-wider uppercase text-background/50">
                  Mapa lokalizacji
                </p>
                <p className="mt-2 font-serif text-lg text-background/70">
                  Mokotowska 71
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-background/50 mb-4">
              Lokalizacja
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-8 text-background">
              Znajdziesz nas w sercu <span className="italic text-accent">Mokotowa</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 border border-background/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">Adres</p>
                  <p className="text-background/60">
                    ul. Mokotowska 71<br />
                    00-530 Warszawa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 border border-background/20 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">Godziny otwarcia</p>
                  <p className="text-background/60">
                    Poniedziałek - Piątek: 10:00 - 19:00<br />
                    Sobota: 11:00 - 16:00<br />
                    Niedziela: Zamknięte
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 border border-background/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">Telefon</p>
                  <a 
                    href="tel:+48000000000" 
                    className="text-background/60 hover:text-accent transition-colors"
                  >
                    +48 000 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 border border-background/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">Email</p>
                  <a 
                    href="mailto:kontakt@warszawskiczas.pl" 
                    className="text-background/60 hover:text-accent transition-colors"
                  >
                    kontakt@warszawskiczas.pl
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-background/40">
              Parking dostępny w pobliżu. Możliwość umówienia wizyty poza standardowymi godzinami.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
