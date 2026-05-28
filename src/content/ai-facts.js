/**
 * Canonical facts for AI answer engines (GEO/AEO).
 * Keep in sync with site.js version and install-commands.js.
 */

import siteData from '../data/site.js'
import { brewCommands, scoopCommands } from '../data/install-commands.js'
import { absoluteUrl } from '../utils/site-url.js'

export const AI_LAST_UPDATED = '2026-05-19'

export function getCanonicalUrls() {
  return {
    homeEn: absoluteUrl('/'),
    homeKo: absoluteUrl('/ko/'),
    documentEn: absoluteUrl('/document/'),
    documentKo: absoluteUrl('/ko/document/'),
    documentMdEn: absoluteUrl('/document.md'),
    documentMdKo: absoluteUrl('/ko/document.md'),
    llms: absoluteUrl('/llms.txt'),
    llmsFull: absoluteUrl('/llms-full.txt'),
    ogImage: absoluteUrl('assets/images/og-card.png'),
    source: siteData.githubRepoUrl,
    releases: siteData.releaseRepoUrl,
    support: siteData.kofiUrl
  }
}

/** @deprecated use getCanonicalUrls() */
export const canonicalUrls = getCanonicalUrls()

const sharedFacts = {
  name: 'Emprint',
  version: siteData.currentVersion,
  type: 'Desktop application (macOS and Windows)',
  license: 'Open source',
  accountRequiredToInstall: false,
  githubRequiredForPublish: true,
  prerequisites: ['Git', 'Node.js v22+ (for preview and full workspace features)'],
  preferredInstall: {
    macos: brewCommands.join('\n'),
    windows: scoopCommands.join('\n')
  },
  directDownloads: siteData.downloads.map((d) => d.filename)
}

export const aiFactsEn = {
  ...sharedFacts,
  tagline: 'A local-first personal archive and publishing desktop app.',
  definition:
    'Emprint is a desktop app for macOS and Windows that keeps your writing, design, and site files on your computer, uses Git for history, and lets you publish to your own site through GitHub when you are ready. It is not a social feed or algorithmic platform—it is a personal archive organized into anthologies (separate sites you own).',
  anthologies:
    'An anthology in Emprint is a self-contained site project (for example Column for blog-style writing or Memoir for portfolio-style traces), each with its own workspace and optional GitHub repository.',
  workflowOrder:
    'Install Emprint → install Git and Node.js on your PC → complete the in-app setup wizard (Git, Node.js, GitHub, workspace folder) → create or open an anthology in the hub → write in Posts/Drafts, design in Design, then Publish to push to GitHub.',
  faq: [
    {
      id: 'what-is-emprint',
      question: 'What is Emprint?',
      answer:
        'Emprint is a free, open-source desktop app for macOS and Windows. It is a local-first personal archive and publishing tool: your files stay on your computer, revisions are tracked with Git, and you can publish to a site you control via GitHub.'
    },
    {
      id: 'is-emprint-free',
      question: 'Is Emprint free?',
      answer:
        'Yes. Emprint is open source and free to install. Optional support via Ko-fi helps fund signing and releases; the app itself is not paywalled.'
    },
    {
      id: 'install-macos',
      question: 'How do I install Emprint on macOS?',
      answer: `Recommended: run in Terminal:\n${brewCommands.join('\n')}\nAlternatively download Emprint-${siteData.currentVersion}-arm64.pkg or Emprint-${siteData.currentVersion}-x64.pkg from ${siteData.releaseRepoUrl}/releases.`
    },
    {
      id: 'install-windows',
      question: 'How do I install Emprint on Windows?',
      answer: `Recommended: run in PowerShell:\n${scoopCommands.join('\n')}\nAlternatively download Emprint-Setup-${siteData.currentVersion}-x64.exe from ${siteData.releaseRepoUrl}/releases.`
    },
    {
      id: 'need-account',
      question: 'Do I need an account to install Emprint?',
      answer:
        'No. You can install and run Emprint without creating an online account. A free GitHub account is needed when you connect GitHub in the setup wizard for backup and publishing.'
    },
    {
      id: 'need-node-git',
      question: 'Do I need Node.js and Git?',
      answer:
        'Yes, for the full experience. Git is required for sync and publishing. Node.js v22 or newer is required for live preview and local site builds. The first-run wizard checks both before you finish setup.'
    },
    {
      id: 'what-is-anthology',
      question: 'What is an anthology in Emprint?',
      answer:
        'An anthology is one personal site project inside Emprint—like a named shelf. Formats include Column (blog-style), Memoir (portfolio-style), and others. Each anthology has its own workspace folder and can link to its own GitHub repository.'
    },
    {
      id: 'where-files',
      question: 'Where are my files stored?',
      answer:
        'On your computer. During setup you choose a root folder; each anthology lives under that folder as a normal project directory (posts, drafts, assets, design files)—not locked inside a proprietary cloud.'
    },
    {
      id: 'how-publish',
      question: 'How do I publish with Emprint?',
      answer:
        'In a Column anthology workspace, finish your post, use Design if needed, then use Publish in the footer. Emprint commits and pushes to the linked GitHub repository. Git must be installed and GitHub connected. See the Document page for a screen-by-screen guide.'
    },
    {
      id: 'vs-notion-substack',
      question: 'How is Emprint different from Notion or Substack?',
      answer:
        'Emprint is local-first and Git-native: you own the files and history on disk, there is no infinite feed or engagement algorithm, and publishing goes to your repository and site—not a platform-owned stream.'
    },
    {
      id: 'latest-version',
      question: 'What is the latest version of Emprint?',
      answer: `The current release referenced on this site is ${siteData.currentVersion}. Check ${siteData.releaseRepoUrl}/releases for newer builds.`
    },
    {
      id: 'source-code',
      question: 'Where is the Emprint source code?',
      answer: `Source code: ${siteData.githubRepoUrl}. Installers and release tags: ${siteData.releaseRepoUrl}.`
    }
  ]
}

