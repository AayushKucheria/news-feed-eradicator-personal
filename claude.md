## Claude Notes

Quick reference for this fork and local development.

### Local Build + Test

- Install Bun once: `curl -fsSL https://bun.sh/install | bash`
- Restart shell (or `source ~/.bashrc`)
- Build/watch: `make dev`
- Output folder: `build/`

### Load in Browser

- Chrome: `chrome://extensions/` → enable Developer mode → Load unpacked → select `build/`
- Firefox: `about:debugging#/runtime/this-firefox` → Load Temporary Add-on → select `build/manifest.json`

### Common Tasks

- Rebuild on changes: leave `make dev` running; then reload the extension in the browser
- Create distributable zip: `make` (output in `dist/`)

### Fork-specific Changes

- Removed snooze mode selection; only instant snooze remains
- Instant snooze options reduced to a single 5-minute button
- Snooze settings tab now explains that snooze is fixed at 5 minutes

### Architecture Pointers

- In-page widget (quote + controls): `src/shared/quote-widget.tsx`
- Options page UI: `src/entrypoints/options-page/*`
- Content script injection: `src/entrypoints/intercept/intercept.tsx`
- Service worker: `src/entrypoints/service-worker/service-worker.ts`
- Storage schema + helpers: `src/storage/schema.ts`, `src/storage/storage.ts`
