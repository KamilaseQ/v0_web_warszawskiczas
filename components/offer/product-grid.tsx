"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ProductStatus = "available" | "on-request" | "sold";

interface Product {
  id: string;
  brand: string;
  model: string;
  reference: string;
  category: string;
  price?: number;
  status: ProductStatus;
}

const products: Product[] = [
  {
    id: "1",
    brand: "Rolex",
    model: "Daytona Cosmograph",
    reference: "Ref. 116500LN",
    category: "Zegarek męski",
    price: 189000,
    status: "available",
  },
  {
    id: "2",
    brand: "Patek Philippe",
    model: "Nautilus 5711",
    reference: "Ref. 5711/1A-010",
    category: "Zegarek męski",
    status: "on-request",
  },
  {
    id: "3",
    brand: "Audemars Piguet",
    model: "Royal Oak",
    reference: "Ref. 15500ST",
    category: "Zegarek męski",
    price: 245000,
    status: "available",
  },
  {
    id: "4",
    brand: "Cartier",
    model: "Panthère de Cartier",
    reference: "Ref. WGPN0009",
    category: "Zegarek damski",
    price: 95000,
    status: "available",
  },
  {
    id: "5",
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    reference: "Ref. 310.30.42.50.01.001",
    category: "Zegarek męski",
    price: 42000,
    status: "available",
  },
  {
    id: "6",
    brand: "Rolex",
    model: "GMT-Master II",
    reference: "Ref. 126710BLRO",
    category: "Zegarek męski",
    price: 125000,
    status: "sold",
  },
  {
    id: "7",
    brand: "Patek Philippe",
    model: "Aquanaut",
    reference: "Ref. 5167A-001",
    category: "Zegarek męski",
    status: "on-request",
  },
  {
    id: "8",
    brand: "Cartier",
    model: "Tank Française",
    reference: "Ref. WSTA0065",
    category: "Zegarek damski",
    price: 78000,
    status: "available",
  },
];

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  available: {
    label: "Dostępny",
    className: "bg-primary/10 text-primary",
  },
  "on-request": {
    label: "Na zamówienie",
    className: "bg-accent/10 text-accent",
  },
  sold: {
    label: "Sprzedany",
    className: "bg-muted text-muted-foreground",
  },
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
      {products.map((product, index) => (
        <motion.article
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group"
        >
          <Link href={`/oferta/${product.id}`} className="block">
            {/* Product Image */}
            <div className="relative aspect-square bg-secondary mb-5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-4xl text-muted-foreground/20">
                  {product.brand.charAt(0)}
                </span>
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={cn(
                    "inline-block px-2.5 py-1 text-xs tracking-wider uppercase",
                    statusConfig[product.status].className
                  )}
                >
                  {statusConfig[product.status].label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Product Info */}
            <div>
              <span className="text-xs tracking-wider uppercase text-muted-foreground">
                {product.category}
              </span>
              <h3 className="font-serif text-xl mt-1 group-hover:text-muted-foreground transition-colors">
                {product.brand}
              </h3>
              <p className="text-muted-foreground">{product.model}</p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                {product.reference}
              </p>

              {/* Price */}
              <div className="mt-4">
                {product.status === "sold" ? (
                  <span className="text-muted-foreground line-through">
                    {product.price ? formatPrice(product.price) : "Cena na zapytanie"}
                  </span>
                ) : product.price ? (
                  <span className="font-medium">{formatPrice(product.price)}</span>
                ) : (
                  <span className="text-sm text-muted-foreground italic">
                    Cena na zapytanie
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
