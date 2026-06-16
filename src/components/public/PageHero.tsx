import type { ReactNode } from "react";

type PageHeroProps = {
    eyebrow?: string;
    title: string;
    description: string;
    actions?: ReactNode;
};

export function PageHero({
    eyebrow,
    title,
    description,
    actions,
}: PageHeroProps) {
    return (
        <section className="border-b border-slate-200 bg-slate-950 text-white">
      <div className="container-app py-12 sm:py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300 sm:text-sm sm:tracking-[0.2em]">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
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
