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
      placeholder: 'Geben Sie den Titel der Downloads oder Links ein',
    },
    {
      name: 'contacts',
      title: 'Kontakte',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'contactName',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'phoneNumber',
              title: 'Telefonnummer',
              type: 'string',
              description: 'Telefonnummer für Anfragen',
            },
          ],
        },
      ],
    },
    {
      name: 'files',
      title: 'Dateien',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fileName',
              title: 'File Name',
              type: 'string',
            },
            {
              name: 'fileItem',
              title: 'Datei',
              type: 'file',
              options: {
                accept: '.pdf,.doc,.docx,.txt,.odt,.xls,.xlsx,.csv',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'linkName',
              title: 'Link Name',
              type: 'string',
            },
            {
              name: 'urlItem',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
