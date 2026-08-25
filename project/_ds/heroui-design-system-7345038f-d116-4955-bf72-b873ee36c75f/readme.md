# HeroUI Design System

A recreation of **HeroUI** (the open-source React UI library, heroui.com) built from the community Figma kit **"HeroUI Figma Kit V3 (Community)"** — a `.fig` file mounted for this project (69 top-level component-family pages, an Icons page with ~390 glyphs, a Foundations page with color/type/radius/effect specimens, and a Templates & Examples page with sample app screens including "mail"). No GitHub repo or live codebase was attached; everything here was read from that Figma file plus a set of uploaded IBM Plex Sans Thai webfonts.

HeroUI ships one product surface: a general-purpose **component library** (not a specific app). The "product" recreated here as a UI kit is one of the kit's own example screens — a **Mail** client — chosen because it's the most complete, realistic composition in the Templates & Examples page and exercises many components at once (sidebar nav, list, avatars, search, cards, buttons).

## Sources
- Figma: "HeroUI Figma Kit V3 (Community)" — attached as a mounted `.fig` (no public share link was given). Pages of note: `/Foundations` (color palette, type, radius, effect styles), `/Icons` (711 icon frames, ~390 distinct icon components materialized), `/Brand` (wordmark lockups), `/Templates-Examples/mail` (source of the Mail UI kit).
- Uploaded fonts: `IBMPlexSansThai-{Thin,ExtraLight,Light,Regular,Medium,SemiBold,Bold}.ttf` — self-hosted for Thai-script support (the kit's own type is Inter/Latin only; IBM Plex Sans Thai was supplied separately for i18n).

## Index
- `styles.css` — root stylesheet; imports fonts + tokens + typography classes.
- `tokens/` — `fig-tokens.css` (620 CSS custom properties: 356 Tailwind base colors/scale, 104 HeroUI theme tokens incl. a `:root[data-theme="dark"]` scope, spacing/radius/typography variables), `typography.css` (type-scale utility classes), `fonts.css` (`@font-face` for IBM Plex Sans Thai).
- `components/` — 151 React components across 7 groups (below).
- `assets/icons/` — `icon-data.js` + `Icon.jsx` (391 glyphs, render via `<Icon name="…"/>`).
- `assets/` — brand wordmark SVGs (`logo-*.svg`), font binaries.
- `guidelines/` — foundation specimen cards (colors, type, radius, shadows, brand).
- `ui_kits/mail/` — the Mail example screen.
- `thumbnail.html` — homepage tile.

## Components (151, by group)
**Buttons** (`components/buttons/`): Button, ButtonGroup, ButtonGroupDivider, ToggleButton, ToggleButton2, ToggleButtonGroup, ToggleButtonGroupDivider, CloseButton, Link, Kbd, Square, CircleDashed, Xmark.

**Forms** (`components/forms/`): Autocomplete, AutocompleteClear, AutocompleteInput, AutocompleteSearch, Checkbox, CheckboxGroup, ComboBox, Input, InputAffix, InputGroup, InputOTP, InputOTPField, InputOTPLayout, NumberField, Radio, RadioControl, RadioGroup, SearchField, Select, Switch, SwitchControl, TextArea, TextField, CaretsExpandVertical, Magnifier, Pencil, SquarePlus, CalendarDateNav, ColorSwatchPickerItem, DateRangeFieldInput, Check.

**Pickers** (`components/pickers/`): Calendar, Calendar3, CalendarDay, CalendarDayWeek, CalendarNavigation, CalendarPopover, CalendarSelectedRange, CalendarTime, CalendarTimeValue, CalendarYear, RangeCalendar, RangeCalendarPopover, DateField, DateFieldInput, DatePicker, DateRangePicker, TimeField, ColorArea, ColorField, ColorPicker, ColorPickerSelect, ColorSlider, ColorSliderHeader, ColorSwatch, ColorSwatchPicker, Slider, SliderHeader, SliderMarks, SliderStructure, SliderThumb, Lock, LockOpen, TagLgSurfaceSelected.

**Feedback** (`components/feedback/`): Alert, AlertDialog, AlertHeader, AlertFooter, Toast, ProgressBar, ProgressCircle, ProgressCircleColors, ProgressTrack, Meter, MeterTrack, Spinner, SkeletonCard, SkeletonListItems, SkeletonTextContent, SkeletonUserProfile, Backdrop, ScrollShadow, DescriptionModal, CircleCheck, CircleExclamation, TriangleExclamation.

**Navigation** (`components/navigation/`): Tabs, TabsElement, Breadcrumbs, Dropdown, Popover, PopoverBody, Toolbar, ChevronLeft, ChevronRight, QrCode, ButtonSecondaryPressedMdFalse.

**Data display** (`components/data-display/`): Avatar, Badge, Card, CardHeader, CardFooter, Chip, Table, TableHeader, TableHeaderCell, TableRow, TableRowCell, TableFooter, TableChartEg, TagGroup, TagList, Tag2, Separator, Surface, Pagination, Label, DescriptionErrorMessage, Link2, External, Copy, Check2, CheckboxControl, ChevronDown, ChevronUp, CircleDollar, CircleInfo, Minus, Person, ProgressiveBlur.

**Overlay** (`components/overlay/`): Modal, ModalHeader, ModalFooter, DescriptionModal, Drawer, Accordion, AccordionOption, Disclosure, DisclosureBody, DisclosureGroup, Tooltip, TooltipContainer, ListBox, ListBoxItem, Comment.

**Icon** (`assets/icons/Icon.jsx`): a single `<Icon name="…" size={20}/>` wrapper over 391 materialized glyphs (see `Icon.d.ts` for the full name index).

### Intentional additions
- `Icon` — a thin wrapper over the icon-data map so consumers don't hand-roll SVG; the kit itself has no single "Icon" component (icons are ~390 separate Figma components).

### Known gaps — why 158 of 1268 raw "families", by category
The Figma kit's raw family count (1268) is a per-Figma-component count, not a public-API count. It breaks down into three buckets, only one of which belongs in `components/`:
1. **~700 icon glyphs** (`abbr-api`, `antenna-signal`, `aperture`, `archive`, `arrow-down`, …) — these are each their own Figma component, but the correct design-system pattern for a large icon family is one shared data file + wrapper, not one `.jsx`/`.d.ts` pair per glyph (that would bloat every consumer's bundle for no benefit). They're built as `assets/icons/icon-data.js` + `assets/icons/Icon.jsx` (`<Icon name="…"/>`), covering 391 of ~700 so far — see "Iconography" below for topping up the rest. They will never appear as individual entries in `components/`, by design.
2. **~450 private/internal sub-symbols** (`_CheckboxControl`, `_TableRow`, `_SwitchControl`, per-state helpers like `_RadioControl/primary/pressed/true`, and one-off icon-style symbols like `style=regular, keywords=arrow`) — implementation details of a parent component, already folded into that parent's variant props (e.g. `Checkbox` internally uses `_CheckboxControl`; consumers never construct it directly). A handful of these that are meaningfully reusable were promoted to real components anyway: `AutocompleteClear`, `AutocompleteInput`, `AutocompleteSearch`, `CalendarDateNav`, `ColorSwatchPickerItem`, `DateRangeFieldInput`.
3. **69 public top-level component families** — 100% built (all 158 files in `components/` trace back to one of these plus their promoted sub-symbols).

Building one `.jsx`/`.d.ts` per icon glyph or per private sub-symbol would satisfy the raw count but actively work against the design system (bundle bloat, and a public API surface HeroUI itself doesn't expose). The icon count is the only bucket worth continuing to grow — ask to top it up past 391/~700.

## Content fundamentals
- **Voice**: documentation-style, plain and instructional — HeroUI's own Foundations copy explains *why* a system exists before *how* to use it ("Radius defines the overall shape language of HeroUI and is treated as a system-level variable..."). No marketing hype, no exclamation points.
- **Casing**: sentence case for headings and body copy ("Body base", "Effect styles").
- **Person**: third person / neutral — describes the system, not "you". No "we" or "I" framing either.
- **Tone**: functional and matter-of-fact. Words like "predictable", "consistent", "scalable", "intentionally subtle" recur — favoring restraint over decoration.
- **Emoji**: never used, anywhere in the kit.
- **Numbers/specs**: called out precisely and often ("Regular 14px Line height 20px, Paragraph spacing 8px") — the copy teaches the token, not just names it.

## Visual foundations
- **Color**: a single accent blue (`rgb(4,133,247)`) against a Tailwind zinc/gray neutral scale; near-black (`rgb(24,24,27)`) for text and dark-mode surfaces rather than pure black. Semantic colors (success green, danger red, warning amber) are desaturated relative to the accent. Both a light and dark theme scope exist (`:root` and `:root[data-theme="dark"]`), same token names, inverted values.
- **Type**: Inter throughout the kit (Regular/Medium/Semi Bold/Bold), Tailwind-derived scale from 12px to 56px. Headings use small negative letter-spacing (-0.5% to -1%); body copy is spacing-neutral. No serif or display face — type carries hierarchy through size/weight, not personality.
- **Spacing**: Tailwind spacing scale (4px increments, `--dimensions-spacing-*` tokens 0–36).
- **Backgrounds**: flat, no gradients, no illustration, no photography as a visual motif (the two real photos in the kit are inline recipients' avatar images in the mail example, not brand imagery). Surfaces are solid off-white/near-black; no textures or patterns.
- **Radius**: system-wide scale from `none` to `full` (pill), rounding proportionally — buttons and inputs typically `md`–`lg`, cards `2xl`, avatars/pills `full`.
- **Shadows**: five named elevation styles — Surface, Field, Switch, Tab, Overlay — all very low-opacity (`rgba(0,0,0,0.03–0.08)`), stacked as 2–3 layered box-shadows for a soft, barely-there lift rather than a hard drop shadow.
- **Borders**: hairline 1px borders in a light gray (`rgb(222,222,224)`) do most of the separation work that shadows would otherwise carry — many components (Field shadow) are really `inset 0 0 0 1px` borders.
- **Hover/press states**: hover darkens fills by one step on the neutral/accent scale (e.g. `accent` → `accent-hover`) or moves a soft variant to a slightly stronger tint (`accent-soft` → `accent-soft-hover`); no scale/shrink or bounce on press — state changes are color-only.
- **Animation**: not defined as motion tokens in this kit (Figma has no timeline); treat as subtle, fast, no bounce, consistent with the "intentionally subtle" tone of the rest of the system.
- **Transparency/blur**: used narrowly — `ProgressiveBlur` and `Backdrop` components, plus a `--blur` token — for scrim/overlay contexts, not decoratively.
- **Corner cases**: no colored left-border accent cards, no gradient buttons, no emoji-as-icon — the system deliberately avoids decoration in favor of the grid/type/color system doing the work.

## Iconography
- The kit ships its own custom icon set (not a public icon font/library) — ~390 outline/fill glyph pairs on the `/Icons` Figma page, each a standalone component (`arrow-down`, `circle-check`, `folder-open`, etc.), most with a `style=regular` outline variant and some also a `style=fill` solid variant.
- Materialized as `assets/icons/icon-data.js` (`{ viewBox, body }` per icon) + `assets/icons/Icon.jsx` (`<Icon name="…" size={20}/>`, single-color via `currentColor`). See `Icon.d.ts` for the full valid-name list.
- No emoji, no Unicode-glyph icons anywhere in the kit.
- **Gap**: at ~390 of the kit's ~700 icon frames, coverage is partial — the Figma icon-listing tool available for this build capped out before the full alphabetical range was enumerable. Re-attach the `.fig` and re-run `fig_materialize` with the remaining names (Icon.d.ts shows what's already in) to top up the set.

## Caveats — please help iterate
- **Font tokens `--font-medium`, `--font-regular`, `--font-semi-bold`, `--font-extra-bold`** carry the *string* values `"Medium"`, `"Regular"`, `"Semi Bold"`, `"Extra Bold"` (Figma variables that store a weight name, not a family) — they render on a generic fallback until real font files for those exact family strings are supplied. This is a Figma-export quirk, not a missing upload; flagging per instructions rather than substituting a different family.
- **IBM Plex Sans Thai** was supplied by upload, not found in the Figma kit — it's wired in as a second self-hosted family for Thai-script content; the kit's own UI type is Inter (loaded from Google Fonts) throughout.
- **Icon coverage** is ~390 of the kit's ~700 icon frames (see Iconography above) — ask to top up if more are needed.
- **Component coverage**: all 69 public top-level component families materialized (100%). Internal/private sub-symbols (table cells, checkbox control states, per-glyph "style=regular, keywords=…" symbols) were not built as separate top-level components — they're implementation details already folded into their parent component's variants.
- **One UI kit** (Mail) was built, matching the kit's own Templates & Examples page — no other product surfaces exist in the source to recreate.

Please review the Design System tab, flag anything that looks off against the original kit, and let me know if you'd like the icon set topped up, a dark-theme toggle added to the specimen cards, or additional example screens (Calendar demo, Overview dashboard) pulled from Templates & Examples.
