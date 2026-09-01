import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Event Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'venue' }] }],
      hidden: ({ document }) => document?.eventType === 'virtual',
    }),
    //  TODO: Add location back in if necessary, already have it in the venue. Could be used for virual events, or for in-person events that don't have a strict venue.
    // defineField({
    //   name: 'location',
    //   title: 'Location',
    //   type: 'text',
    //   rows: 2,
    //   hidden: ({ document }) => document?.eventType === 'virtual',
    // }),
    defineField({
      name: 'virtualLink',
      title: 'Virtual Link',
      type: 'url',
      hidden: ({ document }) => document?.eventType === 'in-person',
    }),

    defineField({
      name: 'series',
      title: 'Series',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'series' }] }],
    }),
  ],
})
