/** Document sections with screen-by-screen workflow (images in static/assets/images/workflow/). */

const installSectionEn = {
  id: 'install',
  navLabel: 'Install',
  title: 'Install the app',
  summary:
    'Emprint 0.3.0 supports recent Mac computers (Apple or Intel chip) and 64-bit Windows. Install with Homebrew or Scoop when you can.',
  body:
    'You can install without creating an online account first. You will only need a free GitHub account later when you back up or publish. Use the command blocks in the Install section on the home page (recommended); direct installers are listed there only if you need them. On Mac, direct downloads are .pkg installers with a post-install step that helps with Gatekeeper on unsigned open-source builds.',
  bullets: [
    'macOS: run the Homebrew commands in Terminal. Windows: run the Scoop commands in PowerShell.',
    'After installing, open Emprint from Applications (Mac) or the Start menu (Windows).',
    'Direct download on Mac: the .pkg runs a post-install script to ease Gatekeeper. If the app still will not open, right-click Emprint in Applications → Open, or use System Settings → Privacy & Security → Open Anyway.'
  ]
}

const installSectionKo = {
  id: 'install',
  navLabel: '설치',
  title: '앱 설치하기',
  summary:
    'Emprint 0.3.0은 최근 맥(M1 등 Apple 칩 또는 Intel)과 64비트 Windows에서 실행됩니다. 가능하면 Homebrew·Scoop으로 설치하세요.',
  body:
    '온라인 계정 없이도 설치할 수 있습니다. 나중에 백업·게시할 때 무료 GitHub 계정이 필요할 수 있습니다. 홈의 설치 명령(권장)을 쓰고, 직접 설치 파일은 필요할 때만 사용하세요. 맥 직접 다운로드는 Gatekeeper 보조용 post-install이 포함된 .pkg입니다.',
  bullets: [
    '맥: 터미널에서 Homebrew 명령 실행. Windows: PowerShell에서 Scoop 명령 실행.',
    '설치 후 맥은 응용 프로그램, Windows는 시작 메뉴에서 Emprint 실행.',
    '맥에서 열리지 않으면 응용 프로그램에서 Emprint 우클릭 → [열기], 또는 시스템 설정 → 개인정보 보호 및 보안 → [그래도 열기].'
  ]
}

const nodeGitEn = [
  {
    id: 'nodejs',
    navLabel: 'Node.js',
    title: 'Install Node.js (required for full features)',
    summary:
      'Without Node.js, live preview and other build tools will not work. Install it before you finish the in-app setup wizard.',
    body:
      'Emprint runs Node.js and npm in the background for preview and local site builds. The first-run wizard checks Node.js on step 2—install it on your computer first if that step stays blocked.',
    bullets: [
      'Download the current LTS installer from https://nodejs.org and accept the defaults.',
      'Quit and reopen Emprint after installing so detection can refresh.',
      'Optional: run `node -v` and `npm -v` in Terminal or Command Prompt.'
    ]
  },
  {
    id: 'git',
    navLabel: 'Git',
    title: 'Install Git (required for sync and publishing)',
    summary:
      'Emprint uses Git to track your writing and talk to GitHub. Install Git before linking an account or publishing.',
    body:
      'Git is separate from the Emprint app. The setup wizard checks Git on step 1. Many Macs already have Git after installing Apple’s command-line developer tools.',
    bullets: [
      'Download from https://git-scm.com/downloads if needed (default options are fine).',
      'After installing, quit and reopen Emprint.',
      'Optional: run `git --version` to confirm.'
    ]
  }
]

const nodeGitKo = [
  {
    id: 'nodejs',
    navLabel: 'Node.js',
    title: 'Node.js 설치하기 (전체 기능에 필요)',
    summary:
      'Node.js가 없으면 미리보기 등이 동작하지 않습니다. 앱 안 첫 설정 마법사 전에 설치해 두세요.',
    body:
      'Emprint는 미리보기·로컬 빌드에 Node.js와 npm을 사용합니다. 첫 실행 마법사 2단계에서 확인합니다—막히면 먼저 PC에 Node.js를 설치하세요.',
    bullets: [
      'https://nodejs.org 에서 LTS 설치 파일을 받아 기본 옵션으로 설치합니다.',
      '설치 후 Emprint를 완전히 종료했다가 다시 실행합니다.',
      '확인(선택): `node -v`, `npm -v` 실행.'
    ]
  },
  {
    id: 'git',
    navLabel: 'Git',
    title: 'Git 설치하기 (동기화·게시에 필요)',
    summary:
      'Git이 없으면 GitHub 연동·게시가 실패할 수 있습니다. 계정 연결 전에 설치하세요.',
    body:
      'Git은 Emprint와 별개입니다. 설정 마법사 1단계에서 확인합니다. 맥은 “명령줄 개발자 도구” 설치 후 Git이 있을 수 있습니다.',
    bullets: [
      '필요하면 https://git-scm.com/downloads 에서 설치합니다.',
      '설치 후 Emprint를 다시 실행합니다.',
      '확인(선택): `git --version` 실행.'
    ]
  }
]

const wizardStepsEn = [
  {
    id: 'w-git',
    image: 'wizard-01-git.png',
    title: 'Wizard step 1 — Git',
    body: 'On first launch, Emprint checks that Git is available. When the card shows Ready, tap Continue.',
    alt: 'Emprint setup wizard on the Git step'
  },
  {
    id: 'w-node',
    image: 'wizard-02-node.png',
    title: 'Wizard step 2 — Node.js',
    body: 'Next, Emprint checks Node.js (v22 or newer). Install Node.js on your Mac or PC if this step does not turn green.',
    alt: 'Emprint setup wizard on the Node.js step'
  },
  {
    id: 'w-github',
    image: 'wizard-03-github.png',
    title: 'Wizard step 3 — GitHub',
    body: 'Sign in with GitHub so Emprint can create or connect repositories for your anthologies. Follow the on-screen code in your browser if device login is shown.',
    alt: 'Emprint setup wizard on the GitHub sign-in step'
  },
  {
    id: 'w-root',
    image: 'wizard-04-root.png',
    title: 'Wizard step 4 — Workspace root folder',
    body: 'Choose a folder on your computer where anthology projects will live—like a dedicated “Emprint” drawer. Tap Select folder, then Finish.',
    alt: 'Emprint setup wizard on the root folder step'
  },
  {
    id: 'w-hub',
    image: 'wizard-05-hub.png',
    title: 'Finish — Anthology hub',
    body: 'When setup completes, you land on the Anthology hub: your list of sites (anthologies) and the entry point to open or create one.',
    alt: 'Emprint anthology hub after setup wizard'
  }
]

