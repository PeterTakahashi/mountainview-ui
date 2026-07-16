import type { Dict } from "../types";

export const ko: Dict = {
  "nav": {
    "docs": "문서",
    "components": "컴포넌트",
    "showcases": "쇼케이스"
  },
  "landing": {
    "heroTitle1": "Material 3를,",
    "heroTitle2": "당신의 것으로.",
    "heroSub": "Tailwind CSS와 Radix 위에 Material Design 3를 충실히 구현했습니다. shadcn CLI로 소스째 설치 — 모든 줄이 당신의 저장소에 들어갑니다.",
    "getStarted": "시작하기",
    "github": "GitHub",
    "stats": "{n}개 컴포넌트 · 라이트 & 다크 · MIT 라이선스",
    "installTitle": "shadcn/ui처럼 설치",
    "installSub": "의존할 패키지가 없습니다. CLI가 Material 3 토큰으로 스타일링된 소스를 프로젝트에 복사합니다.",
    "p1t": "스펙에 충실한 토큰",
    "p1b": "M3 기준 배색(primary부터 surface-container 계층까지), 15단계 타입 스케일, 셰이프, 엘리베이션, 8%/12% 상태 레이어.",
    "p2t": "코드를 소유하세요",
    "p2b": "컴포넌트는 의존성이 아니라 저장소 안의 파일입니다. 라이브러리와 싸우지 않고 칩도 시트도 다시 만들 수 있습니다.",
    "p3t": "다이내믹 컬러 대응",
    "p3b": "모든 색이 CSS 변수입니다. 기준 팔레트를 자신의 Material You 배색으로 바꾸면 전체가 다시 칠해집니다.",
    "footer": "mountainview-ui — Google LLC와 무관한 독립 오픈소스 프로젝트입니다."
  },
  "sidebar": {
    "gettingStarted": "시작하기",
    "components": "컴포넌트",
    "introduction": "소개",
    "installation": "설치",
    "theming": "테마"
  },
  "intro": {
    "title": "소개",
    "lead": "mountainview-ui는 Material Design 3를 코드베이스로 가져옵니다. M3 스펙을 따르는 React 컴포넌트를 shadcn 방식 — 소스를 설치해 소유하는 방식 — 으로 배포합니다.",
    "whyTitle": "왜",
    "whyP1": "Material 3는 지금까지 공개된 것 중 가장 완성도 높은 디자인 시스템 중 하나입니다. 라이트/다크 톤 배색, 15단계 타입 스케일, 셰이프 시스템, 엘리베이션, 정밀한 상태 레이어. mountainview-ui는 그 결정들을 Tailwind CSS 토큰과 Radix 기반 컴포넌트로 재현합니다.",
    "whyP2": "shadcn/ui처럼 이것은 의존 패키지가 아닙니다. 각 컴포넌트는 CLI가 프로젝트로 복사하는 파일이며, 무엇이든 바꿀 수 있습니다.",
    "componentsTitle": "컴포넌트"
  },
  "install": {
    "title": "설치",
    "lead": "Tailwind CSS v4를 쓰는 어떤 React 프로젝트에서도 동작합니다. 여기서는 Next.js 예시입니다.",
    "s1": "1. shadcn 설정",
    "s1p": "프로젝트에 components.json이 아직 없다면:",
    "s2": "2. 테마 토큰 추가",
    "s2p1": "컴포넌트는 M3 배색·타입 스케일·셰이프·엘리베이션을 CSS 토큰에서 읽습니다. 한 번만 설치하세요:",
    "s2p2": "mountainview-ui-theme.css가 프로젝트 루트에 놓입니다. 전역 스타일시트에서 Tailwind 뒤에 임포트하세요:",
    "s3": "3. 컴포넌트 추가",
    "s3p": "소스는 components/ui/에 들어갑니다. 이제 당신 것입니다 — 자유롭게 수정하세요."
  },
  "theming": {
    "title": "테마",
    "lead": "모든 토큰이 CSS 변수라 Material You 배색으로의 전환은 오버라이드 하나면 됩니다.",
    "colors": "컬러 롤",
    "colorsP": "M3 기준 배색은 container / on-container 쌍으로 제공됩니다. bg-primary, text-on-surface-variant, bg-surface-high처럼 Tailwind 색상으로 사용하세요.",
    "dynamic": "다이내믹 컬러",
    "dynamicP": "Material Theme Builder로 브랜드 컬러에서 배색을 생성한 뒤 변수를 덮어쓰면 컴포넌트가 자동으로 다시 칠해집니다:",
    "dark": "다크 배색",
    "darkP": "<html>의 dark 클래스를 토글하면 모든 토큰이 다크 값으로 바뀝니다 — 컴포넌트 수정은 필요 없습니다.",
    "type": "타입·셰이프·엘리베이션",
    "typeP": "M3 타입 스케일 전체가 유틸리티(text-display-l … text-label-s)로, 셰이프는 radius 토큰으로, 엘리베이션은 섀도로, 상태 레이어는 8%/12% 유틸리티로 제공됩니다."
  },
  "component": {
    "installation": "설치",
    "source": "소스",
    "themeNote1": "테마 토큰이 필요합니다 — 처음이라면 ",
    "themeNoteLink": "설치",
    "themeNote2": " 를 참고하세요."
  },
  "gallery": {
    "title": "컴포넌트",
    "lead": "{n}개 컴포넌트 전부를 라이브로. 모두 조작 가능합니다 — 제목을 클릭하면 설치 방법과 소스를 볼 수 있습니다."
  },
  "descriptions": {
    "badge": "6dp 오류 점과 숫자 배지.",
    "banner": "아이콘과 텍스트 액션이 있는 인라인 배너.",
    "bottom-app-bar": "후행 FAB 슬롯이 있는 80dp 액션 바.",
    "bottom-sheet": "드래그 핸들이 있는 28dp 라운드 시트.",
    "button": "filled / tonal / outlined / text / elevated 공통 버튼.",
    "card": "12dp 모서리의 세 가지 카드.",
    "carousel": "라운드 스냅 아이템의 멀티 브라우즈 히어로.",
    "checkbox": "2dp 아웃라인, primary 채움의 18dp 박스.",
    "chip": "assist / filter / input 칩(32dp·8dp 각).",
    "date-picker": "오늘은 테두리, 선택은 채움인 도킹 캘린더.",
    "dialog": "28dp 라운드의 기본 다이얼로그.",
    "divider": "outline-variant 1dp 구분선.",
    "fab": "4색 4크기 플로팅 액션 버튼(extended 포함).",
    "icon-button": "토글 지원 4종 아이콘 버튼.",
    "list": "1~3줄 리스트 아이템.",
    "menu": "surface-container 위 엘리베이션 2 메뉴.",
    "navigation-bar": "필 인디케이터의 80dp 하단 내비게이션.",
    "navigation-drawer": "표준+모달 드로어.",
    "navigation-rail": "FAB 슬롯이 있는 80dp 세로 레일.",
    "progress": "스톱 도트가 있는 선형+원형 인디케이터.",
    "radio-group": "primary 점의 20dp 라디오.",
    "search-bar": "제안 뷰로 펼쳐지는 풀라운드 검색 바.",
    "segmented-button": "선택 시 채워지고 체크가 뜨는 세그먼트 버튼.",
    "side-sheet": "제목과 닫기가 있는 400dp 사이드 패널.",
    "slider": "굵은 트랙, 얇은 핸들, 스톱 도트.",
    "snackbar": "inverse-surface 토스트; 어디서든 snackbar().",
    "switch": "52x32 트랙; 켜지면 썸이 커지며 체크 표시.",
    "tabs": "움직이는 필 인디케이터의 기본 탭.",
    "text-field": "플로팅 레이블의 filled / outlined 필드.",
    "time-picker": "두 자리 필드+AM/PM 입력형 타임 피커.",
    "tooltip": "plain과 rich 두 가지 툴팁.",
    "top-app-bar": "스크롤 시 틴트되는 64dp 상단 바."
  }
};
