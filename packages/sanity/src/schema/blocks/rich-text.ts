import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons/BlockContent'

export const richTextBlock = defineType({
  name: 'richText',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
  ],
})
