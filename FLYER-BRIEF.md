# Flyer-Brief — Glorija's Bakery

Copy-Paste-Vorlagen zur Erstellung on-brand Flyer.
Setze zuerst den **Context-Block** als System-/Kontext-Prompt und hänge dann einen passenden **Task-Block** an.

Referenzen: [STYLEGUIDE.md](./STYLEGUIDE.md) · [tailwind.config.js](./tailwind.config.js) · `/assets/logo-horizontal.svg`

---

## 1. Context-Block (immer zuerst einsetzen)

```text
Du gestaltest einen Flyer für "Glorija's Bakery", eine handwerkliche
Sauerteig-Bäckerei im südlichen Istrien (Kroatien). Tägliche Lieferung
nach deutschen Rezepten an Hotels, Apartments und Privatkunden in Pula,
Fažana, Rovinj und Umgebung.

STRIKT EINZUHALTEN:

Marke & Tonalität
- Sprache: Deutsch, formal-warm, kurze aktive Sätze
- Markenwerte: Handwerk, Regionalität, Verlässlichkeit, Wärme
- KEINE Marketing-Phrasen ("revolutionär", "einzigartig", "bestes")
- Daten konkret: "06:30", "20 Brote/Tag", "ab 18 €" statt vager Begriffe
- Kroatische Orte in Originalschreibweise: Fažana, Rovinj, Pula
- Italic gezielt für zweite Hälfte der Wortmarke ("Glorija's *Bakery*")
  oder einzelne Begriffe wie *täglich frisch*

Farbpalette (nur diese Hex-Werte verwenden)
- Sand            #F2EADF   (Primär-Hintergrund)
- Sand Deep       #E7DCCB   (Alternativ-Flächen, Foto-Placeholder)
- Warm White      #FBF8F3   (Cards)
- Ink             #2B1F15   (Headings)
- Ink Soft        #5A4A3B   (Fließtext)
- Ink Mute        #8A7866   (Meta/Labels)
- Olive           #6B7A3A   (Primär-Akzent, CTA)
- Olive Dark      #4F5B2B   (Hover/Strichstärken)
- Terracotta      #C2694A   (Sekundär-Akzent, Highlights)
- Terracotta Dark #A5553B
- WhatsApp        #25D366   (nur für WhatsApp-Button)
KEIN reines Weiß, kein Schwarz, kein Blau.

Typografie
- Headings: Cormorant Garamond SemiBold (600), optional Italic
- Body & UI: Inter Regular/Medium/SemiBold (400/500/600)
- Eyebrow: Inter SemiBold 12–13 pt, UPPERCASE, letter-spacing 0.14em,
  Farbe Olive oder Ink Mute
- Keine ALL-CAPS-Headings (außer Eyebrow)
- Fließtext-Farbe: Ink Soft (nicht reines Ink)

Layout & Geometrie
- Radius: 22 px (Cards, Bilder), 14 px (Icons), 999 px (Buttons)
- Schatten sparsam, nur als subtile Hebung: 0 10px 30px rgba(43,31,21,.08)
- Großzügige Weißräume, ruhige Raster
- Keine Verläufe außer sehr subtilem radialem Glow (terracotta/olive bei
  ~14–18 % Opacity auf sand)
- 1-px-Divider in rgba(43,31,21,0.10)

Logo
- Horizontale Lockup (logo-horizontal.svg) im Kopfbereich
- Freiraum rundherum: mindestens die halbe Logo-Höhe
- Nicht verzerren, einfärben, rahmen oder anschneiden

Bildsprache
- Rustikale Krusten-Nahaufnahmen, Mehl, Holz, warme Morgensonne
- Natürliche Farben, keine Sättigungs-Filter
- Keine Stock-Klischees (keine "perfekt" gestylten Bäcker-Posen)

Verboten
- Aufzählungen mit >5 Punkten
- Emojis in Headings oder Tagline
- "Bio"-Claim (nicht zertifiziert)
- Preisangaben, die nicht aus preise.html kommen
```

---

## 2. Task-Blöcke (nach Kontext anhängen)

### 2.1 B2B — Kaltakquise Hotel / Apartment-Vermieter (DL, einseitig)

