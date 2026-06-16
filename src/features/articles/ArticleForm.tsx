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

type CategoryOption = {
  id: string;
  name: string;
};

type ArticleInitialData = {
  categoryId: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  content: string;
  featured: boolean;
  publishedAt: string;
  status:
    | "draft"
    | "published"
    | "archived";
};

type ArticleFormProps = {
  action: CmsFormAction;
  submitLabel: string;
  categories: CategoryOption[];
  initialData?: ArticleInitialData;
};

export function ArticleForm({
  action,
  submitLabel,
  categories,
  initialData,
}: ArticleFormProps) {
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
          htmlFor="title"
          className="text-sm font-semibold"
        >
          Judul artikel
        </label>

        <input
          id="title"
          name="title"
          required
          maxLength={255}
          defaultValue={initialData?.title}
          className="input-text mt-2"
        />

        <FieldError state={state} name="title" />
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
          maxLength={255}
          defaultValue={initialData?.slug}
          className="input-text mt-2"
          placeholder="kosongkan untuk membuat dari judul"
        />

        <FieldError state={state} name="slug" />
      </div>

      <div>
        <label
          htmlFor="categoryId"
          className="text-sm font-semibold"
        >
          Kategori
        </label>

        <select
          id="categoryId"
          name="categoryId"
          defaultValue={
            initialData?.categoryId ?? ""
          }
          className="input-text mt-2"
        >
          <option value="">
            Tanpa kategori
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <FieldError
          state={state}
          name="categoryId"
        />
      </div>

      <div>
        <label
          htmlFor="excerpt"
          className="text-sm font-semibold"
        >
          Excerpt
        </label>

        <textarea
          id="excerpt"
          name="excerpt"
          rows={4}
          maxLength={3000}
          defaultValue={initialData?.excerpt}
          className="input-text mt-2 resize-y"
        />

        <FieldError
          state={state}
          name="excerpt"
        />
      </div>

      <div>
        <label
          htmlFor="thumbnail"
          className="text-sm font-semibold"
        >
          Thumbnail
        </label>

        <input
          id="thumbnail"
          name="thumbnail"
          maxLength={255}
          defaultValue={initialData?.thumbnail}
          className="input-text mt-2"
          placeholder="/images/article.jpg atau https://..."
        />

        <FieldError
          state={state}
          name="thumbnail"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="text-sm font-semibold"
        >
          Isi artikel
        </label>

        <textarea
          id="content"
          name="content"
          required
          rows={16}
          maxLength={100000}
          defaultValue={initialData?.content}
          className="input-text mt-2 resize-y"
        />

        <p className="mt-1 text-xs text-slate-500">
          Gunakan plain text. Rich-text editor
          belum digunakan pada phase ini.
        </p>

        <FieldError
          state={state}
          name="content"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="publishedAt"
            className="text-sm font-semibold"
          >
            Tanggal publikasi
          </label>

          <input
            id="publishedAt"
            name="publishedAt"
            type="date"
            defaultValue={
              initialData?.publishedAt
            }
            className="input-text mt-2"
          />

          <FieldError
            state={state}
            name="publishedAt"
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
            <option value="archived">
              Archived
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
          Featured article
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