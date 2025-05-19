import {defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Angebote',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel des Angebots',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Bild zum Angebot',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung des Angebots',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraphTitle',
      title: 'Titel des Paragraphen',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
