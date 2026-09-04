import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('series').title('Series'),
      S.divider(),
      S.documentTypeListItem('artist').title('Artists'),
      S.documentTypeListItem('venue').title('Venues'),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.divider(),
      S.listItem()
        .id('siteSettings')
        .schemaType('siteSettings')
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            'event',
            'series',
            'artist',
            'page',
            'faq',
            'venue',
            'siteSettings',
          ].includes(item.getId()!),
      ),
    ])
