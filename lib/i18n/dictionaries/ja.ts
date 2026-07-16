import type { Dict } from "../types";

export const ja: Dict = {
  "nav": {
    "docs": "ドキュメント",
    "components": "コンポーネント",
    "showcases": "ショーケース"
  },
  "landing": {
    "heroTitle1": "Material 3 を、",
    "heroTitle2": "あなたのものに。",
    "heroSub": "Tailwind CSS と Radix 上に Material Design 3 を忠実に再現。shadcn CLI でソースごとインストール — すべてのコードがあなたのリポジトリに入ります。",
    "getStarted": "はじめる",
    "github": "GitHub",
    "stats": "{n} コンポーネント · ライト & ダーク · MITライセンス",
    "installTitle": "shadcn/ui と同じ使い心地",
    "installSub": "依存パッケージはありません。CLI が Material 3 トークンでスタイリングされたソースをプロジェクトにコピーします。",
    "p1t": "仕様に忠実なトークン",
    "p1b": "primary から surface-container 各階層までの M3 ベースラインスキーム、15段階の型スケール、シェイプ、エレベーション、8%/12% のステートレイヤー。",
    "p2t": "コードを所有する",
    "p2b": "コンポーネントは依存ではなくリポジトリ内のファイル。ライブラリと戦わずにチップもシートも作り替えられます。",
    "p3t": "ダイナミックカラー対応",
    "p3b": "すべての色が CSS 変数。ベースラインパレットを自分の Material You スキームに差し替えれば全体が再着色されます。",
    "footer": "mountainview-ui — Google LLC とは無関係の独立したオープンソースプロジェクトです。"
  },
  "sidebar": {
    "gettingStarted": "はじめに",
    "components": "コンポーネント",
    "introduction": "イントロダクション",
    "installation": "インストール",
    "theming": "テーマ"
  },
  "intro": {
    "title": "イントロダクション",
    "lead": "mountainview-ui は Material Design 3 をあなたのコードベースへ。M3 仕様に従う React コンポーネントを、shadcn 方式 — ソースをインストールして所有する形 — で配布します。",
    "whyTitle": "なぜ",
    "whyP1": "Material 3 は史上最も完成度の高いデザインシステムのひとつです。ライト/ダークのトーナルカラー、15段階の型スケール、シェイプシステム、エレベーション、精密なステートレイヤー。mountainview-ui はそれらの意思決定を Tailwind CSS トークンと Radix ベースのコンポーネントとして再現します。",
    "whyP2": "shadcn/ui と同様、これは依存するパッケージではありません。各コンポーネントは CLI がプロジェクトへコピーするファイルです。何でも変更できます。",
    "componentsTitle": "コンポーネント"
  },
  "install": {
    "title": "インストール",
    "lead": "Tailwind CSS v4 を使う React プロジェクトなら何でも動きます。ここでは Next.js の例を示します。",
    "s1": "1. shadcn をセットアップ",
    "s1p": "プロジェクトに components.json がまだ無い場合:",
    "s2": "2. テーマトークンを追加",
    "s2p1": "コンポーネントは M3 のカラースキーム・型スケール・シェイプ・エレベーションを CSS トークンから読みます。一度だけインストール:",
    "s2p2": "mountainview-ui-theme.css がプロジェクト直下に置かれます。グローバルCSSで Tailwind の後にインポートしてください:",
    "s3": "3. コンポーネントを追加",
    "s3p": "ソースは components/ui/ に配置されます。もうあなたのものです — 自由に編集してください。"
  },
  "theming": {
    "title": "テーマ",
    "lead": "全トークンが CSS 変数なので、Material You スキームへの差し替えは上書きひとつです。",
    "colors": "カラーロール",
    "colorsP": "M3 ベースラインスキームは container / on-container のペアで提供されます。bg-primary、text-on-surface-variant、bg-surface-high のように Tailwind カラーとして使えます。",
    "dynamic": "ダイナミックカラー",
    "dynamicP": "Material Theme Builder でブランドカラーからスキームを生成し、変数を上書きすればコンポーネントは自動で再着色されます:",
    "dark": "ダークスキーム",
    "darkP": "<html> の dark クラスを切り替えるだけ。全トークンがダーク値に入れ替わり、コンポーネント側の変更は不要です。",
    "type": "型・シェイプ・エレベーション",
    "typeP": "M3 の型スケール全段(text-display-l 〜 text-label-s)をユーティリティで、シェイプを radius トークンで、エレベーションをシャドウで、ステートレイヤーを 8%/12% ユーティリティで提供します。"
  },
  "component": {
    "installation": "インストール",
    "source": "ソース",
    "themeNote1": "テーマトークンが必要です — 初めての場合は ",
    "themeNoteLink": "インストール",
    "themeNote2": " を参照してください。"
  },
  "gallery": {
    "title": "コンポーネント",
    "lead": "全 {n} コンポーネントをライブ表示。すべて操作できます — タイトルをクリックするとインストール手順とソースが見られます。"
  },
  "descriptions": {
    "badge": "6dpのエラードットと数字付きバッジ。",
    "banner": "アイコンとテキストアクション付きのインラインバナー。",
    "bottom-app-bar": "末尾FABスロット付きの80dpアクションバー。",
    "bottom-sheet": "ドラッグハンドル付き・角丸28dpのシート。",
    "button": "filled / tonal / outlined / text / elevated の共通ボタン。",
    "card": "12dp角のelevated / filled / outlinedカード。",
    "carousel": "角丸XLのスナップアイテムが並ぶマルチブラウズ・ヒーロー。",
    "checkbox": "2dpアウトラインとprimary塗りの18dpボックス。",
    "chip": "assist / filter / input チップ(32dp・8dp角)。",
    "date-picker": "今日をアウトライン、選択を塗りつぶす据え置きカレンダー。",
    "dialog": "28dp角・ヘッドライン・テキストボタンの基本ダイアログ。",
    "divider": "outline-variantの1dp罫線(全幅/インセット)。",
    "fab": "4色4サイズのフローティングアクションボタン(extended含む)。",
    "icon-button": "standard / filled / tonal / outlined+トグルのアイコンボタン。",
    "list": "1〜3行のリストアイテム(先頭/末尾スロット付き)。",
    "menu": "surface-container上のelevation-2メニュー(48dp項目)。",
    "navigation-bar": "ピル型アクティブインジケーターの80dp下部バー。",
    "navigation-drawer": "標準+モーダルのドロワー(ピルインジケーター)。",
    "navigation-rail": "FABスロット付きの80dp縦レール。",
    "progress": "ストップドット付きリニア+循環インジケーター。",
    "radio-group": "primaryドットの20dpラジオ。",
    "search-bar": "サジェストビューに展開する全丸検索バー。",
    "segmented-button": "選択セグメントがチェック付きで塗られるアウトライン型。",
    "side-sheet": "タイトルと閉じるボタン付きの400dp末尾パネル。",
    "slider": "太いアクティブトラックと細いハンドル、ストップドット。",
    "snackbar": "inverse-surfaceのトースト。snackbar()をどこからでも。",
    "switch": "52x32トラック。ONでサムが拡大しチェックを表示。",
    "tabs": "アニメーションするピルインジケーターのプライマリタブ。",
    "text-field": "フローティングラベルのfilled / outlinedフィールド。",
    "time-picker": "2桁フィールド+AM/PMの入力型タイムピッカー。",
    "tooltip": "plain(inverse-surface)とrich(コンテナ)の2種。",
    "top-app-bar": "スクロール時に着色する64dpスモールアプリバー。"
  }
};
