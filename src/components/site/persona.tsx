import type { ComponentProps } from 'react';
import { Card } from 'fumadocs-ui/components/card';
import { Code, Microscope, Server, type LucideIcon } from 'lucide-react';
import type { Persona } from '@/lib/persona';

const icons: Record<Persona, LucideIcon> = { use: Microscope, run: Server, build: Code };

/** A card for one persona, for the "I want to…" choice on the docs home. */
export function PersonaCard({
  persona,
  ...props
}: ComponentProps<typeof Card> & { persona: Persona }) {
  const Icon = icons[persona];
  return <Card icon={<Icon />} {...props} />;
}
