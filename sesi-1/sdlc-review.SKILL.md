---
name: sdlc-review
description: "Review user story dan acceptance criteria terhadap dokumen sumber; laporkan gap, asumsi dan traceability sebelum finalisasi."
---


# SDLC review
Input: BRD, user story/AC dan schema output. Bila input belum tersedia, minta sumber yang hilang.
1. Baca dokumen beserta versinya; petakan requirement ID yang benar.
2. Periksa field wajib, Given–When–Then, duplikasi dan perilaku yang dapat diuji.
3. Cocokkan tiap klaim ke kalimat sumber; salin kutipan singkat, jangan mengarang bukti.
4. Laporkan gap/asumsi/konflik dan pertanyaan kepada owner. Jangan membuat keputusan TBC.
5. Output tabel ID, isu, kutipan/sumber, risiko, rekomendasi, status. Sertakan ringkasan field yang kosong.
Self-check: ID valid, bukti ada, scope terjaga, approval manusia belum dipalsukan.
Contoh: "token 24 jam" bertentangan dengan BRD RP-003 "30 menit"; minta revisi.
