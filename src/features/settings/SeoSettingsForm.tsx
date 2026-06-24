"use client";

import { useActionState } from "react";

import {
  FieldError,
  FormMessage,
} from "@/components/admin/AdminCrudUi";
import {
  INITIAL_ACTION_STATE,
  type CmsFormAction,
} from "@/lib/cms/action-state";
import { MediaPickerField } from "@/features/media/MediaPickerField";

type Props = {
  action: CmsFormAction;
  initialData: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
    robots:
      | "index,follow"
      | "index,nofollow"
      | "noindex,follow"
      | "noindex,nofollow";
    schemaType:
      | "LegalService"
      | "Organization"
      | "ProfessionalService";
  };
};

export function SeoSettingsForm({
  action,
  initialData,
}: Props) {
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

      <section className="card-surface space-y-5 p-6">
        <div>
          <h2 className="text-xl font-bold">
            SEO Global
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            Metadata ini menjadi cadangan
            sebelum metadata per halaman diatur.
          </p>
        </div>

        <div>
          <label
            htmlFor="metaTitle"
            className="text-sm font-semibold"
          >
            Judul SEO (meta title)
          </label>

          <input
            id="metaTitle"
            name="metaTitle"
            defaultValue={
              initialData.metaTitle
            }
            maxLength={255}
            className="input-text mt-2"
          />

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
            Deskripsi SEO (meta description)
          </label>

          <textarea
            id="metaDescription"
            name="metaDescription"
            defaultValue={
              initialData.metaDescription
            }
            rows={5}
            maxLength={500}
            className="input-text mt-2 resize-y"
          />

          <FieldError
            state={state}
            name="metaDescription"
          />
        </div>

        <div>
          <label
            htmlFor="canonicalUrl"
            className="text-sm font-semibold"
          >
            URL utama website
          </label>

          <input
            id="canonicalUrl"
            name="canonicalUrl"
            type="url"
            defaultValue={
              initialData.canonicalUrl
            }
            className="input-text mt-2"
            placeholder="https://firmahukum.com"
          />

          <FieldError
            state={state}
            name="canonicalUrl"
          />
        </div>

        <div>
          <MediaPickerField
            name="ogImage"
            label="Default OG image"
            module="seo"
            defaultValue={
              initialData.ogImage
            }
            help="Image default ketika halaman dibagikan ke media sosial."
          />

          <FieldError
            state={state}
            name="ogImage"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="robots"
              className="text-sm font-semibold"
            >
              Pengindeksan mesin pencari
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
                Diindeks, tautan tidak diikuti
              </option>
              <option value="noindex,follow">
                Tidak diindeks, tautan diikuti
              </option>
              <option value="noindex,nofollow">
                Tidak diindeks & tidak diikuti
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
              <option value="LegalService">
                LegalService
              </option>
              <option value="Organization">
                Organization
              </option>
              <option value="ProfessionalService">
                ProfessionalService
              </option>
            </select>

            <FieldError
              state={state}
              name="schemaType"
            />
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Pengaturan skema disimpan.
          Data terstruktur JSON-LD akan aktif secara otomatis.
        </p>
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary min-w-44 disabled:opacity-60"
        >
          {pending
            ? "Menyimpan..."
            : "Simpan Pengaturan SEO"}
        </button>
      </div>
    </form>
  );
}