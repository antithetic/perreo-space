import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons/Image'

export const splitImageBlock = defineType({
  name: 'splitImage',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'orientation',
      type: 'string',
      options: {
        list: [
          { value: 'imageLeft', title: 'Image Left' },
          { value: 'imageRight', title: 'Image Right' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
      media: 'image',
      orientation: 'orientation',
    },
    prepare({ title, text, media, orientation }) {
      const excerpt = Array.isArray(text)
        ? text
            .map((block) =>
              'children' in block
                ? block.children
                    ?.map((child: { text?: string }) => child.text)
                    .join('')
                : '',
            )
            .filter(Boolean)
            .join(' ')
            .trim()
        : ''

      return {
        title: [title, excerpt].filter(Boolean).join(' – ') || 'Untitled',
        subtitle:
          orientation === 'imageLeft'
            ? 'Split Image - Left'
            : orientation === 'imageRight'
              ? 'Split Image - Right'
              : 'Split Image',
        media: media ?? ImageIcon,
      }
    },
  },
})
