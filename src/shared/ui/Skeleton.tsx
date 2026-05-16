export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-[8px] bg-black/[0.07] ${className ?? ""}`}
    />
  );
}
