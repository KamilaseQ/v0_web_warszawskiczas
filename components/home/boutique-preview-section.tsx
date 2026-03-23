"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BoutiquePreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Visual */}
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-sm tracking-wider uppercase text-muted-foreground/50">
                      Mokotowska 71
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-background p-6 lg:p-8 border border-border shadow-lg max-w-xs">
                <p className="text-sm tracking-wider uppercase text-muted-foreground mb-2">
                  Lokalizacja
                </p>
                <p className="font-serif text-lg">
                  W sercu warszawskiego Mokotowa
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:col-span-5 lg:pl-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nasz Butik
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Mokotowska 71
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Zapraszamy do naszego butiku przy ulicy Mokotowskiej 71 w Warszawie. 
              To tutaj, w kameralnej atmosferze, możesz odkryć naszą kolekcję 
              i porozmawiać z ekspertami o Twoim wymarzonym zegarku.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Poniedziałek - Piątek: 10:00 - 19:00</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Sobota: 11:00 - 16:00</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline">
                <Link href="/butik">
                  Poznaj Butik
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/kontakt">
                  Umów Wizytę
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
