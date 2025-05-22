import {defineType} from 'sanity'

export default defineType({
  name: 'service',
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
      name: 'paragraphs',
      title: 'Paragraphen',
      type: 'array',
      of: [
        {
          name: 'paragraphItem',
          title: 'Paragraph',
          type: 'object',

          fields: [
            {
              name: 'paragraphTitle',
              type: 'string',
              title: 'Paragraph Titel',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'paragraph',
              type: 'text',
              title: 'Paragraph Text',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'paragraphTitle',
            },
            prepare({title}) {
              return {
                title: title || 'Untitled',
                media: null,
              }
            },
          },
        },
      ],
    },
    {
      name: 'sortOrder',
      title: 'Position',
      type: 'number',
      description: 'Niedrigste zuerst',
    },
  ],
})
