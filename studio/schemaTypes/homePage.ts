import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Título del Hero',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'URL del Video de Fondo (Central de Monitoreo)',
      type: 'url',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de Fondo del Hero (si no hay video)',
      type: 'image',
      description: 'Tamaño recomendado: 1920 x 1080 px (JPG o WebP)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'interactiveBackgroundImage',
      title: 'Imagen de Fondo de la Sección Interactiva (Hotspots)',
      type: 'image',
      description: 'Tamaño recomendado: 1920 x 1080 px (Oficina o centro de monitoreo amplio y bien iluminado)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'interactiveBlocksTitle',
      title: 'Título de Bloques Interactivos / Estadísticas',
      type: 'string',
    }),
    defineField({
      name: 'interactiveBlocksText',
      title: 'Texto de Bloques Interactivos / Estadísticas',
      type: 'text',
    }),
  ],
})