export const aiFactsKo = {
  ...sharedFacts,
  type: 'macOS·Windows 데스크톱 앱',
  tagline: '로컬 우선 개인 아카이브·출판 데스크톱 앱.',
  definition:
    'Emprint는 macOS·Windows용 데스크톱 앱으로, 글·디자인·사이트 파일을 내 컴퓨터에 두고 Git으로 기록을 남기며, 준비되면 GitHub로 내 사이트에 게시할 수 있습니다. SNS 피드가 아니라, 내가 고른 흔적을 앤솔로지(각각 내 홈페이지가 되는 프로젝트)로 쌓는 공간입니다.',
  anthologies:
    '앤솔로지는 Emprint 안의 하나의 사이트 프로젝트입니다(예: Column 블로그형, Memoir 포트폴리오형). 각각 워크스페이스와 GitHub 저장소를 가질 수 있습니다.',
  workflowOrder:
    'Emprint 설치 → PC에 Git·Node.js 설치 → 앱 설정 마법사(Git, Node.js, GitHub, 작업 폴더) → 허브에서 앤솔로지 만들기/열기 → Posts·Drafts에서 글쓰기, Design에서 꾸미기 → Publish로 GitHub에 올리기.',
  faq: [
    {
      id: 'what-is-emprint',
      question: 'Emprint가 뭐예요?',
      answer:
        'Emprint는 macOS·Windows용 무료 오픈소스 데스크톱 앱입니다. 파일은 내 PC에 두고, Git으로 수정 이력을 남기며, GitHub로 내가 소유한 사이트에 게시할 수 있는 개인 아카이브·출판 도구입니다.'
    },
    {
      id: 'is-emprint-free',
      question: 'Emprint는 무료인가요?',
      answer:
        '네. 설치·사용은 무료입니다. Ko-fi 후원은 서명·릴리스 유지에 도움이 되며, 앱 기능을 유료로 막지 않습니다.'
    },
    {
      id: 'install-macos',
      question: '맥에 Emprint는 어떻게 설치하나요?',
      answer: `권장(터미널):\n${brewCommands.join('\n')}\n또는 ${siteData.releaseRepoUrl}/releases 에서 Emprint-${siteData.currentVersion}-arm64.pkg 또는 x64.pkg 를 받을 수 있습니다.`
    },
    {
      id: 'install-windows',
      question: 'Windows에 Emprint는 어떻게 설치하나요?',
      answer: `권장(PowerShell):\n${scoopCommands.join('\n')}\n또는 ${siteData.releaseRepoUrl}/releases 에서 Emprint-Setup-${siteData.currentVersion}-x64.exe 를 받을 수 있습니다.`
    },
    {
      id: 'need-account',
      question: '설치할 때 계정이 필요한가요?',
      answer:
        '아니요. 설치·실행은 계정 없이 가능합니다. 설정 마법사에서 GitHub를 연결할 때 무료 GitHub 계정이 필요합니다.'
    },
    {
      id: 'need-node-git',
      question: 'Node.js와 Git이 꼭 필요한가요?',
      answer:
        '전체 기능을 쓰려면 필요합니다. Git은 동기화·게시에, Node.js v22 이상은 미리보기·로컬 빌드에 필요합니다. 첫 실행 마법사에서 둘 다 확인합니다.'
    },
    {
      id: 'what-is-anthology',
      question: '앤솔로지가 뭔가요?',
      answer:
        '앤솔로지는 Emprint 안의 사이트 하나입니다. Column(블로그형), Memoir(포트폴리오형) 등 형식을 고르고, 각각 워크스페이스와 GitHub 저장소를 둘 수 있습니다.'
    },
    {
      id: 'where-files',
      question: '파일은 어디에 저장되나요?',
      answer:
        '내 컴퓨터입니다. 설정 시 고른 루트 폴더 아래에 일반 프로젝트 폴더(posts, drafts, assets 등)로 저장되며, 플랫폼 전용 클라우드에 갇히지 않습니다.'
    },
    {
      id: 'how-publish',
      question: 'Emprint로 어떻게 게시하나요?',
      answer:
        'Column 워크스페이스에서 글을 마친 뒤 필요하면 Design을 거쳐 하단 Publish를 사용합니다. Git 설치와 GitHub 연결이 필요합니다. 화면별 안내는 문서 페이지를 보세요.'
    },
    {
      id: 'vs-notion-substack',
      question: 'Notion·Substack과 뭐가 다른가요?',
      answer:
        'Emprint는 로컬·Git 기준입니다. 파일과 이력을 내 디스크에서 소유하고, 무한 피드나 알고리즘 노출이 없으며, 게시는 내 저장소·내 사이트로 갑니다.'
    },
    {
      id: 'latest-version',
      question: 'Emprint 최신 버전은?',
      answer: `이 사이트 기준 현재 버전은 ${siteData.currentVersion}입니다. ${siteData.releaseRepoUrl}/releases 에서 최신 빌드를 확인하세요.`
    },
    {
      id: 'source-code',
      question: '소스 코드는 어디에 있나요?',
      answer: `소스: ${siteData.githubRepoUrl} · 설치 파일·릴리스: ${siteData.releaseRepoUrl}`
    }
  ]
}

export function getAiFacts(locale) {
  return locale === 'ko' ? aiFactsKo : aiFactsEn
}