const wizardStepsKo = [
  {
    id: 'w-git',
    image: 'wizard-01-git.png',
    title: '마법사 1단계 — Git',
    body: '첫 실행 시 Git 설치 여부를 확인합니다. Ready가 보이면 [계속]을 누릅니다.',
    alt: 'Emprint 설정 마법사 Git 단계'
  },
  {
    id: 'w-node',
    image: 'wizard-02-node.png',
    title: '마법사 2단계 — Node.js',
    body: '이어서 Node.js(v22 이상)를 확인합니다. 막히면 PC에 Node.js를 먼저 설치하세요.',
    alt: 'Emprint 설정 마법사 Node.js 단계'
  },
  {
    id: 'w-github',
    image: 'wizard-03-github.png',
    title: '마법사 3단계 — GitHub',
    body: 'GitHub 로그인으로 앤솔로지용 저장소를 연결합니다. 기기 로그인 코드가 나오면 브라우저에서 승인합니다.',
    alt: 'Emprint 설정 마법사 GitHub 단계'
  },
  {
    id: 'w-root',
    image: 'wizard-04-root.png',
    title: '마법사 4단계 — 작업 루트 폴더',
    body: '프로젝트를 둘 컴퓨터 안 폴더를 고릅니다. [폴더 선택] 후 [완료]를 누릅니다.',
    alt: 'Emprint 설정 마법사 루트 폴더 단계'
  },
  {
    id: 'w-hub',
    image: 'wizard-05-hub.png',
    title: '완료 — 앤솔로지 허브',
    body: '설정이 끝나면 앤솔로지 허브로 이동합니다. 사이트 목록을 보고 새로 만들거나 열 수 있습니다.',
    alt: '설정 완료 후 Emprint 앤솔로지 허브'
  }
]

const hubStepsEn = [
  {
    id: 'h-list',
    image: 'hub-anthologies.png',
    title: 'Anthology list',
    body: 'The hub lists anthologies you have registered. Use Open to enter an existing site or Create new anthology in the sidebar.',
    alt: 'Emprint anthology hub list'
  },
  {
    id: 'h-create',
    image: 'hub-create-panel.png',
    title: 'Create a new anthology',
    body: 'The create panel asks for format (Column, Memoir, Dictionary, Fragments, or Book), title, description, and GitHub repository details. The screens below follow a Column (blog-style) workflow.',
    alt: 'Emprint create new anthology panel'
  }
]

const hubStepsKo = [
  {
    id: 'h-list',
    image: 'hub-anthologies.png',
    title: '앤솔로지 목록',
    body: '허브에서 등록한 앤솔로지를 봅니다. [열기]로 들어가거나 사이드바에서 [새 앤솔로지 만들기]를 선택합니다.',
    alt: 'Emprint 앤솔로지 허브 목록'
  },
  {
    id: 'h-create',
    image: 'hub-create-panel.png',
    title: '새 앤솔로지 만들기',
    body: '형식(Column·Memoir·Dictionary·Fragments·Book), 제목, 설명, GitHub 저장소 정보를 입력합니다. 아래 화면은 Column(블로그형) 기준입니다.',
    alt: 'Emprint 새 앤솔로지 만들기 패널'
  }
]

const workspaceStepsEn = [
  {
    id: 'ws-posts-list',
    image: 'workspace-posts-list.png',
    title: 'Posts — published writing',
    body: 'Posts holds writing you treat as published on your site. The list shows titles and status; select a row to edit.',
    alt: 'Emprint workspace Posts list'
  },
  {
    id: 'ws-posts-editor',
    image: 'workspace-posts-editor.png',
    title: 'Posts — editor',
    body: 'Write in Markdown. Save from the editor when you are happy with the draft on disk.',
    alt: 'Emprint workspace Posts editor'
  },
  {
    id: 'ws-drafts-list',
    image: 'workspace-drafts-list.png',
    title: 'Drafts — work in progress',
    body: 'Drafts is for pieces still taking shape—same list + editor pattern as Posts.',
    alt: 'Emprint workspace Drafts list'
  },
  {
    id: 'ws-drafts-editor',
    image: 'workspace-drafts-editor.png',
    title: 'Drafts — editor',
    body: 'Use Drafts while ideas are unfinished; move toward Posts when you are ready to publish.',
    alt: 'Emprint workspace Drafts editor'
  },
  {
    id: 'ws-assets',
    image: 'workspace-assets.png',
    title: 'Assets',
    body: 'Assets is your media library for the anthology. Refresh rescans the project folder.',
    alt: 'Emprint workspace Assets'
  },
  {
    id: 'ws-design',
    image: 'workspace-design-template.png',
    title: 'Design — site look',
    body: 'Design controls layout and styling. Pick a template, open preview in the browser (needs Node.js), or switch toward code mode when you are ready.',
    alt: 'Emprint workspace Design template view'
  },
  {
    id: 'ws-design-ai',
    image: 'workspace-design-ai-prompt-modal.png',
    title: 'Design — AI prompt (optional)',
    body: 'Optional AI-assisted styling opens in a modal; close when you are done experimenting.',
    alt: 'Emprint Design AI prompt modal'
  },
  {
    id: 'ws-design-mode',
    image: 'workspace-design-switch-mode-modal.png',
    title: 'Design — switch to code mode',
    body: 'Switching to code mode asks for confirmation because it changes how you edit the site files.',
    alt: 'Emprint Design switch mode confirmation'
  },
  {
    id: 'ws-imprint',
    image: 'workspace-imprint.png',
    title: 'Imprint — publish history',
    body: 'Imprint shows git publish history—traces of what you shipped and when.',
    alt: 'Emprint workspace Imprint history'
  },
  {
    id: 'ws-settings',
    image: 'workspace-settings.png',
    title: 'Settings — anthology studio',
    body: 'Per-anthology settings: project metadata, GitHub connection, and studio options.',
    alt: 'Emprint workspace Settings'
  },
  {
    id: 'ws-palette',
    image: 'workspace-command-palette.png',
    title: 'Command palette',
    body: 'Press ⌘K (Mac) or Ctrl+K (Windows) for quick navigation—jump to hub, sections, or app settings.',
    alt: 'Emprint command palette'
  },
  {
    id: 'ws-app-settings',
    image: 'app-settings-modal.png',
    title: 'App settings',
    body: 'Global Emprint preferences (including GitHub OAuth client) live in the app settings modal from the palette.',
    alt: 'Emprint app settings modal'
  }
]

