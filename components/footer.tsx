import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  nawigacja: [
    { href: "/", label: "Strona Główna" },
    { href: "/oferta", label: "Oferta" },
    { href: "/ukryta-kolekcja", label: "Ukryta Kolekcja" },
    { href: "/butik", label: "Butik" },
  ],
  uslugi: [
    { href: "/uslugi", label: "Wszystkie Usługi" },
    { href: "/uslugi/naprawa-i-serwis", label: "Naprawa i Serwis" },
    { href: "/uslugi/skup", label: "Skup Zegarków" },
    { href: "/uslugi/komis", label: "Komis" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="font-serif text-2xl tracking-tight"
              >
                Warszawski Czas
              </Link>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
                Ekskluzywny butik z luksusowymi zegarkami i biżuterią w sercu
                Warszawy. Gdzie czas spotyka się z elegancją.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Mokotowska 71</p>
                    <p className="text-muted-foreground">00-530 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                  <a
                    href="tel:+48000000000"
                    className="hover:text-foreground transition-colors"
                  >
                    +48 000 000 000
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                  <a
                    href="mailto:kontakt@warszawskiczas.pl"
                    className="hover:text-foreground transition-colors"
                  >
                    kontakt@warszawskiczas.pl
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="text-muted-foreground">
                    <p>Pon - Pt: 10:00 - 19:00</p>
                    <p>Sob: 11:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 lg:col-start-7">
              <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
                Nawigacja
              </h3>
              <ul className="space-y-4">
                {footerLinks.nawigacja.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-foreground transition-colors text-foreground/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
                Usługi
              </h3>
              <ul className="space-y-4">
                {footerLinks.uslugi.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-foreground transition-colors text-foreground/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
                Kontakt
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Zapraszamy do naszego butiku lub umów wizytę online.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Warszawski Czas. Wszelkie prawa
            zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/polityka-prywatnosci" className="hover:text-foreground transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-foreground transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
