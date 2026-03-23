"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Wrench, HandCoins, Repeat } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Naprawa i Serwis",
    description:
      "Profesjonalna obsługa serwisowa luksusowych zegarków. Powierzasz nam swój czasomierz w pewne ręce. Współpracujemy z autoryzowanymi serwisami największych marek.",
    features: [
      "Kompleksowy przegląd i konserwacja",
      "Wymiana części i regulacja",
      "Polerowanie i renowacja koperty",
      "Certyfikowane części zamienne",
    ],
    href: "/uslugi/naprawa-i-serwis",
  },
  {
    icon: HandCoins,
    title: "Skup Zegarków",
    description:
      "Uczciwa wycena i dyskretny skup luksusowych zegarków. Oferujemy transparentne warunki i szybką realizację transakcji. Gotówka lub przelew — wybór należy do Ciebie.",
    features: [
      "Bezpłatna wycena w 24 godziny",
      "Uczciwe ceny rynkowe",
      "Natychmiastowa płatność",
      "Pełna dyskrecja",
    ],
    href: "/uslugi/skup",
  },
  {
    icon: Repeat,
    title: "Komis",
    description:
      "Sprzedaj swój zegarek z naszą pomocą. Docieramy do wyselekcjonowanego grona kolekcjonerów, dzięki czemu możesz uzyskać najlepszą cenę za swój czasomierz.",
    features: [
      "Profesjonalna prezentacja",
      "Dotarcie do kolekcjonerów",
      "Bezpieczna transakcja",
      "Minimalne prowizje",
    ],
    href: "/uslugi/komis",
  },
];

export function ServicesList() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Icon and Number */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                        <service.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <span className="font-serif text-2xl text-muted-foreground/30">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <h2 className="font-serif text-2xl lg:text-3xl mb-4 group-hover:text-muted-foreground transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-accent transition-colors">
                      Dowiedz się więcej
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-4">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>

              {index < services.length - 1 && (
                <div className="mt-16 lg:mt-24 border-b border-border" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
