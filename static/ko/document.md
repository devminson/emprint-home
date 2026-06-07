# Emprint, 처음부터 따라하기

> 개발 경험이 없어도 괜찮습니다. 설치 → Node.js·Git 준비 → 설정 마법사 → 앤솔로지 만들기 → 앤솔로지 안에서 작업 → 게시 순으로 화면을 따라가면 됩니다. 다섯 가지 앤솔로지 형식 모두 앱 스크린샷이 붙어 있습니다.

- HTML (with screenshots): https://devminson.github.io/emprint-home/ko/document/
- Last updated: 2026-06-07
## 1. 앱 설치하기

Emprint 0.3.0은 최근 맥(M1 등 Apple 칩 또는 Intel)과 64비트 Windows에서 실행됩니다. 가능하면 Homebrew·Scoop으로 설치하세요.

온라인 계정 없이도 설치할 수 있습니다. 나중에 백업·게시할 때 무료 GitHub 계정이 필요할 수 있습니다. 홈의 설치 명령(권장)을 쓰고, 직접 설치 파일은 필요할 때만 사용하세요. 맥 직접 다운로드는 Gatekeeper 보조용 post-install이 포함된 .pkg입니다.

- 맥: 터미널에서 Homebrew 명령 실행. Windows: PowerShell에서 Scoop 명령 실행.
- 설치 후 맥은 응용 프로그램, Windows는 시작 메뉴에서 Emprint 실행.
- 맥에서 열리지 않으면 응용 프로그램에서 Emprint 우클릭 → [열기], 또는 시스템 설정 → 개인정보 보호 및 보안 → [그래도 열기].

## 2. Node.js 설치하기 (전체 기능에 필요)

Node.js가 없으면 미리보기 등이 동작하지 않습니다. 앱 안 첫 설정 마법사 전에 설치해 두세요.

Emprint는 미리보기·로컬 빌드에 Node.js와 npm을 사용합니다. 첫 실행 마법사 2단계에서 확인합니다—막히면 먼저 PC에 Node.js를 설치하세요.

- https://nodejs.org 에서 LTS 설치 파일을 받아 기본 옵션으로 설치합니다.
- 설치 후 Emprint를 완전히 종료했다가 다시 실행합니다.
- 확인(선택): `node -v`, `npm -v` 실행.

## 3. Git 설치하기 (동기화·게시에 필요)

Git이 없으면 GitHub 연동·게시가 실패할 수 있습니다. 계정 연결 전에 설치하세요.

Git은 Emprint와 별개입니다. 설정 마법사 1단계에서 확인합니다. 맥은 “명령줄 개발자 도구” 설치 후 Git이 있을 수 있습니다.

- 필요하면 https://git-scm.com/downloads 에서 설치합니다.
- 설치 후 Emprint를 다시 실행합니다.
- 확인(선택): `git --version` 실행.

## 4. 첫 실행 설정 마법사

Emprint를 처음 열면 Git → Node.js → GitHub → 작업 폴더 순으로 짧은 마법사가 진행됩니다.

각 단계가 준비되면 [계속]이 활성화됩니다. 아래 화면은 앱 순서와 동일합니다(Column 앤솔로지 기준 캡처).

- 막히면 Node.js·Git 섹션을 참고해 PC에 먼저 설치한 뒤 Emprint를 다시 실행하세요.
- GitHub 로그인은 저장소 생성·동기화용입니다.
- 루트 폴더는 프로젝트 보관 위치이며, 공개 웹 주소와는 별개입니다.

### 4.1 마법사 1단계 — Git

첫 실행 시 Git 설치 여부를 확인합니다. Ready가 보이면 [계속]을 누릅니다.

Screenshot: wizard-01-git.png

### 4.2 마법사 2단계 — Node.js

이어서 Node.js(v22 이상)를 확인합니다. 막히면 PC에 Node.js를 먼저 설치하세요.

Screenshot: wizard-02-node.png

### 4.3 마법사 3단계 — GitHub

GitHub 로그인으로 앤솔로지용 저장소를 연결합니다. 기기 로그인 코드가 나오면 브라우저에서 승인합니다.

Screenshot: wizard-03-github.png

### 4.4 마법사 4단계 — 작업 루트 폴더

프로젝트를 둘 컴퓨터 안 폴더를 고릅니다. [폴더 선택] 후 [완료]를 누릅니다.

Screenshot: wizard-04-root.png

