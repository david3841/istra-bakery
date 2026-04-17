# Glorija's Bakery — Brand & Styleguide

Single Source of Truth für Marke, Design-Tokens und UI-Komponenten.
Referenz-Code lebt in [`styles.css`](./styles.css) und [`tailwind.config.js`](./tailwind.config.js).

---

## 1. Brand-Story

**Glorija's Bakery** ist eine handwerkliche Sauerteig-Bäckerei im südlichen Istrien. Täglich frisches Brot nach deutschen Rezepten, ausgeliefert auf festen Touren an Hotels, Apartments und Privatkunden in Pula, Fažana, Rovinj und Umgebung.

**Markenwerte**

- **Handwerk** — langsame Führung, keine Zusatzstoffe, echte Krustenbrote
- **Regionalität** — in Istrien gebacken, lokal gedacht
- **Verlässlichkeit** — feste Touren, planbare B2B-Logistik
- **Wärme** — persönlich, direkt (gerne per WhatsApp), ohne Distanz

**Tone of Voice**

- Deutsch, formal-warm
- Kurze Sätze, konkrete Zahlen ("täglich 06:30", "20 Brote/Tag")
- Keine Marketing-Phrasen ("revolutionär", "einzigartig")
- Imperfekt erlaubt — handmade, nicht steril

---

## 2. Logo

### Dateien (`/assets`)

| Datei | viewBox | Verwendung |
|---|---|---|
| `favicon.svg` | 32×32 | Browser-Tab, kleinste Darstellung, Icon im Sand-Square |
| `logo-mark.svg` | 64×64 | Icon-only: Social-Avatar, App-Icon, Stempel-Varianten |
| `logo-horizontal.svg` | 260×72 | Hauptlogo: Website-Header, Briefbogen, E-Mail-Signatur |

### Bausteine

- **Emblem** — Zwei Getreideähren flankieren einen rustikalen Sauerteiglaib mit drei Einschnitten (Scoring).
- **Wortmarke** — "Glorija's" in Cormorant Garamond SemiBold, "Bakery" in Cormorant Garamond Italic Medium.
- **Tagline** — "HANDWERK AUS ISTRIEN", Inter SemiBold, letter-spacing 2.4, Olive-Farbe.

### Mindestgrößen & Freiraum

- Horizontale Lockup: **min. 160 px** Breite auf Screen (bzw. 28 mm im Druck).
- Icon-Only: **min. 24 px** (darunter Favicon verwenden).
- Freiraum rund um das Logo: **mindestens so breit wie das Emblem hoch ist** (≈ die Hälfte der Logo-Höhe).

### Farbvarianten

