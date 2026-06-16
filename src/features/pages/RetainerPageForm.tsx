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

import type { RetainerPageFormValues } from "./page.schema";
import {
  PageIdentityFields,
  SectionTitle,
  SubmitPageButton,
  TextareaField,
  TextField,
} from "./HomePageForm";

type Props = {
  action: CmsFormAction;
  initialData: RetainerPageFormValues;
};

export function RetainerPageForm({
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
        <SectionTitle title="Pengantar Retainer" />

        <TextField
          label="Eyebrow"
          name="intro.eyebrow"
          defaultValue={
            initialData.intro.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="intro.title"
          defaultValue={
            initialData.intro.title
          }
          state={state}
        />

        <TextareaField
          label="Isi"
          name="intro.content"
          defaultValue={
            initialData.intro.content
          }
          state={state}
        />
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Manfaat" />

        <TextField
          label="Eyebrow"
          name="benefits.eyebrow"
          defaultValue={
            initialData.benefits.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="benefits.title"
          defaultValue={
            initialData.benefits.title
          }
          state={state}
        />

        <DynamicStringList
          prefix="benefitItems"
          itemLabel="Manfaat"
          addLabel="Tambah manfaat"
          initialItems={initialData.benefitItems.map(
            (item) => item.value,
          )}
        />

        <FieldError
          state={state}
          name="benefitItems"
        />
      </section>

      <section className="card-surface space-y-5 p-6">
        <SectionTitle title="Tahapan Kerja" />

        <TextField
          label="Eyebrow"
          name="process.eyebrow"
          defaultValue={
            initialData.process.eyebrow
          }
          state={state}
        />

        <TextField
          label="Judul"
          name="process.title"
          defaultValue={
            initialData.process.title
          }
          state={state}
        />

        <DynamicStringList
          prefix="processItems"
          itemLabel="Tahapan"
          addLabel="Tambah tahapan"
          initialItems={initialData.processItems.map(
            (item) => item.value,
          )}
        />

        <FieldError
          state={state}
          name="processItems"
        />
      </section>

      <SubmitPageButton
        pending={pending}
      />
    </form>
  );
}