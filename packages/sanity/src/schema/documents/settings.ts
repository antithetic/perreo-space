import { defineField, defineType } from 'sanity'
import { Cog } from 'lucide-react'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: Cog,
  fields: [
    defineField({
      name: 'homePage',
      type: 'reference',
      to: [{ type: 'page' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
