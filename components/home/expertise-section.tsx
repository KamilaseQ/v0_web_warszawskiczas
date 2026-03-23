"use client";

import { motion } from "framer-motion";

const expertise = [
  {
    number: "01",
    title: "Autentyczność",
    description:
      "Każdy zegarek przechodzi rygorystyczną weryfikację autentyczności. Gwarantujemy oryginalność każdego czasomierza.",
  },
  {
    number: "02",
    title: "Ekspertyza",
    description:
      "Wieloletnie doświadczenie w świecie luksusowych zegarków. Doradzamy w wyborze idealnego czasomierza.",
  },
  {
    number: "03",
    title: "Dyskrecja",
    description:
      "Pełna poufność transakcji. Dbamy o prywatność naszych klientów na każdym etapie współpracy.",
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column - Statement */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Dlaczego My
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
              Zaufanie budowane <span className="italic">latami</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Od lat pomagamy kolekcjonerom i miłośnikom luksusowych zegarków w znalezieniu 
              wyjątkowych czasomierzy. Nasza reputacja opiera się na wiedzy, uczciwości 
              i pasji do horologii.
            </p>
          </motion.div>

          {/* Right Column - Expertise Points */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-0">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.number}
                  className="py-8 first:pt-0 last:pb-0 border-b border-border last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex gap-6">
                    <span className="font-serif text-2xl text-accent shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