### 4.5 완료 — 앤솔로지 허브

설정이 끝나면 앤솔로지 허브로 이동합니다. 사이트 목록을 보고 새로 만들거나 열 수 있습니다.

Screenshot: wizard-05-hub.png

## 5. 앤솔로지 허브

설정 후 허브에서 앤솔로지를 열거나 새로 만듭니다(Column·Memoir·Dictionary·Fragments·Book).

Column 앤솔로지를 만들면 다음 섹션으로 들어갑니다. Memoir·Dictionary·Fragments·Book은 아래 전용 섹션에 스크린샷이 있습니다.

### 5.1 앤솔로지 목록

허브에서 등록한 앤솔로지를 봅니다. [열기]로 들어가거나 사이드바에서 [새 앤솔로지 만들기]를 선택합니다.

Screenshot: hub-anthologies.png

### 5.2 새 앤솔로지 만들기

형식(Column·Memoir·Dictionary·Fragments·Book), 제목, 설명, GitHub 저장소 정보를 입력합니다. 아래 화면은 Column(블로그형) 기준입니다.

Screenshot: hub-create-panel.png

## 6. Column 앤솔로지

Column 앤솔로지 사이드바: Posts, Drafts, Assets, Design, Imprint, Settings.

단축키 1–6으로 섹션을 바꿀 수 있습니다. 아래는 글쓰기→디자인→게시 흐름입니다.

- 하단에 Update(pull), Reset draft, Publish가 있습니다.
- Design 미리보기는 Node.js가 필요합니다.

### 6.1 Posts — 게시된 글

Posts는 사이트에 올릴 글을 모읍니다. 목록에서 항목을 고른 뒤 편집합니다.

Screenshot: workspace-posts-list.png

### 6.2 Posts — 편집기

Markdown으로 작성하고 저장합니다.

Screenshot: workspace-posts-editor.png

### 6.3 Drafts — 작성 중

Drafts는 아직 다듬는 글을 위한 공간입니다.

Screenshot: workspace-drafts-list.png

### 6.4 Drafts — 편집기

초안은 Drafts에서, 마음에 들면 Posts로 옮깁니다.

Screenshot: workspace-drafts-editor.png

### 6.5 Assets

이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.

Screenshot: workspace-assets.png

### 6.6 Design — 사이트 모양

레이아웃·스타일을 바꿉니다. 미리보기는 Node.js가 필요합니다.

Screenshot: workspace-design-template.png

### 6.7 Design — AI 프롬프트(선택)

AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.

Screenshot: workspace-design-ai-prompt-modal.png

### 6.8 Design — 코드 모드 전환

코드 모드로 바꿀 때 확인 창이 뜹니다.

Screenshot: workspace-design-switch-mode-modal.png

### 6.9 Imprint — 게시 기록

게시(git) 이력을 시간순으로 봅니다.

Screenshot: workspace-imprint.png

### 6.10 Settings — 스튜디오 설정

이 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.

Screenshot: workspace-settings.png

### 6.11 명령 팔레트

⌘K / Ctrl+K로 허브·섹션·앱 설정으로 빠르게 이동합니다.

Screenshot: workspace-command-palette.png

### 6.12 앱 설정

GitHub OAuth 등 전역 설정은 팔레트에서 연 앱 설정 모달에 있습니다.

Screenshot: app-settings-modal.png

## 7. Dictionary 앤솔로지

Dictionary 앤솔로지 사이드바: Contents, Drafts, Assets, Design, Imprint, Settings.

Contents는 색인 트리입니다. 최상위 색인을 만든 뒤 지식 항목을 추가합니다. 아래는 색인→초안→디자인→게시 흐름입니다.

- 하단에 Update(pull), Reset draft, Publish가 있습니다.
- Design 미리보기는 Node.js가 필요합니다.

### 7.1 Dictionary 앤솔로지 열기

Dictionary 앤솔로지를 만들면 Contents(색인·지식 트리)로 들어갑니다.

Screenshot: dictionary-index.png

### 7.2 Contents — 색인 트리

Contents에서 최상위 색인(토픽)을 보고 추가합니다.

Screenshot: dictionary-contents.png

### 7.3 Contents — 새 색인

최상위 색인을 만든 뒤 그 아래에 지식 항목을 추가합니다.

Screenshot: dictionary-contents-index-created.png

### 7.4 Contents — 지식 편집기

색인에 연결된 지식 항목을 작성·저장합니다.

