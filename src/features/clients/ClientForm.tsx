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

type ClientInitialData = {
  name: string;
  slug: string;
  logo: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  sortOrder: number;
  status:
    | "draft"
    | "published"
    | "inactive";
};

type ClientFormProps = {
  action: CmsFormAction;
  submitLabel: string;
  initialData?: ClientInitialData;
};

export function ClientForm({
  action,
  submitLabel,
  initialData,
}: ClientFormProps) {
  const [state, formAction, pending] =
    useActionState(
      action,
      INITIAL_ACTION_STATE,
    );

  return (
    <form
      action={formAction}
      className="card-surface space-y-5 p-6"
    >
      <FormMessage state={state} />

      <div>
        <label
          htmlFor="name"
          className="text-sm font-semibold"
        >
          Nama client
        </label>

        <input
          id="name"
          name="name"
          required
          maxLength={191}
          defaultValue={initialData?.name}
          className="input-text mt-2"
        />

        <FieldError state={state} name="name" />
      </div>

      <div>
        <label
          htmlFor="slug"
          className="text-sm font-semibold"
        >
          Slug opsional
        </label>

        <input
          id="slug"
          name="slug"
          maxLength={191}
          defaultValue={initialData?.slug}
          className="input-text mt-2"
        />

        <FieldError state={state} name="slug" />
      </div>

      <div>
        <label
          htmlFor="logo"
          className="text-sm font-semibold"
        >
          Logo
        </label>

        <input
          id="logo"
          name="logo"
          maxLength={255}
          defaultValue={initialData?.logo}
          className="input-text mt-2"
          placeholder="/images/client-logo.png atau https://..."
        />

        <FieldError state={state} name="logo" />
      </div>

      <div>
        <label
          htmlFor="category"
          className="text-sm font-semibold"
        >
          Kategori client
        </label>

        <input
          id="category"
          name="category"
          maxLength={191}
          defaultValue={
            initialData?.category
          }
          className="input-text mt-2"
          placeholder="Contoh: Perusahaan, Individu, Institusi"
        />

        <FieldError
          state={state}
          name="category"
        />
      </div>

      <div>
        <label
          htmlFor="shortDescription"
          className="text-sm font-semibold"
        >
          Deskripsi/Testimoni singkat
        </label>

        <textarea
          id="shortDescription"
          name="shortDescription"
          rows={5}
          maxLength={5000}
          defaultValue={
            initialData?.shortDescription
          }
          className="input-text mt-2 resize-y"
        />

        <FieldError
          state={state}
          name="shortDescription"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="sortOrder"
            className="text-sm font-semibold"
          >
            Urutan tampil
          </label>

          <input
            id="sortOrder"
            name="sortOrder"
            type="number"
            min={0}
            max={9999}
            defaultValue={
              initialData?.sortOrder ?? 0
            }
            className="input-text mt-2"
          />

          <FieldError
            state={state}
            name="sortOrder"
          />
        </div>

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
            defaultValue={
              initialData?.status ?? "draft"
            }
            className="input-text mt-2"
          >
            <option value="draft">
              Draft
            </option>
            <option value="published">
              Published
            </option>
            <option value="inactive">
              Inactive
            </option>
          </select>

          <FieldError
            state={state}
            name="status"
          />
        </div>
      </div>

      <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
        <input
          name="featured"
          type="checkbox"
          defaultChecked={
            initialData?.featured ?? false
          }
          className="h-4 w-4"
        />

        <span className="font-semibold">
          Featured client
        </span>
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary min-w-40 disabled:opacity-60"
        >
          {pending
            ? "Menyimpan..."
            : submitLabel}
        </button>
      </div>
    </form>
  );
}