# Audio Files — eco study soundscape builder

Place all files in `themes/eco-study/static/audio/`.  
Naming convention: `{componentId}.ogg` — all 12 files, loopable, mono or stereo, 44.1 kHz.

---

## Seating

| File | Component | Eco score | Recommended sound character |
|------|-----------|-----------|------------------------------|
| `wood-chair.ogg` | wooden chair | 1 | Quiet ambient room tone with a very soft, occasional wood creak. Should feel warm and natural — like sitting in a library. Nearly silent. |
| `office-chair.ogg` | office chair | 4 | Subtle plastic-and-metal presence: faint chair-mechanism click or low mechanical settle. Neutral, indoor office feel. |
| `gaming-chair.ogg` | gaming chair | 8 | Low synthetic hum, faint electronic buzz — evokes a powered-on rig. Slightly industrial, not comfortable. |

### Freesound search terms (filter: CC0)
- `wood-chair` → `"wooden chair creak ambient loop"`, `"chair settle wood room tone"`
- `office-chair` → `"office chair mechanism"`, `"plastic chair settle loop"`
- `gaming-chair` → `"computer room hum loop"`, `"electronics ambient buzz"`

---

## Tables

| File | Component | Eco score | Recommended sound character |
|------|-----------|-----------|------------------------------|
| `reclaimed-desk.ogg` | reclaimed wood desk | 1 | Very soft wood resonance — like knocking on an old table and letting it decay. Warm, low, nearly inaudible. |
| `flatpack-desk.ogg` | flat-pack desk | 4 | MDF/laminate surface ambience. Slightly hollow, indoors, neutral. Think quiet suburban office. |
| `glass-desk.ogg` | glass + steel desk | 8 | Faint glass-and-metal hum, like a finger on the rim of a glass. Cool, bright, slightly uncomfortable. |

### Freesound search terms (filter: CC0)
- `reclaimed-desk` → `"wood surface resonance loop"`, `"wood thud decay ambient"`
- `flatpack-desk` → `"indoor room tone quiet"`, `"office ambient neutral loop"`
- `glass-desk` → `"glass resonance hum loop"`, `"metal frame vibration tone"`

---

## Work items

| File | Component | Eco score | Recommended sound character |
|------|-----------|-----------|------------------------------|
| `books.ogg` | paperback books | 1 | Soft paper rustle — a single slow page-turn looped with a long crossfade. Gentle, studious. |
| `laptop.ogg` | laptop | 5 | Laptop fan hum at low RPM, barely audible. Optional very faint key-click texture underneath. |
| `monitors.ogg` | multi-monitor | 9 | Multiple fans + faint CRT-style screen whine (even for LCD, a 15–17 kHz tone works). Busy, electric, draining. |

### Freesound search terms (filter: CC0)
- `books` → `"paper rustle ambient loop"`, `"book page turn soft"`
- `laptop` → `"laptop fan hum loop"`, `"computer fan quiet ambient"`
- `monitors` → `"monitor hum loop"`, `"computer fans multiple"`, `"screen electronics hum"`

---

## Lighting

| File | Component | Eco score | Recommended sound character |
|------|-----------|-----------|------------------------------|
| `sunlight.ogg` | sunlight / window | 0 | Outdoor nature: distant birdsong, very gentle breeze. The only component with a fully natural, restorative sound. Should feel like an open window. |
| `led-lamp.ogg` | LED desk lamp | 2 | Near-silent. A barely-perceptible cool electrical presence — almost no sound, maybe a 5–8 kHz shimmer at −40 dB. |
| `fluorescent.ogg` | fluorescent light | 7 | Classic fluorescent tube buzz: 60 Hz fundamental with harmonics, faint flicker. Recognisably harsh and institutional. |

### Freesound search terms (filter: CC0)
- `sunlight` → `"birds chirping outdoor ambient loop"`, `"gentle breeze birds morning"`
- `led-lamp` → `"led lamp hum quiet"`, `"electrical hiss soft loop"`
- `fluorescent` → `"fluorescent light buzz loop"`, `"tube light hum 60hz"`, `"fluorescent flicker ambient"`

---

## Loop tips

- All files should be **seamlessly loopable** — trim to a zero-crossing at start and end, or crossfade in your editor.
- Target **−18 to −24 LUFS** integrated loudness. The engine scales gain per-component (ecoScore/10 × 0.8), so quieter sources are fine — avoid clipping peaks.
- Mono is preferred for most items. `sunlight.ogg` can be stereo for spaciousness.
- Recommended length: 4–20 seconds before loop point. Shorter loops are fine if they're truly seamless.

## Freesound.org workflow

1. Search with the terms above at [freesound.org](https://freesound.org)
2. Filter: **License → Creative Commons 0** (no attribution required)
3. Download as `.wav` or `.flac`, then export to `.ogg` (Vorbis quality 5–7) in Audacity or ffmpeg:
   ```
   ffmpeg -i input.wav -c:a libvorbis -q:a 6 wood-chair.ogg
   ```
4. Drop the finished `.ogg` files into `themes/eco-study/static/audio/` and rebuild with `pelican content`.
