import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración General del Sitio',
  type: 'document',
  groups: [
    {
      name: 'branding',
      title: '🎨 1. Logos e Identidad',
      default: true,
    },
    {
      name: 'contact',
      title: '📍 2. Contacto Global (Caracas)',
    },
    {
      name: 'social',
      title: '🌐 3. Redes Sociales',
    },
  ],
  fieldsets: [
    {
      name: 'secondaryLogos',
      title: 'Logos Secundarios (Con respaldo automático al Logo Principal)',
      description:
        '💡 Condición automática: Si dejas cualquiera de estos dos campos vacío, el sitio web utilizará automáticamente el Logo Principal (Header) como respaldo.',
      options: {columns: 2},
    },
  ],
  fields: [
    // --- PESTAÑA 1: LOGOS E IDENTIDAD ---
    defineField({
      name: 'siteTitle',
      title: 'Nombre o Título de la Marca',
      type: 'string',
      group: 'branding',
      initialValue: 'SPS Risk',
      description:
        'Se utiliza como texto alternativo de accesibilidad (alt) en el encabezado y como texto visible únicamente si no se ha subido ningún Logo Principal.',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Principal (Barra Superior / Header)',
      type: 'image',
      group: 'branding',
      description:
        '📌 Imagen principal de la marca. Tamaño recomendado: 400 x 120 px en formato PNG transparente o SVG. Además, sirve de respaldo automático para el Footer y el Favicon si aquellos no se cargan.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerLogo',
      title: 'Logo / Escudo del Pie de Página (Footer)',
      type: 'image',
      group: 'branding',
      fieldset: 'secondaryLogos',
      description:
        '🔄 Opcional: Versión blanca o escudo vertical para el fondo azul oscuro del pie de página. Si se deja vacío, se usará automáticamente el Logo Principal.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Icono de Pestaña del Navegador (Favicon)',
      type: 'image',
      group: 'branding',
      fieldset: 'secondaryLogos',
      description:
        '🔄 Opcional: Isotipo cuadrado (ej. 128 x 128 px PNG/SVG). Si se deja vacío, se usará automáticamente el Logo Principal o el del Footer.',
      options: {
        hotspot: true,
      },
    }),

    // --- PESTAÑA 2: CONTACTO GLOBAL ---
    defineField({
      name: 'contactPhone',
      title: 'Teléfono Principal (Oficina Caracas)',
      type: 'string',
      group: 'contact',
      initialValue: '(0212) 952.52.42',
      description:
        '📞 Se muestra en el pie de página de todo el sitio web y también sirve como teléfono automático en la Página de Contacto (si allá se deja vacío).',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Correo Electrónico Principal',
      type: 'string',
      group: 'contact',
      initialValue: 'sps@spsrisk.com',
      description:
        '✉️ Se muestra en el pie de página de todo el sitio web y también sirve como correo automático en la Página de Contacto (si allá se deja vacío).',
    }),
    defineField({
      name: 'address',
      title: 'Dirección Física de la Sede Principal (Caracas)',
      type: 'text',
      rows: 3,
      group: 'contact',
      initialValue: 'Av. Francisco de Miranda, Edif. EASO, Piso 3, Ofc. 3JK, El Rosal, Caracas.',
      description:
        '🏢 Se muestra en el pie de página y también sirve como dirección automática de la Sede Principal en la Página de Contacto.',
    }),

    // --- PESTAÑA 3: REDES SOCIALES ---
    defineField({
      name: 'instagramUrl',
      title: 'Enlace de Instagram (IG)',
      type: 'url',
      group: 'social',
      description: 'URL completa (ej: https://www.instagram.com/spsrisk). Se enlaza en el botón circular "IG" del pie de página.',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Enlace de Facebook (FB)',
      type: 'url',
      group: 'social',
      description: 'URL completa (ej: https://www.facebook.com/...). Se enlaza en el botón circular "FB" del pie de página.',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'Enlace de LinkedIn (IN)',
      type: 'url',
      group: 'social',
      description: 'URL completa (ej: https://www.linkedin.com/company/...). Se enlaza en el botón circular "IN" del pie de página.',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      subtitle: 'contactEmail',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Configuración General del Sitio',
        subtitle: subtitle ? `Contacto global: ${subtitle}` : 'Logos, datos de contacto y redes sociales',
        media,
      }
    },
  },
})
