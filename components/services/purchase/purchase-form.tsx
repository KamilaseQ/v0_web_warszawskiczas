"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PurchaseForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-background/50 mb-4">
            Bezpłatna wycena
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Wyślij <span className="italic text-accent">zgłoszenie</span>
          </h2>
          <p className="text-background/60 max-w-md mx-auto">
            Wypełnij formularz, a skontaktujemy się z wyceną w ciągu 24 godzin.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl mb-3">
              Dziękujemy za zgłoszenie
            </h3>
            <p className="text-background/60">
              Skontaktujemy się z wyceną w ciągu 24 godzin.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Imię i nazwisko"
                  required
                  className={cn(
                    "w-full px-4 py-3.5 bg-transparent border border-background/20",
                    "text-background placeholder:text-background/40",
                    "focus:outline-none focus:border-accent transition-colors"
                  )}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Adres email"
                  required
                  className={cn(
                    "w-full px-4 py-3.5 bg-transparent border border-background/20",
                    "text-background placeholder:text-background/40",
                    "focus:outline-none focus:border-accent transition-colors"
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Numer telefonu"
                required
                className={cn(
                  "w-full px-4 py-3.5 bg-transparent border border-background/20",
                  "text-background placeholder:text-background/40",
                  "focus:outline-none focus:border-accent transition-colors"
                )}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="brand" className="sr-only">
                  Marka
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Marka zegarka"
                  required
                  className={cn(
                    "w-full px-4 py-3.5 bg-transparent border border-background/20",
                    "text-background placeholder:text-background/40",
                    "focus:outline-none focus:border-accent transition-colors"
                  )}
                />
              </div>
              <div>
                <label htmlFor="model" className="sr-only">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Model / Referencja"
                  className={cn(
                    "w-full px-4 py-3.5 bg-transparent border border-background/20",
                    "text-background placeholder:text-background/40",
                    "focus:outline-none focus:border-accent transition-colors"
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="sr-only">
                Opis
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Opisz stan zegarka, posiadane dokumenty i akcesoria..."
                className={cn(
                  "w-full px-4 py-3.5 bg-transparent border border-background/20",
                  "text-background placeholder:text-background/40",
                  "focus:outline-none focus:border-accent transition-colors resize-none"
                )}
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent text-foreground hover:bg-accent/90"
                size="lg"
              >
                {isLoading ? (
                  "Wysyłanie..."
                ) : (
                  <>
                    Wyślij zgłoszenie
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-background/40 text-center">
              Twoje dane są bezpieczne. Odpowiadamy w ciągu 24 godzin.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
