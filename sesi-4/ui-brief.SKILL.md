---
name: ui-brief
description: "Turunkan BRD dan flow menjadi tabel screen/state ber-ID serta prompt desain untuk Stitch atau Claude Design, tanpa menambah fitur."
---


# UI Brief
Input: BRD dan flow spec beserta versi, platform dan referensi visual bila ada.
1. Turunkan screen dari langkah flow; tandai screen konteks di luar flow utama.
2. Setiap screen punya tujuan, aksi, data/field, state kosong/loading/error/permission yang relevan dan RM-ID.
3. Field/aksi harus memiliki sumber. TBC menjadi pertanyaan, tidak dibuat default baru.
4. Tulis prompt desain dengan platform, gaya/conventions dan larangan tambahan fitur.
5. Output tabel, enam cek, pertanyaan dan prompt. Jangan membuat project desain sebelum disetujui.
Enam cek: asal screen; tujuan/aksi; state; rujukan; tanpa karangan; prompt lengkap.
Contoh: Create berasal dari RM-004; Role Members berasal dari RM-002 dan ditandai konteks di luar alur utama.