const workspaceStepsKo = [
  {
    id: 'ws-posts-list',
    image: 'workspace-posts-list.png',
    title: 'Posts — 게시된 글',
    body: 'Posts는 사이트에 올릴 글을 모읍니다. 목록에서 항목을 고른 뒤 편집합니다.',
    alt: 'Emprint Posts 목록'
  },
  {
    id: 'ws-posts-editor',
    image: 'workspace-posts-editor.png',
    title: 'Posts — 편집기',
    body: 'Markdown으로 작성하고 저장합니다.',
    alt: 'Emprint Posts 편집기'
  },
  {
    id: 'ws-drafts-list',
    image: 'workspace-drafts-list.png',
    title: 'Drafts — 작성 중',
    body: 'Drafts는 아직 다듬는 글을 위한 공간입니다.',
    alt: 'Emprint Drafts 목록'
  },
  {
    id: 'ws-drafts-editor',
    image: 'workspace-drafts-editor.png',
    title: 'Drafts — 편집기',
    body: '초안은 Drafts에서, 마음에 들면 Posts로 옮깁니다.',
    alt: 'Emprint Drafts 편집기'
  },
  {
    id: 'ws-assets',
    image: 'workspace-assets.png',
    title: 'Assets',
    body: '이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.',
    alt: 'Emprint Assets'
  },
  {
    id: 'ws-design',
    image: 'workspace-design-template.png',
    title: 'Design — 사이트 모양',
    body: '레이아웃·스타일을 바꿉니다. 미리보기는 Node.js가 필요합니다.',
    alt: 'Emprint Design'
  },
  {
    id: 'ws-design-ai',
    image: 'workspace-design-ai-prompt-modal.png',
    title: 'Design — AI 프롬프트(선택)',
    body: 'AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.',
    alt: 'Emprint Design AI 모달'
  },
  {
    id: 'ws-design-mode',
    image: 'workspace-design-switch-mode-modal.png',
    title: 'Design — 코드 모드 전환',
    body: '코드 모드로 바꿀 때 확인 창이 뜹니다.',
    alt: 'Emprint 코드 모드 전환 확인'
  },
  {
    id: 'ws-imprint',
    image: 'workspace-imprint.png',
    title: 'Imprint — 게시 기록',
    body: '게시(git) 이력을 시간순으로 봅니다.',
    alt: 'Emprint Imprint'
  },
  {
    id: 'ws-settings',
    image: 'workspace-settings.png',
    title: 'Settings — 스튜디오 설정',
    body: '이 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.',
    alt: 'Emprint Settings'
  },
  {
    id: 'ws-palette',
    image: 'workspace-command-palette.png',
    title: '명령 팔레트',
    body: '⌘K / Ctrl+K로 허브·섹션·앱 설정으로 빠르게 이동합니다.',
    alt: 'Emprint 명령 팔레트'
  },
  {
    id: 'ws-app-settings',
    image: 'app-settings-modal.png',
    title: '앱 설정',
    body: 'GitHub OAuth 등 전역 설정은 팔레트에서 연 앱 설정 모달에 있습니다.',
    alt: 'Emprint 앱 설정 모달'
  }
]

const dictionaryStepsEn = [
  {
    id: 'dict-index',
    image: 'dictionary-index.png',
    title: 'Open a Dictionary anthology',
    body: 'After you create a Dictionary anthology, Contents opens—the index tree where topics and knowledge entries live.',
    alt: 'Emprint Dictionary workspace after create'
  },
  {
    id: 'dict-contents',
    image: 'dictionary-contents.png',
    title: 'Contents — index tree',
    body: 'Contents shows the top-level index. Add segments (topics) that group your knowledge entries.',
    alt: 'Emprint Dictionary Contents list'
  },
  {
    id: 'dict-index-created',
    image: 'dictionary-contents-index-created.png',
    title: 'Contents — new index segment',
    body: 'Create a top-level index segment, then add knowledge entries beneath it.',
    alt: 'Emprint Dictionary Contents with new index segment'
  },
  {
    id: 'dict-entry',
    image: 'dictionary-contents-entry-editor.png',
    title: 'Contents — knowledge editor',
    body: 'Write and save knowledge entries tied to an index segment. Saved entries appear in the Contents tree.',
    alt: 'Emprint Dictionary knowledge entry editor'
  },
  {
    id: 'dict-drafts-list',
    image: 'dictionary-drafts-list.png',
    title: 'Drafts — work in progress',
    body: 'Drafts holds knowledge still taking shape—the same list + editor pattern as Column drafts.',
    alt: 'Emprint Dictionary Drafts list'
  },
  {
    id: 'dict-drafts-editor',
    image: 'dictionary-drafts-editor.png',
    title: 'Drafts — editor',
    body: 'Finish ideas in Drafts, then move toward Contents when ready to treat them as published knowledge.',
    alt: 'Emprint Dictionary Drafts editor'
  },
  {
    id: 'dict-assets',
    image: 'dictionary-assets.png',
    title: 'Assets',
    body: 'Assets is the media library for this anthology. Refresh rescans the project folder.',
    alt: 'Emprint Dictionary Assets'
  },
  {
    id: 'dict-design',
    image: 'dictionary-design-template.png',
    title: 'Design — site look',
    body: 'Pick a template, open preview in the browser (needs Node.js), or switch toward code mode when ready.',
    alt: 'Emprint Dictionary Design template view'
  },
  {
    id: 'dict-design-ai',
    image: 'dictionary-design-ai-prompt-modal.png',
    title: 'Design — AI prompt (optional)',
    body: 'Optional AI-assisted styling opens in a modal; close when you are done experimenting.',
    alt: 'Emprint Dictionary Design AI prompt modal'
  },
  {
    id: 'dict-design-mode',
    image: 'dictionary-design-switch-mode-modal.png',
    title: 'Design — switch to code mode',
    body: 'Switching to code mode asks for confirmation because it changes how you edit the site files.',
    alt: 'Emprint Dictionary Design switch mode confirmation'
  },
  {
    id: 'dict-imprint',
    image: 'dictionary-imprint.png',
    title: 'Imprint — publish history',
    body: 'Imprint shows git publish history for this Dictionary anthology.',
    alt: 'Emprint Dictionary Imprint history'
  },
  {
    id: 'dict-settings',
    image: 'dictionary-settings.png',
    title: 'Settings — anthology studio',
    body: 'Per-anthology metadata, GitHub connection, and studio options for this Dictionary site.',
    alt: 'Emprint Dictionary Settings'
  },
  {
    id: 'dict-publish',
    image: 'dictionary-publish-dialog.png',
    title: 'Publish dialog',
    body: 'Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.',
    alt: 'Emprint Dictionary publish dialog'
  }
]

