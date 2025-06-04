import type {StructureResolver} from 'sanity/structure'
import {
  SunIcon,
  UsersIcon,
  CaseIcon,
  CalendarIcon,
  StarIcon,
  SparkleIcon,
  ImageIcon,
  BinaryDocumentIcon,
  BulbOutlineIcon,
} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('intro')
        .title('Leitbild')
        .icon(SunIcon)
        .id('intro')
        .child(S.document().schemaType('intro').documentId('intro')),
      S.documentTypeListItem('contact-reasons')
        .title('Anliegen')
        .icon(CaseIcon)
        .id('contact-reasons'),
      S.documentTypeListItem('course').title('Kurse').icon(SparkleIcon),
      S.documentTypeListItem('schedule').title('Veranstaltungen').icon(CalendarIcon),
      S.documentTypeListItem('service').title('Angebote').icon(StarIcon),
      S.documentTypeListItem('team-member').title('Team').icon(UsersIcon),
      S.documentTypeListItem('room-image').title('Raum Bilder').icon(ImageIcon),
      S.documentTypeListItem('team-image').title('Team Bilder').icon(ImageIcon),
      S.documentTypeListItem('downloads').title('Downloads & Links').icon(BinaryDocumentIcon),
      S.documentTypeListItem('faq').title('FAQ').icon(BulbOutlineIcon),
    ])
