import type { ReactNode } from 'react';
import { GraduationCap, ListChecks, type LucideIcon } from 'lucide-react';

// The opening of every tutorial (see "Tutorials" in the README):
//
//   <Prerequisites>…what the reader needs…</Prerequisites>
//   <Learn>…what they can do afterwards…</Learn>
//
// and at the end a <Quiz> (./quiz.tsx).

function Box({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <section className="my-4 rounded-xl border bg-fd-card px-4 py-3">
      <h2 className="not-prose mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground">
        <Icon className="size-4 text-fd-primary" />
        {title}
      </h2>
      <div className="text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_li]:my-1 [&_ul]:my-1">
        {children}
      </div>
    </section>
  );
}

/** What the reader needs before starting the tutorial. */
export function Prerequisites({ children }: { children: ReactNode }) {
  return (
    <Box icon={ListChecks} title="Before you start">
      {children}
    </Box>
  );
}

/** What the reader will be able to do or understand afterwards. */
export function Learn({ children }: { children: ReactNode }) {
  return (
    <Box icon={GraduationCap} title="By the end you will be able to">
      {children}
    </Box>
  );
}
