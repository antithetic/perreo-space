import { defineField, defineType } from 'sanity'

export const venue = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fieldsets: [
    {
      name: 'location',
      title: 'Location',
      options: { columns: 2 },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Venue Name',
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
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      fieldset: 'location',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      fieldset: 'location',
    }),
    defineField({
      name: 'zip',
      title: 'Zip',
      type: 'string',
      fieldset: 'location',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      fieldset: 'location',
    }),
  ],
})
