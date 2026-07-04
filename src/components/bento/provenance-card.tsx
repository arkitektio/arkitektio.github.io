import { Fingerprint, ShieldCheck } from 'lucide-react';
import { BentoCard } from './primitives';

// A short, illustrative audit trail. Static. It stands in for the real,
// queryable provenance records Arkitekt writes for every action.
const trail = [
  { action: 'process()', hash: 'a3f19c', when: '2s ago' },
  { action: 'upload()', hash: '9c0d4e', when: '6s ago' },
  { action: 'train()', hash: '1b7e88', when: '14s ago' },
];

export function ProvenanceCard() {
  return (
    <BentoCard className="flex flex-col gap-5 p-6 sm:p-8">
      <div>
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-fd-primary/10 text-fd-primary">
            <ShieldCheck className="size-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight">
            Audited by default.
          </h2>
        </div>
        <p className="mt-3 text-sm text-fd-muted-foreground">
          Every action, input and output is recorded in the database. You get a
          complete, queryable provenance trail of who ran what, on which data,
          and when.
        </p>
      </div>

      {/* audit trail */}
      <div className="flex flex-col gap-2">
        {trail.map((e) => (
          <div
            key={e.hash}
            className="flex items-center gap-3 rounded-lg border border-fd-border bg-fd-muted/40 px-3 py-2 font-mono text-[12px]"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span className="text-fd-foreground">{e.action}</span>
            <span className="text-fd-primary">#{e.hash}</span>
            <span className="ml-auto text-fd-muted-foreground">{e.when}</span>
          </div>
        ))}
      </div>

      {/* crypto-signing. Coming soon */}
      <div className="mt-auto flex items-center gap-3 rounded-lg border border-dashed border-fd-border px-3 py-2.5">
        <Fingerprint className="size-4 shrink-0 text-fd-muted-foreground" />
        <span className="text-sm text-fd-muted-foreground">
          Cryptographic signing
        </span>
        <span className="ml-auto rounded-full border border-fd-primary/40 bg-fd-primary/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.12em] text-fd-primary">
          SOON
        </span>
      </div>
    </BentoCard>
  );
}
