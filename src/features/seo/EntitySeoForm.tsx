"use client";

import { useActionState } from "react";

import {
  FieldError,
  FormMessage,
} from "@/components/admin/AdminCrudUi";
import { MediaPickerField } from "@/features/media/MediaPickerField";
import {
  INITIAL_ACTION_STATE,
  type CmsFormAction,
} from "@/lib/cms/action-state";

import type {
  SeoRobotsValue,
  SeoSchemaType,
} from "./seo.types";

type SchemaOption = {
  value: SeoSchemaType;
  label: string;
};

type EntitySeoFormProps = {
  action: CmsFormAction;

  title?: string;

  description?: string;

  initialData: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
    robots: SeoRobotsValue;
    schemaType: SeoSchemaType;
  };

  automaticData: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: string | null;
    canonicalPath: string;
  };

  schemaOptions: SchemaOption[];
};

export function EntitySeoForm({
  action,
  title = "SEO Halaman",
  description =
    "Kosongkan judul, deskripsi, gambar, dan canonical untuk memakai nilai otomatis dari konten.",
  initialData,
  automaticData,
  schemaOptions,
}: EntitySeoFormProps) {
  const [
    state,
    formAction,
    pending,
  ] = useActionState(
    action,
    INITIAL_ACTION_STATE,
  );

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
      <FormMessage state={state} />

      <section className="card-surface space-y-5 p-6">
        <div>
          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            {description}
          </p>
        </div>

        <div>
          <label
            htmlFor="metaTitle"
            className="text-sm font-semibold"
          >
            Judul SEO
          </label>

          <input
            id="metaTitle"
            name="metaTitle"
            defaultValue={
              initialData.metaTitle
            }
            maxLength={255}
            className="input-text mt-2"
            placeholder={
              automaticData.metaTitle
            }
          />

          <p className="mt-1 text-xs text-slate-500">
            Otomatis:{" "}
            {automaticData.metaTitle}
          </p>

          <FieldError
            state={state}
            name="metaTitle"
          />
        </div>

        <div>
          <label
            htmlFor="metaDescription"
            className="text-sm font-semibold"
          >
            Deskripsi SEO
          </label>

          <textarea
            id="metaDescription"
            name="metaDescription"
            defaultValue={
              initialData
                .metaDescription
            }
            rows={4}
            maxLength={500}
            className="input-text mt-2 resize-y"
            placeholder={
              automaticData
                .metaDescription
            }
          />

          <p className="mt-1 text-xs text-slate-500">
            Otomatis:{" "}
            {
              automaticData
                .metaDescription
            }
          </p>

          <FieldError
            state={state}
            name="metaDescription"
          />
        </div>

        <div>
          <MediaPickerField
            name="ogImage"
            label="OG image"
            module="seo"
            defaultValue={
              initialData.ogImage
            }
            help={
              automaticData.ogImage
                ? `Kosongkan untuk memakai gambar konten: ${automaticData.ogImage}`
                : "Gambar yang tampil ketika halaman dibagikan ke media sosial."
            }
          />

          <FieldError
            state={state}
            name="ogImage"
          />
        </div>

        <div>
          <label
            htmlFor="canonicalUrl"
            className="text-sm font-semibold"
          >
            Canonical URL khusus
          </label>

          <input
            id="canonicalUrl"
            name="canonicalUrl"
            type="url"
            defaultValue={
              initialData.canonicalUrl
            }
            maxLength={500}
            className="input-text mt-2"
            placeholder="https://domain.com/halaman"
          />

          <p className="mt-1 text-xs text-slate-500">
            Kosongkan untuk membuat
            canonical otomatis dari path{" "}
            {
              automaticData
                .canonicalPath
            }
            .
          </p>

          <FieldError
            state={state}
            name="canonicalUrl"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="robots"
              className="text-sm font-semibold"
            >
              Pengindeksan
            </label>

            <select
              id="robots"
              name="robots"
              defaultValue={
                initialData.robots
              }
              className="input-text mt-2"
            >
              <option value="index,follow">
                Diindeks & diikuti
              </option>

              <option value="index,nofollow">
                Diindeks, tautan
                tidak diikuti
              </option>

              <option value="noindex,follow">
                Tidak diindeks,
                tautan diikuti
              </option>

              <option value="noindex,nofollow">
                Tidak diindeks &
                tidak diikuti
              </option>
            </select>

            <FieldError
              state={state}
              name="robots"
            />
          </div>

          <div>
            <label
              htmlFor="schemaType"
              className="text-sm font-semibold"
            >
              Schema type
            </label>

            <select
              id="schemaType"
              name="schemaType"
              defaultValue={
                initialData.schemaType
              }
              className="input-text mt-2"
            >
              {schemaOptions.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ),
              )}
            </select>

            <FieldError
              state={state}
              name="schemaType"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary min-w-44 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending
            ? "Menyimpan..."
            : "Simpan SEO Halaman"}
        </button>
      </div>
    </form>
  );
}