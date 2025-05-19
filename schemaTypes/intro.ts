import {defineType} from 'sanity'

export default defineType({
  name: 'intro',
  title: 'Leitbild',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
})
