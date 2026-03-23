"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  { id: "purchase", label: "Chcę kupić zegarek" },
  { id: "sell", label: "Chcę sprzedać zegarek" },
  { id: "consignment", label: "Komis" },
  { id: "service", label: "Serwis / Naprawa" },
  { id: "visit", label: "Umówienie wizyty" },
  { id: "other", label: "Inne pytanie" },
];

export function ContactForm() {
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl mb-3">
          Dziękujemy za wiadomość
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się w ciągu 24 godzin 
          w dni robocze.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="font-serif text-2xl mb-8">Wyślij wiadomość</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Inquiry Type Selection */}
        <div>
          <label className="block text-sm font-medium mb-4">
            Czego dotyczy Twoje zapytanie?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "px-4 py-3 text-sm text-left border transition-colors",
                  selectedType === type.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/50"
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Imię i nazwisko <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={cn(
                "w-full px-4 py-3 bg-transparent border border-border",
                "focus:outline-none focus:border-foreground transition-colors"
              )}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={cn(
                "w-full px-4 py-3 bg-transparent border border-border",
                "focus:outline-none focus:border-foreground transition-colors"
              )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={cn(
              "w-full px-4 py-3 bg-transparent border border-border",
              "focus:outline-none focus:border-foreground transition-colors"
            )}
          />
        </div>

        {/* Conditional fields based on inquiry type */}
        {(selectedType === "purchase" || selectedType === "sell" || selectedType === "consignment") && (
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="brand" className="block text-sm font-medium mb-2">
                Marka zegarka
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="np. Rolex, Patek Philippe"
                className={cn(
                  "w-full px-4 py-3 bg-transparent border border-border",
                  "placeholder:text-muted-foreground/50",
                  "focus:outline-none focus:border-foreground transition-colors"
                )}
              />
            </div>
            <div>
              <label htmlFor="model" className="block text-sm font-medium mb-2">
                Model / Referencja
              </label>
              <input
                type="text"
                id="model"
                name="model"
                placeholder="np. Daytona, Nautilus"
                className={cn(
                  "w-full px-4 py-3 bg-transparent border border-border",
                  "placeholder:text-muted-foreground/50",
                  "focus:outline-none focus:border-foreground transition-colors"
                )}
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Wiadomość <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Opisz swoje pytanie lub potrzebę..."
            className={cn(
              "w-full px-4 py-3 bg-transparent border border-border resize-none",
              "placeholder:text-muted-foreground/50",
              "focus:outline-none focus:border-foreground transition-colors"
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-xs text-muted-foreground">
            <span className="text-accent">*</span> Pola wymagane
          </p>
          <Button
            type="submit"
            disabled={isLoading}
            variant="premium"
            size="lg"
          >
            {isLoading ? (
              "Wysyłanie..."
            ) : (
              <>
                Wyślij wiadomość
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
