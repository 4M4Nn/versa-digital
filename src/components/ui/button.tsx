import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 min-h-12 px-7",
  {
    variants: {
      variant: {
        filled: "bg-violet text-white hover:bg-violet-light",
        outline: "border-2 border-violet text-violet hover:bg-violet-pale",
        dark: "bg-bg-dark text-white hover:bg-dark-shade",
        gold: "bg-gold text-white hover:opacity-90",
        white: "bg-white text-violet hover:bg-white/90",
        "white-outline": "border-2 border-white text-white hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
