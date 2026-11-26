---
name: flow-diagram
description: "Ubah BRD menjadi flow spec ber-ID dan diagram setelah disetujui; periksa aktor, cabang, exception dan TBC."
---


# Flow Diagram
Input: BRD beserta versi, nama flow, link board bila dipakai.
Baca requirement, susun lima kolom: Aktor, Langkah, Keputusan, Exception/cabang, Rujukan ID.
Gunakan label Mulai/Akhir, edge berlabel, semua langkah ber-ID. TBC menjadi pertanyaan.
Output: flow spec, cek enam pemeriksaan, pertanyaan dan instruksi menggambar. Jangan menulis board sebelum disetujui.
Cek: aktor, titik awal/akhir, cabang, exception, rujukan, TBC. Periksa gambar terhadap tabel baris per baris.
Contoh: nama sama dengan role Inactive juga masuk cabang duplikat (RM-004).
Aturan tambahan v2: selalu periksa All Access, View Only dan None sebelum aktivitas yang mengubah data; sertakan jalur tolak/read-only sesuai RM-005.
