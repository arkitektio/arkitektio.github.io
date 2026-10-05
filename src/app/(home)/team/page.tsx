import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Heart, Users } from 'lucide-react';
import { Avatar } from '@/components/site';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';
import { team, type TeamMember } from '@/lib/team';

export const metadata: Metadata = {
  title: 'Team',
  description: `The people who build ${appName}, steward its tutorials and answer your questions.`,
};

const members: TeamMember[] = Object.values(team);

const linkClass = 'underline underline-offset-4 hover:text-fd-primary';

export default function TeamPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-5xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <Users className="size-3.5 text-fd-primary" />
            By humans, for humans
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            The {appName} team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-fd-muted-foreground">
            {appName} is built by people, for people. These are the humans who write the
            code, steward the tutorials and answer when you get stuck.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex w-full flex-col items-center gap-3 rounded-xl border border-fd-border bg-fd-card/50 p-6 text-center backdrop-blur sm:w-72"
            >
              <Avatar steward={member} className="size-20 text-xl" />
              <div>
                <h2 className="font-semibold tracking-tight">
                  {member.url ? (
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="transition-colors hover:text-fd-primary"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h2>
                <p className="text-sm text-fd-muted-foreground">{member.role}</p>
              </div>
              {member.steward && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary">
                  <GraduationCap className="size-3.5" />
                  Tutorial steward
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-12 text-center backdrop-blur">
          <Heart className="size-6 text-fd-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Join us</h2>
          <p className="max-w-xl text-fd-muted-foreground">
            {appName} is open source, and there is room on this page. Read how to{' '}
            <Link className={linkClass} href="/docs/guides/contribute">
              contribute
            </Link>
            , or say hello in the{' '}
            <a
              className={linkClass}
              href="https://github.com/orgs/arkitektio/discussions"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub discussions
            </a>{' '}
            and on the{' '}
            <a
              className={linkClass}
              href="https://forum.image.sc/tag/arkitekt"
              target="_blank"
              rel="noreferrer noopener"
            >
              image.sc forum
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
