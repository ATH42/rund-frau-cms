import {defineType} from 'sanity'

export default defineType({
  name: 'contact-reasons',
  title: 'Anliegen',
  type: 'document',
  fields: [
    {
      name: 'reason',
      title: 'Anliegen',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
