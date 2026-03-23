"use client";

import { motion } from "framer-motion";

export function BoutiqueExperience() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Doświadczenie
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
              Przestrzeń stworzona dla <span className="italic">koneserów</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nasz butik to więcej niż miejsce prezentacji zegarków. To przestrzeń, 
                w której możesz w spokoju poznać każdy czasomierz, porozmawiać z ekspertem 
                i podjąć przemyślaną decyzję.
              </p>
              <p>
                Kameralna atmosfera, dyskrecja i indywidualne podejście — to fundamenty 
                naszej filozofii. Każda wizyta to unikalne doświadczenie, dostosowane 
                do Twoich oczekiwań.
              </p>
            </div>
          </motion.div>

          {/* Visual Grid */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-[3/4] bg-secondary"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-sm tracking-wider uppercase text-muted-foreground/30">
                    Wnętrze
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="aspect-[3/4] bg-secondary mt-8"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-sm tracking-wider uppercase text-muted-foreground/30">
                    Detale
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
