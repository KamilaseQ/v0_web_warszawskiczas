"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesTrust() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Dlaczego my
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-6">
              Zaufanie i <span className="italic">profesjonalizm</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wieloletnie doświadczenie w branży luksusowych zegarków pozwala nam 
              oferować usługi na najwyższym poziomie. Każdy klient traktowany jest 
              indywidualnie, z pełnym poszanowaniem jego oczekiwań i prywatności.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="premium" size="lg">
                <Link href="/kontakt">
                  Skontaktuj się
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/butik">
                  Odwiedź butik
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "15+", label: "Lat doświadczenia" },
              { value: "1000+", label: "Obsłużonych klientów" },
              { value: "100%", label: "Autentyczność" },
              { value: "24h", label: "Czas odpowiedzi" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-background border border-border"
              >
                <span className="block font-serif text-3xl lg:text-4xl text-accent mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
