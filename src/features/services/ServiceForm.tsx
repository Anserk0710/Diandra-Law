"use client";

import { useActionState } from "react";
import {
  useFieldArray,
  useForm,
} from "react-hook-form";

import {
  FieldError,
  FormMessage,
} from "@/components/admin/AdminCrudUi";
import {
  INITIAL_ACTION_STATE,
  type CmsFormAction,
} from "@/lib/cms/action-state";

type ServiceFormValues = {
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string;
  featured: boolean;
  sortOrder: number;
  status:
    | "draft"
    | "published"
    | "inactive";

  faqs: Array<{
    question: string;
    answer: string;
    sortOrder: number;
  }>;

  ctas: Array<{
    label: string;
    link: string;
    type:
      | "whatsapp"
      | "url"
      | "contact";
    isActive: boolean;
  }>;
};

type ServiceFormProps = {
  action: CmsFormAction;
  submitLabel: string;
  initialData?: Partial<ServiceFormValues>;
};

export function ServiceForm({
  action,
  submitLabel,
  initialData,
}: ServiceFormProps) {
  const [state, formAction, pending] =
    useActionState(
      action,
      INITIAL_ACTION_STATE,
    );

  const {
    register,
    control,
    watch,
  } = useForm<ServiceFormValues>({
    defaultValues: {
      title: initialData?.title ?? "",
      slug: initialData?.slug ?? "",
      summary: initialData?.summary ?? "",
      content: initialData?.content ?? "",
      coverImage:
        initialData?.coverImage ?? "",
      featured:
        initialData?.featured ?? false,
      sortOrder:
        initialData?.sortOrder ?? 0,
      status:
        initialData?.status ?? "draft",

      faqs:
        initialData?.faqs &&
        initialData.faqs.length > 0
          ? initialData.faqs
          : [
              {
                question: "",
                answer: "",
                sortOrder: 0,
              },
            ],

      ctas:
        initialData?.ctas &&
        initialData.ctas.length > 0
          ? initialData.ctas
          : [
              {
                label:
                  "Konsultasi Layanan Ini",
                link: "",
                type: "whatsapp",
                isActive: true,
              },
            ],
    },
  });

  const faqFields = useFieldArray({
    control,
    name: "faqs",
  });

  const ctaFields = useFieldArray({
    control,
    name: "ctas",
  });

  const ctas = watch("ctas");

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
      <FormMessage state={state} />

      <section className="card-surface space-y-5 p-6">
        <div>
          <h2 className="text-xl font-bold">
            Informasi Service
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            Data utama yang tampil pada halaman
            daftar dan detail layanan.
          </p>
        </div>

        <div>
          <label
            htmlFor="title"
            className="text-sm font-semibold"
          >
            Judul service
          </label>

          <input
            id="title"
            type="text"
            required
            maxLength={255}
            className="input-text mt-2"
            {...register("title")}
          />

          <FieldError
            state={state}
            name="title"
          />
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
            type="text"
            maxLength={255}
            className="input-text mt-2"
            placeholder="kosongkan untuk membuat dari judul"
            {...register("slug")}
          />

          <p className="mt-1 text-xs text-slate-500">
            Contoh: litigasi-dan-penyelesaian-sengketa
          </p>

          <FieldError
            state={state}
            name="slug"
          />
        </div>

        <div>
          <label
            htmlFor="summary"
            className="text-sm font-semibold"
          >
            Ringkasan
          </label>

          <textarea
            id="summary"
            required
            rows={4}
            maxLength={3000}
            className="input-text mt-2 resize-y"
            {...register("summary")}
          />

          <FieldError
            state={state}
            name="summary"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="text-sm font-semibold"
          >
            Isi lengkap
          </label>

          <textarea
            id="content"
            required
            rows={12}
            maxLength={50000}
            className="input-text mt-2 resize-y"
            {...register("content")}
          />

          <p className="mt-1 text-xs text-slate-500">
            Phase ini menggunakan plain text.
            Jangan masukkan tag HTML.
          </p>

          <FieldError
            state={state}
            name="content"
          />
        </div>

        <div>
          <label
            htmlFor="coverImage"
            className="text-sm font-semibold"
          >
            Cover image
          </label>

          <input
            id="coverImage"
            type="text"
            maxLength={255}
            className="input-text mt-2"
            placeholder="/images/service.jpg atau https://..."
            {...register("coverImage")}
          />

          <p className="mt-1 text-xs text-slate-500">
            Upload media akan dibuat pada Phase 6.
          </p>

          <FieldError
            state={state}
            name="coverImage"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sortOrder"
              className="text-sm font-semibold"
            >
              Urutan tampil
            </label>

            <input
              id="sortOrder"
              type="number"
              min={0}
              max={9999}
              className="input-text mt-2"
              {...register("sortOrder", {
                valueAsNumber: true,
              })}
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
              className="input-text mt-2"
              {...register("status")}
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
            type="checkbox"
            className="h-4 w-4"
            {...register("featured")}
          />

          <span>
            <span className="block font-semibold">
              Featured
            </span>

            <span className="text-sm text-slate-500">
              Tampilkan sebagai service unggulan.
            </span>
          </span>
        </label>
      </section>

      <section className="card-surface space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              FAQ Service
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Pertanyaan dan jawaban pada detail
              service.
            </p>
          </div>

          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              faqFields.append({
                question: "",
                answer: "",
                sortOrder:
                  faqFields.fields.length,
              })
            }
          >
            Tambah FAQ
          </button>
        </div>

        <FieldError
          state={state}
          name="faqs"
        />

        <div className="space-y-4">
          {faqFields.fields.map(
            (field, index) => (
              <article
                key={field.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold">
                    FAQ {index + 1}
                  </h3>

                  <button
                    type="button"
                    className="text-sm font-semibold text-red-700"
                    onClick={() =>
                      faqFields.remove(index)
                    }
                  >
                    Hapus FAQ
                  </button>
                </div>

                <div className="mt-4 grid gap-4">
                  <div>
                    <label className="text-sm font-semibold">
                      Pertanyaan
                    </label>

                    <input
                      type="text"
                      maxLength={255}
                      className="input-text mt-2"
                      {...register(
                        `faqs.${index}.question`,
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Jawaban
                    </label>

                    <textarea
                      rows={4}
                      maxLength={5000}
                      className="input-text mt-2 resize-y"
                      {...register(
                        `faqs.${index}.answer`,
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Urutan
                    </label>

                    <input
                      type="number"
                      min={0}
                      max={9999}
                      className="input-text mt-2"
                      {...register(
                        `faqs.${index}.sortOrder`,
                        {
                          valueAsNumber: true,
                        },
                      )}
                    />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="card-surface space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              CTA Service
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Tombol tindakan pada detail service.
            </p>
          </div>

          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              ctaFields.append({
                label: "",
                link: "",
                type: "whatsapp",
                isActive: true,
              })
            }
          >
            Tambah CTA
          </button>
        </div>

        <FieldError
          state={state}
          name="ctas"
        />

        <div className="space-y-4">
          {ctaFields.fields.map(
            (field, index) => (
              <article
                key={field.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold">
                    CTA {index + 1}
                  </h3>

                  <button
                    type="button"
                    className="text-sm font-semibold text-red-700"
                    onClick={() =>
                      ctaFields.remove(index)
                    }
                  >
                    Hapus CTA
                  </button>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold">
                      Label
                    </label>

                    <input
                      type="text"
                      maxLength={191}
                      className="input-text mt-2"
                      {...register(
                        `ctas.${index}.label`,
                      )}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Tipe
                    </label>

                    <select
                      className="input-text mt-2"
                      {...register(
                        `ctas.${index}.type`,
                      )}
                    >
                      <option value="whatsapp">
                        WhatsApp
                      </option>
                      <option value="contact">
                        Halaman kontak
                      </option>
                      <option value="url">
                        URL
                      </option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold">
                      Link
                    </label>

                    <input
                      type="text"
                      maxLength={255}
                      required={
                        ctas[index]?.type ===
                        "url"
                      }
                      className="input-text mt-2"
                      placeholder={
                        ctas[index]?.type ===
                        "whatsapp"
                          ? "Boleh dikosongkan"
                          : ctas[index]?.type ===
                              "contact"
                            ? "/kontak"
                            : "https://... atau /route"
                      }
                      {...register(
                        `ctas.${index}.link`,
                      )}
                    />
                  </div>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      {...register(
                        `ctas.${index}.isActive`,
                      )}
                    />

                    <span className="text-sm font-semibold">
                      CTA aktif
                    </span>
                  </label>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary min-w-40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending
            ? "Menyimpan..."
            : submitLabel}
        </button>
      </div>
    </form>
  );
}