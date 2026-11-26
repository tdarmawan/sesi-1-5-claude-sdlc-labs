# Checkpoint handoff — Create New Role
Status: siap sebagai input prototype, keputusan produk TBC tetap terbuka.
Sumber: BRD 1.2-lab, Flow v2, UI Brief checkpoint, layout B.

| Komponen | Sumber | Perilaku / state |
|---|---|---|
| Role ID readonly | RM-004 | dibuat sistem, format TBC |
| Role Name | RM-004 | alphanumeric, duplikat Active/Inactive ditolak; pesan TBC |
| Role Status | RM-004 | Active/Inactive; default/mandatory TBC |
| Permission groups | RM-005 | None/View Only/All Access; default/relasi induk-submenu TBC |
| Submit/Batal | alur RM-004 + brief | loading simulasi, error mempertahankan form; Batal tidak menyimpan |
| Daftar Role | RM-001 | role baru terlihat pada prototype; navigasi produk setelah simpan TBC |

State: kosong/berisi, form awal, error duplikat, loading, gagal simpan, akses View Only/None.
Keyboard: urutan fokus mengikuti form; label terlihat; status/error diumumkan. Responsif: satu kolom pada layar sempit.
Mapping lengkap: REQUIREMENT-SCREEN.csv. Aset: screen-*.svg. Conventions: DESIGN-CONVENTIONS.md.
Dependency: keputusan Product Owner untuk OPEN-ISSUES; runtime prototype memori, tanpa backend.
Walkthrough peserta: isi nama reviewer, tanggal, temuan dan keputusan. Paket ini tidak mengklaim approval produk.
