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

export function ArticleCategoryCreateForm({
  action,
}: {
  action: CmsFormAction;
}) {
  const [state, formAction, pending] =
    useActionState(
      action,
      INITIAL_ACTION_STATE,
    );

  return (
    <form
      action={formAction}
      className="card-surface space-y-4 p-5"
    >
      <h2 className="text-xl font-bold">
        Tambah kategori
      </h2>

      <FormMessage state={state} />

      <div>
        <label className="text-sm font-semibold">
          Nama kategori
        </label>

        <input
          name="name"
          required
          maxLength={191}
          className="input-text mt-2"
        />

        <FieldError state={state} name="name" />
      </div>

      <div>
        <label className="text-sm font-semibold">
          Slug
        </label>

        <input
          name="slug"
          maxLength={191}
          className="input-text mt-2"
          placeholder="kosongkan untuk auto slug"
        />

        <FieldError state={state} name="slug" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full disabled:opacity-60"
      >
        {pending
          ? "Menyimpan..."
          : "Tambah kategori"}
      </button>
    </form>
  );
}

type ArticleCategoryEditFormProps = {
  action: CmsFormAction;
  name: string;
  slug: string;
};

export function ArticleCategoryEditForm({
  action,
  name,
  slug,
}: ArticleCategoryEditFormProps) {
  const [state, formAction, pending] =
    useActionState(
      action,
      INITIAL_ACTION_STATE,
    );

  return (
    <form
      action={formAction}
      className="grid gap-3 md:grid-cols-[1fr_1fr_auto]"
    >
      <div>
        <input
          name="name"
          required
          maxLength={191}
          defaultValue={name}
          className="input-text"
          aria-label="Nama kategori"
        />

        <FieldError state={state} name="name" />
      </div>

      <div>
        <input
          name="slug"
          maxLength={191}
          defaultValue={slug}
          className="input-text"
          aria-label="Slug kategori"
        />

        <FieldError state={state} name="slug" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-secondary self-start disabled:opacity-60"
      >
        {pending ? "Menyimpan..." : "Simpan"}
      </button>

      {state.message ? (
        <div className="md:col-span-3">
          <FormMessage state={state} />
        </div>
      ) : null}
    </form>
  );
}