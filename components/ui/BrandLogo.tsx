import Image from "next/image";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

const variants = {
  nav: {
    className: "h-14 w-auto sm:h-16 md:h-[4.5rem]",
    width: 320,
    height: 120,
    sizes: "(max-width: 768px) 180px, 240px",
  },
  hero: {
    className: "h-40 w-auto sm:h-48 md:h-56 lg:h-64 xl:h-72",
    width: 560,
    height: 210,
    sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 420px, 520px",
  },
  splash: {
    className: "h-36 w-auto sm:h-44 md:h-52",
    width: 480,
    height: 180,
    sizes: "(max-width: 768px) 280px, 400px",
  },
  footer: {
    className: "h-20 w-auto md:h-24",
    width: 360,
    height: 135,
    sizes: "280px",
  },
} as const;

type BrandLogoVariant = keyof typeof variants;

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ variant = "nav", className, priority = false }: BrandLogoProps) {
  const config = variants[variant];

  return (
    <Image
      src={SITE.logo}
      alt={SITE.logoAlt}
      width={config.width}
      height={config.height}
      sizes={config.sizes}
      priority={priority}
      className={cn("object-contain object-center drop-shadow-[0_4px_24px_rgba(201,168,106,0.25)]", config.className, className)}
    />
  );
}
