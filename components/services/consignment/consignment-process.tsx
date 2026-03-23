"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Wycena i ustalenie ceny",
    description:
      "Wspólnie ustalamy oczekiwaną cenę sprzedaży w oparciu o aktualną sytuację rynkową.",
  },
  {
    number: "02",
    title: "Dokumentacja i prezentacja",
    description:
      "Profesjonalna sesja zdjęciowa i przygotowanie materiałów prezentacyjnych.",
  },
  {
    number: "03",
    title: "Ekspozycja i poszukiwanie kupca",
    description:
      "Aktywnie szukamy kupca wśród naszych klientów i partnerów. Zegarek może być również eksponowany w butiku.",
  },
  {
    number: "04",
    title: "Transakcja i rozliczenie",
    description:
      "Po znalezieniu kupca finalizujemy transakcję i przekazujemy Ci należność pomniejszoną o prowizję.",
  },
];

export function ConsignmentProcess() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Jak to działa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
            Proces <span className="italic">komisowy</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 lg:gap-12"
              >
                <div className="relative shrink-0">
                  <div className="w-20 h-20 bg-background border border-border flex items-center justify-center">
                    <span className="font-serif text-2xl text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
