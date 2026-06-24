import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Newspaper,
  Scale,
  UserRound,
} from "lucide-react";
import {
  formatIndonesianDate,
} from "@/lib/site-utils";

type MediaBlockProps = {
  src?: string | null;
  alt: string;
  label: string;
  className?: string;
  /** If true, use object-contain so the full image is shown without cropping */
  contain?: boolean;
};

function MediaBlock({
  src,
  alt,
  label,
  className = "h-52",
  contain = false,
}: MediaBlockProps) {
  return (
    <div
      className={`${className} relative w-full overflow-hidden ${contain ? "bg-slate-200" : "bg-[var(--brand)]"}`}
    >
      {src ? (
        contain ? (
          /* ── Blurred backdrop mode ── */
          <>
            {/* Blurred background layer — same image, scaled up & blurred */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75 saturate-150"
            />
            {/* Foreground image — full, unclipped */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-full w-full object-contain transition duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-[var(--brand)] text-white"
          aria-label={`Placeholder gambar untuk ${label}`}
        >
          <Scale
            aria-hidden="true"
            className="h-9 w-9 text-[var(--brand-accent-soft)]"
            strokeWidth={1.8}
          />
        </div>
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-1 bg-[var(--brand-accent)]"
        aria-hidden="true"
      />
    </div>
  );
}

function CardLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex items-center gap-2 font-bold text-slate-950 transition hover:gap-3 hover:text-teal-700"
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4"
      />
    </Link>
  );
}

type ServiceCardProps = {
  service: {
    title: string;
    slug: string;
    summary: string;
    coverImage?: string | null;
  };
};

export function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article className="group card-surface interactive-lift overflow-hidden">
      <MediaBlock
        src={service.coverImage}
        alt={service.title}
        label={service.title}
        className="h-44"
      />

      <div className="p-5 sm:p-6">
        <p className="mb-3 inline-flex items-center gap-1.5 rounded bg-teal-50 px-2.5 py-1 text-xs font-bold uppercase text-teal-700">
          <BriefcaseBusiness
            aria-hidden="true"
            className="h-3.5 w-3.5"
          />
          Layanan
        </p>

        <h3 className="text-lg font-black leading-7 text-slate-950 sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {service.summary}
        </p>

        <CardLink href={`/layanan/${service.slug}`}>
          Pelajari layanan
        </CardLink>
      </div>
    </article>
  );
}

type LawyerCardProps = {
  lawyer: {
    name: string;
    slug: string;
    photo?: string | null;
    position: string;
    shortBio: string;
    specialty: string;
  };
};

export function LawyerCard({
  lawyer,
}: LawyerCardProps) {
  return (
    <article className="group card-surface interactive-lift overflow-hidden">
      <MediaBlock
        src={lawyer.photo}
        alt={lawyer.name}
        label={lawyer.name}
        className="h-80"
        contain
      />

      <div className="p-5 sm:p-6">
        <p className="inline-flex items-center gap-1.5 text-sm font-bold uppercase text-teal-700">
          <UserRound
            aria-hidden="true"
            className="h-4 w-4"
          />
          {lawyer.position}
        </p>

        <h3 className="mt-2 text-lg font-black leading-7 text-slate-950 sm:text-xl">
          {lawyer.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-slate-500">
          {lawyer.specialty}
        </p>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {lawyer.shortBio}
        </p>

        <CardLink href={`/tim/${lawyer.slug}`}>
          Lihat profil
        </CardLink>
      </div>
    </article>
  );
}

type ArticleCardProps = {
  article: {
    title: string;
    slug: string;
    excerpt: string | null;
    thumbnail?: string | null;
    publishedAt?: Date | null;
    category?: {
      name: string;
    } | null;
  };
};

export function ArticleCard({
  article,
}: ArticleCardProps) {
  return (
    <article className="group card-surface interactive-lift overflow-hidden">
      <MediaBlock
        src={article.thumbnail}
        alt={article.title}
        label={article.title}
        className="h-48"
      />

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
          <Newspaper
            aria-hidden="true"
            className="h-4 w-4 text-teal-700"
          />
          <span>{article.category?.name ?? "Umum"}</span>
          <span aria-hidden="true">&middot;</span>
          <time>
            {formatIndonesianDate(article.publishedAt)}
          </time>
        </div>

        <h3 className="mt-3 text-lg font-black leading-7 text-slate-950 sm:text-xl sm:leading-8">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {article.excerpt ??
            "Baca pembahasan selengkapnya pada halaman artikel."}
        </p>

        <CardLink href={`/artikel/${article.slug}`}>
          Baca artikel
        </CardLink>
      </div>
    </article>
  );
}

type ClientCardProps = {
  client: {
    name: string;
    logo?: string | null;
    shortDescription?: string | null;
    category?: string | null;
  };
};

export function ClientCard({
  client,
}: ClientCardProps) {
  return (
    <article className="group card-surface interactive-lift overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-start">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
          <MediaBlock
            src={client.logo}
            alt={client.name}
            label={client.name}
            className="h-16"
          />
        </div>

        <div>
          <p className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700">
            <Building2
              aria-hidden="true"
              className="h-4 w-4"
            />
            {client.category ?? "Klien"}
          </p>

          <h3 className="mt-1 text-lg font-black text-slate-950">
            {client.name}
          </h3>

          {client.shortDescription ? (
            <p className="mt-2 leading-7 text-slate-600">
              {client.shortDescription}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function EmptyState({
  message,
}: {
  message: string;
}) {
  return (
    <div className="card-surface col-span-full p-8 text-center text-slate-600">
      <p className="font-semibold">{message}</p>
    </div>
  );
}