const dictionaryStepsKo = [
  {
    id: 'dict-index',
    image: 'dictionary-index.png',
    title: 'Dictionary 앤솔로지 열기',
    body: 'Dictionary 앤솔로지를 만들면 Contents(색인·지식 트리)로 들어갑니다.',
    alt: 'Emprint Dictionary 워크스페이스'
  },
  {
    id: 'dict-contents',
    image: 'dictionary-contents.png',
    title: 'Contents — 색인 트리',
    body: 'Contents에서 최상위 색인(토픽)을 보고 추가합니다.',
    alt: 'Emprint Dictionary Contents'
  },
  {
    id: 'dict-index-created',
    image: 'dictionary-contents-index-created.png',
    title: 'Contents — 새 색인',
    body: '최상위 색인을 만든 뒤 그 아래에 지식 항목을 추가합니다.',
    alt: 'Emprint Dictionary 새 색인'
  },
  {
    id: 'dict-entry',
    image: 'dictionary-contents-entry-editor.png',
    title: 'Contents — 지식 편집기',
    body: '색인에 연결된 지식 항목을 작성·저장합니다.',
    alt: 'Emprint Dictionary 지식 편집기'
  },
  {
    id: 'dict-drafts-list',
    image: 'dictionary-drafts-list.png',
    title: 'Drafts — 작성 중',
    body: 'Drafts는 아직 다듬는 지식 항목을 위한 공간입니다.',
    alt: 'Emprint Dictionary Drafts 목록'
  },
  {
    id: 'dict-drafts-editor',
    image: 'dictionary-drafts-editor.png',
    title: 'Drafts — 편집기',
    body: '초안은 Drafts에서, 마음에 들면 Contents로 옮깁니다.',
    alt: 'Emprint Dictionary Drafts 편집기'
  },
  {
    id: 'dict-assets',
    image: 'dictionary-assets.png',
    title: 'Assets',
    body: '이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.',
    alt: 'Emprint Dictionary Assets'
  },
  {
    id: 'dict-design',
    image: 'dictionary-design-template.png',
    title: 'Design — 사이트 모양',
    body: '템플릿 선택·미리보기(Node.js 필요)·코드 모드 전환을 할 수 있습니다.',
    alt: 'Emprint Dictionary Design'
  },
  {
    id: 'dict-design-ai',
    image: 'dictionary-design-ai-prompt-modal.png',
    title: 'Design — AI 프롬프트(선택)',
    body: 'AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.',
    alt: 'Emprint Dictionary Design AI 모달'
  },
  {
    id: 'dict-design-mode',
    image: 'dictionary-design-switch-mode-modal.png',
    title: 'Design — 코드 모드 전환',
    body: '코드 모드로 바꿀 때 확인 창이 뜹니다.',
    alt: 'Emprint Dictionary 코드 모드 전환 확인'
  },
  {
    id: 'dict-imprint',
    image: 'dictionary-imprint.png',
    title: 'Imprint — 게시 기록',
    body: 'Dictionary 앤솔로지의 게시(git) 이력을 봅니다.',
    alt: 'Emprint Dictionary Imprint'
  },
  {
    id: 'dict-settings',
    image: 'dictionary-settings.png',
    title: 'Settings — 스튜디오 설정',
    body: '이 Dictionary 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.',
    alt: 'Emprint Dictionary Settings'
  },
  {
    id: 'dict-publish',
    image: 'dictionary-publish-dialog.png',
    title: '게시 대화상자',
    body: '사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.',
    alt: 'Emprint Dictionary 게시 대화상자'
  }
]

const fragmentsStepsEn = [
  {
    id: 'frag-artwork-empty',
    image: 'fragments-artwork-empty.png',
    title: 'Artwork — empty gallery',
    body: 'A new Fragments anthology opens on Artwork—your image gallery. Upload artwork to populate the grid.',
    alt: 'Emprint Fragments Artwork empty state'
  },
  {
    id: 'frag-artwork-grid',
    image: 'fragments-artwork-grid.png',
    title: 'Artwork — uploaded pieces',
    body: 'Uploaded images appear as tiles. Select a piece to edit title, year, medium, tags, and caption.',
    alt: 'Emprint Fragments Artwork grid'
  },
  {
    id: 'frag-artwork-detail',
    image: 'fragments-artwork-detail.png',
    title: 'Artwork — detail editor',
    body: 'Fill metadata for each piece—what visitors see in the public lightbox and index.',
    alt: 'Emprint Fragments Artwork detail editor'
  },
  {
    id: 'frag-design',
    image: 'fragments-design-template.png',
    title: 'Design — site look',
    body: 'Design controls gallery layout and styling. Open preview in the browser when Node.js is installed.',
    alt: 'Emprint Fragments Design template view'
  },
  {
    id: 'frag-design-ai',
    image: 'fragments-design-ai-prompt-modal.png',
    title: 'Design — AI prompt (optional)',
    body: 'Optional AI-assisted styling opens in a modal; close when you are done experimenting.',
    alt: 'Emprint Fragments Design AI prompt modal'
  },
  {
    id: 'frag-imprint',
    image: 'fragments-imprint.png',
    title: 'Imprint — publish history',
    body: 'Imprint shows git publish history for this Fragments anthology.',
    alt: 'Emprint Fragments Imprint history'
  },
  {
    id: 'frag-settings',
    image: 'fragments-settings.png',
    title: 'Settings — anthology studio',
    body: 'Per-anthology metadata, GitHub connection, and studio options for this gallery site.',
    alt: 'Emprint Fragments Settings'
  },
  {
    id: 'frag-publish',
    image: 'fragments-publish-dialog.png',
    title: 'Publish dialog',
    body: 'Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.',
    alt: 'Emprint Fragments publish dialog'
  }
]

