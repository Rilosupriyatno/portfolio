# Portfolio

Ini adalah proyek portfolio berbasis Next.js.

## Prasyarat

Pastikan kamu sudah menginstal:

- Node.js v18+ atau versi yang kompatibel
- npm, yarn, pnpm, atau bun sebagai package manager

## Instalasi

1. Buka terminal di folder proyek.
2. Jalankan perintah untuk memasang dependensi:

```bash
npm install
```

Jika kamu menggunakan package manager lain:

```bash
yarn install
# atau
pnpm install
# atau
bun install
```

## Menjalankan proyek secara lokal

Setelah dependensi terpasang, jalankan server development:

```bash
npm run dev
```

Jika menggunakan package manager lain:

```bash
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka di browser:

- http://localhost:3000

## Perintah penting

- `npm run dev` - menjalankan server development
- `npm run build` - membangun aplikasi untuk produksi
- `npm run start` - menjalankan aplikasi hasil build
- `npm run lint` - menjalankan ESLint untuk memeriksa kode

## Struktur proyek

- `app/` - folder utama aplikasi Next.js
- `components/` - komponen React yang dipakai di halaman
- `public/` - aset statis seperti gambar
- `package.json` - skrip dan dependensi proyek

## Build dan produksi

Untuk menyiapkan aplikasi produksi:

```bash
npm run build
npm run start
```

Aplikasi akan tersedia di http://localhost:3000 setelah dijalankan.

## Catatan

Proyek ini menggunakan Next.js `16.1.6`, React `19.2.3`, dan `framer-motion` untuk animasi.

Jika kamu mau melakukan perubahan, mulai dari file `app/page.js` dan komponen di `src/components/`.
