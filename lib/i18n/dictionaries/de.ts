import type { Dict } from "../types";

export const de: Dict = {
  "nav": {
    "docs": "Doku",
    "components": "Komponenten",
    "showcases": "Showcases"
  },
  "landing": {
    "heroTitle1": "Material 3.",
    "heroTitle2": "Ganz deins.",
    "heroSub": "Material Design 3, getreu umgesetzt auf Tailwind CSS und Radix. Als Quellcode per shadcn CLI installiert — jede Zeile landet in deinem Repo.",
    "getStarted": "Loslegen",
    "github": "GitHub",
    "stats": "{n} Komponenten · Hell & Dunkel · MIT-Lizenz",
    "installTitle": "Installieren wie shadcn/ui",
    "installSub": "Kein Paket als Abhängigkeit. Die CLI kopiert den Komponenten-Quellcode, gestylt mit Material-3-Tokens, in dein Projekt.",
    "p1t": "Spezifikationstreue Tokens",
    "p1b": "Das M3-Basisschema — von primary bis zu den surface-container-Stufen — plus die volle Typoskala, das Formsystem, Elevation und 8%/12%-State-Layer.",
    "p2t": "Der Code gehört dir",
    "p2b": "Komponenten sind Dateien in deinem Repo, keine Abhängigkeit. Forme einen Chip um oder baue ein Sheet neu, ohne gegen eine Library zu kämpfen.",
    "p3t": "Bereit für Dynamic Color",
    "p3b": "Jede Farbe ist eine CSS-Variable. Tausche die Basispalette gegen dein eigenes Material-You-Schema und alles färbt sich neu.",
    "footer": "mountainview-ui — ein unabhängiges Open-Source-Projekt, nicht mit Google LLC verbunden."
  },
  "sidebar": {
    "gettingStarted": "Erste Schritte",
    "components": "Komponenten",
    "introduction": "Einführung",
    "installation": "Installation",
    "theming": "Theming"
  },
  "intro": {
    "title": "Einführung",
    "lead": "mountainview-ui bringt Material Design 3 in deine Codebasis: React-Komponenten nach M3-Spezifikation, verteilt nach shadcn-Art — du installierst den Quellcode und besitzt ihn.",
    "whyTitle": "Warum",
    "whyP1": "Material 3 ist eines der vollständigsten je veröffentlichten Designsysteme: ein tonales Farbsystem mit hellem und dunklem Schema, eine fünfzehnstufige Typoskala, ein Formsystem, Elevationsstufen und präzise State-Layer. mountainview-ui reproduziert diese Entscheidungen als Tailwind-CSS-Tokens und Radix-basierte Komponenten.",
    "whyP2": "Wie bei shadcn/ui ist dies kein Paket, von dem du abhängst. Jede Komponente ist eine Datei, die die CLI in dein Projekt kopiert. Ändere alles.",
    "componentsTitle": "Komponenten"
  },
  "install": {
    "title": "Installation",
    "lead": "Funktioniert in jedem React-Projekt mit Tailwind CSS v4. Hier gezeigt mit Next.js.",
    "s1": "1. shadcn einrichten",
    "s1p": "Falls dein Projekt noch keine components.json hat:",
    "s2": "2. Theme-Tokens hinzufügen",
    "s2p1": "Die Komponenten lesen das M3-Farbschema, die Typoskala, Form und Elevation aus CSS-Tokens. Einmal installieren:",
    "s2p2": "Dadurch landet mountainview-ui-theme.css im Projektstamm. Importiere sie im globalen Stylesheet nach Tailwind:",
    "s3": "3. Komponenten hinzufügen",
    "s3p": "Der Quellcode landet in components/ui/. Er gehört jetzt dir — bearbeite ihn frei."
  },
  "theming": {
    "title": "Theming",
    "lead": "Jedes Token ist eine CSS-Variable — ein Material-You-Schema ist nur ein Override entfernt.",
    "colors": "Farbrollen",
    "colorsP": "Das M3-Basisschema liefert gepaarte container / on-container-Rollen. Als Tailwind-Farben nutzbar: bg-primary, text-on-surface-variant, bg-surface-high.",
    "dynamic": "Dynamic Color",
    "dynamicP": "Erzeuge mit dem Material Theme Builder ein Schema aus deiner Markenfarbe und überschreibe die Variablen — die Komponenten färben sich automatisch neu:",
    "dark": "Dunkles Schema",
    "darkP": "Die dark-Klasse auf <html> umschalten. Alle Tokens wechseln auf ihre Dunkelwerte — Komponenten bleiben unverändert.",
    "type": "Typo, Form, Elevation",
    "typeP": "Die volle M3-Typoskala kommt als Utilities (text-display-l … text-label-s), Form als Radius-Tokens, Elevation als Schatten und State-Layer als 8%/12%-Utilities."
  },
  "component": {
    "installation": "Installation",
    "source": "Quellcode",
    "themeNote1": "Benötigt die Theme-Tokens — siehe ",
    "themeNoteLink": "Installation",
    "themeNote2": ", falls dies deine erste Komponente ist."
  },
  "gallery": {
    "title": "Komponenten",
    "lead": "Alle {n} Komponenten, live. Alles ist interaktiv — Titel anklicken für Installation und Quellcode."
  },
  "descriptions": {
    "badge": "6-dp-Fehlerpunkt und Zahlenbadge.",
    "banner": "Inline-Banner mit Icon und Textaktionen.",
    "bottom-app-bar": "80-dp-Aktionsleiste mit FAB-Slot.",
    "bottom-sheet": "Sheet mit 28-dp-Ecken und Griff.",
    "button": "Gefüllte, tonale, umrandete, Text- und erhöhte Buttons.",
    "card": "Drei Kartenvarianten mit 12-dp-Ecken.",
    "carousel": "Multi-Browse-Streifen mit gerundeten Snap-Elementen.",
    "checkbox": "18-dp-Box mit 2-dp-Umriss und Primary-Füllung.",
    "chip": "Assist-, Filter- und Input-Chips.",
    "date-picker": "Angedockter Kalender: heute umrandet, Auswahl gefüllt.",
    "dialog": "Basisdialog mit 28-dp-Ecken.",
    "divider": "1-dp-Trennlinie in outline-variant.",
    "fab": "FAB in vier Farben und Größen, inkl. extended.",
    "icon-button": "Vier Icon-Button-Stile mit Toggle.",
    "list": "Ein- bis dreizeilige Listenelemente.",
    "menu": "Menü mit Elevation 2 auf surface-container.",
    "navigation-bar": "80-dp-Bottom-Bar mit Pill-Indikator.",
    "navigation-drawer": "Standard- und Modal-Drawer.",
    "navigation-rail": "80-dp-Vertikalleiste mit FAB-Slot.",
    "progress": "Linear mit Stop-Punkt plus zirkulär.",
    "radio-group": "20-dp-Radios mit Primary-Punkt.",
    "search-bar": "Runde Suchleiste mit Vorschlags-View.",
    "segmented-button": "Gewählte Segmente füllen sich mit Häkchen.",
    "side-sheet": "400-dp-Panel von der Endkante.",
    "slider": "Hohe Spur, schmaler Griff, Stop-Punkt.",
    "snackbar": "Inverse-Surface-Toast; snackbar() überall.",
    "switch": "52x32-Spur; Daumen wächst mit Häkchen.",
    "tabs": "Primärtabs mit animiertem Indikator.",
    "text-field": "Gefüllte und umrandete Felder mit Floating Label.",
    "time-picker": "Eingabevariante mit zwei Feldern und AM/PM.",
    "tooltip": "Plain- und Rich-Tooltips.",
    "top-app-bar": "64-dp-Leiste, die beim Scrollen tönt."
  }
};
