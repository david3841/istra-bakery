# Istra Bakery — Landingpage

Statische, konversion-optimierte Landingpage für eine Brotmanufaktur in Istrien.
Primärziel: B2B-Leads (Hotels & Apartments) via „Kostenlose Probe anfragen",
sekundär B2C-Bestellungen per WhatsApp.

Reines HTML / CSS / Vanilla JS — **kein Build-Step, kein Framework**.

## Lokale Vorschau

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | komplette Seite, alle Sektionen |
| `styles.css` | Design-Tokens, Layout, Responsive (Mobile First) |
| `script.js`  | WhatsApp-Prefill-Hydration, Sticky Mobile CTA, Reveal-on-Scroll |
| `assets/favicon.svg` | Favicon |

## Konfiguration

### WhatsApp-Nummer ersetzen

In `script.js` die Konstante `WA_NUMBER` auf die echte internationale Nummer
setzen (nur Ziffern, ohne `+`, ohne Leerzeichen):

```js
var WA_NUMBER = "385911234567";
```

Die Prefill-Texte stehen direkt darunter (`MSG.b2b` / `MSG.b2c`) und lassen
sich dort anpassen.

### Bilder ersetzen

Hero- und Produktbild verweisen aktuell auf Unsplash-URLs. Sobald echte
Aufnahmen vorliegen, die `<img src="...">` in `index.html` austauschen
(Hero: `#hero`, Produkt: `#produkt`).

## HubSpot-Einbindung

1. Inhalt von `index.html` zwischen `<main>` und `</main>` als neues
   HubSpot-Template oder in ein Custom Module übernehmen.
2. `styles.css` als Theme-Stylesheet hochladen.
3. `script.js` als Theme-JS-Asset hinzufügen (am Ende vor `</body>` laden,
   `defer` ist bereits gesetzt).
4. Googlefonts-`<link>` aus dem `<head>` in das HubSpot-Template übernehmen.

## Offene Punkte

- Reale WhatsApp-Nummer (`script.js`)
- Echte Fotos (rustikal, warmes Licht, Brot/Hände/Holz)
- Impressum & Datenschutz-Seiten
