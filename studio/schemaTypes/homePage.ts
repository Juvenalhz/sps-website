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
    defineField({
      name: 'aboutImage',
      title: 'Imagen de la Sección "Sobre Nosotros"',
      type: 'image',
      description: '📸 Foto horizontal del equipo, directiva o instalaciones. Tamaño recomendado: 1200 x 800 px (JPG o WebP).',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whyUsImage',
      title: 'Imagen del Guardia (Sección "¿Por qué elegirnos?")',
      type: 'image',
      description: '👤 IMPORTANTE: Debe ser una imagen PNG recortada sin fondo (transparente). Tamaño recomendado: 800 x 1200 px.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mapImage',
      title: 'Imagen del Mapa de Venezuela (Sección "Ubicación")',
      type: 'image',
      description: '🗺️ IMPORTANTE: Imagen PNG transparente o SVG sin fondo del mapa 3D de Venezuela. Tamaño recomendado: 1200 x 900 px.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'certifications',
      title: 'Sellos de Certificaciones',
      type: 'array',
      description: '🏆 Lista de certificaciones obtenidas (ej. FONDONORMA, ISO 9001). Subir sellos en PNG transparente.',
      of: [
        {
          type: 'object',
          name: 'certificationItem',
          title: 'Certificación',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre de la Certificación',
              type: 'string',
              description: 'Ejemplo: Certificación FONDONORMA, ISO 9001:2015',
            }),
            defineField({
              name: 'logo',
              title: 'Logo / Sello (PNG sin fondo)',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'clients',
      title: 'Logos de Clientes Corporativos',
      type: 'array',
      description: '🤝 Lista de logos de clientes para el carrusel de la página de inicio. Logos en PNG transparente o SVG.',
      of: [
        {
          type: 'object',
          name: 'clientItem',
          title: 'Cliente',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre del Cliente',
              type: 'string',
              description: 'Ejemplo: Mitsubishi, Repsol, ENI, Halliburton',
            }),
            defineField({
              name: 'logo',
              title: 'Logo del Cliente (PNG sin fondo o SVG)',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
})
