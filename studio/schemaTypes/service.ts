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
      name: 'badge',
      title: 'Etiqueta / Subtítulo Corto (Opcional)',
      type: 'string',
      description: 'Ejemplo: "Vigilancia & Control", "Resguardo VIP", "Tecnología & CCTV"',
    }),
    defineField({
      name: 'description',
      title: 'Resumen Corto (Para Tarjeta)',
      type: 'text',
      description: 'Breve resumen descriptivo que se muestra en la tarjeta principal.',
    }),
    defineField({
      name: 'detailItems',
      title: 'Puntos de Detalles (Lista de viñetas al abrir el modal)',
      type: 'array',
      description: 'Agrega cada punto o ítem del servicio (ej: "Vigilancia personalizada", "Supervisión operativa", "Monitoreo en tiempo real")',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'icon',
      title: 'Icono o Imagen Principal',
      type: 'image',
      description: 'Tamaño recomendado: 1200 x 800 px para fotografías o 128 x 128 px para íconos PNG/SVG sin fondo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceLink',
      title: 'Enlace Externo o Documento PDF (Opcional)',
      type: 'url',
    }),
  ],
})
