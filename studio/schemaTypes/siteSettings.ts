import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Título Principal del Sitio',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Principal del Sitio',
      type: 'image',
      description: 'Tamaño recomendado: 400 x 120 px (PNG transparente o SVG)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactPhone',
      title: 'Teléfono Principal (Caracas)',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Correo Electrónico',
      type: 'string',
      initialValue: 'sps@spsrisk.com'
    }),
    defineField({
      name: 'address',
      title: 'Dirección de la Oficina (El Rosal)',
      type: 'text',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'URL de Instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'URL de Facebook',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'URL de LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'footerText',
      title: 'Texto del Pie de Página',
      type: 'text',
    }),
  ],
})
