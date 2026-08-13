import {defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Página Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Etiqueta superior (Badge)',
      type: 'string',
      initialValue: 'Portafolio Institucional',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Nuestros Servicios',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      initialValue: 'Soluciones integrales de protección corporativa, tecnología electrónica de vanguardia y consultoría de riesgos estratégicos.',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Título del Banner Inferior (CTA)',
      type: 'string',
      initialValue: '¿Necesitas una evaluación de seguridad personalizada?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Subtítulo del Banner Inferior (CTA)',
      type: 'text',
      initialValue: 'Nuestros analistas y consultores están disponibles para auditar tus instalaciones y diseñar una propuesta a la medida de tu empresa.',
    }),
  ],
})
