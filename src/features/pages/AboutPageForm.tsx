"use client";

import { useActionState } from "react";

import {
  FieldError,
  FormMessage,
} from "@/components/admin/AdminCrudUi";
import { DynamicStringList } from "@/components/admin/DynamicStringList";
import {
  INITIAL_ACTION_STATE,
  type CmsFormAction,
} from "@/lib/cms/action-state";

import type { AboutPageFormValues } from "./page.schema";
import {
  PageIdentityFields,
  SectionTitle,
  SubmitPageButton,
  TextareaField,
  TextField,
} from "./HomePageForm";

type Props = {
  action: CmsFormAction;
  initialData: AboutPageFormValues;
};

export function AboutPageForm({
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

        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Label tombol"
            name="hero.buttonLabel"
            defaultValue={
              initialData.hero.buttonLabel
            }
            state={state}
          />

          <TextField
            label="Link tombol"
            name="hero.buttonLink"
            defaultValue={
              initialData.hero.buttonLink
            }
            state={state}
          />
        </div>
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Profil Firma" />

        <TextField
          label="Eyebrow"
          name="companyProfile.eyebrow"
          defaultValue={
            initialData.companyProfile
              .eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="companyProfile.title"
          defaultValue={
            initialData.companyProfile.title
          }
          state={state}
        />

        <TextareaField
          label="Isi profil"
          name="companyProfile.content"
          defaultValue={
            initialData.companyProfile
              .content
          }
          state={state}
        />
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Visi" />

        <TextField
          label="Eyebrow"
          name="vision.eyebrow"
          defaultValue={
            initialData.vision.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="vision.title"
          defaultValue={
            initialData.vision.title
          }
          state={state}
        />

        <TextareaField
          label="Isi visi"
          name="vision.content"
          defaultValue={
            initialData.vision.content
          }
          state={state}
        />
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Nilai Firma" />

        <TextField
          label="Eyebrow"
          name="values.eyebrow"
          defaultValue={
            initialData.values.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="values.title"
          defaultValue={
            initialData.values.title
          }
          state={state}
        />

        <DynamicStringList
          prefix="valueItems"
          itemLabel="Nilai firma"
          addLabel="Tambah nilai"
          initialItems={initialData.valueItems.map(
            (item) => item.value,
          )}
        />

        <FieldError
          state={state}
          name="valueItems"
        />
      </section>

      <SubmitPageButton
        pending={pending}
      />
    </form>
  );
}