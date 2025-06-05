import {defineType} from 'sanity'

export default defineType({
  name: 'team-member',
  title: 'Team Members',
  type: 'document',
  preview: {
    select: {
      name: 'name', // This will be used as the title in the list
      title: 'title',
      image: 'image',
    },
    prepare(selection) {
      return {
        title: selection.name, // This sets the name as the title
        subtitle: selection.title,
        media: selection.image,
      }
    },
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {name: 'category', title: 'Kategorie', type: 'string'},
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
    {
      name: 'sortOrder',
      title: 'Position',
      type: 'number',
      description: 'Niedrigste zuerst',
    },
  ],
})
