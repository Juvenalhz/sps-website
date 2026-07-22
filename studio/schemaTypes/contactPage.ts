import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'institutionalMessage',
      title: 'Mensaje Institucional',
      type: 'text',
    }),
    defineField({
      name: 'mapInstructions',
      title: 'Instrucciones de Llegada / Ubicación',
      type: 'text',
    }),
    defineField({
      name: 'mapUrl',
      title: 'URL de Google Maps (Iframe embed opcional)',
      type: 'url',
    }),
  ],
})
