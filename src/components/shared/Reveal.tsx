import type { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
  once?: boolean;
}) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
