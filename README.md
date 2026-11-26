# Lab Sesi 1–5 — Claude untuk SDLC
Paket asli latihan dan checkpoint yang mengikuti **nama file Sesi 1–5 di folder slide**.
Kasus Sesi 1: Reset Password. Kasus Sesi 2–5: WebTM Role & User Management.

| Sesi | Materi | Mulai / checkpoint |
|---|---|---|
| 1 | Foundations, Project, structured output | [Panduan](sesi-1/README.md) · CHECKPOINT-01/02.json |
| 2 | BRD dan Skill review | [Panduan](sesi-2/README.md) · BRD v1.0/v1.1/v1.2 + Skill v1/v2 |
| 3 | Process flow Miro | [Panduan](sesi-3/README.md) · flow v1/v2 + SVG/Mermaid |
| 4 | UI exploration dan handoff | [Panduan](sesi-4/README.md) · brief, screen, layout, mapping/spec |
| 5 | HTML, backlog, progress brief | [Panduan](sesi-5/README.md) · starter → CP01 → CP02 → index.html |

## Mulai cepat
1. Klik **Code > Download ZIP**, ekstrak. Jangan membuka HTML dari dalam arsip ZIP.
2. Untuk demo yang langsung berjalan, klik dua kali **sesi-5/index.html** di folder hasil ekstraksi.
3. Untuk latihan, buat folder kerja sendiri; salin starter/checkpoint yang dipilih sebagai index.html.
4. Buka README sesi. Prompt, sumber, hasil acuan dan rubrik berada dalam folder yang sama.

Clone opsional:
```text
git clone https://github.com/tdarmawan/sesi-1-5-claude-sdlc-labs.git
cd sesi-1-5-claude-sdlc-labs
```
Pengelola dengan Node.js 22+ dapat menjalankan `npm ci` kemudian `npm test` dari root.
Peserta yang hanya membuka prototype tidak perlu Node/npm. Hasil pengujian: [VALIDATION.md](VALIDATION.md).

## Checkpoint
Snapshot ada sebagai file biasa sehingga tersedia lewat Download ZIP; tidak perlu mengambil tag Git.
Detail dan cara melanjutkan: [CHECKPOINTS.md](CHECKPOINTS.md). Checkpoint awal sengaja belum lengkap.
Jangan melaporkan hasil acuan sebagai hasil uji peserta. Isi scorecard dari bukti aktual.

## Pemetaan materi lama
`training/session-1/*` → `sesi-2/`; `training/session-2/hands-on-1/` → `sesi-3/`;
`training/session-2/hands-on-2/` → `sesi-4/`; `training/session-3/*` → `sesi-5/`.
Sesi 1 Foundations mendapat paket terpisah. Semua tautan slide diperbarui memakai penomoran file.

## Sumber dan batas
Paket ini ditulis untuk latihan berdasarkan materi yang diberikan pengguna. Repo referensi materi:
[ziadyjo/ai-training](https://github.com/ziadyjo/ai-training). Tidak menyalin implementasi aplikasi dari repo itu.
Sumber teknis: [Claude Code MCP](https://code.claude.com/docs/en/mcp),
[Stitch MCP](https://stitch.google.com/docs/mcp/setup), [Claude Code workflows](https://code.claude.com/docs/en/common-workflows).
Data seluruhnya fiktif. TBC adalah pertanyaan produk, keputusan demo ditandai D-xx.
Connector/jadwal memerlukan akun sendiri; paket menyediakan cadangan lokal dan tidak menyimpan kredensial.
