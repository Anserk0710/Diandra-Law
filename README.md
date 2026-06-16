# Diandra Law

Website firma hukum berbasis Next.js dengan halaman publik, panel admin, manajemen konten, pengaturan SEO, dan data yang tersimpan di MariaDB melalui Prisma.

## Fitur

- Halaman publik: beranda, tentang kami, layanan, detail layanan, tim, detail lawyer, artikel, detail artikel, daftar client, retainer, dan kontak.
- Panel admin untuk mengelola halaman statis, layanan, lawyer, artikel, kategori artikel, client, pengaturan umum, WhatsApp, dan SEO.
- Autentikasi admin menggunakan NextAuth Credentials.
- Database menggunakan Prisma ORM dengan adapter MariaDB.
- Seed data awal untuk admin, konten publik, layanan, artikel, lawyer, client, pengaturan situs, dan SEO global.

## Teknologi

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Prisma 7
- MariaDB / MySQL
- NextAuth 5 beta
- Zod

## Kebutuhan Sistem

- Node.js 20 atau lebih baru
- npm
- Database MariaDB atau MySQL

## Setup Lokal

1. Install dependency:

```bash
npm install
```

2. Salin file environment:

```bash
cp .env.example .env
```

Jika menggunakan PowerShell:

```powershell
Copy-Item .env.example .env
```

3. Isi variabel environment di `.env`:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
AUTH_SECRET="isi-dengan-secret-yang-kuat"
AUTH_TRUST_HOSTS="true"

SEED_ADMIN_EMAIL="admin@example.com"
SEED_ADMIN_PASSWORD="minimal-12-karakter"

NEXT_PUBLIC_APP_NAME="Diandra Law"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Catatan: seed menggunakan `SEED_ADMIN_PASSWORD` minimal 12 karakter.

4. Generate Prisma Client:

```bash
npm run db:generate
```

5. Jalankan migrasi database:

```bash
npm run db:migrate
```

6. Isi data awal:

```bash
npm run db:seed
```

7. Jalankan development server:

```bash
npm run dev
```

Buka `http://localhost:3000` untuk website publik dan `http://localhost:3000/admin/login` untuk panel admin.

## Script

```bash
npm run dev          # Menjalankan server development
npm run build        # Build aplikasi untuk production
npm run start        # Menjalankan hasil build production
npm run lint         # Menjalankan ESLint
npm run db:generate  # Generate Prisma Client
npm run db:migrate   # Menjalankan Prisma migration
npm run db:studio    # Membuka Prisma Studio
npm run db:seed      # Mengisi data awal
```

## Struktur Folder

```text
prisma/
  schema.prisma       # Schema database
  seed.ts             # Seed data awal
src/
  app/                # Next.js App Router
  components/         # Komponen UI publik dan admin
  features/           # Modul fitur CMS
  lib/                # Utility, auth, database, SEO, dan helper konten
  types/              # Deklarasi tipe tambahan
```

## Deployment

Sebelum deploy, pastikan environment production sudah disiapkan:

- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_TRUST_HOSTS`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

Setelah environment siap, jalankan:

```bash
npm run build
npm run start
```

Untuk platform seperti Vercel, tambahkan seluruh environment variable melalui dashboard project dan pastikan database production dapat diakses dari environment deployment.

## Catatan GitHub

- Jangan commit file `.env` karena berisi credential dan secret.
- Gunakan `.env.example` sebagai template environment.
- Folder `.next`, `node_modules`, dan file build tidak perlu diupload.
- Setelah clone repository baru, ulangi langkah setup lokal dari awal.
