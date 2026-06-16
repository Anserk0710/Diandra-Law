"use client";

import {
  useActionState,
  useState,
} from "react";

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
    whatsappNumber: string;
    whatsappMessage: string;
  };
};

export function WhatsAppSettingsForm({
  action,
  initialData,
}: Props) {
  const [state, formAction, pending] =
    useActionState(
      action,
      INITIAL_ACTION_STATE,
    );

  const [number, setNumber] = useState(
    initialData.whatsappNumber,
  );

  const [message, setMessage] = useState(
    initialData.whatsappMessage,
  );

  const normalizedNumber =
    number.replace(/\D/g, "");

  const previewUrl = normalizedNumber
    ? `https://wa.me/${normalizedNumber}${
        message.trim()
          ? `?text=${encodeURIComponent(
              message.trim(),
            )}`
          : ""
      }`
    : "";

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
      <FormMessage state={state} />

      <section className="card-surface space-y-5 p-6">
        <div>
          <h2 className="text-xl font-bold">
            WhatsApp Global
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            Digunakan oleh tombol header,
            floating button, homepage, dan
            halaman kontak.
          </p>
        </div>

        <div>
          <label
            htmlFor="whatsappNumber"
            className="text-sm font-semibold"
          >
            Nomor WhatsApp
          </label>

          <input
            id="whatsappNumber"
            name="whatsappNumber"
            value={number}
            onChange={(event) =>
              setNumber(event.target.value)
            }
            className="input-text mt-2"
            placeholder="6281234567890"
          />

          <p className="mt-1 text-xs text-slate-500">
            Gunakan kode negara tanpa simbol
            plus. Contoh: 6281234567890.
          </p>

          <FieldError
            state={state}
            name="whatsappNumber"
          />
        </div>

        <div>
          <label
            htmlFor="whatsappMessage"
            className="text-sm font-semibold"
          >
            Pesan awal
          </label>

          <textarea
            id="whatsappMessage"
            name="whatsappMessage"
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            rows={5}
            maxLength={255}
            className="input-text mt-2 resize-y"
          />

          <FieldError
            state={state}
            name="whatsappMessage"
          />
        </div>

        {previewUrl ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold">
              Preview link
            </p>

            <p className="mt-2 break-all text-sm text-slate-600">
              {previewUrl}
            </p>

            <a
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-4 text-sm"
            >
              Test WhatsApp
            </a>
          </div>
        ) : null}
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary min-w-44 disabled:opacity-60"
        >
          {pending
            ? "Menyimpan..."
            : "Simpan WhatsApp"}
        </button>
      </div>
    </form>
  );
}