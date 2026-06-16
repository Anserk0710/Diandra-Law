type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    const alignmentClass =
        align === "center"
            ? "mx-auto max-w-3xl text-center"
            : "max-w-3xl";

    return (
        <div className={alignmentClass}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
    );
}
