import {defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      placeholder: 'Geben Sie eine Kategorie / Ueberschrift ein',
    },
    {
      name: 'question',
      title: 'Frage',
      type: 'text',
      placeholder: 'Geben Sie eine Frage ein, die beantwortet werden soll',
    },
    {
      name: 'answer',
      title: 'Antwort',
      type: 'text',
      placeholder: 'Geben Sie die Antwort auf die Frage ein',
    },
  ],
})
