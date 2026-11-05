export default function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  return (
    <span>
      {prefix}
      {decimals > 0 ? target.toFixed(decimals) : target.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
