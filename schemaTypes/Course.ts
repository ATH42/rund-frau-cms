import {defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Kurs',
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
      type: 'string',
      placeholder: 'Geben Sie eine Beschreibung des Kurses ein',
    },
    {
      name: 'date',
      title: 'Datum',
      type: 'datetime',
      placeholder: 'Wählen Sie Datum und Uhrzeit aus',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
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
  ],
})
