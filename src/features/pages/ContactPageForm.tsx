"use client";

import { useActionState } from "react";

import { FormMessage } from "@/components/admin/AdminCrudUi";
import {
  INITIAL_ACTION_STATE,
  type CmsFormAction,
} from "@/lib/cms/action-state";

import type { ContactPageFormValues } from "./page.schema";
import {
  PageIdentityFields,
  SectionTitle,
  SubmitPageButton,
  TextareaField,
  TextField,
} from "./HomePageForm";

type Props = {
  action: CmsFormAction;
  initialData: ContactPageFormValues;
};

export function ContactPageForm({
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

      <PageIdentityFields
        state={state}
        internalTitle={
          initialData.internalTitle
        }
        status={initialData.status}
      />

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Hero" />

        <TextField
          label="Eyebrow"
          name="hero.eyebrow"
          defaultValue={
            initialData.hero.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="hero.title"
          defaultValue={
            initialData.hero.title
          }
          state={state}
        />

        <TextareaField
          label="Deskripsi"
          name="hero.description"
          defaultValue={
            initialData.hero.description
          }
          state={state}
        />
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle
          title="Informasi Kantor"
          description="Nilai alamat, email, dan telepon berasal dari Global Settings."
        />

        <TextField
          label="Eyebrow"
          name="officeInfo.eyebrow"
          defaultValue={
            initialData.officeInfo.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="officeInfo.title"
          defaultValue={
            initialData.officeInfo.title
          }
          state={state}
        />

        <TextareaField
          label="Deskripsi"
          name="officeInfo.description"
          defaultValue={
            initialData.officeInfo
              .description
          }
          state={state}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Label alamat"
            name="officeInfo.addressLabel"
            defaultValue={
              initialData.officeInfo
                .addressLabel
            }
            state={state}
          />

          <TextField
            label="Label telepon"
            name="officeInfo.phoneLabel"
            defaultValue={
              initialData.officeInfo
                .phoneLabel
            }
            state={state}
          />

          <TextField
            label="Label email"
            name="officeInfo.emailLabel"
            defaultValue={
              initialData.officeInfo
                .emailLabel
            }
            state={state}
          />

          <TextField
            label="Label tombol WhatsApp"
            name="officeInfo.whatsappButtonLabel"
            defaultValue={
              initialData.officeInfo
                .whatsappButtonLabel
            }
            state={state}
          />
        </div>
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Map" />

        <TextField
          label="Judul iframe"
          name="map.iframeTitle"
          defaultValue={
            initialData.map.iframeTitle
          }
          state={state}
        />

        <TextField
          label="Pesan ketika map kosong"
          name="map.emptyMessage"
          defaultValue={
            initialData.map.emptyMessage
          }
          state={state}
        />
      </section>

      <SubmitPageButton
        pending={pending}
      />
    </form>
  );
}