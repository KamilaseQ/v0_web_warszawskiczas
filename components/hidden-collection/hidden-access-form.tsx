"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HiddenAccessForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
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
          className="text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-background/50 mb-4">
            Dołącz do grona wybranych
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Poproś o <span className="italic text-accent">dostęp</span>
          </h2>
          <p className="text-background/60 leading-relaxed max-w-lg mx-auto mb-12">
            Zostaw swoje dane, a skontaktujemy się z Tobą, aby omówić 
            Twoje zainteresowania i przedstawić dostępne egzemplarze.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <Check className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl mb-3">
                Dziękujemy za zainteresowanie
              </h3>
              <p className="text-background/60">
                Skontaktujemy się w ciągu 24 godzin.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4 mb-8">
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
                    Adres email
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
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Numer telefonu (opcjonalnie)"
                    className={cn(
                      "w-full px-4 py-3.5 bg-transparent border border-background/20",
                      "text-background placeholder:text-background/40",
                      "focus:outline-none focus:border-accent transition-colors"
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="interests" className="sr-only">
                    Jakie zegarki Cię interesują?
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    rows={3}
                    placeholder="Jakie marki lub modele Cię interesują?"
                    className={cn(
                      "w-full px-4 py-3.5 bg-transparent border border-background/20",
                      "text-background placeholder:text-background/40",
                      "focus:outline-none focus:border-accent transition-colors resize-none"
                    )}
                  />
                </div>
              </div>

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
                    Poproś o dostęp
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="mt-6 text-xs text-background/40 text-center">
                Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
