import Image from "next/image";
import { cn } from "@/lib/utils";

// The source logo file has a solid white background, so on dark sections it
// needs a light card behind it rather than sitting directly on the dark bg.
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
        src="/logo.jpg"
        alt="Versa Digital"
        width={size}
        height={size}
        className="h-full w-full rounded-lg object-cover"
        priority
      />
    </span>
  );
}
