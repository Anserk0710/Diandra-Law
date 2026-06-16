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
            Metadata ini menjadi fallback
            sebelum metadata per halaman dibuat
            pada Phase 7.
          </p>
        </div>

        <div>
          <label
            htmlFor="metaTitle"
            className="text-sm font-semibold"
          >
            Meta title
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
            Meta description
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
          <label
            htmlFor="ogImage"
            className="text-sm font-semibold"
          >
            Default OG image
          </label>

          <input
            id="ogImage"
            name="ogImage"
            defaultValue={
              initialData.ogImage
            }
            className="input-text mt-2"
            placeholder="/images/og-default.jpg"
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
              Robots
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
                Index, follow
              </option>
              <option value="index,nofollow">
                Index, nofollow
              </option>
              <option value="noindex,follow">
                Noindex, follow
              </option>
              <option value="noindex,nofollow">
                Noindex, nofollow
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
          Nilai schema disimpan sekarang.
          Pembuatan JSON-LD dilakukan pada
          Phase 7.
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
            : "Simpan SEO"}
        </button>
      </div>
    </form>
  );
}