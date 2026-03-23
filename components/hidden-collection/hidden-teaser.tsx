"use client";

import { motion } from "framer-motion";
import { Lock, Eye, Shield } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Ekskluzywny dostęp",
    description:
      "Zegarki z naszej ukrytej kolekcji nie są publicznie dostępne. Każda prezentacja jest indywidualna.",
  },
  {
    icon: Eye,
    title: "Rzadkie egzemplarze",
    description:
      "Limitowane edycje, vintage i czasomierze, które rzadko pojawiają się na rynku.",
  },
  {
    icon: Shield,
    title: "Pełna dyskrecja",
    description:
      "Gwarantujemy poufność na każdym etapie. Twoja prywatność jest dla nas priorytetem.",
  },
];

const teasedWatches = [
  { brand: "Patek Philippe", hint: "Komplikacje z lat 60." },
  { brand: "Rolex", hint: "Vintage Submariner" },
  { brand: "Audemars Piguet", hint: "Limitowana edycja" },
  { brand: "Vacheron Constantin", hint: "Rzadki model" },
];

export function HiddenTeaser() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-24 lg:mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-border mb-6">
                <feature.icon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Teased Collection */}
        <div className="border-t border-border pt-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Aktualnie dostępne
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Wybrane <span className="italic">pozycje</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teasedWatches.map((watch, index) => (
              <motion.div
                key={watch.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] bg-secondary/50 mb-4 overflow-hidden">
                  {/* Blurred/mysterious placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted/50 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-muted-foreground/50" />
                      </div>
                      <span className="text-xs tracking-wider uppercase text-muted-foreground/50">
                        Dostęp ograniczony
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg">{watch.brand}</h3>
                  <p className="text-sm text-muted-foreground italic">
                    {watch.hint}
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
