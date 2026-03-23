"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:pl-8 lg:border-l lg:border-border"
    >
      <h2 className="font-serif text-2xl mb-8">Dane kontaktowe</h2>

      <div className="space-y-8">
        {/* Address */}
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 border border-border flex items-center justify-center">
            <MapPin className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium mb-1">Adres</p>
            <p className="text-muted-foreground">
              ul. Mokotowska 71<br />
              00-530 Warszawa
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 border border-border flex items-center justify-center">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium mb-1">Telefon</p>
            <a 
              href="tel:+48000000000" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              +48 000 000 000
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 border border-border flex items-center justify-center">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium mb-1">Email</p>
            <a 
              href="mailto:kontakt@warszawskiczas.pl" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              kontakt@warszawskiczas.pl
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 border border-border flex items-center justify-center">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium mb-1">Godziny otwarcia</p>
            <div className="text-muted-foreground text-sm space-y-1">
              <p>Poniedziałek - Piątek: 10:00 - 19:00</p>
              <p>Sobota: 11:00 - 16:00</p>
              <p>Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Note */}
      <div className="mt-12 p-6 bg-secondary/50 border border-border">
        <p className="font-serif text-lg mb-2">Preferujesz wizytę osobistą?</p>
        <p className="text-sm text-muted-foreground">
          Zapraszamy do naszego butiku. Możesz również umówić się na wizytę 
          poza standardowymi godzinami — skontaktuj się z nami.
        </p>
      </div>

      {/* Response time */}
      <p className="mt-8 text-sm text-muted-foreground">
        Odpowiadamy na wszystkie wiadomości w ciągu 24 godzin w dni robocze.
      </p>
    </motion.div>
  );
}
