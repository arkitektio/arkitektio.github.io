import Link from 'next/link';
import { FileText } from 'lucide-react';

/**
 * Where the docs explain what changed between the Paper and Next versions of
 * the platform. Every showcase that was run with the Paper version links here.
 */
export const WHATS_CHANGED_URL =
  '/docs/design/whats-changed';

/**
 * Marks a showcase that was run with the Paper version of Arkitekt. It is a
 * link, not just a label, so a reader can jump straight to what has changed
 * since.
 */
export function PaperBadge() {
  return (
    <Link
      href={WHATS_CHANGED_URL}
      title="Run with the Paper version of Arkitekt. See what has changed since."
      className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 hover:bg-amber-500/20 dark:text-amber-300"
    >
      <FileText className="size-3" />
      Paper
    </Link>
  );
}
