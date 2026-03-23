"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Wrench, HandCoins, Repeat } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Serwis i Naprawa",
    description:
      "Profesjonalna obsługa serwisowa luksusowych zegarków. Powierzasz nam swój czasomierz w pewne ręce.",
    href: "/uslugi/naprawa-i-serwis",
  },
  {
    icon: HandCoins,
    title: "Skup Zegarków",
    description:
      "Uczciwa wycena i dyskretny skup luksusowych zegarków. Transparentne warunki współpracy.",
    href: "/uslugi/skup",
  },
  {
    icon: Repeat,
    title: "Komis",
    description:
      "Sprzedaj swój zegarek z naszą pomocą. Docieramy do wyselekcjonowanego grona kolekcjonerów.",
    href: "/uslugi/komis",
  },
];

export function ServicesOverviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-background/60 mb-4">
              Usługi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Kompleksowa <span className="italic">obsługa</span>
            </h2>
          </div>
          <Link
            href="/uslugi"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-background/80 hover:text-background transition-colors"
          >
            Wszystkie usługi
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-background/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group block h-full bg-foreground p-8 lg:p-10 hover:bg-foreground/95 transition-colors"
              >
                <service.icon className="h-8 w-8 text-accent mb-8" />
                <h3 className="font-serif text-xl lg:text-2xl mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-background/70 leading-relaxed mb-8">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-background/60 group-hover:text-accent transition-colors">
                  Dowiedz się więcej
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
