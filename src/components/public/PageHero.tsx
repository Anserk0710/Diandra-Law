import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="dark-section relative isolate overflow-hidden text-white">
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-white/10"
        aria-hidden="true"
      />

      <div className={`container-app ${compact ? "py-8 sm:py-10" : "py-14 sm:py-16 md:py-24"}`}>
        <div className="reveal-in max-w-3xl">
          {eyebrow ? (
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--brand-accent-soft)] sm:text-sm">
              <span className="h-px w-8 bg-[var(--brand-accent)]" />
              {eyebrow}
            </p>
          ) : null}

          <h1 className={`mt-4 font-black leading-tight ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl"}`}>
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {description}
          </p>

          {actions ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
