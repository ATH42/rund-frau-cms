import {defineType} from 'sanity'

export default defineType({
  name: 'downloads',
  title: 'Downloads & Links',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      placeholder: 'Geben Sie den Titel des Downloads oder Links ein',
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      placeholder: 'Geben Sie eine Beschreibung des Downloads oder Links ein',
    },
    {
      name: 'file',
      title: 'Datei',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.txt,.odt,.xls,.xlsx,.csv',
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      placeholder: 'Geben Sie die URL ein, falls es sich um einen Link handelt',
    },
  ],
})
