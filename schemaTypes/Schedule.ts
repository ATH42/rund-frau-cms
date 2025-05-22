import {defineType} from 'sanity'

export default defineType({
  name: 'schedule',
  title: 'Veranstaltungen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Veranstaltungstitel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Veranstaltungsdatum',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Veranstaltungsbeschreibung',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Veranstaltungsort',
      type: 'string',
    },
  ],
})
