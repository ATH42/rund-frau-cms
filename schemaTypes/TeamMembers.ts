import {defineType} from 'sanity'

export default defineType({
  name: 'team-members',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Telefonnummer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mail',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'image',
      title: 'Profilbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
    },
  ],
})
