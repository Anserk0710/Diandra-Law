import { EntitySeoForm } from "./EntitySeoForm";
import { updateEntitySeoAction } from "./seo.actions";
import type {
  SeoEntityType,
  SeoRobotsValue,
  SeoSchemaType,
} from "./seo.types";

type SeoRecord =
  | {
      metaTitle?: string | null;
      metaDescription?:
        | string
        | null;
      ogImage?: string | null;
      canonicalUrl?:
        | string
        | null;
      robots?: string | null;
      schemaType?: string | null;
    }
  | null;

type SchemaOption = {
  value: SeoSchemaType;
  label: string;
};

function normalizeRobots(
  value?: string | null,
): SeoRobotsValue {
  if (
    value === "index,nofollow" ||
    value === "noindex,follow" ||
    value === "noindex,nofollow"
  ) {
    return value;
  }

  return "index,follow";
}

export function EntitySeoEditor({
  entityType,
  entityId,
  seo,
  automaticData,
  defaultSchemaType,
  schemaOptions,
  title,
}: {
  entityType: SeoEntityType;
  entityId: bigint;

  seo: SeoRecord;

  automaticData: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: string | null;
    canonicalPath: string;
  };

  defaultSchemaType:
    SeoSchemaType;

  schemaOptions: SchemaOption[];

  title?: string;
}) {
  const selectedSchemaType =
    schemaOptions.some(
      (option) =>
        option.value ===
        seo?.schemaType,
    )
      ? (seo?.schemaType as SeoSchemaType)
      : defaultSchemaType;

  const action =
    updateEntitySeoAction.bind(
      null,
      entityType,
      entityId.toString(),
    );

  return (
    <EntitySeoForm
      action={action}
      title={title}
      initialData={{
        metaTitle:
          seo?.metaTitle ?? "",

        metaDescription:
          seo?.metaDescription ?? "",

        ogImage:
          seo?.ogImage ?? "",

        canonicalUrl:
          seo?.canonicalUrl ?? "",

        robots: normalizeRobots(
          seo?.robots,
        ),

        schemaType:
          selectedSchemaType,
      }}
      automaticData={
        automaticData
      }
      schemaOptions={
        schemaOptions
      }
    />
  );
}