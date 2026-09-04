import { defineField, defineType } from 'sanity'
import { MessageCircleQuestionMark } from 'lucide-react'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: MessageCircleQuestionMark,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
})
