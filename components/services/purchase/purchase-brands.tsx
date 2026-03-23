"use client";

import { motion } from "framer-motion";

const brands = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Omega",
  "Cartier",
  "Vacheron Constantin",
  "IWC",
  "Jaeger-LeCoultre",
  "Breitling",
  "Tudor",
  "Panerai",
  "Hublot",
];

export function PurchaseBrands() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Skupujemy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
            Marki, które nas <span className="italic">interesują</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-6 px-4 text-center border border-border hover:border-accent/50 transition-colors"
            >
              <span className="font-serif text-lg">{brand}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-8"
        >
          Nie widzisz swojej marki? Skontaktuj się z nami — rozważamy również inne luksusowe zegarki.
        </motion.p>
      </div>
    </section>
  );
}
