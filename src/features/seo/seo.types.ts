export const SEO_ENTITY_TYPES = [
    "page",
    "service",
    "lawyer",
    "article",
    "client",
] as const;

export type SeoEntityType = (typeof SEO_ENTITY_TYPES)[number];

export const SEO_ROBOTS_OPTIONS = [
    "index,follow",
    "index,nofollow",
    "noindex,follow",
    "noindex,nofollow",
] as const;

export type SeoRobotsValue = (typeof SEO_ROBOTS_OPTIONS)[number];

export const SEO_SCHEMA_TYPES = [
    "WebPage",
    "AboutPage",
    "ContactPage",
    "CollectionPage",
    "LegalService",
    "ProfessionalService",
    "Service",
    "Person",
    "Article",
] as const;

export type SeoSchemaType = (typeof SEO_SCHEMA_TYPES)[number];

export function isSeoEntityType(
    value: string,
): value is SeoEntityType {
    return SEO_ENTITY_TYPES.includes(value as SeoEntityType);
}