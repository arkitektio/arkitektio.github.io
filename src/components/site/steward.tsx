import type { ReactNode } from 'react';
import { asset } from '@/lib/base-path';
import { getSteward, type Steward as StewardInfo } from '@/lib/stewards';
import { cn } from '@/lib/utils';

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export function Avatar({ steward, className }: { steward: StewardInfo; className?: string }) {
  const shape = cn('size-12 shrink-0 rounded-full ring-2 ring-fd-primary/30', className);
  if (steward.avatar) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={asset(steward.avatar)} alt={steward.name} className={cn(shape, 'object-cover')} />;
  }
  return (
    <span
      aria-hidden
      className={cn(
        shape,
        'flex items-center justify-center bg-fd-primary/10 text-sm font-semibold text-fd-primary',
      )}
    >
      {initials(steward.name)}
    </span>
  );
}

function Name({ steward }: { steward: StewardInfo }) {
  return steward.url ? (
    <a href={steward.url} target="_blank" rel="noreferrer noopener" className="hover:text-fd-primary">
      {steward.name}
    </a>
  ) : (
    <>{steward.name}</>
  );
}

/** Sits next to the title of every tutorial page: who guides the reader through it. */
export function StewardCard({ id }: { id?: string }) {
  const steward = getSteward(id);
  return (
    <div className="not-prose flex shrink-0 items-center gap-3">
      <div className="flex flex-col text-end max-sm:order-2 max-sm:text-start">
        <span className="text-xs font-medium uppercase tracking-wide text-fd-muted-foreground">
          Stewarded by
        </span>
        <span className="text-sm font-semibold">
          <Name steward={steward} />
        </span>
      </div>
      <Avatar steward={steward} />
    </div>
  );
}

/**
 * A word from the steward inside a tutorial, next to a step:
 * `<Steward>Wait for the green tick before you go on.</Steward>`
 */
export function Steward({ id, children }: { id?: string; children: ReactNode }) {
  const steward = getSteward(id);
  return (
    <div className="my-6 flex items-start gap-3">
      <Avatar steward={steward} className="not-prose size-9 text-xs" />
      <div className="flex-1 rounded-xl rounded-tl-sm border bg-fd-card px-4 py-3 text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        <div className="not-prose mb-1 text-xs font-medium text-fd-muted-foreground">
          <Name steward={steward} />
        </div>
        {children}
      </div>
    </div>
  );
}
