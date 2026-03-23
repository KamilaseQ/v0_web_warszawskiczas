"use client";

import { motion } from "framer-motion";
import { Settings, Sparkles, Battery, Droplets } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Przegląd i regulacja",
    description:
      "Kompleksowa kontrola mechanizmu, regulacja chodu, smarowanie i test szczelności.",
  },
  {
    icon: Sparkles,
    title: "Polerowanie i renowacja",
    description:
      "Profesjonalne polerowanie koperty i bransolety, usuwanie rys i przywracanie blasku.",
  },
  {
    icon: Battery,
    title: "Wymiana części",
    description:
      "Wymiana baterii, szafirowych szkieł, koronek i innych elementów na oryginalne części.",
  },
  {
    icon: Droplets,
    title: "Test szczelności",
    description:
      "Profesjonalny test wodoszczelności z wymianą uszczelek i certyfikatem.",
  },
];

export function RepairServices() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Zakres usług
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight max-w-xl">
            Co możemy dla Ciebie <span className="italic">zrobić</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 lg:p-12"
            >
              <service.icon className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-serif text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
