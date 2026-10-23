import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fieldsets: [
    {
      name: 'displayMeta',
      title: 'Posición y Categoría en la Tarjeta',
      options: {columns: 2},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Servicio',
      type: 'string',
      description:
        'Ej: "Protección de instalaciones", "Protección ejecutiva", "Seguridad electrónica". También aparece automáticamente en el selector del Formulario de Contacto.',
      validation: (Rule) => Rule.required().error('El nombre del servicio es obligatorio.'),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador Web (Slug)',
      type: 'slug',
      description:
        '👉 Haz clic en el botón "Generate" a la derecha después de escribir el Nombre del Servicio.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Haz clic en "Generate" para crear el identificador.'),
    }),
    defineField({
      name: 'order',
      title: 'Orden de Aparición (1, 2, 3...)',
      type: 'number',
      fieldset: 'displayMeta',
      description: 'Los números menores aparecen primero (1 = primero, 2 = segundo, etc.).',
      initialValue: 1,
    }),
    defineField({
      name: 'badge',
      title: 'Etiqueta Superior (Badge)',
      type: 'string',
      fieldset: 'displayMeta',
      description:
        'Ej: "Vigilancia & Control", "Resguardo VIP". Si se deja vacío, dirá "Servicio Especializado".',
    }),
    defineField({
      name: 'description',
      title: 'Descripción / Resumen del Servicio',
      type: 'text',
      rows: 3,
      description:
        '📝 Se muestra en la tarjeta del servicio, en la ventana emergente (modal) al pulsar "Ver detalles", y como texto automático si vinculas este servicio a un Hotspot en la Página de Inicio.',
    }),
    defineField({
      name: 'detailItems',
      title: 'Alcance e Ítems del Servicio (Lista de viñetas en el Modal)',
      type: 'array',
      description:
        '✅ Agrega cada punto específico que incluye este servicio (ej: "Vigilancia personalizada", "Supervisión operativa", "Monitoreo en tiempo real"). Se muestran con un check (✓) al hacer clic en "Ver detalles".',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'icon',
      title: 'Fotografía Principal del Servicio',
      type: 'image',
      description:
        '📸 Fotografía horizontal que ilustra la tarjeta del servicio y el encabezado de la ventana "Ver detalles" (Tamaño recomendado: 800 x 500 px o 1200 x 800 px, JPG/WebP). 🔄 Condición automática: Si no subes una imagen, la tarjeta mostrará un ícono de escudo (🛡️) y el modal usará una fotografía corporativa de respaldo. Además, si vinculas este servicio en el Mapa de Hotspots de Inicio y no subes un ícono PNG allá, se usará esta imagen.',
      options: {
        hotspot: true,
      },
    }),
  ],
  orderings: [
    {
      title: 'Orden de Aparición (1, 2, 3...)',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
    {
      title: 'Nombre (A-Z)',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      badge: 'badge',
      order: 'order',
      description: 'description',
      media: 'icon',
    },
    prepare({title, badge, order, description, media}) {
      const orderPrefix = order !== undefined && order !== null ? `#${order} · ` : ''
      const badgeLabel = badge ? `[${badge}] ` : ''
      return {
        title: `${orderPrefix}${title || 'Servicio sin título'}`,
        subtitle: `${badgeLabel}${description || 'Sin descripción'}`,
        media,
      }
    },
  },
})
