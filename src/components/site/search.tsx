'use client';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  TagsList,
  TagsListItem,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { oramaStaticClient } from 'fumadocs-core/search/client/orama-static';
import { create } from '@orama/orama';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { useState } from 'react';
import { personaInfo, personas } from '@/lib/persona';
import { usePersona } from './persona';

function initOrama() {
  return create({
    schema: { _: 'string' },
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: 'english',
  });
}

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  // The search starts out narrowed to the persona picked in the docs bar; the
  // chips below the results change that for this dialog only.
  const persona = usePersona();
  const [picked, setPicked] = useState<{ tag: string | undefined } | null>(null);
  const tag = picked ? picked.tag : (persona ?? undefined);
  const { search, setSearch, query } = useDocsSearch({
    client: oramaStaticClient({
      initOrama,
      locale,
      tag,
    }),
  });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
        <SearchDialogFooter>
          <TagsList tag={tag} onTagChange={(next) => setPicked({ tag: next })} allowClear>
            {personas.map((value) => (
              <TagsListItem key={value} value={value}>
                {personaInfo[value].badge}
              </TagsListItem>
            ))}
          </TagsList>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