const fragmentsStepsKo = [
  {
    id: 'frag-artwork-empty',
    image: 'fragments-artwork-empty.png',
    title: 'Artwork — 빈 갤러리',
    body: 'Fragments 앤솔로지를 만들면 Artwork(작품 갤러리)로 들어갑니다. 이미지를 업로드해 채웁니다.',
    alt: 'Emprint Fragments Artwork 빈 상태'
  },
  {
    id: 'frag-artwork-grid',
    image: 'fragments-artwork-grid.png',
    title: 'Artwork — 업로드된 작품',
    body: '업로드한 이미지가 타일로 표시됩니다. 항목을 고르면 제목·연도·매체·태그·캡션을 편집합니다.',
    alt: 'Emprint Fragments Artwork 그리드'
  },
  {
    id: 'frag-artwork-detail',
    image: 'fragments-artwork-detail.png',
    title: 'Artwork — 상세 편집',
    body: '각 작품의 메타데이터를 입력합니다—공개 갤러리·라이트박스에 보이는 정보입니다.',
    alt: 'Emprint Fragments Artwork 상세 편집'
  },
  {
    id: 'frag-design',
    image: 'fragments-design-template.png',
    title: 'Design — 사이트 모양',
    body: '갤러리 레이아웃·스타일을 바꿉니다. Node.js가 있으면 미리보기를 열 수 있습니다.',
    alt: 'Emprint Fragments Design'
  },
  {
    id: 'frag-design-ai',
    image: 'fragments-design-ai-prompt-modal.png',
    title: 'Design — AI 프롬프트(선택)',
    body: 'AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.',
    alt: 'Emprint Fragments Design AI 모달'
  },
  {
    id: 'frag-imprint',
    image: 'fragments-imprint.png',
    title: 'Imprint — 게시 기록',
    body: 'Fragments 앤솔로지의 게시(git) 이력을 봅니다.',
    alt: 'Emprint Fragments Imprint'
  },
  {
    id: 'frag-settings',
    image: 'fragments-settings.png',
    title: 'Settings — 스튜디오 설정',
    body: '이 Fragments 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.',
    alt: 'Emprint Fragments Settings'
  },
  {
    id: 'frag-publish',
    image: 'fragments-publish-dialog.png',
    title: '게시 대화상자',
    body: '사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.',
    alt: 'Emprint Fragments 게시 대화상자'
  }
]

const memoirStepsEn = [
  {
    id: 'mem-sections-open',
    image: 'memoir-sections.png',
    title: 'Open a Memoir anthology',
    body: 'After you create a Memoir anthology, Sections opens—a portfolio-style list of pages you can search and edit.',
    alt: 'Emprint Memoir anthology after create'
  },
  {
    id: 'mem-sections-list',
    image: 'memoir-sections-list.png',
    title: 'Sections — page list',
    body: 'Sections lists portfolio pages. Select a row to edit title and body, or search when the list grows.',
    alt: 'Emprint Memoir Sections list'
  },
  {
    id: 'mem-sections-search',
    image: 'memoir-sections-search.png',
    title: 'Sections — search',
    body: 'Use search to filter sections by title when your portfolio has many pages.',
    alt: 'Emprint Memoir Sections search'
  },
  {
    id: 'mem-section-editor',
    image: 'memoir-section-editor.png',
    title: 'Sections — editor',
    body: 'Edit section title and Markdown body. Save when the page on disk matches what you want.',
    alt: 'Emprint Memoir section editor'
  },
  {
    id: 'mem-section-saved',
    image: 'memoir-section-saved.png',
    title: 'Sections — saved',
    body: 'After saving, the section title updates in the list so you can keep building the portfolio.',
    alt: 'Emprint Memoir section saved'
  },
  {
    id: 'mem-assets',
    image: 'memoir-assets.png',
    title: 'Assets',
    body: 'Assets is the media library for this anthology. Refresh rescans the project folder.',
    alt: 'Emprint Memoir Assets'
  },
  {
    id: 'mem-design',
    image: 'memoir-design-template.png',
    title: 'Design — site look',
    body: 'Pick a template and open preview in the browser when Node.js is installed.',
    alt: 'Emprint Memoir Design template view'
  },
  {
    id: 'mem-design-ai',
    image: 'memoir-design-ai-prompt-modal.png',
    title: 'Design — AI prompt (optional)',
    body: 'Optional AI-assisted styling opens in a modal; close when you are done experimenting.',
    alt: 'Emprint Memoir Design AI prompt modal'
  },
  {
    id: 'mem-imprint',
    image: 'memoir-imprint.png',
    title: 'Imprint — publish history',
    body: 'Imprint shows git publish history for this Memoir anthology.',
    alt: 'Emprint Memoir Imprint history'
  },
  {
    id: 'mem-settings',
    image: 'memoir-settings.png',
    title: 'Settings — anthology studio',
    body: 'Per-anthology metadata, GitHub connection, and studio options for this portfolio site.',
    alt: 'Emprint Memoir Settings'
  },
  {
    id: 'mem-publish',
    image: 'memoir-publish-dialog.png',
    title: 'Publish dialog',
    body: 'Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.',
    alt: 'Emprint Memoir publish dialog'
  }
]

