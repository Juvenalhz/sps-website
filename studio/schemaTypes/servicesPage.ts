import {defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Textos de la Página Servicios',
  type: 'document',
  fieldsets: [
    {
      name: 'headerBanner',
      title: '1. Encabezado Superior de la Página (Banner Azul)',
      description:
        'Configura los textos de bienvenida en la parte superior de la página /servicios. (Nota: Para agregar, ordenar o editar cada tarjeta de servicio, ve a "📋 Catálogo de Servicios" en el menú lateral).',
    },
    {
      name: 'ctaBanner',
      title: '2. Banner Inferior de Llamado a la Acción (CTA)',
      description:
        'Configura el recuadro azul al final de la página de Servicios que invita al cliente a solicitar una evaluación sin costo.',
    },
  ],
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Etiqueta Superior (Badge Amarillo)',
      type: 'string',
      fieldset: 'headerBanner',
      initialValue: 'Portafolio Institucional',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal de la Página',
      type: 'string',
      fieldset: 'headerBanner',
      initialValue: 'Nuestros Servicios',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo Introductorio',
      type: 'text',
      rows: 3,
      fieldset: 'headerBanner',
      initialValue:
        'Soluciones integrales de protección corporativa, tecnología electrónica de vanguardia y consultoría de riesgos estratégicos.',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Título del Banner Inferior (CTA)',
      type: 'string',
      fieldset: 'ctaBanner',
      initialValue: '¿Necesitas una evaluación de seguridad personalizada?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Subtítulo del Banner Inferior (CTA)',
      type: 'text',
      rows: 3,
      fieldset: 'ctaBanner',
      initialValue:
        'Nuestros analistas y consultores están disponibles para auditar tus instalaciones y diseñar una propuesta a la medida de tu empresa.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badgeText',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Textos de la Página Servicios',
        subtitle: subtitle || 'Encabezado y banner inferior',
      }
    },
  },
})
