// ============================================================
// Design System — inspiré DSFR (Système de Design de l'État)
// Adapté pour NativeScript (pas de CSS web)
// ============================================================

export const DSFR = {
  // --- Couleurs ---
  colors: {
    // Bleu République
    blueFrance: '#003189',
    blueFranceLight: '#e3effd',
    blueFranceSun: '#0063CB',
    blueFranceSunHover: '#1252b3',

    // Rouge Marianne
    redMarianne: '#E1000F',
    redMarianneSun: '#c9191e',

    // Gris
    grey950: '#1e1e1e',
    grey100: '#f6f6f6',
    grey200: '#eeeeee',
    grey425: '#9c9c9c',
    grey625: '#6a6a6a',

    // Blanc / fond
    white: '#FFFFFF',
    background: '#f0f0f0',

    // États sémantiques
    success: '#18753c',
    successLight: '#b8fec9',
    warning: '#b34000',
    warningLight: '#fde3c8',
    error: '#ce0500',
    errorLight: '#ffe9e9',
    info: '#0063CB',
    infoLight: '#e3effd',

    // Niveaux de risque (diagnostic)
    riskFaible: '#18753c',
    riskModere: '#b34000',
    riskEleve: '#ce0500',
    riskCritique: '#6e0a1e'
  },

  // --- Typographie ---
  typography: {
    fontFamilyMain: 'Marianne, Helvetica Neue, Arial, sans-serif',
    fontFamilyCode: 'Courier New, monospace',

    // Tailles (sp NativeScript)
    sizeXs: 11,
    sizeSm: 13,
    sizeMd: 16,
    sizeLg: 20,
    sizeXl: 24,
    size2xl: 32,
    size3xl: 40,

    // Graisses
    weightRegular: '400',
    weightMedium: '500',
    weightBold: '700'
  },

  // --- Espacement (dp NativeScript) ---
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64
  },

  // --- Rayons ---
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    full: 999
  },

  // --- Élévations (shadow) ---
  shadow: {
    none: 'none',
    sm: '0 1 3 rgba(0,0,0,0.12)',
    md: '0 2 8 rgba(0,0,0,0.15)',
    lg: '0 4 16 rgba(0,0,0,0.18)'
  }
}

// ============================================================
// Accessibilité RGAA 4.1
// ============================================================
export const A11Y = {
  // Rôles accessibilité NativeScript
  roles: {
    button: 'button',
    link: 'link',
    header: 'header',
    image: 'image',
    imageButton: 'imageButton',
    none: 'none',
    search: 'search',
    alert: 'alert'
  },

  // Contrastes minimum WCAG AA : 4.5:1 texte normal, 3:1 grands textes
  minContrastText: 4.5,
  minContrastLarge: 3.0,

  // Labels hint pour les champs
  hints: {
    username: 'Entrez votre identifiant',
    email: 'Entrez votre adresse électronique',
    password: 'Entrez votre mot de passe',
    phone: 'Entrez votre numéro de téléphone',
    search: 'Rechercher une ressource, une catégorie ou un quiz'
  }
}

// ============================================================
// Niveaux de risque — mappage riskLevel → couleur + label
// ============================================================
export function getRiskStyle(riskLevel: string) {
  const map: Record<string, { color: string; bg: string; label: string }> = {
    FAIBLE:   { color: DSFR.colors.riskFaible,   bg: DSFR.colors.successLight, label: 'Risque faible' },
    MODERE:   { color: DSFR.colors.riskModere,   bg: DSFR.colors.warningLight, label: 'Risque modéré' },
    ELEVE:    { color: DSFR.colors.riskEleve,    bg: DSFR.colors.errorLight,   label: 'Risque élevé' },
    CRITIQUE: { color: DSFR.colors.riskCritique, bg: '#f9e5e7',                label: 'Risque critique' }
  }
  return map[riskLevel] ?? map['FAIBLE']
}
