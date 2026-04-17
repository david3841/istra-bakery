/**
 * Glorija's Bakery — Tailwind Reference Config
 *
 * Diese Datei ist eine REFERENZ-CONFIG und aktuell nicht an einen
 * Build-Prozess angeschlossen. Sie bildet die Design-Tokens aus
 * `styles.css` (Source of Truth) 1:1 in Tailwind-Form ab, damit bei
 * einer zukuenftigen Tailwind-Einbindung (CDN oder CLI) die Utilities
 * direkt zum bestehenden Look passen.
 *
 * Weitere Details: siehe STYLEGUIDE.md
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './**/*.html', './**/*.js'],

  theme: {
    extend: {
      colors: {
        sand:           '#F2EADF',
        'sand-deep':    '#E7DCCB',
        'warm-white':   '#FBF8F3',
        ink:            '#2B1F15',
        'ink-soft':     '#5A4A3B',
        'ink-mute':     '#8A7866',
        olive:          '#6B7A3A',
        'olive-dk':     '#4F5B2B',
        terracotta:     '#C2694A',
        'terracotta-dk':'#A5553B',
        whatsapp:       '#25D366',
        'whatsapp-dk':  '#1FAE53',
        line:           'rgba(43,31,21,0.10)',
      },

      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'system-ui', 'sans-serif'],
      },

      // Fluid Typography (clamp-basierte Skala, wie in styles.css verwendet)
      fontSize: {
        'eyebrow': ['13px',   { lineHeight: '1.2', letterSpacing: '0.14em' }],
        'micro':   ['12px',   { lineHeight: '1.2' }],
        'small':   ['14px',   { lineHeight: '1.5' }],
        'body':    ['17px',   { lineHeight: '1.6' }],
        'lead':    ['clamp(16px, 1.6vw, 19px)', { lineHeight: '1.6' }],
        'heading': ['clamp(28px, 4.2vw, 44px)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display': ['clamp(36px, 6.2vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },

      borderRadius: {
        sm:   '10px',
        md:   '14px',
        lg:   '22px',
        pill: '999px',
      },

      boxShadow: {
        soft: '0 10px 30px rgba(43,31,21,0.08)',
        card: '0 14px 40px rgba(43,31,21,0.10)',
      },

      maxWidth: {
        container: '1180px',
      },

      spacing: {
        gutter:  'clamp(20px, 5vw, 56px)',
        section: 'clamp(56px, 9vw, 110px)',
      },

      backgroundImage: {
        'hero-glow': 'radial-gradient(1200px 500px at 80% -10%, rgba(194,105,74,0.18), transparent 60%), radial-gradient(800px 400px at 0% 10%, rgba(107,122,58,0.14), transparent 55%)',
      },

      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },

  plugins: [],
};