const memoirStepsKo = [
  {
    id: 'mem-sections-open',
    image: 'memoir-sections.png',
    title: 'Memoir 앤솔로지 열기',
    body: 'Memoir 앤솔로지를 만들면 Sections(포트폴리오 페이지 목록)로 들어갑니다.',
    alt: 'Emprint Memoir 앤솔로지'
  },
  {
    id: 'mem-sections-list',
    image: 'memoir-sections-list.png',
    title: 'Sections — 페이지 목록',
    body: 'Sections에서 포트폴리오 페이지를 보고, 항목을 고른 뒤 편집합니다.',
    alt: 'Emprint Memoir Sections 목록'
  },
  {
    id: 'mem-sections-search',
    image: 'memoir-sections-search.png',
    title: 'Sections — 검색',
    body: '페이지가 많아지면 제목으로 검색해 필터링할 수 있습니다.',
    alt: 'Emprint Memoir Sections 검색'
  },
  {
    id: 'mem-section-editor',
    image: 'memoir-section-editor.png',
    title: 'Sections — 편집기',
    body: '섹션 제목과 Markdown 본문을 편집하고 저장합니다.',
    alt: 'Emprint Memoir 섹션 편집기'
  },
  {
    id: 'mem-section-saved',
    image: 'memoir-section-saved.png',
    title: 'Sections — 저장됨',
    body: '저장하면 목록의 제목이 갱신됩니다.',
    alt: 'Emprint Memoir 섹션 저장'
  },
  {
    id: 'mem-assets',
    image: 'memoir-assets.png',
    title: 'Assets',
    body: '이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.',
    alt: 'Emprint Memoir Assets'
  },
  {
    id: 'mem-design',
    image: 'memoir-design-template.png',
    title: 'Design — 사이트 모양',
    body: '템플릿을 고르고 Node.js가 있으면 미리보기를 열 수 있습니다.',
    alt: 'Emprint Memoir Design'
  },
  {
    id: 'mem-design-ai',
    image: 'memoir-design-ai-prompt-modal.png',
    title: 'Design — AI 프롬프트(선택)',
    body: 'AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.',
    alt: 'Emprint Memoir Design AI 모달'
  },
  {
    id: 'mem-imprint',
    image: 'memoir-imprint.png',
    title: 'Imprint — 게시 기록',
    body: 'Memoir 앤솔로지의 게시(git) 이력을 봅니다.',
    alt: 'Emprint Memoir Imprint'
  },
  {
    id: 'mem-settings',
    image: 'memoir-settings.png',
    title: 'Settings — 스튜디오 설정',
    body: '이 Memoir 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.',
    alt: 'Emprint Memoir Settings'
  },
  {
    id: 'mem-publish',
    image: 'memoir-publish-dialog.png',
    title: '게시 대화상자',
    body: '사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.',
    alt: 'Emprint Memoir 게시 대화상자'
  }
]

const bookStepsEn = [
  {
    id: 'book-story-open',
    image: 'book-story.png',
    title: 'Open a Book anthology',
    body: 'After you create a Book anthology, Story opens—a single long-form narrative with paginated reading on the published site.',
    alt: 'Emprint Book anthology after create'
  },
  {
    id: 'book-story-initial',
    image: 'book-story-initial.png',
    title: 'Story — start writing',
    body: 'Story holds title, description, and Markdown body for the whole book in one editor.',
    alt: 'Emprint Book Story initial view'
  },
  {
    id: 'book-story-saved',
    image: 'book-story-saved.png',
    title: 'Story — saved draft',
    body: 'Save title, description, and body as you shape the narrative.',
    alt: 'Emprint Book Story saved'
  },
  {
    id: 'book-story-page-break',
    image: 'book-story-page-break.png',
    title: 'Story — page breaks',
    body: 'Insert `---` page breaks in Markdown so readers turn pages through chapters on the published site.',
    alt: 'Emprint Book Story with page break'
  },
  {
    id: 'book-design',
    image: 'book-design-template.png',
    title: 'Design — site look',
    body: 'Design controls typography, palette, and layout—including scroll vs paginated reading modes.',
    alt: 'Emprint Book Design template view'
  },
  {
    id: 'book-story-scroll',
    image: 'book-story-scroll-layout.png',
    title: 'Story — scroll layout',
    body: 'After choosing scroll layout in Design, Story shows the active layout label so you know how readers will move through the book.',
    alt: 'Emprint Book Story scroll layout'
  },
  {
    id: 'book-design-ai',
    image: 'book-design-ai-prompt-modal.png',
    title: 'Design — AI prompt (optional)',
    body: 'Optional AI-assisted styling opens in a modal; close when you are done experimenting.',
    alt: 'Emprint Book Design AI prompt modal'
  },
  {
    id: 'book-imprint',
    image: 'book-imprint.png',
    title: 'Imprint — publish history',
    body: 'Imprint shows git publish history for this Book anthology.',
    alt: 'Emprint Book Imprint history'
  },
  {
    id: 'book-settings',
    image: 'book-settings.png',
    title: 'Settings — anthology studio',
    body: 'Per-anthology metadata, GitHub connection, and studio options for this book site.',
    alt: 'Emprint Book Settings'
  },
  {
    id: 'book-publish',
    image: 'book-publish-dialog.png',
    title: 'Publish dialog',
    body: 'Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.',
    alt: 'Emprint Book publish dialog'
  }
]

const bookStepsKo = [
  {
    id: 'book-story-open',
    image: 'book-story.png',
    title: 'Book 앤솔로지 열기',
    body: 'Book 앤솔로지를 만들면 Story(한 편의 긴 이야기)로 들어갑니다. 게시 사이트에서는 페이지를 넘기며 읽습니다.',
    alt: 'Emprint Book 앤솔로지'
  },
  {
    id: 'book-story-initial',
    image: 'book-story-initial.png',
    title: 'Story — 글쓰기 시작',
    body: 'Story에서 제목·설명·Markdown 본문을 한 편집기에서 다룹니다.',
    alt: 'Emprint Book Story 초기 화면'
  },
  {
    id: 'book-story-saved',
    image: 'book-story-saved.png',
    title: 'Story — 저장됨',
    body: '제목·설명·본문을 저장하며 이야기를 다듬습니다.',
    alt: 'Emprint Book Story 저장'
  },
  {
    id: 'book-story-page-break',
    image: 'book-story-page-break.png',
    title: 'Story — 페이지 나누기',
    body: 'Markdown에 `---` 페이지 구분을 넣으면 게시 사이트에서 챕터처럼 넘겨 읽을 수 있습니다.',
    alt: 'Emprint Book Story 페이지 구분'
  },
  {
    id: 'book-design',
    image: 'book-design-template.png',
    title: 'Design — 사이트 모양',
    body: '타이포·색·레이아웃을 바꿉니다. 스크롤·페이지 넘김 읽기 모드를 고를 수 있습니다.',
    alt: 'Emprint Book Design'
  },
  {
    id: 'book-story-scroll',
    image: 'book-story-scroll-layout.png',
    title: 'Story — 스크롤 레이아웃',
    body: 'Design에서 스크롤 레이아웃을 고르면 Story에 현재 레이아웃이 표시됩니다.',
    alt: 'Emprint Book Story 스크롤 레이아웃'
  },
  {
    id: 'book-design-ai',
    image: 'book-design-ai-prompt-modal.png',
    title: 'Design — AI 프롬프트(선택)',
    body: 'AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.',
    alt: 'Emprint Book Design AI 모달'
  },
  {
    id: 'book-imprint',
    image: 'book-imprint.png',
    title: 'Imprint — 게시 기록',
    body: 'Book 앤솔로지의 게시(git) 이력을 봅니다.',
    alt: 'Emprint Book Imprint'
  },
  {
    id: 'book-settings',
    image: 'book-settings.png',
    title: 'Settings — 스튜디오 설정',
    body: '이 Book 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.',
    alt: 'Emprint Book Settings'
  },
  {
    id: 'book-publish',
    image: 'book-publish-dialog.png',
    title: '게시 대화상자',
    body: '사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.',
    alt: 'Emprint Book 게시 대화상자'
  }
]

