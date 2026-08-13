import {defineField, defineType} from 'sanity'
import {MapPinPickerInput} from '../components/MapPinPickerInput'

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
      name: 'aboutTitle',
      title: 'Título de la Sección "Sobre Nosotros"',
      type: 'string',
      initialValue: 'Sobre Nosotros',
    }),
    defineField({
      name: 'aboutText',
      title: 'Texto de la Sección "Sobre Nosotros"',
      type: 'text',
      description: 'Resumen descriptivo de la empresa para la página de inicio.',
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
      name: 'whyUsTitle',
      title: 'Título de la Sección "¿Por qué elegirnos?"',
      type: 'string',
      initialValue: '¿POR QUÉ ELEGIRNOS?',
    }),
    defineField({
      name: 'whyUsItems',
      title: 'Puntos Fuertes de "¿Por qué elegirnos?"',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'whyUsItem',
          title: 'Punto Fuerte',
          fields: [
            defineField({ name: 'title', title: 'Título del Punto', type: 'string' }),
            defineField({ name: 'description', title: 'Descripción', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'stat1Value',
      title: 'Estadística 1: Número (Ej: 20)',
      type: 'number',
      initialValue: 20,
    }),
    defineField({
      name: 'stat1Label',
      title: 'Estadística 1: Etiqueta (Ej: años de experiencia)',
      type: 'string',
      initialValue: 'años de experiencia',
    }),
    defineField({
      name: 'stat2Value',
      title: 'Estadística 2: Número (Ej: 520)',
      type: 'number',
      initialValue: 520,
    }),
    defineField({
      name: 'stat2Label',
      title: 'Estadística 2: Etiqueta (Ej: trabajadores en todo el país)',
      type: 'string',
      initialValue: 'trabajadores en todo el país',
    }),
    defineField({
      name: 'stat3Value',
      title: 'Estadística 3: Número (Ej: 200)',
      type: 'number',
      initialValue: 200,
    }),
    defineField({
      name: 'stat3Label',
      title: 'Estadística 3: Etiqueta (Ej: clientes en nuestra trayectoria)',
      type: 'string',
      initialValue: 'clientes en nuestra trayectoria',
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
      name: 'mapTitle',
      title: 'Título de la Sección Ubicación / Mapa',
      type: 'string',
      initialValue: 'ESTAMOS DONDE NOS NECESITES',
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
    defineField({
      name: 'branches',
      title: 'Sucursales / Sedes en el Mapa Interactivo',
      type: 'array',
      description: '📍 Haz clic directamente sobre la imagen del mapa para ubicar cada sede.',
      of: [
        {
          type: 'object',
          name: 'branchItem',
          title: 'Sede',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre de la Sede',
              type: 'string',
              description: 'Ejemplo: Sede Maturín, Sede Caracas, Sede Maracaibo',
            }),
            defineField({
              name: 'address',
              title: 'Dirección / Descripción',
              type: 'text',
              description: 'Ejemplo: Av. Alirio Ugarte Pelayo, C.C. Servimas',
            }),
            defineField({
              name: 'phone',
              title: 'Teléfonos de Contacto',
              type: 'string',
              description: 'Ejemplo: (0212) 952.52.42 / (0424) 000.00.00',
            }),
            defineField({
              name: 'coordinates',
              title: 'Ubicación en el Mapa',
              type: 'object',
              components: {
                input: MapPinPickerInput,
              },
              fields: [
                defineField({ name: 'topPercent', title: 'Vertical (%)', type: 'number' }),
                defineField({ name: 'leftPercent', title: 'Horizontal (%)', type: 'number' }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
