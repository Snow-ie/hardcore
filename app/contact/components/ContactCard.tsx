import * as React from "react";

export type ContactCardItem = {
  icon: React.ElementType;
  title: string;
  lines: string[];
  className?: string;
};

export function ContactCard({
  icon: Icon,
  title,
  lines,
  className = "",
}: ContactCardItem) {
  return (
    <div
      className={`relative mx-auto w-full max-w-xs rounded bg-white p-8 pt-14 text-center shadow-[0_8px_30px_rgba(0,0,0,0.07)] dark:bg-surface ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded bg-primary text-white"
      >
        <Icon className="h-8 w-8" />
      </span>

      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      {lines.map((ln) => (
        <p key={ln} className="text-sm leading-relaxed text-muted-foreground">
          {ln}
        </p>
      ))}
    </div>
  );
}
