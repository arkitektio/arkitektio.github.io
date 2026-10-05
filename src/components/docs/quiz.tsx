'use client';

import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { cn } from '@/lib/utils';

// The self-check that closes a tutorial: questions whose answer shows when the
// reader clicks the question.
//
//   <Quiz>
//     <Question q="Where is an image after you uploaded it?">In the hub.</Question>
//   </Quiz>

export function Quiz({ title = 'Check yourself', children }: { title?: string; children: ReactNode }) {
  return (
    <section className="not-prose my-8 overflow-hidden rounded-2xl border bg-fd-card">
      <header className="border-b px-5 py-4">
        <h2 className="flex items-center gap-2 font-semibold">
          <CircleHelp className="size-5 text-fd-primary" />
          {title}
        </h2>
        <p className="mt-0.5 text-sm text-fd-muted-foreground">
          Answer each question for yourself, then click it to see ours.
        </p>
      </header>
      <ol className="divide-y">{children}</ol>
    </section>
  );
}

export function Question({ q, children }: { q: ReactNode; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start font-medium transition-colors hover:text-fd-primary"
      >
        {q}
        <ChevronDown
          className={cn(
            'size-4 shrink-0 text-fd-muted-foreground transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {/* the answer folds open: a grid row animates between 0fr and 1fr */}
      <div
        id={`${id}-answer`}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none',
          open ? 'grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-5 mb-4 rounded-lg border-s-2 border-fd-primary bg-fd-primary/5 px-4 py-2 text-sm text-fd-muted-foreground [&_p]:m-0">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}
