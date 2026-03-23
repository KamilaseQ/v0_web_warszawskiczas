"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Wyślij zgłoszenie",
    description:
      "Wypełnij formularz lub zadzwoń. Podaj markę, model i stan zegarka. Możesz dołączyć zdjęcia.",
  },
  {
    number: "02",
    title: "Otrzymaj wycenę",
    description:
      "W ciągu 24 godzin otrzymasz wstępną wycenę. Bez zobowiązań, bez ukrytych kosztów.",
  },
  {
    number: "03",
    title: "Spotkanie i weryfikacja",
    description:
      "Umów się na wizytę w naszym butiku lub prześlij zegarek. Dokonamy dokładnej oceny stanu.",
  },
  {
    number: "04",
    title: "Finalizacja",
    description:
      "Po akceptacji ostatecznej ceny, otrzymujesz płatność natychmiast — gotówką lub przelewem.",
  },
];

export function PurchaseProcess() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Proces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-6">
              Prosty i <span className="italic">transparentny</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nasz proces skupu jest przejrzysty na każdym etapie. Nie ma ukrytych 
              opłat ani niespodzianek. Wiemy, że zaufanie buduje się przez jasne zasady.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <span className="font-serif text-2xl text-accent shrink-0 w-10">
                    {step.number}
                  </span>
                  <div className="pb-8 border-b border-border last:border-0">
                    <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
