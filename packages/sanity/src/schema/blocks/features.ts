import { defineField, defineType } from 'sanity'
import { OlistIcon } from '@sanity/icons/Olist'

export const featuresBlock = defineType({
  name: 'features',
  type: 'object',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [
        defineField({
          name: 'feature',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Features',
      }
    },
  },
})
