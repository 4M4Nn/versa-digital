// Negative z-index means this always paints behind normal in-flow content
// (like Footer, which isn't positioned) automatically, while still sitting
// behind each section's own `position: relative` box — sections show it
// through their semi-transparent background color.
export default function FixedBackgroundVideo({ src }: { src: string }) {
  return (
    <video
      className="fixed inset-0 -z-10 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src={src}
    />
  );
}
