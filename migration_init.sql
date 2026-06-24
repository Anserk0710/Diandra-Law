-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "PageStatus" AS ENUM ('draft', 'published');

-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('draft', 'published', 'inactive');

-- CreateEnum
CREATE TYPE "ArticleStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "CtaType" AS ENUM ('whatsapp', 'url', 'contact');

-- CreateTable
CREATE TABLE "admins" (
    "id" BIGSERIAL NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(191) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" BIGSERIAL NOT NULL,
    "page_key" VARCHAR(100) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content_json" JSONB NOT NULL,
    "status" "PageStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "cover_image" VARCHAR(255),
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_faqs" (
    "id" BIGSERIAL NOT NULL,
    "service_id" BIGINT NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "answer" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_ctas" (
    "id" BIGSERIAL NOT NULL,
    "service_id" BIGINT NOT NULL,
    "label" VARCHAR(191) NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "type" "CtaType" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_ctas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lawyers" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "photo" VARCHAR(255),
    "position" VARCHAR(191) NOT NULL,
    "short_bio" TEXT NOT NULL,
    "full_bio" TEXT NOT NULL,
    "specialty" VARCHAR(255) NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lawyers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_categories" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" BIGSERIAL NOT NULL,
    "category_id" BIGINT,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "excerpt" TEXT,
    "thumbnail" VARCHAR(255),
    "content" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "published_at" TIMESTAMP(3),
    "status" "ArticleStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191),
    "logo" VARCHAR(255),
    "short_description" TEXT,
    "category" VARCHAR(191),
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "site_settings" (
    "id" BIGSERIAL NOT NULL,
    "site_name" VARCHAR(191),
    "site_tagline" VARCHAR(255),
    "logo_light" VARCHAR(255),
    "logo_dark" VARCHAR(255),
    "primary_color" VARCHAR(50),
    "secondary_color" VARCHAR(50),
    "whatsapp_number" VARCHAR(50),
    "whatsapp_message" VARCHAR(255),
    "email" VARCHAR(191),
    "phone" VARCHAR(50),
    "office_address" TEXT,
    "map_embed_url" TEXT,
    "footer_text" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo_meta" (
    "id" BIGSERIAL NOT NULL,
    "entity_type" VARCHAR(50) NOT NULL,
    "entity_id" BIGINT NOT NULL,
    "meta_title" VARCHAR(255),
    "meta_description" TEXT,
    "og_image" VARCHAR(255),
    "canonical_url" VARCHAR(255),
    "robots" VARCHAR(100),
    "schema_type" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seo_meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_uploads" (
    "id" BIGSERIAL NOT NULL,
    "module" VARCHAR(100) NOT NULL,
    "original_name" VARCHAR(255) NOT NULL,
    "file_name" VARCHAR(255) NOT NULL,
    "file_path" VARCHAR(500) NOT NULL,
    "file_url" VARCHAR(500) NOT NULL,
    "mime_type" VARCHAR(100) NOT NULL,
    "file_size" BIGINT NOT NULL,
    "uploaded_by_admin_id" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_uploads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pages_page_key_key" ON "pages"("page_key");

-- CreateIndex
CREATE INDEX "pages_page_key_idx" ON "pages"("page_key");

-- CreateIndex
CREATE UNIQUE INDEX "services_slug_key" ON "services"("slug");

-- CreateIndex
CREATE INDEX "services_slug_idx" ON "services"("slug");

-- CreateIndex
CREATE INDEX "service_faqs_service_id_idx" ON "service_faqs"("service_id");

-- CreateIndex
CREATE INDEX "service_ctas_service_id_idx" ON "service_ctas"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "lawyers_slug_key" ON "lawyers"("slug");

-- CreateIndex
CREATE INDEX "lawyers_slug_idx" ON "lawyers"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "article_categories_slug_key" ON "article_categories"("slug");

-- CreateIndex
CREATE INDEX "article_categories_slug_idx" ON "article_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "articles_slug_key" ON "articles"("slug");

-- CreateIndex
CREATE INDEX "articles_slug_idx" ON "articles"("slug");

-- CreateIndex
CREATE INDEX "articles_category_id_idx" ON "articles"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "clients_slug_key" ON "clients"("slug");

-- CreateIndex
CREATE INDEX "clients_slug_idx" ON "clients"("slug");

-- CreateIndex
CREATE INDEX "seo_meta_entity_type_entity_id_idx" ON "seo_meta"("entity_type", "entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "seo_meta_entity_type_entity_id_key" ON "seo_meta"("entity_type", "entity_id");

-- CreateIndex
CREATE INDEX "media_uploads_module_idx" ON "media_uploads"("module");

-- CreateIndex
CREATE INDEX "media_uploads_uploaded_by_admin_id_idx" ON "media_uploads"("uploaded_by_admin_id");

-- AddForeignKey
ALTER TABLE "service_faqs" ADD CONSTRAINT "service_faqs_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_ctas" ADD CONSTRAINT "service_ctas_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "article_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_uploads" ADD CONSTRAINT "media_uploads_uploaded_by_admin_id_fkey" FOREIGN KEY ("uploaded_by_admin_id") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
