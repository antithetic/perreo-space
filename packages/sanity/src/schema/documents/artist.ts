import { defineField, defineType } from 'sanity'
import { CircleUser } from 'lucide-react'

export const artist = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: CircleUser,
  groups: [
    { name: 'profile', title: 'Profile', default: true },
    { name: 'links', title: 'Links & media' },
    { name: 'seo', title: 'SEO' },
  ],
  fieldsets: [
    {
      name: 'featuredArtistOptions',
      title: 'Featured Artist Options',
      description:
        'Optional: The date to start/end highlighting this person on the homepage / artist index.',
      options: { columns: 2 },
      hidden: ({ document }) => !document?.featured,
    },
  ],
  fields: [
    // Profile
    defineField({
      name: 'name',
      title: 'Artist Name / Alias',
      type: 'string',
      group: 'profile',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'profile',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      group: 'profile',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      group: 'profile',
      description:
        'What this person does for/at Love Hangover. A person can hold multiple roles.',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Producer', value: 'producer' },
          { title: 'DJ', value: 'dj' },
          { title: 'Resident', value: 'resident' },
          { title: 'Vocalist', value: 'vocalist' },
          { title: 'Visual artist', value: 'visual-artist' },
          { title: 'Photographer', value: 'photographer' },
          { title: 'Collective member', value: 'collective-member' },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Artist Photo',
      type: 'image',
      group: 'profile',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),
    defineField({
      name: 'location',
      title: 'Hometown / based in',
      type: 'string',
      group: 'profile',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      group: 'profile',
      of: [{ type: 'block' }],
    }),
    // TODO: Add genres and subgenres and add to the artist page
    // defineField({
    //   name: 'genres',
    //   title: 'Genres',
    //   type: 'array',
    //   group: 'profile',
    //   of: [{ type: 'reference', to: [{ type: 'genre' }] }],
    // }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'profile',
      description: 'Highlight this person on the homepage / artist index.',
      initialValue: false,
    }),
    defineField({
      name: 'featureStartDate',
      title: 'Feature Start Date',
      type: 'date',
      group: 'profile',
      fieldset: 'featuredArtistOptions',
      hidden: ({ parent }) => !parent?.featured,
    }),
    defineField({
      name: 'featureEndDate',
      title: 'Feature End Date',
      type: 'date',
      group: 'profile',
      fieldset: 'featuredArtistOptions',
      hidden: ({ parent }) => !parent?.featured,
    }),
  ],

  preview: {
    select: { title: 'name', media: 'image', roles: 'roles' },
    prepare({ title, media, roles }) {
      return {
        title,
        subtitle: Array.isArray(roles) ? roles.join(', ') : '',
        media,
      }
    },
  },
})