```text
AUFGABE: Entwirf einen DL-Flyer (99 × 210 mm, Hochformat, einseitig)
zur Kaltakquise bei Hotels und Ferienwohnungs-Vermietern in Südistrien.

ZIEL: Entscheider sollen nach dem Lesen einen WhatsApp-Kontakt starten.

STRUKTUR (top → bottom):
1. Logo horizontal (links oben, ~120 px Breite)
2. Eyebrow: "FÜR HOTELS & APARTMENTS"
3. Headline (Cormorant SemiBold, 2 Zeilen): erzeugt Neugier, nennt den
   konkreten Nutzen (z. B. Frühstückstisch / Gästezufriedenheit)
4. Lead-Absatz (Inter, 3–4 Zeilen): Was ist es, ab wann, welche Region
5. 3 Spalten mit Eyebrow + Kurzsatz:
   - Feste Touren (Verlässlichkeit)
   - Täglich frisch (06:30 Anlieferung)
   - Planbare Mengen (B2B-Konditionen)
6. Preis-Anreiz in Terracotta-Card: Hinweis auf B2B-Staffel
7. CTA-Block (Olive-Button + Telefonnummer + WhatsApp-Icon)
8. Footer mit Adresse, Website, Steuernummer-Platzhalter

LIEFERE:
- Vollständige Flyer-Texte (Headline, Lead, 3 Bullets, CTA)
- Bildvorschlag (Motiv, Position, Farbstimmung)
- Farbzuordnung pro Element
- Typografische Größen in pt
```

### 2.2 B2C — Sommersaison, Ferienhaus-Gäste (A6, zweiseitig)

```text
AUFGABE: A6-Flyer (105 × 148 mm, zweiseitig), der in Ferienwohnungen
und Rezeptionen ausliegt und Urlaubsgäste zur WhatsApp-Bestellung
bewegt.

SEITE 1 (Appetizer):
- Großes Produktfoto (Krusten-Nahaufnahme) full-bleed
- Unten Overlay-Band in Sand mit Headline serifisch und Eyebrow

SEITE 2 (Conversion):
- Logo oben zentriert
- 3 Steps (Nummern in Cormorant, Titel, Kurzsatz): "WhatsApp senden"
  → "Abholort & Zeit wählen" → "Frisches Brot erhalten"
- Zwei Brot-Highlights mit Icon und 1-Satz-Beschreibung
- Preisrange-Angabe (keine Einzelpreise — auf Website verweisen)
- CTA in WhatsApp-Grün mit Nummer
- QR-Code Platzhalter (führt zu Website)
- Regionaler Zusatz: "Tour heute: Fažana → Pula → Medulin" als Eyebrow

LIEFERE:
- Beide Seiten als Textbriefing mit Elementen, Position, Farben
- 5 Headline-Varianten zur Auswahl
- 2 CTA-Textvarianten
```

### 2.3 Preisflyer — für Bestandskunden (A5, einseitig)

```text
AUFGABE: A5-Preisflyer (148 × 210 mm) für Bestandskunden zum Aushängen
in der Küche oder am Schwarzen Brett.

LAYOUT:
- Kopf: Logo + Eyebrow "PREISE" + Heading "Unser Sortiment"
- 2-Spalten-Preistabelle, Produktname serifisch, Preis serifisch rechts
- Nebensaison- und Hauptsaison-Block klar getrennt (mit Divider)
- Fußzeile: WhatsApp-Button + Hinweis "Preise gültig ab [Datum]"

REGELN:
- Keine eigenen Preise erfinden — Platzhalter "__ €" lassen oder
  existierende aus preise.html übernehmen, wenn bereitgestellt
- Euro-Zeichen hinter dem Betrag mit schmalem Leerraum: "6,40 €"
- Saison-Labels als Pill-Badges (Olive bzw. Terracotta)

LIEFERE:
- Komplette Tabellenstruktur mit allen Spalten
- Saisonale Zusatzlogik (welches Brot nur wann verfügbar)
- Farbzuordnung der Badges
```

### 2.4 Event / Bauernmarkt (A6, einseitig)

