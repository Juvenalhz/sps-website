import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Página Nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'history',
      title: 'Historia',
      type: 'text',
    }),
    defineField({
      name: 'mission',
      title: 'Misión',
      type: 'text',
    }),
    defineField({
      name: 'vision',
      title: 'Visión',
      type: 'text',
    }),
    defineField({
      name: 'teamDescription',
      title: 'Descripción del Equipo Directivo',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal de Nosotros',
      type: 'image',
      description: '📸 Foto horizontal del equipo directivo o personal. Tamaño recomendado: 1200 x 800 px (JPG o WebP).',
      options: {
        hotspot: true,
      },
    }),
  ],
})