const publishStepsEn = [
  {
    id: 'pub-dialog',
    image: 'workspace-publish-dialog.png',
    title: 'Publish dialog',
    body: 'From the sidebar, Publish opens a dialog to confirm message and target branch before pushing to GitHub.',
    alt: 'Emprint publish dialog'
  },
  {
    id: 'pub-reset',
    image: 'workspace-reset-draft-modal.png',
    title: 'Reset draft (optional)',
    body: 'Reset draft discards local draft changes when you need to realign with the remote—use carefully.',
    alt: 'Emprint reset draft confirmation'
  },
  {
    id: 'pub-success',
    image: 'workspace-publish-success.png',
    title: 'Publish success',
    body: 'After a successful push, Emprint confirms sync. Your site can update via GitHub Pages or your configured deploy flow.',
    alt: 'Emprint publish success state'
  },
  {
    id: 'pub-imprint',
    image: 'workspace-imprint-after-publish.png',
    title: 'Imprint after publish',
    body: 'Imprint lists the new commit so you can see the trace you left.',
    alt: 'Emprint Imprint after publishing'
  },
  {
    id: 'pub-hub',
    image: 'hub-returned.png',
    title: 'Return to hub',
    body: 'Use the title bar control to return to the Anthology hub and switch projects or create another anthology.',
    alt: 'Emprint hub after returning from workspace'
  },
  {
    id: 'pub-remove',
    image: 'hub-remove-anthology-modal.png',
    title: 'Remove anthology (optional)',
    body: 'From the hub list, Remove anthology opens a confirmation dialog. Cancel keeps the project on disk until you confirm removal.',
    alt: 'Emprint remove anthology confirmation'
  }
]

const publishStepsKo = [
  {
    id: 'pub-dialog',
    image: 'workspace-publish-dialog.png',
    title: '게시 대화상자',
    body: '사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.',
    alt: 'Emprint 게시 대화상자'
  },
  {
    id: 'pub-reset',
    image: 'workspace-reset-draft-modal.png',
    title: '초안 초기화(선택)',
    body: 'Reset draft는 로컬 초안을 버리고 원격과 맞출 때 씁니다—주의해서 사용하세요.',
    alt: 'Emprint 초안 초기화 확인'
  },
  {
    id: 'pub-success',
    image: 'workspace-publish-success.png',
    title: '게시 완료',
    body: 'push가 성공하면 확인 메시지가 표시됩니다.',
    alt: 'Emprint 게시 성공'
  },
  {
    id: 'pub-imprint',
    image: 'workspace-imprint-after-publish.png',
    title: '게시 후 Imprint',
    body: 'Imprint에 새 커밋이 기록됩니다.',
    alt: 'Emprint 게시 후 Imprint'
  },
  {
    id: 'pub-hub',
    image: 'hub-returned.png',
    title: '허브로 돌아가기',
    body: '제목 표시줄에서 허브로 돌아가 다른 앤솔로지를 열 수 있습니다.',
    alt: 'Emprint 허브로 복귀'
  },
  {
    id: 'pub-remove',
    image: 'hub-remove-anthology-modal.png',
    title: '앤솔로지 제거(선택)',
    body: '허브 목록에서 [Remove anthology]를 누르면 확인 창이 뜹니다. [취소]하면 프로젝트는 그대로 남습니다.',
    alt: 'Emprint 앤솔로지 제거 확인'
  }
]

export const documentSectionsEn = [
  installSectionEn,
  ...nodeGitEn,
  {
    id: 'wizard',
    navLabel: 'Setup wizard',
    title: 'First-run setup wizard',
    summary:
      'The first time you open Emprint, a short wizard checks Git, Node.js, GitHub, and your workspace folder—in that order.',
    body:
      'Complete each step before Continue unlocks. Screens below follow the same order as the app (captured from a full Column anthology workflow).',
    bullets: [
      'If a step stays blocked, install the tool on your computer first (see Node.js and Git sections), then restart Emprint.',
      'GitHub sign-in links the app to your account for repository create/sync.',
      'The root folder is only for where projects are stored—not your public website URL yet.'
    ],
    steps: wizardStepsEn
  },
  {
    id: 'hub',
    navLabel: 'Anthology hub',
    title: 'Anthology hub',
    summary:
      'After setup, the hub is home base: pick an anthology or create a new site (Column, Memoir, Dictionary, Fragments, or Book).',
    body:
      'Creating a Column anthology opens the tour in the next section. Memoir, Dictionary, Fragments, and Book each have their own section below with matching screenshots.',
    steps: hubStepsEn
  },
  {
    id: 'workspace',
    navLabel: 'Anthology (Column)',
    title: 'Column anthology',
    summary:
      'A Column anthology has six sections in the sidebar—Posts, Drafts, Assets, Design, Imprint, and Settings.',
    body:
      'Keyboard shortcuts 1–6 jump between sections. The flow below matches a typical writing → design → publish path.',
    bullets: [
      'Footer actions include Update (pull), Reset draft, and Publish when Git is linked.',
      'Design → Open preview needs Node.js installed.'
    ],
    steps: workspaceStepsEn
  },
  {
    id: 'workspace-dictionary',
    navLabel: 'Anthology (Dictionary)',
    title: 'Dictionary anthology',
    summary:
      'A Dictionary anthology has six sections—Contents, Drafts, Assets, Design, Imprint, and Settings.',
    body:
      'Contents is an index tree: create top-level segments, then add knowledge entries. The flow below matches a typical index → draft → design → publish path.',
    bullets: [
      'Footer actions include Update (pull), Reset draft, and Publish when Git is linked.',
      'Design → Open preview needs Node.js installed.'
    ],
    steps: dictionaryStepsEn
  },
  {
    id: 'workspace-fragments',
    navLabel: 'Anthology (Fragments)',
    title: 'Fragments anthology',
    summary:
      'A Fragments anthology has four sections—Artwork, Design, Imprint, and Settings.',
    body:
      'Artwork is your gallery: upload images, edit metadata, then tune layout in Design before publishing.',
    bullets: [
      'Upload artwork from Artwork; metadata drives the public lightbox.',
      'Publish pushes the gallery site to the linked GitHub repository.'
    ],
    steps: fragmentsStepsEn
  },
  {
    id: 'workspace-memoir',
    navLabel: 'Anthology (Memoir)',
    title: 'Memoir anthology',
    summary:
      'A Memoir anthology has five sections—Sections, Assets, Design, Imprint, and Settings.',
    body:
      'Sections is a searchable portfolio of pages. The flow below matches edit → design → publish.',
    bullets: [
      'Search filters section titles when your portfolio grows.',
      'Publish pushes the portfolio site to the linked GitHub repository.'
    ],
    steps: memoirStepsEn
  },
  {
    id: 'workspace-book',
    navLabel: 'Anthology (Book)',
    title: 'Book anthology',
    summary:
      'A Book anthology has four sections—Story, Design, Imprint, and Settings.',
    body:
      'Story is one long Markdown narrative. Use page breaks and Design layout options so readers turn pages on the published site.',
    bullets: [
      'Insert `---` in Story for chapter-style page breaks.',
      'Design can switch between scroll and paginated reading layouts.'
    ],
    steps: bookStepsEn
  },
  {
    id: 'publish',
    navLabel: 'Publish',
    title: 'Publish and return to hub (Column)',
    summary:
      'When writing is ready, Publish pushes commits to GitHub; Imprint records the trace.',
    body: 'Git must be installed and GitHub connected. Publishing is per anthology repository.',
    steps: publishStepsEn
  }
]

