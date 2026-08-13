import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Etiqueta superior (Badge encima del título)',
      type: 'string',
      initialValue: 'Atención Personalizada 24/7',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal del Hero',
      type: 'string',
      initialValue: 'Contáctanos',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
      initialValue: 'Estamos listos para evaluar los riesgos de tu empresa y diseñar una solución de seguridad integral a la medida de tus necesidades.',
    }),
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