Screenshot: dictionary-contents-entry-editor.png

### 7.5 Drafts — 작성 중

Drafts는 아직 다듬는 지식 항목을 위한 공간입니다.

Screenshot: dictionary-drafts-list.png

### 7.6 Drafts — 편집기

초안은 Drafts에서, 마음에 들면 Contents로 옮깁니다.

Screenshot: dictionary-drafts-editor.png

### 7.7 Assets

이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.

Screenshot: dictionary-assets.png

### 7.8 Design — 사이트 모양

템플릿 선택·미리보기(Node.js 필요)·코드 모드 전환을 할 수 있습니다.

Screenshot: dictionary-design-template.png

### 7.9 Design — AI 프롬프트(선택)

AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.

Screenshot: dictionary-design-ai-prompt-modal.png

### 7.10 Design — 코드 모드 전환

코드 모드로 바꿀 때 확인 창이 뜹니다.

Screenshot: dictionary-design-switch-mode-modal.png

### 7.11 Imprint — 게시 기록

Dictionary 앤솔로지의 게시(git) 이력을 봅니다.

Screenshot: dictionary-imprint.png

### 7.12 Settings — 스튜디오 설정

이 Dictionary 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.

Screenshot: dictionary-settings.png

### 7.13 게시 대화상자

사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.

Screenshot: dictionary-publish-dialog.png

## 8. Fragments 앤솔로지

Fragments 앤솔로지 사이드바: Artwork, Design, Imprint, Settings.

Artwork에서 이미지를 업로드·메타데이터를 편집한 뒤 Design에서 레이아웃을 조정하고 게시합니다.

- Artwork에서 작품을 올리고 제목·캡션 등을 입력합니다.
- Publish로 갤러리 사이트를 GitHub에 push합니다.

### 8.1 Artwork — 빈 갤러리

Fragments 앤솔로지를 만들면 Artwork(작품 갤러리)로 들어갑니다. 이미지를 업로드해 채웁니다.

Screenshot: fragments-artwork-empty.png

### 8.2 Artwork — 업로드된 작품

업로드한 이미지가 타일로 표시됩니다. 항목을 고르면 제목·연도·매체·태그·캡션을 편집합니다.

Screenshot: fragments-artwork-grid.png

### 8.3 Artwork — 상세 편집

각 작품의 메타데이터를 입력합니다—공개 갤러리·라이트박스에 보이는 정보입니다.

Screenshot: fragments-artwork-detail.png

### 8.4 Design — 사이트 모양

갤러리 레이아웃·스타일을 바꿉니다. Node.js가 있으면 미리보기를 열 수 있습니다.

Screenshot: fragments-design-template.png

### 8.5 Design — AI 프롬프트(선택)

AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.

Screenshot: fragments-design-ai-prompt-modal.png

### 8.6 Imprint — 게시 기록

Fragments 앤솔로지의 게시(git) 이력을 봅니다.

Screenshot: fragments-imprint.png

### 8.7 Settings — 스튜디오 설정

이 Fragments 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.

Screenshot: fragments-settings.png

### 8.8 게시 대화상자

사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.

Screenshot: fragments-publish-dialog.png

## 9. Memoir 앤솔로지

Memoir 앤솔로지 사이드바: Sections, Assets, Design, Imprint, Settings.

Sections는 검색 가능한 포트폴리오 페이지 목록입니다. 아래는 편집→디자인→게시 흐름입니다.

- 검색으로 섹션 제목을 필터링할 수 있습니다.
- Publish로 포트폴리오 사이트를 GitHub에 push합니다.

### 9.1 Memoir 앤솔로지 열기

Memoir 앤솔로지를 만들면 Sections(포트폴리오 페이지 목록)로 들어갑니다.

Screenshot: memoir-sections.png

### 9.2 Sections — 페이지 목록

Sections에서 포트폴리오 페이지를 보고, 항목을 고른 뒤 편집합니다.

Screenshot: memoir-sections-list.png

### 9.3 Sections — 검색

페이지가 많아지면 제목으로 검색해 필터링할 수 있습니다.

Screenshot: memoir-sections-search.png

### 9.4 Sections — 편집기

섹션 제목과 Markdown 본문을 편집하고 저장합니다.

Screenshot: memoir-section-editor.png

### 9.5 Sections — 저장됨

저장하면 목록의 제목이 갱신됩니다.

Screenshot: memoir-section-saved.png

### 9.6 Assets

이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.

