"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Shield, Camera } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Lepsza cena",
    description:
      "Komis często pozwala uzyskać wyższą cenę niż bezpośrednia sprzedaż, dzięki dotarciu do właściwych kupujących.",
  },
  {
    icon: Users,
    title: "Dostęp do kolekcjonerów",
    description:
      "Nasza baza klientów to pasjonaci i kolekcjonerzy szukający konkretnych modeli, gotowi zapłacić fair price.",
  },
  {
    icon: Camera,
    title: "Profesjonalna prezentacja",
    description:
      "Twój zegarek zostanie sfotografowany i zaprezentowany w sposób podkreślający jego wyjątkowość.",
  },
  {
    icon: Shield,
    title: "Pełne bezpieczeństwo",
    description:
      "Zegarek przez cały czas pozostaje ubezpieczony. Transakcja jest w pełni bezpieczna dla obu stron.",
  },
];

export function ConsignmentBenefits() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Dlaczego komis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight max-w-xl mx-auto">
            Korzyści <span className="italic">współpracy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="shrink-0 w-12 h-12 border border-border flex items-center justify-center">
                <benefit.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
