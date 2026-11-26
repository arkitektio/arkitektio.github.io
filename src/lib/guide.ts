// The first-time guide: a few questions, and from the answers the parts of the
// docs a reader does not need are put away (see src/components/site/guide.tsx).
//
// Everything is data: an option names the folders and pages it hides, as paths
// under content/docs with a trailing slash (`develop/python/` hides the folder,
// `develop/rust/` the page, `develop/~write-apps/` the sidebar heading "Write apps",
// whose entries share no folder; `develop/` the whole tab). A question with `when` is only asked after that
// answer was given. To personalise something new, add an option or a question
// here; nothing has to be tagged on the pages.

export type GuideOption = {
  value: string;
  label: string;
  /** Paths to hide while this option is picked. */
  hide?: string[];
  /** Where to send the reader afterwards; the last answer that has one wins. */
  start?: string;
};

export type GuideQuestion = {
  id: string;
  text: string;
  /** Ask only when these earlier answers were given. */
  when?: Record<string, string>;
  options: GuideOption[];
};

// The docs have four tabs (What is Arkitekt?, Get started, Guides & tutorials,
// Developer); Klippy only puts away what makes no sense for this reader.
const LANGUAGES: Record<string, string[]> = {
  python: ['develop/python/', 'develop/first-python-app/'],
  rust: ['develop/rust/', 'develop/reference/rust/', 'develop/first-rust-app/'],
  kotlin: ['develop/kotlin/'],
  embedded: ['develop/reference/embedded/', 'develop/first-device/', 'develop/app-kinds/microcontroller/'],
};
const allBut = (keep: string) =>
  Object.entries(LANGUAGES).flatMap(([lang, paths]) => (lang === keep ? [] : paths));

export const guideQuestions: GuideQuestion[] = [
  {
    id: 'experience',
    text: 'Have you used Arkitekt before?',
    options: [
      { value: 'new', label: 'No, this is my first time', start: '/docs/concepts/basics' },
      {
        value: 'returning',
        label: 'Yes, I know my way around',
        hide: ['get-started/join/', 'get-started/own-hub/', 'concepts/basics/'],
        start: '/docs/guides/first-workflow',
      },
    ],
  },
  {
    id: 'hub',
    text: 'Do you run a hub yourself?',
    options: [
      {
        value: 'no',
        label: 'No, someone runs it for me',
        hide: ['get-started/own-hub/', 'get-started/deployment/'],
      },
      { value: 'yes', label: 'Yes, or I am about to' },
    ],
  },
  {
    id: 'code',
    text: 'Do you write code?',
    options: [
      { value: 'no', label: 'No, I use the apps', hide: ['develop/'] },
      { value: 'yes', label: 'Yes, I want to build apps' },
    ],
  },
  {
    id: 'language',
    text: 'What do you write?',
    when: { code: 'yes' },
    options: [
      { value: 'python', label: 'Python', hide: allBut('python'), start: '/docs/develop/first-python-app' },
      { value: 'rust', label: 'Rust', hide: allBut('rust'), start: '/docs/develop/first-rust-app' },
      { value: 'kotlin', label: 'Kotlin', hide: allBut('kotlin'), start: '/docs/develop/kotlin' },
      { value: 'embedded', label: 'Firmware for a device', hide: allBut('embedded'), start: '/docs/develop/first-device' },
      { value: 'several', label: 'A bit of everything' },
    ],
  },
  {
    id: 'internals',
    text: 'Do you want to know how the hub works inside?',
    when: { code: 'yes' },
    options: [
      { value: 'yes', label: 'Yes, show me the internals' },
      { value: 'no', label: 'No, just let me build', hide: ['develop/internals/', 'develop/protocols/'] },
    ],
  },
];

/** What the reader answered, by question id. */
export type GuideAnswers = Record<string, string>;

/** Stored under GUIDE_STORAGE_KEY: the answers, or that the reader declined. */
export type GuideState = { answers?: GuideAnswers; dismissed?: boolean };

export const GUIDE_STORAGE_KEY = 'arkitekt-guide';
/** The <style> element the filter lives in. */
export const GUIDE_STYLE_ID = 'arkitekt-guide-style';
/** On a sidebar label: the path of its page or folder (see src/lib/page-tree.tsx). */
export const GUIDE_PATH_ATTR = 'data-doc';

const applies = (question: GuideQuestion, answers: GuideAnswers) =>
  Object.entries(question.when ?? {}).every(([id, value]) => answers[id] === value);

/** The questions to ask, given what was answered so far. */
export const questionsFor = (answers: GuideAnswers) =>
  guideQuestions.filter((question) => applies(question, answers));

/** The options the reader picked, in the order of the questions. */
export function pickedOptions(answers: GuideAnswers) {
  return questionsFor(answers).flatMap((question) => {
    const option = question.options.find((o) => o.value === answers[question.id]);
    return option ? [option] : [];
  });
}

/** The paths hidden for these answers. */
export const hiddenPaths = (answers: GuideAnswers) => [
  ...new Set(pickedOptions(answers).flatMap((option) => option.hide ?? [])),
];

/** Where a reader with these answers should start. */
export const startFor = (answers: GuideAnswers) =>
  pickedOptions(answers).findLast((option) => option.start)?.start ?? '/docs';

/**
 * The stylesheet that puts the hidden paths away. In the sidebar a row is found
 * by the path on its label; the page being read, and the folders around it,
 * stay. The selectors follow the sidebar markup of fumadocs-ui: a folder is a
 * `div[data-state]` holding its trigger and its content, and the section switch
 * is the button with a popper at the top.
 */
export function guideCss(answers: GuideAnswers | undefined) {
  if (!answers) return '';
  const rules = hiddenPaths(answers).map((path) => {
    const label = `[${GUIDE_PATH_ATTR}^="${path}"]`;
    return [
      `:is(#nd-sidebar,#nd-sidebar-mobile) :is(a,p):has(> ${label}):not(div[data-state] > a,[data-active="true"])`,
      `:is(#nd-sidebar,#nd-sidebar-mobile) div[data-state]:has(> :is(a,button) > ${label}):not(:has([data-active="true"]))`,
      `[data-radix-popper-content-wrapper] a:has(${label})`,
      // a whole tab in the bar across the top (DocsTabs), unless it is the one being read
      `nav a:has(> ${label}):not([aria-current])`,
    ].join(',');
  });
  return rules.length > 0 ? `${rules.join(',')}{display:none}` : '';
}
