import {defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Kurse',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      placeholder: 'Geben Sie den Kurstitel ein',
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      placeholder: 'Geben Sie eine Beschreibung des Kurses ein',
    },
    {
      name: 'dates',
      title: 'Termine',
      type: 'array',
      of: [
        {
          type: 'datetime',
          options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },

    {
      name: 'maxAttendees',
      title: 'Maximale Teilnehmerzahl',
      type: 'number',
      placeholder: 'Geben Sie die maximale Teilnehmerzahl ein',
    },
    {
      name: 'location',
      title: 'Ort',
      type: 'string',
      placeholder: 'Geben Sie den Kursort ein',
    },
    {
      name: 'price',
      title: 'Preis',
      type: 'number',
      placeholder: 'Geben Sie den Kurspreis ein',
    },
    {
      name: 'image',
      title: 'Kurs Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
  ],
})
