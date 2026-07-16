import type { Dict } from "../types";

export const zh: Dict = {
  "nav": {
    "docs": "文档",
    "components": "组件",
    "showcases": "示例站点"
  },
  "landing": {
    "heroTitle1": "Material 3,",
    "heroTitle2": "归你所有。",
    "heroSub": "在 Tailwind CSS 与 Radix 上忠实实现 Material Design 3。用 shadcn CLI 以源码方式安装 — 每一行都进入你的仓库。",
    "getStarted": "开始使用",
    "github": "GitHub",
    "stats": "{n} 个组件 · 浅色 & 深色 · MIT 许可证",
    "installTitle": "像 shadcn/ui 一样安装",
    "installSub": "没有需要依赖的包。CLI 会把以 Material 3 令牌样式化的组件源码复制进你的项目。",
    "p1t": "忠于规范的令牌",
    "p1b": "M3 基线配色(primary 至 surface-container 各层)、完整字体阶梯、形状系统、海拔与 8%/12% 状态层。",
    "p2t": "拥有代码",
    "p2b": "组件是仓库里的文件而非依赖。想重塑 chip 或重写 sheet,无需与库对抗。",
    "p3t": "支持动态取色",
    "p3b": "每个颜色都是 CSS 变量。把基线调色板换成你的 Material You 方案,一切自动重新着色。",
    "footer": "mountainview-ui — 独立开源项目,与 Google LLC 无关。"
  },
  "sidebar": {
    "gettingStarted": "快速开始",
    "components": "组件",
    "introduction": "介绍",
    "installation": "安装",
    "theming": "主题",
    "skills": "技能"
  },
  "intro": {
    "title": "介绍",
    "lead": "mountainview-ui 把 Material Design 3 带进你的代码库:遵循 M3 规范的 React 组件,以 shadcn 方式分发 — 安装源码并拥有它。",
    "whyTitle": "为什么",
    "whyP1": "Material 3 是有史以来最完整的设计系统之一:含浅深两套的调性配色、十五级字体阶梯、形状系统、海拔层级与精确的状态层。mountainview-ui 把这些决策还原为 Tailwind CSS 令牌与基于 Radix 的组件。",
    "whyP2": "与 shadcn/ui 一样,这不是依赖包。每个组件都是 CLI 复制进项目的文件,可任意修改。",
    "componentsTitle": "组件"
  },
  "install": {
    "title": "安装",
    "lead": "任何使用 Tailwind CSS v4 的 React 项目都可用。此处以 Next.js 为例。",
    "s1": "1. 配置 shadcn",
    "s1p": "如果项目还没有 components.json:",
    "s2": "2. 添加主题令牌",
    "s2p1": "组件从 CSS 令牌读取 M3 配色、字体阶梯、形状与海拔。只需安装一次:",
    "s2p2": "mountainview-ui-theme.css 会放到项目根目录。在全局样式表中于 Tailwind 之后引入:",
    "s3": "3. 添加组件",
    "s3p": "源码会放进 components/ui/。它已经属于你 — 随意编辑。"
  },
  "theming": {
    "title": "主题",
    "lead": "每个令牌都是 CSS 变量,换成 Material You 方案只需一次覆盖。",
    "colors": "颜色角色",
    "colorsP": "M3 基线方案提供成对的 container / on-container 角色。可作为 Tailwind 颜色使用:bg-primary、text-on-surface-variant、bg-surface-high。",
    "dynamic": "动态取色",
    "dynamicP": "用 Material Theme Builder 从品牌色生成方案,再覆盖变量 — 组件自动重新着色:",
    "dark": "深色方案",
    "darkP": "切换 <html> 上的 dark class,所有令牌换成深色值 — 组件无需改动。",
    "type": "字体、形状、海拔",
    "typeP": "完整 M3 字体阶梯以工具类提供(text-display-l … text-label-s),形状为圆角令牌,海拔为阴影,状态层为 8%/12% 工具类。"
  },
  "component": {
    "installation": "安装",
    "source": "源码",
    "themeNote1": "需要主题令牌 — 第一次使用请参阅",
    "themeNoteLink": "安装",
    "themeNote2": "。"
  },
  "gallery": {
    "title": "组件",
    "lead": "全部 {n} 个组件实时展示,均可交互 — 点击标题查看安装方法与源码。"
  },
  "descriptions": {
    "badge": "6dp 错误圆点与数字徽标。",
    "banner": "带图标与文字操作的内联横幅。",
    "bottom-app-bar": "带尾部 FAB 槽的 80dp 操作栏。",
    "bottom-sheet": "28dp 圆角、带拖拽把手的底部面板。",
    "button": "filled / tonal / outlined / text / elevated 通用按钮。",
    "card": "12dp 圆角的三种卡片。",
    "carousel": "圆角吸附项组成的多浏览主视觉条。",
    "checkbox": "2dp 描边、primary 填充的 18dp 方框。",
    "chip": "assist / filter / input 纸片(32dp、8dp 角)。",
    "date-picker": "今日描边、选中填充的停靠日历。",
    "dialog": "28dp 圆角的基础对话框。",
    "divider": "outline-variant 的 1dp 分隔线。",
    "fab": "四色四尺寸的悬浮操作按钮(含 extended)。",
    "icon-button": "四种图标按钮,支持切换态。",
    "list": "一至三行列表项。",
    "menu": "surface-container 上的海拔 2 菜单。",
    "navigation-bar": "药丸指示器的 80dp 底部导航。",
    "navigation-drawer": "标准+模态抽屉。",
    "navigation-rail": "带 FAB 槽的 80dp 竖直导航栏。",
    "progress": "带停止点的线性与循环指示器。",
    "radio-group": "primary 圆点的 20dp 单选。",
    "search-bar": "展开为建议视图的全圆搜索栏。",
    "segmented-button": "选中段填充并带对勾的分段按钮。",
    "side-sheet": "带标题与关闭的 400dp 侧面板。",
    "slider": "粗轨道、细手柄与停止点。",
    "snackbar": "inverse-surface 提示条;随处可调 snackbar()。",
    "switch": "52x32 轨道;开启时滑块变大并显示对勾。",
    "tabs": "带动画药丸指示器的主标签。",
    "text-field": "浮动标签的 filled / outlined 输入框。",
    "time-picker": "两位数字段+AM/PM 的输入式时间选择。",
    "tooltip": "plain 与 rich 两种提示。",
    "top-app-bar": "滚动时着色的 64dp 顶栏。"
  },
  "skills": {
    "title": "技能",
    "lead": "教你的 AI 代理使用 mountainview-ui 进行开发。",
    "whatTitle": "什么是技能?",
    "whatBody": "技能是 AI 编码代理(如 Claude Code)在任务匹配时加载的一组指令。mountainview-ui 技能教会代理如何正确初始化库、使用哪些令牌与规范,以及每个组件的导出 — 让生成的代码第一次就像 Material 3。",
    "learnsTitle": "代理会学到什么",
    "learns": [
      "初始化顺序:shadcn init、先装 theme.json、tw-animate-css、CSS 引入。",
      "令牌速查:颜色角色、15 级字体阶梯、形状、海拔与状态层。",
      "M3 规范:用状态层而非换色、药丸按钮、语义化海拔。",
      "组合模式:应用外壳、带 FAB 的底部导航、snackbar()、浮动标签。",
      "带 slug、导出与安装命令的完整组件目录。"
    ],
    "installCliTitle": "用 shadcn CLI 安装",
    "installCliBody": "技能以注册表条目分发。在项目中它会放到 .claude/skills/ 下,Claude Code 会自动加载:",
    "installUserTitle": "安装到用户级",
    "installUserBody": "要在所有项目中使用该技能,把它复制到用户级技能目录:",
    "contentsTitle": "包含内容",
    "contentsBody": "两个文件:SKILL.md(初始化、令牌、规范、模式、陷阱)与 references/components.md(自动生成的组件目录)。"
  }
};
