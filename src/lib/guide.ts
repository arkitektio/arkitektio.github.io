// The first-time guide: a few questions, and from the answers the parts of the
// docs a reader does not need are put away (see src/components/site/guide.tsx).
//
// Everything is data: an option names the folders and pages it hides, as paths
// under content/docs with a trailing slash (`build/rust/` hides the folder,
// `run/install-cli/` the page, `build/~bare-protocols/` the sidebar heading
// "Bare protocols", whose entries share no folder). A question with `when` is only asked after that
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

export const guideQuestions: GuideQuestion[] = [
  {
    id: 'goal',
    text: 'What brings you here?',
    options: [
      {
        value: 'use',
        label: 'My lab runs Arkitekt, I want to use it',
        hide: ['run/', 'build/'],
        start: '/docs/use/joining',
      },
      {
        value: 'run',
        label: 'I want to set up a hub',
        hide: ['use/', 'build/'],
        start: '/docs/run/what-you-are-setting-up',
      },
      {
        value: 'build',
        label: 'I want to write my own apps',
        hide: ['use/', 'run/'],
        start: '/docs/build/why-build',
      },
      { value: 'curious', label: 'Just looking around', start: '/docs/about' },
    ],
  },
  {
    id: 'experience',
    text: 'Have you worked with Arkitekt before?',
    when: { goal: 'use' },
    options: [
      { value: 'new', label: 'No, start me at the beginning' },
      {
        value: 'returning',
        label: 'Yes, I know my way around',
        hide: ['use/joining/', 'use/first-steps/'],
        start: '/docs/use/advanced',
      },
    ],
  },
  {
    id: 'install',
    text: 'How would you rather install it?',
    when: { goal: 'run' },
    options: [
      {
        value: 'desktop',
        label: 'With a desktop app',
        hide: ['run/install-cli/', 'run/other-installation-strategies/'],
      },
      {
        value: 'cli',
        label: 'From the command line',
        hide: ['run/first-hub/'],
        start: '/docs/run/install-cli',
      },
      { value: 'unsure', label: 'Not sure yet' },
    ],
  },
  {
    id: 'language',
    text: 'What do you write?',
    when: { goal: 'build' },
    options: [
      {
        value: 'python',
        label: 'Python',
        hide: ['build/rust/', 'build/kotlin/', 'build/embedded/'],
        start: '/docs/build/python/first-app',
      },
      {
        value: 'rust',
        label: 'Rust',
        hide: ['build/python/', 'build/kotlin/', 'build/embedded/'],
        start: '/docs/build/rust/first-app',
      },
      {
        value: 'kotlin',
        label: 'Kotlin',
        hide: ['build/python/', 'build/rust/', 'build/embedded/'],
        start: '/docs/build/kotlin',
      },
      {
        value: 'embedded',
        label: 'Firmware for a device',
        hide: ['build/python/', 'build/rust/', 'build/kotlin/'],
        start: '/docs/build/embedded/first-device',
      },
      { value: 'several', label: 'A bit of everything' },
    ],
  },
  {
    id: 'internals',
    text: 'Do you want to know how the hub works inside?',
    when: { goal: 'build' },
    options: [
      { value: 'yes', label: 'Yes, show me the internals' },
      {
        value: 'no',
        label: 'No, just let me build',
        hide: [
          'build/services/',
          'build/service-discovery/',
          'build/graphql/',
          'build/~bare-protocols/',
          'build/protocols/',
          'build/agent-protocol/',
          'build/fakts-protocol/',
          'build/backend-libraries/',
          'build/koherent/',
        ],
      },
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
    ].join(',');
  });
  // A reader with a section of their own needs no switch between sections.
  if (answers.goal && answers.goal !== 'curious') {
    rules.push(':is(#nd-sidebar,#nd-sidebar-mobile) button[aria-haspopup="dialog"]:has(p)');
  }
  return rules.length > 0 ? `${rules.join(',')}{display:none}` : '';
}
