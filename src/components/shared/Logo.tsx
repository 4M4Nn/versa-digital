import Image from "next/image";
import { cn } from "@/lib/utils";

// Uses the mark-only crop (icon.png) rather than the full text lockup
// (logo.jpg) so the glyph stays crisp and recognizable at small nav/footer
// sizes. The source file has a solid white background, so on dark sections
// it needs a light card behind it rather than sitting directly on the dark bg.
export default function Logo({
  size = 40,
  onDark = false,
  className,
}: {
  size?: number;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl",
        onDark ? "bg-white p-1 shadow-sm" : "",
        className
      )}
      style={{ width: onDark ? size + 8 : size, height: onDark ? size + 8 : size }}
    >
      <Image
        src="/icon.png"
        alt="Versa Digital & IT Solutions"
        width={size}
        height={size}
        className="h-full w-full rounded-lg object-cover"
        priority
      />
    </span>
  );
}
