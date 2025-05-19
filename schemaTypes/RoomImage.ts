import {defineType} from 'sanity'

export default defineType({
  name: 'room-image',
  title: 'Raum Foto',
  type: 'document',
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
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Beschreibung',
      type: 'text',
      placeholder: 'Beschreibung des Bildes (z.B. Raumname)',
      validation: (Rule) => Rule.required(),
    },
  ],
})
