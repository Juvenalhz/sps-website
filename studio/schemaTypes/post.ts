import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Artículo del Blog',
  type: 'document',
  fieldsets: [
    {
      name: 'metaInfo',
      title: 'Datos de Publicación',
      options: {columns: 2},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Artículo',
      type: 'string',
      description: 'Titular principal de la publicación (los 2 artículos más recientes también aparecen automáticamente en la Página de Inicio).',
      validation: (Rule) => Rule.required().error('El título del artículo es obligatorio.'),
    }),
    defineField({
      name: 'slug',
      title: 'Enlace Permanente (Slug)',
      type: 'slug',
      description:
        '👉 Haz clic en el botón "Generate" a la derecha después de escribir el Título del Artículo para crear la URL automáticamente.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Haz clic en "Generate" para generar el enlace del artículo.'),
    }),
    defineField({
      name: 'author',
      title: 'Autor / Firma',
      type: 'string',
      fieldset: 'metaInfo',
      initialValue: 'Equipo SPS Risk',
      description: '🔄 Si se deja vacío, se mostrará "Equipo SPS Risk".',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      fieldset: 'metaInfo',
      initialValue: () => new Date().toISOString(),
      description: 'Define el orden de aparición (los más recientes salen primero).',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada del Artículo',
      type: 'image',
      description:
        '📸 Tamaño recomendado: 1200 x 630 px (JPG o WebP). 🔄 Condición automática: Si no subes una imagen de portada, la web mostrará una fotografía corporativa de respaldo.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen / Extracto Corto (Opcional)',
      type: 'text',
      rows: 3,
      description:
        '✍️ Breve resumen (1 a 2 oraciones) para las tarjetas de vista previa y el subtítulo del artículo. 🔄 Condición automática: Si lo dejas vacío, la web extraerá automáticamente las primeras líneas del cuerpo del artículo.',
    }),
    defineField({
      name: 'body',
      title: 'Cuerpo / Contenido del Artículo',
      type: 'array',
      description:
        'Redacta el contenido completo. Puedes usar encabezados (H1, H2, H3), negritas, listas con viñetas, citas, enlaces e insertar imágenes.',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          title: 'Imagen Intercalada',
          options: {hotspot: true},
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Fecha de Publicación (Más recientes primero)',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'},
        {field: '_createdAt', direction: 'desc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: 'publishedAt',
      media: 'mainImage',
    },
    prepare({title, author, date, media}) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'Sin fecha'
      return {
        title: title || 'Artículo sin título',
        subtitle: `${formattedDate} · ${author || 'Equipo SPS Risk'}`,
        media,
      }
    },
  },
})