| Variante | Outline / Text | Akzent | Hintergrund |
|---|---|---|---|
| Standard | `ink` (#2B1F15) | `olive` (#6B7A3A) | `sand` (#F2EADF) oder `warm-white` (#FBF8F3) |
| Invers (dunkler Grund) | `warm-white` | `olive` oder `sand-deep` | `ink` oder Foto mit Overlay |
| Mono dunkel | `ink` | `ink` | beliebig hell |
| Mono hell | `warm-white` | `warm-white` | beliebig dunkel |

> Im SVG sind Farben hart codiert. Für Mono-Varianten einen `fill` auf `currentColor` ändern und per CSS `color:` steuern.

### Do's

- Auf warmem Hintergrund (sand / warm-white) zeigen.
- Mit Luft umgeben — nicht anschneiden.
- Nur in Originalfarben verwenden oder vollständig monochrom.

### Don'ts

- Nicht verzerren, drehen oder rahmen.
- Nicht auf unruhigen Fotos ohne Overlay platzieren.
- Wortmarke nicht separat vom Emblem in Fließtext nachbauen — immer die SVG-Datei verwenden.
- Keine neuen Farben einführen (kein Blau, kein reines Weiß).

### Druck

Für Druck-Produktion die Schrift in **Outlines konvertieren** (Inkscape: *Path → Object to Path*). Die Wortmarke im SVG rendert sonst systemabhängig.

---

## 3. Farb-Palette

Alle Werte sind in `styles.css:7–19` als CSS-Variablen definiert und in `tailwind.config.js` gespiegelt.

### Neutrale / Hintergründe

| Token | Hex | CSS-Variable | Tailwind | Verwendung |
|---|---|---|---|---|
| Sand | `#F2EADF` | `--color-sand` | `bg-sand` | Primärer Seitenhintergrund |
| Sand Deep | `#E7DCCB` | `--color-sand-deep` | `bg-sand-deep` | Bild-Placeholder, alternative Sections |
| Warm White | `#FBF8F3` | `--color-warm-white` | `bg-warm-white` | Card-Hintergründe, helle Flächen |

### Text

| Token | Hex | CSS-Variable | Tailwind | Verwendung |
|---|---|---|---|---|
| Ink | `#2B1F15` | `--color-ink` | `text-ink` | Überschriften, Primärtext |
| Ink Soft | `#5A4A3B` | `--color-ink-soft` | `text-ink-soft` | Fließtext, Body |
| Ink Mute | `#8A7866` | `--color-ink-mute` | `text-ink-mute` | Meta, Labels, Zeitstempel |

### Akzente

| Token | Hex | CSS-Variable | Tailwind | Verwendung |
|---|---|---|---|---|
| Olive | `#6B7A3A` | `--color-olive` | `bg-olive` / `text-olive` | Primär-CTA, Links, aktive Zustände |
| Olive DK | `#4F5B2B` | `--color-olive-dk` | `bg-olive-dk` | Hover für Olive |
| Terracotta | `#C2694A` | `--color-terracotta` | `bg-terracotta` | Sekundär-CTA, Highlights |
| Terracotta DK | `#A5553B` | `--color-terracotta-dk` | `bg-terracotta-dk` | Hover für Terracotta |
| WhatsApp | `#25D366` | `--color-whatsapp` | `bg-whatsapp` | WhatsApp-Button (Markenfarbe) |
| WhatsApp DK | `#1FAE53` | `--color-whatsapp-dk` | `bg-whatsapp-dk` | Hover für WhatsApp |

### Linien / Divider

| Token | Wert | CSS-Variable | Verwendung |
|---|---|---|---|
| Line | `rgba(43,31,21,0.10)` | `--color-line` | 1-px-Borders, Trenner |

### Kontraste (WCAG AA)

| Vordergrund | Hintergrund | Kontrast | Status |
|---|---|---|---|
| ink (`#2B1F15`) | sand (`#F2EADF`) | ~12.5 : 1 | ✅ AAA |
| ink-soft (`#5A4A3B`) | sand | ~7.1 : 1 | ✅ AAA body |
| ink-mute (`#8A7866`) | sand | ~3.5 : 1 | ⚠️ nur für große Meta-Texte ≥ 18 px |
| warm-white | ink | ~12.5 : 1 | ✅ AAA |
| warm-white | olive | ~4.8 : 1 | ✅ AA Button-Text |
| warm-white | terracotta | ~3.8 : 1 | ⚠️ nur Buttons mit Text ≥ 16 px Bold |

---

## 4. Typografie

### Schriften

| Rolle | Font | Gewichte | Quelle |
|---|---|---|---|
| Display / Headings | **Cormorant Garamond** | 500, 600, 700 (+ Italic 500/600) | Google Fonts |
| Body / UI | **Inter** | 400, 500, 600, 700 | Google Fonts |

**Einbindung** (siehe `index.html`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Type-Scale (fluid via `clamp()`)

| Rolle | Font | Gewicht | Größe | Line-Height | Tailwind-Utility |
|---|---|---|---|---|---|
| Display (h1) | Serif | 600 | `clamp(36px, 6.2vw, 64px)` | 1.05 | `text-display` |
| Heading (h2) | Serif | 600 | `clamp(28px, 4.2vw, 44px)` | 1.15 | `text-heading` |
| Subheading (h3) | Serif | 600 | 22–26 px | 1.25 | `text-2xl` |
| Lead / Intro | Sans | 400 | `clamp(16px, 1.6vw, 19px)` | 1.6 | `text-lead` |
| Body | Sans | 400 | 17 px | 1.6 | `text-body` |
| Small | Sans | 500 | 14 px | 1.5 | `text-small` |
| Eyebrow | Sans | 600 | 13 px, `letter-spacing: 0.14em`, UPPERCASE | 1.2 | `text-eyebrow tracking-[0.14em] uppercase` |
| Micro / Badge | Sans | 500–600 | 12 px | 1.2 | `text-micro` |

### Regeln

- **Serifen für Headings**, Sans für alles andere.
- **Italic** von Cormorant gezielt für zweite Hälfte der Wortmarke ("Bakery") oder für herausgestellte Begriffe ("*täglich frisch*").
- Keine ALL-CAPS-Headings — nur Eyebrows sind UPPERCASE.
- Fließtext in `ink-soft`, nicht in reinem `ink` (weniger hart).
- Zeilenlänge im Body: **55–75 Zeichen** (Container + Gutter sorgen dafür).

---

## 5. Spacing & Layout

### Container

| Token | Wert | Tailwind |
|---|---|---|
| Container max-width | `1180px` | `max-w-container` |
| Gutter (horizontales Padding) | `clamp(20px, 5vw, 56px)` | `px-gutter` |
| Section-Padding (vertikal) | `clamp(56px, 9vw, 110px)` | `py-section` |

### Breakpoints (verwendet in `styles.css`)

| Label | Pixel | Zweck |
|---|---|---|
| sm | 520 px | Kleine Phones → größere Phones |
| md | 680–720 px | 2-Spalten-Trust-Grid, Badges horizontal |
| lg | 820 px | Hauptumbruch: Hero 2-Spalten, Cards 2-Spalten, Steps 3-Spalten |
| xl | 980–1040 px | Trust-Grid 4-Spalten, Nav visible ab 860 px |

### Grid-Patterns

| Pattern | Mobile | Desktop (ab 820 px) |
|---|---|---|
| Hero | 1 col | 1.1fr / 1fr |
| Split-Cards | 1 col | 2 col |
| Prozess-Schritte | 1 col | 3 col |
| Trust-Grid | 1 col | 2 col (680 px) → 4 col (980 px) |
| Preise | 1 col | 2 col (680 px) → 4 col (980 px) |

### Abstände innerhalb von Komponenten

- Card-Inhalt: `24px` Padding, `16px` Gap zwischen Elementen
- CTA-Row: `12–16px` Gap zwischen Buttons
- Section-Head zu Content: `clamp(24px, 3vw, 40px)`

---

## 6. Border-Radius

| Token | Wert | Tailwind | Verwendung |
|---|---|---|---|
| sm | `10px` | `rounded-sm` | Tags, kleine Badges |
| md | `14px` | `rounded-md` | Card-Icons, Legend-Boxen |
| lg | `22px` | `rounded-lg` | Cards, Hero-Media |
| pill | `999px` | `rounded-pill` | Buttons, Chips, Badges |

---

## 7. Schatten

| Token | Wert | Tailwind | Verwendung |
|---|---|---|---|
| soft | `0 10px 30px rgba(43,31,21,0.08)` | `shadow-soft` | Cards, sanfte Hebung |
| card | `0 14px 40px rgba(43,31,21,0.10)` | `shadow-card` | Hero-Media, Featured-Elemente |

Buttons verwenden keinen Default-Schatten — erst auf Hover `translateY(-1px)` + sanfter Lift.

---

## 8. Komponenten

Alle Referenzklassen leben in `styles.css`. Tailwind-Äquivalente sind zur Orientierung angegeben.

### Button

```html
<a class="btn btn--primary" href="#">Jetzt bestellen</a>
<a class="btn btn--whatsapp btn--lg" href="#">WhatsApp</a>
<a class="btn btn--terracotta btn--compact" href="#">Details</a>
```

| Variante | Bg / Text | Tailwind-Äquivalent |
|---|---|---|
| `.btn--primary` | olive / warm-white | `bg-olive text-warm-white hover:bg-olive-dk` |
| `.btn--whatsapp` | whatsapp / warm-white | `bg-whatsapp text-warm-white hover:bg-whatsapp-dk` |
| `.btn--terracotta` | terracotta / warm-white | `bg-terracotta text-warm-white hover:bg-terracotta-dk` |
| `.btn--lg` | +Padding `17px 26px` | `px-7 py-4` |
| `.btn--compact` | Padding `10px 16px` | `px-4 py-2.5 text-sm` |

**Default**: `rounded-pill`, `font-sans`, `font-weight: 600`, `transition: transform + box-shadow 200ms ease-soft`.

### Card

```html
<article class="card">
  <div class="card__icon card__icon--olive">🥖</div>
  <h3>Überschrift</h3>
  <p>Beschreibung im ink-soft.</p>
  <ul class="ticks"><li>Vorteil</li></ul>
</article>
```

- Hintergrund: `warm-white`
- Border: `1px solid line`
- Radius: `lg` (22px)
- Shadow: `soft`
- Padding: `24px`
- Card-Icon: `52px` Quadrat, Radius `md`, getönte Olive- oder Terracotta-Fläche (18% Opacity)

### Eyebrow + Heading (Section-Head)

```html
<div class="section__head">
  <span class="eyebrow">Ablauf</span>
  <h2 class="heading">So funktioniert's</h2>
  <p class="lead">Kurze Einleitung…</p>
</div>
```

### Badge / Tag

- Pill-Shape (`rounded-pill`)
- Hintergrund: `warm-white` oder `sand-deep`
- Border: `1px solid line`
- Schrift: Inter 600, 12–13 px, mit `letter-spacing: 0.08em`
- Padding: `6px 12px`

### Navigation (Header)

- Sticky (`position: sticky; top: 0`)
- Backdrop-Blur: `backdrop-filter: blur(10px)` + `background: rgba(242,234,223,0.82)`
- Höhe: ~72 px
- Mobile-Nav: Links versteckt (display: none), Brand + CTA sichtbar
- Ab 860 px: Nav-Links sichtbar

### Mobile Sticky-CTA

Zwei gleichwertige Buttons (WhatsApp + Tour) am unteren Viewport-Rand, nur auf Mobile.

---

## 9. Motion

- **Reveal-on-Scroll**: `opacity 0 → 1`, `translateY(14px → 0)`, Duration `600ms`, Easing `ease-soft` (`cubic-bezier(0.22,0.61,0.36,1)`). Getriggert via IntersectionObserver in `script.js`.
- **Button-Hover**: `translateY(-1px)` + shadow-lift, Duration `200ms`.
- **Respektiert `prefers-reduced-motion`**: Animationen werden dann deaktiviert (`styles.css:38-41`).

Keine Parallax, keine auto-playenden Hero-Videos — das passt nicht zum Markenkern.

---

## 10. Ikonografie

- Minimalistisch, 1.2–1.6 px Stroke, runde Caps und Joins.
- Farbe: `ink` für Outline, optional `olive`/`terracotta` als Akzent-Fill mit ~18% Opacity.
- Bei eigenen Icons: viewBox 24×24, keine Full-Color-Illustrationen.
- Emojis werden im Fließtext sparsam verwendet (z. B. 🥖 in Card-Icons möglich, aber besser: echte SVGs).

---

## 11. Sprache & Content

- **Daten konkret**: "06:30", "ab 18 €", "5 Stops" statt "sehr früh", "günstig", "mehrere".
- **Knappe Sätze**: Maximal eine Nebenidee pro Satz.
- **Aktiv statt Passiv**: "Wir backen." nicht "Wird gebacken."
- **Listen statt Prosa** wo möglich — Ticks-Listen (`ul.ticks` in `styles.css`) als Signature-Element.
- **Kroatische Ortsnamen** mit Originalschreibweise: *Fažana*, *Rovinj*, *Pula*.

---

## 12. Ressourcen

- **Fonts**: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) · [Inter](https://fonts.google.com/specimen/Inter)
- **Design-Tokens (Code)**: [`styles.css`](./styles.css) (Zeilen 6–33)
- **Tailwind-Config**: [`tailwind.config.js`](./tailwind.config.js)
- **Logo-Dateien**: [`/assets/logo-mark.svg`](./assets/logo-mark.svg) · [`/assets/logo-horizontal.svg`](./assets/logo-horizontal.svg) · [`/assets/favicon.svg`](./assets/favicon.svg)

---

*Version 1.0 — Stand April 2026. Bei Änderungen an Tokens zuerst `styles.css` anpassen, dann `tailwind.config.js` und diese Datei synchronisieren.*
