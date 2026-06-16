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

type LawyerInitialData = {
  name: string;
  slug: string;
  photo: string;
  position: string;
  shortBio: string;
  fullBio: string;
  specialty: string;
  featured: boolean;
  sortOrder: number;
  status:
    | "draft"
    | "published"
    | "inactive";
};

type LawyerFormProps = {
  action: CmsFormAction;
  submitLabel: string;
  initialData?: LawyerInitialData;
};

export function LawyerForm({
  action,
  submitLabel,
  initialData,
}: LawyerFormProps) {
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
          Nama lawyer
        </label>

        <input
          id="name"
          name="name"
          type="text"
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
          Slug
        </label>

        <input
          id="slug"
          name="slug"
          type="text"
          maxLength={191}
          defaultValue={initialData?.slug}
          className="input-text mt-2"
          placeholder="kosongkan untuk membuat dari nama"
        />

        <FieldError state={state} name="slug" />
      </div>

      <div>
        <label
          htmlFor="photo"
          className="text-sm font-semibold"
        >
          Foto
        </label>

        <input
          id="photo"
          name="photo"
          type="text"
          maxLength={255}
          defaultValue={initialData?.photo}
          className="input-text mt-2"
          placeholder="/images/lawyer.jpg atau https://..."
        />

        <FieldError
          state={state}
          name="photo"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="position"
            className="text-sm font-semibold"
          >
            Jabatan
          </label>

          <input
            id="position"
            name="position"
            type="text"
            required
            maxLength={191}
            defaultValue={
              initialData?.position
            }
            className="input-text mt-2"
          />

          <FieldError
            state={state}
            name="position"
          />
        </div>

        <div>
          <label
            htmlFor="specialty"
            className="text-sm font-semibold"
          >
            Spesialisasi
          </label>

          <input
            id="specialty"
            name="specialty"
            type="text"
            required
            maxLength={255}
            defaultValue={
              initialData?.specialty
            }
            className="input-text mt-2"
          />

          <FieldError
            state={state}
            name="specialty"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="shortBio"
          className="text-sm font-semibold"
        >
          Bio singkat
        </label>

        <textarea
          id="shortBio"
          name="shortBio"
          required
          rows={4}
          maxLength={3000}
          defaultValue={initialData?.shortBio}
          className="input-text mt-2 resize-y"
        />

        <FieldError
          state={state}
          name="shortBio"
        />
      </div>

      <div>
        <label
          htmlFor="fullBio"
          className="text-sm font-semibold"
        >
          Bio lengkap
        </label>

        <textarea
          id="fullBio"
          name="fullBio"
          required
          rows={12}
          maxLength={50000}
          defaultValue={initialData?.fullBio}
          className="input-text mt-2 resize-y"
        />

        <FieldError
          state={state}
          name="fullBio"
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
          Featured lawyer
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