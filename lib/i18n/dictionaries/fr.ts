import type { Dict } from "../types";

export const fr: Dict = {
  "nav": {
    "docs": "Docs",
    "components": "Composants",
    "showcases": "Vitrines"
  },
  "landing": {
    "heroTitle1": "Material 3.",
    "heroTitle2": "À vous, pour de bon.",
    "heroSub": "Material Design 3 fidèlement implémenté sur Tailwind CSS et Radix. Installé en source avec la CLI shadcn — chaque ligne atterrit dans votre dépôt.",
    "getStarted": "Commencer",
    "github": "GitHub",
    "stats": "{n} composants · clair & sombre · licence MIT",
    "installTitle": "Installez comme shadcn/ui",
    "installSub": "Aucun paquet en dépendance. La CLI copie la source des composants, stylée avec les tokens Material 3, dans votre projet.",
    "p1t": "Des tokens fidèles à la spec",
    "p1b": "Le schéma M3 de référence — de primary aux paliers surface-container — plus l'échelle typographique complète, les formes, l'élévation et les couches d'état 8 %/12 %.",
    "p2t": "Possédez le code",
    "p2b": "Les composants sont des fichiers de votre dépôt, pas une dépendance. Remodelez un chip sans vous battre contre une bibliothèque.",
    "p3t": "Prêt pour la couleur dynamique",
    "p3b": "Chaque couleur est une variable CSS. Remplacez la palette de référence par votre schéma Material You et tout se reteinte.",
    "footer": "mountainview-ui — projet open source indépendant, sans lien avec Google LLC."
  },
  "sidebar": {
    "gettingStarted": "Démarrage",
    "components": "Composants",
    "introduction": "Introduction",
    "installation": "Installation",
    "theming": "Thème"
  },
  "intro": {
    "title": "Introduction",
    "lead": "mountainview-ui apporte Material Design 3 à votre base de code : des composants React conformes à la spec M3, distribués à la manière shadcn — vous installez la source et elle vous appartient.",
    "whyTitle": "Pourquoi",
    "whyP1": "Material 3 est l'un des systèmes de design les plus complets jamais publiés : un système de couleurs tonales clair/sombre, une échelle typographique de quinze crans, un système de formes, des niveaux d'élévation et des couches d'état précises. mountainview-ui reproduit ces décisions en tokens Tailwind CSS et composants basés sur Radix.",
    "whyP2": "Comme shadcn/ui, ce n'est pas un paquet dont vous dépendez. Chaque composant est un fichier que la CLI copie dans votre projet. Modifiez tout.",
    "componentsTitle": "Composants"
  },
  "install": {
    "title": "Installation",
    "lead": "Fonctionne dans tout projet React avec Tailwind CSS v4. Exemple ici avec Next.js.",
    "s1": "1. Configurer shadcn",
    "s1p": "Si votre projet n'a pas encore de components.json :",
    "s2": "2. Ajouter les tokens du thème",
    "s2p1": "Les composants lisent le schéma de couleurs, l'échelle typographique, les formes et l'élévation M3 depuis des tokens CSS. À installer une seule fois :",
    "s2p2": "mountainview-ui-theme.css est placé à la racine du projet. Importez-le dans votre feuille globale, après Tailwind :",
    "s3": "3. Ajouter des composants",
    "s3p": "La source arrive dans components/ui/. Elle est à vous — modifiez-la librement."
  },
  "theming": {
    "title": "Thème",
    "lead": "Chaque token est une variable CSS : un schéma Material You n'est qu'un override plus loin.",
    "colors": "Rôles de couleur",
    "colorsP": "Le schéma M3 de référence fournit des rôles appariés container / on-container. Utilisables comme couleurs Tailwind : bg-primary, text-on-surface-variant, bg-surface-high.",
    "dynamic": "Couleur dynamique",
    "dynamicP": "Générez un schéma depuis votre couleur de marque avec le Material Theme Builder, puis surchargez les variables — les composants se reteintent automatiquement :",
    "dark": "Schéma sombre",
    "darkP": "Basculez la classe dark sur <html>. Tous les tokens passent à leurs valeurs sombres — aucun changement dans les composants.",
    "type": "Typo, formes, élévation",
    "typeP": "L'échelle typographique M3 complète en utilitaires (text-display-l … text-label-s), les formes en tokens de rayon, l'élévation en ombres et les couches d'état en utilitaires 8 %/12 %."
  },
  "component": {
    "installation": "Installation",
    "source": "Source",
    "themeNote1": "Nécessite les tokens du thème — voir ",
    "themeNoteLink": "Installation",
    "themeNote2": " si c'est votre premier composant."
  },
  "gallery": {
    "title": "Composants",
    "lead": "Les {n} composants, en direct. Tout est interactif — cliquez un titre pour l'installation et la source."
  },
  "descriptions": {
    "badge": "Point d'erreur 6 dp et badge numéroté.",
    "banner": "Bannière en ligne avec icône et actions texte.",
    "bottom-app-bar": "Barre d'actions 80 dp avec emplacement FAB.",
    "bottom-sheet": "Feuille à coins 28 dp avec poignée.",
    "button": "Boutons filled, tonal, outlined, text et elevated.",
    "card": "Trois variantes de cartes à coins 12 dp.",
    "carousel": "Bande multi-browse à éléments magnétiques arrondis.",
    "checkbox": "Case 18 dp, contour 2 dp, remplissage primary.",
    "chip": "Chips assist, filter et input.",
    "date-picker": "Calendrier ancré : aujourd'hui cerclé, sélection remplie.",
    "dialog": "Boîte de dialogue de base à coins 28 dp.",
    "divider": "Filet 1 dp en outline-variant.",
    "fab": "FAB en quatre couleurs et tailles, extended inclus.",
    "icon-button": "Quatre styles de boutons d'icône avec bascule.",
    "list": "Éléments de liste d'une à trois lignes.",
    "menu": "Menu élévation 2 sur surface-container.",
    "navigation-bar": "Barre inférieure 80 dp à indicateur pilule.",
    "navigation-drawer": "Tiroirs standard et modal.",
    "navigation-rail": "Rail vertical 80 dp avec emplacement FAB.",
    "progress": "Linéaire à point d'arrêt, plus circulaire.",
    "radio-group": "Radios 20 dp à point primary.",
    "search-bar": "Barre de recherche ronde à vue de suggestions.",
    "segmented-button": "Segments choisis remplis avec coche.",
    "side-sheet": "Panneau 400 dp du bord de fin.",
    "slider": "Piste haute, poignée fine, point d'arrêt.",
    "snackbar": "Toast inverse-surface ; snackbar() partout.",
    "switch": "Piste 52x32 ; le pouce grossit avec une coche.",
    "tabs": "Onglets primaires à indicateur animé.",
    "text-field": "Champs filled et outlined à étiquette flottante.",
    "time-picker": "Variante saisie : deux champs et AM/PM.",
    "tooltip": "Infobulles plain et rich.",
    "top-app-bar": "Barre 64 dp qui se teinte au défilement."
  }
};