export const documentSectionsKo = [
  installSectionKo,
  ...nodeGitKo,
  {
    id: 'wizard',
    navLabel: '설정 마법사',
    title: '첫 실행 설정 마법사',
    summary:
      'Emprint를 처음 열면 Git → Node.js → GitHub → 작업 폴더 순으로 짧은 마법사가 진행됩니다.',
    body: '각 단계가 준비되면 [계속]이 활성화됩니다. 아래 화면은 앱 순서와 동일합니다(Column 앤솔로지 기준 캡처).',
    bullets: [
      '막히면 Node.js·Git 섹션을 참고해 PC에 먼저 설치한 뒤 Emprint를 다시 실행하세요.',
      'GitHub 로그인은 저장소 생성·동기화용입니다.',
      '루트 폴더는 프로젝트 보관 위치이며, 공개 웹 주소와는 별개입니다.'
    ],
    steps: wizardStepsKo
  },
  {
    id: 'hub',
    navLabel: '앤솔로지 허브',
    title: '앤솔로지 허브',
    summary:
      '설정 후 허브에서 앤솔로지를 열거나 새로 만듭니다(Column·Memoir·Dictionary·Fragments·Book).',
    body:
      'Column 앤솔로지를 만들면 다음 섹션으로 들어갑니다. Memoir·Dictionary·Fragments·Book은 아래 전용 섹션에 스크린샷이 있습니다.',
    steps: hubStepsKo
  },
  {
    id: 'workspace',
    navLabel: '앤솔로지 (Column)',
    title: 'Column 앤솔로지',
    summary:
      'Column 앤솔로지 사이드바: Posts, Drafts, Assets, Design, Imprint, Settings.',
    body: '단축키 1–6으로 섹션을 바꿀 수 있습니다. 아래는 글쓰기→디자인→게시 흐름입니다.',
    bullets: [
      '하단에 Update(pull), Reset draft, Publish가 있습니다.',
      'Design 미리보기는 Node.js가 필요합니다.'
    ],
    steps: workspaceStepsKo
  },
  {
    id: 'workspace-dictionary',
    navLabel: '앤솔로지 (Dictionary)',
    title: 'Dictionary 앤솔로지',
    summary:
      'Dictionary 앤솔로지 사이드바: Contents, Drafts, Assets, Design, Imprint, Settings.',
    body:
      'Contents는 색인 트리입니다. 최상위 색인을 만든 뒤 지식 항목을 추가합니다. 아래는 색인→초안→디자인→게시 흐름입니다.',
    bullets: [
      '하단에 Update(pull), Reset draft, Publish가 있습니다.',
      'Design 미리보기는 Node.js가 필요합니다.'
    ],
    steps: dictionaryStepsKo
  },
  {
    id: 'workspace-fragments',
    navLabel: '앤솔로지 (Fragments)',
    title: 'Fragments 앤솔로지',
    summary:
      'Fragments 앤솔로지 사이드바: Artwork, Design, Imprint, Settings.',
    body:
      'Artwork에서 이미지를 업로드·메타데이터를 편집한 뒤 Design에서 레이아웃을 조정하고 게시합니다.',
    bullets: [
      'Artwork에서 작품을 올리고 제목·캡션 등을 입력합니다.',
      'Publish로 갤러리 사이트를 GitHub에 push합니다.'
    ],
    steps: fragmentsStepsKo
  },
  {
    id: 'workspace-memoir',
    navLabel: '앤솔로지 (Memoir)',
    title: 'Memoir 앤솔로지',
    summary:
      'Memoir 앤솔로지 사이드바: Sections, Assets, Design, Imprint, Settings.',
    body:
      'Sections는 검색 가능한 포트폴리오 페이지 목록입니다. 아래는 편집→디자인→게시 흐름입니다.',
    bullets: [
      '검색으로 섹션 제목을 필터링할 수 있습니다.',
      'Publish로 포트폴리오 사이트를 GitHub에 push합니다.'
    ],
    steps: memoirStepsKo
  },
  {
    id: 'workspace-book',
    navLabel: '앤솔로지 (Book)',
    title: 'Book 앤솔로지',
    summary:
      'Book 앤솔로지 사이드바: Story, Design, Imprint, Settings.',
    body:
      'Story는 한 편의 긴 Markdown 이야기입니다. 페이지 구분과 Design 레이아웃으로 게시 사이트에서 넘겨 읽게 할 수 있습니다.',
    bullets: [
      'Story에 `---`를 넣어 챕터처럼 페이지를 나눕니다.',
      'Design에서 스크롤·페이지 넘김 레이아웃을 고릅니다.'
    ],
    steps: bookStepsKo
  },
  {
    id: 'publish',
    navLabel: '게시',
    title: '게시하고 허브로 돌아가기 (Column)',
    summary: 'Publish로 GitHub에 push하고 Imprint에 기록이 남습니다.',
    body: 'Git 설치와 GitHub 연결이 필요합니다.',
    steps: publishStepsKo
  }
]
