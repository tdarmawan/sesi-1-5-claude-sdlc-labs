---
name: brd-draft
description: "Susun atau revisi BRD sesuai template, buktikan sumber setiap keputusan dan pertahankan TBC; tulis hanya setelah disetujui."
---


# BRD Draft
Input: product concept/draft requirement, template delapan bagian, Reference BRD dan notulen bila ada.
1. Baca input dan versinya. Pisahkan sumber isi (concept/notulen) dari sumber format (template/Reference BRD).
2. Susun delapan bagian sesuai references/brd-structure.md (salinan BRD-STRUCTURE.md); gunakan RM-ID unik, bahasa terukur dan batas scope.
3. Yang belum diputuskan ditulis TBC beserta pertanyaan dan owner. Jangan mengarang approval/tanggal.
4. Tampilkan draft di chat terlebih dahulu, minta keputusan manusia sebelum menulis ke salinan dokumen.
5. Sesudah disetujui, ubah hanya bagian yang disetujui, simpan versi/change control dan laporkan perubahan.
Output: draft BRD, sumber, TBC, daftar perubahan. Contoh: format ID usulan ROL- tetap TBC sebelum disetujui.
Self-check: delapan bagian lengkap, ID unik, scope tidak melebar, tidak ada approval palsu.

## Dua perbaikan dari review
A. Tiap perubahan wajib mencantumkan poin meeting dan RM-ID pada matriks perubahan; keputusan terbuka tidak diterapkan.
B. Validasi pengecualian: cek Active DAN Inactive pada aturan unik, dan seluruh level permission termasuk None/View Only.
Jalankan self-check ini sebelum draft diserahkan, lalu bandingkan temuan versi sebelumnya.
