"use client";

import { useActionState } from "react";

import {
  FieldError,
  FormMessage,
} from "@/components/admin/AdminCrudUi";
import { DynamicStringList } from "@/components/admin/DynamicStringList";
import {
  INITIAL_ACTION_STATE,
  type CmsFormAction,
} from "@/lib/cms/action-state";

import type { HomePageFormValues } from "./page.schema";

type HomePageFormProps = {
  action: CmsFormAction;
  initialData: HomePageFormValues;
};

export function HomePageForm({
  action,
  initialData,
}: HomePageFormProps) {
  const [state, formAction, pending] =
    useActionState(
      action,
      INITIAL_ACTION_STATE,
    );

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
      <FormMessage state={state} />

      <PageIdentityFields
        state={state}
        internalTitle={
          initialData.internalTitle
        }
        status={initialData.status}
      />

      <section className="card-surface space-y-5 p-6">
        <SectionTitle
          title="Hero"
          description="Bagian pertama yang dilihat pengunjung."
        />

        <TextField
          label="Eyebrow"
          name="hero.eyebrow"
          defaultValue={
            initialData.hero.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul hero"
          name="hero.title"
          defaultValue={
            initialData.hero.title
          }
          state={state}
        />

        <TextareaField
          label="Deskripsi hero"
          name="hero.description"
          defaultValue={
            initialData.hero.description
          }
          state={state}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Label CTA utama"
            name="hero.primaryCtaLabel"
            defaultValue={
              initialData.hero
                .primaryCtaLabel
            }
            state={state}
          />

          <TextField
            label="Link CTA utama"
            name="hero.primaryCtaLink"
            defaultValue={
              initialData.hero
                .primaryCtaLink
            }
            state={state}
            help='Gunakan "whatsapp" untuk link WhatsApp.'
          />

          <TextField
            label="Label CTA kedua"
            name="hero.secondaryCtaLabel"
            defaultValue={
              initialData.hero
                .secondaryCtaLabel
            }
            state={state}
          />

          <TextField
            label="Link CTA kedua"
            name="hero.secondaryCtaLink"
            defaultValue={
              initialData.hero
                .secondaryCtaLink
            }
            state={state}
          />
        </div>
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle
          title="Fokus Firma"
          description="Daftar fokus yang tampil pada kartu di hero."
        />

        <TextField
          label="Eyebrow"
          name="focus.eyebrow"
          defaultValue={
            initialData.focus.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="focus.title"
          defaultValue={
            initialData.focus.title
          }
          state={state}
        />

        <DynamicStringList
          prefix="focusItems"
          itemLabel="Fokus"
          addLabel="Tambah fokus"
          initialItems={initialData.focusItems.map(
            (item) => item.value,
          )}
        />

        <FieldError
          state={state}
          name="focusItems"
        />
      </section>

      <ContentSectionFields
        title="Tentang Kami"
        prefix="aboutIntro"
        data={initialData.aboutIntro}
        state={state}
      />

      <ContentSectionFields
        title="Layanan"
        prefix="servicesSection"
        data={
          initialData.servicesSection
        }
        state={state}
      />

      <ContentSectionFields
        title="Tim Lawyer"
        prefix="lawyersSection"
        data={
          initialData.lawyersSection
        }
        state={state}
      />

      <ContentSectionFields
        title="Artikel"
        prefix="articlesSection"
        data={
          initialData.articlesSection
        }
        state={state}
      />

      <section className="card-surface space-y-5 p-6">
        <SectionTitle
          title="CTA Kontak"
          description="Bagian konsultasi dan map di bawah homepage."
        />

        <TextField
          label="Eyebrow"
          name="contactCta.eyebrow"
          defaultValue={
            initialData.contactCta.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="contactCta.title"
          defaultValue={
            initialData.contactCta.title
          }
          state={state}
        />

        <TextareaField
          label="Deskripsi"
          name="contactCta.description"
          defaultValue={
            initialData.contactCta
              .description
          }
          state={state}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Label tombol"
            name="contactCta.buttonLabel"
            defaultValue={
              initialData.contactCta
                .buttonLabel
            }
            state={state}
          />

          <TextField
            label="Link tombol"
            name="contactCta.buttonLink"
            defaultValue={
              initialData.contactCta
                .buttonLink
            }
            state={state}
          />
        </div>

        <TextField
          label="Judul iframe map"
          name="contactCta.mapTitle"
          defaultValue={
            initialData.contactCta.mapTitle
          }
          state={state}
        />

        <TextField
          label="Pesan ketika map kosong"
          name="contactCta.mapEmptyMessage"
          defaultValue={
            initialData.contactCta
              .mapEmptyMessage
          }
          state={state}
        />
      </section>

      <SubmitPageButton
        pending={pending}
      />
    </form>
  );
}

function PageIdentityFields({
  state,
  internalTitle,
  status,
}: {
  state: Parameters<
    typeof FormMessage
  >[0]["state"];
  internalTitle: string;
  status: "draft" | "published";
}) {
  return (
    <section className="card-surface grid gap-5 p-6 md:grid-cols-2">
      <TextField
        label="Judul internal CMS"
        name="internalTitle"
        defaultValue={internalTitle}
        state={state}
      />

      <div>
        <label
          htmlFor="status"
          className="text-sm font-semibold"
        >
          Status
        </label>

        <select
          id="status"
          name="status"
          defaultValue={status}
          className="input-text mt-2"
        >
          <option value="draft">
            Draft
          </option>
          <option value="published">
            Published
          </option>
        </select>

        <FieldError
          state={state}
          name="status"
        />
      </div>
    </section>
  );
}

function ContentSectionFields({
  title,
  prefix,
  data,
  state,
}: {
  title: string;
  prefix:
  | "aboutIntro"
  | "servicesSection"
  | "lawyersSection"
  | "articlesSection";
  data: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };
  state: Parameters<
    typeof FormMessage
  >[0]["state"];
}) {
  return (
    <section className="card-surface space-y-5 p-6">
      <SectionTitle title={title} />

      <TextField
        label="Eyebrow"
        name={`${prefix}.eyebrow`}
        defaultValue={data.eyebrow}
        state={state}
      />

      <TextField
        label="Judul"
        name={`${prefix}.title`}
        defaultValue={data.title}
        state={state}
      />

      <TextareaField
        label="Deskripsi"
        name={`${prefix}.description`}
        defaultValue={data.description}
        state={state}
      />

      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="Label tombol"
          name={`${prefix}.buttonLabel`}
          defaultValue={data.buttonLabel}
          state={state}
        />

        <TextField
          label="Link tombol"
          name={`${prefix}.buttonLink`}
          defaultValue={data.buttonLink}
          state={state}
        />
      </div>
    </section>
  );
}

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      {description ? (
        <p className="mt-1 text-sm text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TextField({
  label,
  name,
  defaultValue,
  state,
  help,
}: {
  label: string;
  name: string;
  defaultValue: string;
  state: Parameters<
    typeof FormMessage
  >[0]["state"];
  help?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="input-text mt-2"
        maxLength={500}
      />

      {help ? (
        <p className="mt-1 text-xs text-slate-500">
          {help}
        </p>
      ) : null}

      <FieldError
        state={state}
        name={name}
      />
    </div>
  );
}

function TextareaField({
  label,
  name,
  defaultValue,
  state,
}: {
  label: string;
  name: string;
  defaultValue: string;
  state: Parameters<
    typeof FormMessage
  >[0]["state"];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        className="input-text mt-2 resize-y"
      />

      <FieldError
        state={state}
        name={name}
      />
    </div>
  );
}

function SubmitPageButton({
  pending,
}: {
  pending: boolean;
}) {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={pending}
        className="btn-primary min-w-44 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending
          ? "Menyimpan..."
          : "Simpan halaman"}
      </button>
    </div>
  );
}

export {
  PageIdentityFields,
  SectionTitle,
  SubmitPageButton,
  TextareaField,
  TextField,
};