Screenshot: memoir-assets.png

### 9.7 Design — 사이트 모양

템플릿을 고르고 Node.js가 있으면 미리보기를 열 수 있습니다.

Screenshot: memoir-design-template.png

### 9.8 Design — AI 프롬프트(선택)

AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.

Screenshot: memoir-design-ai-prompt-modal.png

### 9.9 Imprint — 게시 기록

Memoir 앤솔로지의 게시(git) 이력을 봅니다.

Screenshot: memoir-imprint.png

### 9.10 Settings — 스튜디오 설정

이 Memoir 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.

Screenshot: memoir-settings.png

### 9.11 게시 대화상자

사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.

Screenshot: memoir-publish-dialog.png

## 10. Book 앤솔로지

Book 앤솔로지 사이드바: Story, Design, Imprint, Settings.

Story는 한 편의 긴 Markdown 이야기입니다. 페이지 구분과 Design 레이아웃으로 게시 사이트에서 넘겨 읽게 할 수 있습니다.

- Story에 `---`를 넣어 챕터처럼 페이지를 나눕니다.
- Design에서 스크롤·페이지 넘김 레이아웃을 고릅니다.

### 10.1 Book 앤솔로지 열기

Book 앤솔로지를 만들면 Story(한 편의 긴 이야기)로 들어갑니다. 게시 사이트에서는 페이지를 넘기며 읽습니다.

Screenshot: book-story.png

### 10.2 Story — 글쓰기 시작

Story에서 제목·설명·Markdown 본문을 한 편집기에서 다룹니다.

Screenshot: book-story-initial.png

### 10.3 Story — 저장됨

제목·설명·본문을 저장하며 이야기를 다듬습니다.

Screenshot: book-story-saved.png

### 10.4 Story — 페이지 나누기

Markdown에 `---` 페이지 구분을 넣으면 게시 사이트에서 챕터처럼 넘겨 읽을 수 있습니다.

Screenshot: book-story-page-break.png

### 10.5 Design — 사이트 모양

타이포·색·레이아웃을 바꿉니다. 스크롤·페이지 넘김 읽기 모드를 고를 수 있습니다.

Screenshot: book-design-template.png

### 10.6 Story — 스크롤 레이아웃

Design에서 스크롤 레이아웃을 고르면 Story에 현재 레이아웃이 표시됩니다.

Screenshot: book-story-scroll-layout.png

### 10.7 Design — AI 프롬프트(선택)

AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.

Screenshot: book-design-ai-prompt-modal.png

### 10.8 Imprint — 게시 기록

Book 앤솔로지의 게시(git) 이력을 봅니다.

Screenshot: book-imprint.png

### 10.9 Settings — 스튜디오 설정

이 Book 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.

Screenshot: book-settings.png

### 10.10 게시 대화상자

사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.

Screenshot: book-publish-dialog.png

## 11. 게시하고 허브로 돌아가기 (Column)

Publish로 GitHub에 push하고 Imprint에 기록이 남습니다.

Git 설치와 GitHub 연결이 필요합니다.

### 11.1 게시 대화상자

사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.

Screenshot: workspace-publish-dialog.png

### 11.2 초안 초기화(선택)

Reset draft는 로컬 초안을 버리고 원격과 맞출 때 씁니다—주의해서 사용하세요.

Screenshot: workspace-reset-draft-modal.png

### 11.3 게시 완료

push가 성공하면 확인 메시지가 표시됩니다.

Screenshot: workspace-publish-success.png

### 11.4 게시 후 Imprint

Imprint에 새 커밋이 기록됩니다.

Screenshot: workspace-imprint-after-publish.png

### 11.5 허브로 돌아가기

제목 표시줄에서 허브로 돌아가 다른 앤솔로지를 열 수 있습니다.

Screenshot: hub-returned.png

### 11.6 앤솔로지 제거(선택)

허브 목록에서 [Remove anthology]를 누르면 확인 창이 뜹니다. [취소]하면 프로젝트는 그대로 남습니다.

Screenshot: hub-remove-anthology-modal.png
## Notes

권장 설치는 Homebrew 또는 Scoop입니다(설치 섹션 참고). 직접 다운로드 링크는 GitHub emprint-release 저장소로 연결됩니다. 링크가 맞지 않으면 홈 또는 릴리스 저장소에서 최신 버전을 확인해 주세요.

Source: https://github.com/devminson/emprint
Releases: https://github.com/devminson/emprint-release
