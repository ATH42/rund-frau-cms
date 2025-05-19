import {defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Benutzer',
  type: 'document',

  preview: {
    select: {
      title: 'description',
    },
  },
  fields: [],
})

// authentification still to do
