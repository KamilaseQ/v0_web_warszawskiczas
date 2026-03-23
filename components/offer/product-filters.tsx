"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "men", label: "Zegarki męskie" },
  { id: "women", label: "Zegarki damskie" },
  { id: "jewelry", label: "Biżuteria" },
];

const brands = [
  { id: "all", label: "Wszystkie marki" },
  { id: "rolex", label: "Rolex" },
  { id: "patek", label: "Patek Philippe" },
  { id: "ap", label: "Audemars Piguet" },
  { id: "cartier", label: "Cartier" },
  { id: "omega", label: "Omega" },
];

export function ProductFilters() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [activeBrand, setActiveBrand] = React.useState("all");

  return (
    <div className="mb-12 lg:mb-16">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 text-sm tracking-wide transition-colors",
              activeCategory === category.id
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm text-muted-foreground">Marka:</span>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand.id)}
              className={cn(
                "px-3 py-1.5 text-sm transition-colors",
                activeBrand === brand.id
                  ? "text-foreground underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {brand.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
