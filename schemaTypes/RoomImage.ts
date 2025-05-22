import {defineType} from 'sanity'

export default defineType({
  name: 'room-image',
  title: 'Raum Foto',
  type: 'document',
  preview: {
    select: {
      title: 'description',
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Raum Foto',
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
      placeholder: 'Beschreibung des Bildes (z.B. Raumname)',
      validation: (Rule) => Rule.required(),
    },
  ],
})
