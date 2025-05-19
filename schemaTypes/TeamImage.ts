import {defineType} from 'sanity'

export default defineType({
  name: 'team-image',
  title: 'Team Bilder',
  type: 'document',

  preview: {
    select: {
      title: 'description',
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Team Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Team',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      placeholder: 'Beschreibung des Bildes (z.B. Teamfoto)',
      validation: (Rule) => Rule.required(),
    },
  ],
})