```text
AUFGABE: A6-Flyer für einen Marktauftritt oder Event (Fažana-Hafenfest,
Weihnachtsmarkt o. Ä.). Einmaliger Auftritt, Datum und Ort prominent.

ELEMENTE:
- Datum + Uhrzeit groß (Cormorant, 2 Zeilen)
- Ort als Eyebrow darunter
- Kurzer Einladungstext (2 Sätze, einer davon mit Italic-Highlight)
- 3 Produkt-Icons mit Namen
- Foto-Strip unten (3 schmale Bilder in 10:14 Ratio)
- Logo unten rechts

LIEFERE:
- Textvorschläge für Datum-Rendering ("Sa 22.06.2026 · 09–14 Uhr")
- Einladungstext in 3 Varianten (neutral / warm / familiär)
- Foto-Motive für die 3 Bilder
```

---

## 3. Bildgenerierung (Midjourney / DALL·E / Stable Diffusion)

### 3.1 Hero-Krustenfoto

```text
Close-up of a rustic artisan sourdough loaf, dark bronzed crust with
dramatic ear and scoring, crumb barely visible, resting on weathered
oak board dusted with flour, warm morning light from left, soft
shadows, natural earth-tone palette (sand #F2EADF background, olive
and terracotta accents in props), editorial food photography, 4:5
aspect ratio, shallow depth of field, no text, no people.
```

### 3.2 Szene Istrien / Küste

```text
Early morning in a southern Istrian coastal village, terracotta
rooftops, stone pine trees, warm Mediterranean light, subtle mist over
the Adriatic, a wooden crate of fresh bread loaves in the foreground
on a stone wall, muted earthy color grading matching palette #F2EADF
#6B7A3A #C2694A #2B1F15, documentary style, 3:2, no text.
```

### 3.3 Flat-Lay mit Bäcker-Equipment

```text
Overhead flat-lay on sand-beige linen cloth: one scored sourdough
loaf, flour handprint, small wheat ears, wooden lame, linen banneton,
warm natural light, earthy color palette (#F2EADF base, olive and
terracotta props), editorial, calm, generous negative space, 1:1, no
text.
```

### 3.4 Was zu vermeiden ist

```text
NEGATIVE PROMPT: pure white background, neon colors, heavy saturation,
HDR look, shiny reflections, glossy bread, stock photo bakery clichés,
chef hats, cartoon style, CGI render, watermarks, text overlays,
unrelated pastries, croissants, cupcakes.
```

---

## 4. Druck- und Format-Specs

| Format | Maße | Anwendung | Beschnitt | Sicherheitsabstand |
|---|---|---|---|---|
| DL | 99 × 210 mm | B2B-Akquise, Türhänger | 3 mm | 5 mm |
| A6 | 105 × 148 mm | B2C-Gäste, Events | 3 mm | 5 mm |
| A5 | 148 × 210 mm | Preise, Aushang | 3 mm | 5 mm |
| Visitenkarte | 85 × 55 mm | Abholer, Kontakt | 3 mm | 4 mm |

**Druckdaten**
- Farbprofil: CMYK (ISO Coated v2 300 %) — Hex-Werte vor Export konvertieren
- Auflösung: 300 dpi bei finaler Größe
- Schriften in Outlines konvertieren (PDF/X-4)
- Papier-Empfehlung: ungestrichen 300 g/m² (matt, warm) — passt zum Handwerks-Claim

**Digital**
- sRGB, Export als PNG/WebP
- Für Social: 1080 × 1350 px (4:5) oder 1080 × 1920 (Stories)

---

## 5. Beispiel — vollständiger Prompt für ein B2B-Flyer-Draft

> Setze das in einen Chat ein, um einen ersten Entwurf zu erhalten:

```text
[hier Context-Block aus Abschnitt 1 einfügen]

[hier Task 2.1 B2B-Kaltakquise einfügen]

ZUSATZ-INFO:
- Zielmonat: Juni 2026
- Kontakt: WhatsApp +385 (xx) xxx xxx
- Website: glorijasbakery.com
- Ansprechpartner: Glorija
- USP-Fokus diesmal: Verlässlichkeit feste Tour, keine Mindestabnahme
  in Vorsaison

OUTPUT-FORMAT: strukturiertes Markdown mit Überschriften je
Flyer-Element und Codeblock pro Textbaustein.
```

---

*Version 1.0. Bei Brand-Änderungen zuerst STYLEGUIDE.md aktualisieren, dann die Hex-Werte und Tonalitätsregeln im Context-Block dieser Datei synchronisieren.*
