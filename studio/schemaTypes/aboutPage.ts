import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Página Sobre Nosotros',
  type: 'document',
  groups: [
    {
      name: 'headerAndStory',
      title: '🏛️ 1. Encabezado e Historia',
      default: true,
    },
    {
      name: 'pillars',
      title: '🧭 2. Misión, Visión y Valores',
    },
  ],
  fieldsets: [
    {
      name: 'heroHeader',
      title: 'Encabezado Superior (Banner Azul)',
      description: 'Textos que aparecen en la franja azul superior de la página Sobre Nosotros.',
    },
    {
      name: 'storySection',
      title: 'Sección "Quiénes Somos" e Imagen Principal',
      description:
        '💡 Nota importante: Las secciones inferiores de "Estadísticas", "Certificaciones" y "Logos de Clientes" que se ven en esta página se actualizan automáticamente desde la Página de Inicio, para que no tengas que cargarlas dos veces.',
    },
  ],
  fields: [
    // --- PESTAÑA 1: ENCABEZADO E HISTORIA ---
    defineField({
      name: 'badgeText',
      title: 'Etiqueta Superior (Badge Amarillo)',
      type: 'string',
      group: 'headerAndStory',
      fieldset: 'heroHeader',
      initialValue: 'Trayectoria & Liderazgo',
      description: 'Texto corto dentro de la cápsula amarilla encima del título principal.',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal de la Página',
      type: 'string',
      group: 'headerAndStory',
      fieldset: 'heroHeader',
      initialValue: 'Sobre Nosotros',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo Descriptivo',
      type: 'text',
      rows: 3,
      group: 'headerAndStory',
      fieldset: 'heroHeader',
      description: 'Párrafo introductorio debajo del título principal en el banner azul.',
    }),
    defineField({
      name: 'history',
      title: 'Texto de Historia / ¿Quiénes Somos?',
      type: 'text',
      rows: 5,
      group: 'headerAndStory',
      fieldset: 'storySection',
      description:
        'Texto principal ubicado a la izquierda de la fotografía bajo el título "Soluciones de Seguridad Integral Diseñadas para Entornos Complejos".',
    }),
    defineField({
      name: 'mainImage',
      title: 'Fotografía Principal de "Sobre Nosotros"',
      type: 'image',
      group: 'headerAndStory',
      fieldset: 'storySection',
      description:
        '📸 Foto horizontal del equipo directivo, operativo o instalaciones (Recomendado: 1200 x 800 px, JPG o WebP). 🔄 Condición automática: Si dejas este campo vacío, la web mostrará automáticamente la foto cargada en la sección "Sobre Nosotros" de la Página de Inicio.',
      options: {
        hotspot: true,
      },
    }),

    // --- PESTAÑA 2: MISIÓN, VISIÓN Y VALORES ---
    defineField({
      name: 'mission',
      title: 'Misión Corporativa',
      type: 'text',
      rows: 4,
      group: 'pillars',
      description: 'Texto de la primera tarjeta en la sección "Nuestros Pilares Fundamentales".',
    }),
    defineField({
      name: 'vision',
      title: 'Visión Corporativa',
      type: 'text',
      rows: 4,
      group: 'pillars',
      description: 'Texto de la segunda tarjeta en la sección "Nuestros Pilares Fundamentales".',
    }),
    defineField({
      name: 'values',
      title: 'Valores Corporativos',
      type: 'text',
      rows: 4,
      group: 'pillars',
      description: 'Texto de la tercera tarjeta en la sección "Nuestros Pilares Fundamentales".',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badgeText',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Página Sobre Nosotros',
        subtitle: subtitle || 'Historia, Misión, Visión y Valores',
        media,
      }
    },
  },
})
