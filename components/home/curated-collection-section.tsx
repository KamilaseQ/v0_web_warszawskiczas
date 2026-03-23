"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    brand: "Patek Philippe",
    model: "Nautilus 5711",
    category: "Zegarek męski",
    status: "Na zamówienie",
  },
  {
    id: 2,
    brand: "Rolex",
    model: "Daytona Cosmograph",
    category: "Zegarek męski",
    status: "Dostępny",
  },
  {
    id: 3,
    brand: "Cartier",
    model: "Panthère de Cartier",
    category: "Zegarek damski",
    status: "Dostępny",
  },
];

export function CuratedCollectionSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Wyselekcjonowana Oferta
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Czasomierze dla <br className="hidden sm:block" />
              <span className="italic">koneserów</span>
            </h2>
          </div>
          <Link
            href="/oferta"
            className="group inline-flex items-center gap-2 text-sm tracking-wide hover:text-muted-foreground transition-colors"
          >
            Zobacz pełną ofertę
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Featured Grid - Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Feature */}
          <motion.div 
            className="lg:col-span-7 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/oferta" className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-serif text-6xl text-muted-foreground/30">01</span>
                  </div>
                </div>
                {/* Status badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-background/90 backdrop-blur-sm">
                    {featuredItems[0].status}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xs tracking-wider uppercase text-muted-foreground">
                  {featuredItems[0].category}
                </span>
                <h3 className="font-serif text-2xl mt-2 group-hover:text-muted-foreground transition-colors">
                  {featuredItems[0].brand}
                </h3>
                <p className="text-muted-foreground mt-1">{featuredItems[0].model}</p>
              </div>
            </Link>
          </motion.div>

          {/* Stacked Features */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {featuredItems.slice(1).map((item, index) => (
              <motion.div 
                key={item.id}
                className="group flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              >
                <Link href="/oferta" className="block h-full">
                  <div className="relative aspect-[3/2] overflow-hidden bg-secondary mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-4xl text-muted-foreground/30">
                        0{index + 2}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-2 py-1 text-xs tracking-wider uppercase bg-background/90 backdrop-blur-sm">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl mt-1 group-hover:text-muted-foreground transition-colors">
                      {item.brand}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.model}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
