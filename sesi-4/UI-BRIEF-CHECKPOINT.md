# UI brief checkpoint
Sumber: BRD-v1.2 dan flow checkpoint v2. Empat screen desain; dua screen wajib kode Sesi 5.
| Screen | Tujuan / aksi | State | ID | Output |
|---|---|---|---|---|
| Daftar Role | Periksa role, Create; Total User menuju Members | berisi/kosong/View Only/None | RM-001/002/005 | screen-list.svg |
| Create New Role | Isi nama, permission, status; Submit/Batal | awal/nama duplikat/loading/error | RM-004/005 | screen-create.svg |
| Role Members | Lihat user fiktif per role | berisi/kosong | RM-002 | screen-members.svg |
| Change Log Role | Lihat riwayat per role | berisi/kosong, entrypoint TBC | RM-003 | screen-log.svg |

Prompt desain: "Desktop responsif, bahasa Indonesia, sidebar Access Control, gaya DESIGN-CONVENTIONS.
Create New Role satu halaman, Role ID readonly, nama, status, permission menu/submenu. Empat screen di atas saja.
Tampilkan state yang relevan. Jangan menambah login/hapus/fitur lain. TBC ditandai, bukan diputuskan."
Keputusan default/mandatory, pesan duplikat, format ID dan log tetap OPEN-ISSUES.md.
