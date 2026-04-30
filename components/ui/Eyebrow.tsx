import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
};

export function Eyebrow({ children, className, dot = true }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "text-[11px] font-semibold uppercase tracking-[0.18em]",
        "bg-[rgba(244,235,220,0.04)] text-ink-soft border border-border-2",
        className,
      )}
    >
      {dot && (
        <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" aria-hidden />
      )}
      {children}
    </div>
  );
}
