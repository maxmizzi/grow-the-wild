# Grow The Wild — Efficiency Improver Memory

## Commands (Validated)
- Build: `npm run build` ✅
- Lint: `npm run lint` ✅ (12 pre-existing issues; 5 errors, 7 warnings — baseline, not blocking)
- Dev: `npm run dev`
- Deploy: `npm run deploy` (gh-pages)
- No test suite configured

## Efficiency Notes
- Project: Vite + React + TypeScript SPA with Tailwind/shadcn-ui
- Images: Most assets are WebP already. Two PNG outliers: `concept-graphic.png` (30KB), `logo.png` (95KB)
- Several large WebP images (1–3MB) but no responsive srcset
- No backend — static SPA deployed to GitHub Pages
- Species data is entirely mock/static (no API calls)

## Backlog
| Priority | Focus Area | Opportunity | Status |
|---|---|---|---|
| HIGH | Frontend/UI | `willChange: opacity, transform` on all 16 carousel cards | ✅ Fixed in PR #17 |
| MEDIUM | Frontend/UI | `animate-fade-in` (Hero + Approach) lacks `prefers-reduced-motion` support | Pending |
| MEDIUM | Frontend/UI | `concept-graphic.png` (30KB) and `logo.png` (95KB) → WebP | Pending |
| LOW | Frontend/UI | Hero bg image (398KB) lacks responsive `srcset` | Pending |

## Completed Work
- **2026-04-14** — PR #17 created: Scoped `willChange` from all 16 carousel cards to ±1, added `loading=lazy` to thumbnails

## Monthly Activity Issues
- 2026-04: #18 (Monthly Activity 2026-04)

## Last Run Tasks
- 2026-04-14: Task 1 (commands), Task 2 (opportunities), Task 3 (implementation), Task 7 (monthly summary)

## Backlog Cursor
Next: implement `prefers-reduced-motion` fix for `animate-fade-in` in Hero.tsx + Approach.tsx → add CSS in index.css
