"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
}) {
  const classes = cn("inline-flex items-center justify-center transition-colors", className);
  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
