"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Skontaktuj się z nami, aby umówić wizytę lub przesłać zegarek. Wstępnie omówimy Twoje potrzeby.",
  },
  {
    number: "02",
    title: "Diagnoza",
    description:
      "Dokładna analiza stanu zegarka i przygotowanie szczegółowej wyceny wraz z zakresem prac.",
  },
  {
    number: "03",
    title: "Realizacja",
    description:
      "Po akceptacji wyceny przystępujemy do pracy. Informujemy o postępach na każdym etapie.",
  },
  {
    number: "04",
    title: "Odbiór",
    description:
      "Zegarek wraca do Ciebie w idealnym stanie. Otrzymujesz dokumentację wykonanych prac.",
  },
];

export function RepairProcess() {
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
            Proces
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
            Jak <span className="italic">działamy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <span className="font-serif text-5xl text-accent/20 mb-4 block">
                {step.number}
              </span>
              <h3 className="font-serif text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
