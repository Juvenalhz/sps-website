import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Servicio',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Detallada',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icono o Imagen Representativa',
      type: 'image',
      description: 'Tamaño recomendado: 1200 x 800 px para fotografías o 128 x 128 px para íconos PNG/SVG sin fondo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceLink',
      title: 'Enlace de Interés (Opcional)',
      type: 'url',
    }),
  ],
})
