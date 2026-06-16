import Link from "next/link";
import { formatIndonesianDate, getInitials, } from "@/lib/site-utils";

type MediaBlockProps = {
    src?: string | null;
    alt: string;
    label: string;
    className?: string;
};

function MediaBlock({
    src,
    alt,
    label,
    className = "h-52",
}: MediaBlockProps) {
    if (src) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={src}
                alt={alt}
                className={`${className} w-full object-cover`}
            />
        );
    }

    return (
        <div
            className={`${className} flex w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-2xl font-bold text-amber-300 sm:text-3xl`}
            aria-label={`Placeholder gambar untuk ${label}`}
            >
            {getInitials(label)}
        </div>
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
        <article className="card-surface overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <MediaBlock
        src={service.coverImage}
        alt={service.title}
        label={service.title}
        className="h-44"
      />

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {service.summary}
        </p>

        <Link
          href={`/layanan/${service.slug}`}
          className="mt-5 inline-flex font-semibold text-slate-950 hover:text-amber-700"
        >
          Pelajari layanan →
        </Link>
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
        <article className="card-surface overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <MediaBlock
        src={lawyer.photo}
        alt={lawyer.name}
        label={lawyer.name}
        className="h-64"
      />

      <div className="p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          {lawyer.position}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-slate-950 sm:text-xl">
          {lawyer.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          {lawyer.specialty}
        </p>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {lawyer.shortBio}
        </p>

        <Link
          href={`/tim/${lawyer.slug}`}
          className="mt-5 inline-flex font-semibold text-slate-950 hover:text-amber-700"
        >
          Lihat profil →
        </Link>
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
        <article className="card-surface overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <MediaBlock
        src={article.thumbnail}
        alt={article.title}
        label={article.title}
        className="h-48"
      />

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>{article.category?.name ?? "Umum"}</span>
          <span aria-hidden="true">•</span>
          <time>
            {formatIndonesianDate(article.publishedAt)}
          </time>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-950 sm:text-xl sm:leading-8">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {article.excerpt ??
            "Baca pembahasan selengkapnya pada halaman artikel."}
        </p>

        <Link
          href={`/artikel/${article.slug}`}
          className="mt-5 inline-flex font-semibold text-slate-950 hover:text-amber-700"
        >
          Baca artikel →
        </Link>
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
        <article className="card-surface overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-start">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
          <MediaBlock
            src={client.logo}
            alt={client.name}
            label={client.name}
            className="h-16"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-amber-700">
            {client.category ?? "Klien"}
          </p>

          <h3 className="mt-1 text-lg font-semibold text-slate-950">
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
            {message}
        </div>
    )
}
