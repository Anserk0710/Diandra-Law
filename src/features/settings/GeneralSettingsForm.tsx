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
    siteName: string;
    siteTagline: string;
    logoLight: string;
    logoDark: string;
    primaryColor: string;
    secondaryColor: string;
    email: string;
    phone: string;
    officeAddress: string;
    mapEmbedUrl: string;
    footerText: string;
  };
};

export function GeneralSettingsForm({
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
            Identitas Website
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Nama, tagline, dan logo website.
          </p>
        </div>

        <InputField
          label="Nama website"
          name="siteName"
          defaultValue={
            initialData.siteName
          }
          state={state}
        />

        <TextareaField
          label="Tagline"
          name="siteTagline"
          defaultValue={
            initialData.siteTagline
          }
          state={state}
        />

        <div>
          <MediaPickerField
            name="logoDark"
            label="Logo untuk background terang"
            module="pages"
            defaultValue={
              initialData.logoDark
            }
            help="Logo gelap yang digunakan pada header atau background terang."
          />

          <FieldError
            state={state}
            name="logoDark"
          />
        </div>

        <div>
          <MediaPickerField
            name="logoLight"
            label="Logo untuk background gelap"
            module="pages"
            defaultValue={
              initialData.logoLight
            }
            help="Logo terang yang digunakan pada footer atau background gelap."
          />

          <FieldError
            state={state}
            name="logoLight"
          />
        </div>
      </section>

      <section className="card-surface space-y-5 p-6">
        <div>
          <h2 className="text-xl font-bold">
            Warna Brand
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ColorField
            label="Warna utama (primary)"
            name="primaryColor"
            defaultValue={
              initialData.primaryColor
            }
            state={state}
          />

          <ColorField
            label="Warna aksen (secondary)"
            name="secondaryColor"
            defaultValue={
              initialData.secondaryColor
            }
            state={state}
          />
        </div>
      </section>

      <section className="card-surface space-y-5 p-6">
        <div>
          <h2 className="text-xl font-bold">
            Informasi Kantor
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <InputField
            label="Email kantor"
            name="email"
            type="email"
            defaultValue={
              initialData.email
            }
            state={state}
          />

          <InputField
            label="Nomor telepon"
            name="phone"
            defaultValue={
              initialData.phone
            }
            state={state}
          />
        </div>

        <TextareaField
          label="Alamat kantor"
          name="officeAddress"
          defaultValue={
            initialData.officeAddress
          }
          state={state}
        />

        <TextareaField
          label="Google Maps embed URL"
          name="mapEmbedUrl"
          defaultValue={
            initialData.mapEmbedUrl
          }
          state={state}
        />

        <p className="text-xs text-slate-500">
          Gunakan URL embed Google Maps,
          bukan link berbagi biasa.
        </p>
      </section>

      <section className="card-surface space-y-5 p-6">
        <h2 className="text-xl font-bold">
          Footer
        </h2>

        <TextareaField
          label="Teks footer"
          name="footerText"
          defaultValue={
            initialData.footerText
          }
          state={state}
        />
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary min-w-44 disabled:opacity-60"
        >
          {pending
            ? "Menyimpan..."
            : "Simpan Pengaturan"}
        </button>
      </div>
    </form>
  );
}

function InputField({
  label,
  name,
  defaultValue,
  state,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  defaultValue: string;
  state: Parameters<
    typeof FormMessage
  >[0]["state"];
  type?: string;
  placeholder?: string;
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
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input-text mt-2"
      />

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

function ColorField({
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

      <div className="mt-2 flex gap-3">
        <input
          type="color"
          defaultValue={defaultValue}
          className="h-12 w-16 rounded-lg border border-slate-200 p-1"
          onChange={(event) => {
            const textInput =
              document.getElementById(
                name,
              ) as HTMLInputElement | null;

            if (textInput) {
              textInput.value =
                event.target.value.toUpperCase();
            }
          }}
        />

        <input
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="input-text"
          maxLength={7}
        />
      </div>

      <FieldError
        state={state}
        name={name}
      />
    </div>
  );
}