import {defineField, defineType} from 'sanity'
import {MapPinPickerInput} from '../components/MapPinPickerInput'
import {HotspotPinPickerInput} from '../components/HotspotPinPickerInput'

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  type: 'document',
  // Pestañas ordenadas exactamente de arriba hacia abajo según el diseño visual de la web
  groups: [
    {
      name: 'hero',
      title: '🎬 1. Banner Principal (Hero)',
      default: true,
    },
    {
      name: 'statsAndCerts',
      title: '📊 2. Estadísticas y Certificaciones',
    },
    {
      name: 'aboutSummary',
      title: '🏢 3. Resumen Sobre Nosotros',
    },
    {
      name: 'interactiveHotspots',
      title: '🎯 4. Mapa de Servicios (Hotspots)',
    },
    {
      name: 'whyUs',
      title: '🛡️ 5. ¿Por qué elegirnos?',
    },
    {
      name: 'clientsAndMap',
      title: '🤝 6. Clientes y Mapa de Sedes',
    },
  ],
  fieldsets: [
    {
      name: 'heroMedia',
      title: 'Fondo Multimedia del Hero (Orden de Prioridad Automática)',
      description:
        '💡 Regla de prioridad en la web: 1° Si subes un Archivo de Video, se reproducirá ese video. 2° Si no hay archivo pero colocas una URL de Video, se usará la URL. 3° Si no hay ningún video, se mostrará la Imagen de Fondo. 4° Si los tres están vacíos, se usará el video institucional por defecto.',
    },
    {
      name: 'stat1',
      title: 'Primera Cifra / Indicador (Izquierda)',
      options: {columns: 2},
    },
    {
      name: 'stat2',
      title: 'Segunda Cifra / Indicador (Centro)',
      options: {columns: 2},
    },
    {
      name: 'stat3',
      title: 'Tercera Cifra / Indicador (Derecha)',
      options: {columns: 2},
    },
    {
      name: 'venezuelaMapSection',
      title: 'Mapa Interactivo 3D de Venezuela y Sedes Nacionales',
      description:
        'Configura el título, la imagen del mapa de Venezuela y haz clic sobre el mapa dentro de cada sede para posicionar su pin amarillo.',
    },
  ],
  fields: [
    // =========================================================================
    // PESTAÑA 1: BANNER PRINCIPAL (HERO)
    // =========================================================================
    defineField({
      name: 'heroTitle',
      title: 'Título Principal del Hero',
      type: 'string',
      group: 'hero',
      initialValue: 'SOLUCIONES INTEGRALES DE SEGURIDAD Y GESTIÓN DE RIESGOS',
      description:
        'Titular grande en mayúsculas que aparece sobre el video o imagen principal al abrir la web.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
      rows: 2,
      group: 'hero',
      initialValue: 'Protegemos personas, activos y operaciones con estándares internacionales.',
      description: 'Texto destacado con barra vertical amarilla debajo del título principal.',
    }),
    defineField({
      name: 'heroVideoFile',
      title: 'Opción 1 (Prioridad Alta): Archivo de Video (MP4 / WebM)',
      type: 'file',
      group: 'hero',
      fieldset: 'heroMedia',
      description:
        '🎥 Sube directamente el video desde tu computadora. Recomendado: MP4 horizontal sin audio, optimizado (máximo 15 MB).',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'Opción 2: URL Externa de Video (Solo si no subes archivo arriba)',
      type: 'url',
      group: 'hero',
      fieldset: 'heroMedia',
      description:
        '🔗 Enlace directo a un archivo .mp4 alojado externamente. Si ya subiste un archivo en la Opción 1, este campo se ignora.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Opción 3: Imagen Estática de Fondo (Solo si NO hay video en Opción 1 ni 2)',
      type: 'image',
      group: 'hero',
      fieldset: 'heroMedia',
      description:
        '🖼️ IMPORTANTE: Esta imagen solo se mostrará en la web si los dos campos de video superiores están vacíos. Tamaño recomendado: 1920 x 1080 px (JPG o WebP).',
      options: {
        hotspot: true,
      },
    }),

    // =========================================================================
    // PESTAÑA 2: ESTADÍSTICAS Y CERTIFICACIONES
    // =========================================================================
    defineField({
      name: 'stat1Value',
      title: 'Número 1 (Ej: 20)',
      type: 'number',
      group: 'statsAndCerts',
      fieldset: 'stat1',
      initialValue: 20,
      description: 'Se mostrará animado como "+20". Compartido con la página Sobre Nosotros.',
    }),
    defineField({
      name: 'stat1Label',
      title: 'Texto 1 (Ej: años de experiencia)',
      type: 'string',
      group: 'statsAndCerts',
      fieldset: 'stat1',
      initialValue: 'años de experiencia',
    }),
    defineField({
      name: 'stat2Value',
      title: 'Número 2 (Ej: 520)',
      type: 'number',
      group: 'statsAndCerts',
      fieldset: 'stat2',
      initialValue: 520,
      description: 'Se mostrará animado como "+520".',
    }),
    defineField({
      name: 'stat2Label',
      title: 'Texto 2 (Ej: trabajadores en todo el país)',
      type: 'string',
      group: 'statsAndCerts',
      fieldset: 'stat2',
      initialValue: 'trabajadores en todo el país',
    }),
    defineField({
      name: 'stat3Value',
      title: 'Número 3 (Ej: 200)',
      type: 'number',
      group: 'statsAndCerts',
      fieldset: 'stat3',
      initialValue: 200,
      description: 'Se mostrará animado como "+200".',
    }),
    defineField({
      name: 'stat3Label',
      title: 'Texto 3 (Ej: clientes en nuestra trayectoria)',
      type: 'string',
      group: 'statsAndCerts',
      fieldset: 'stat3',
      initialValue: 'clientes en nuestra trayectoria',
    }),
    defineField({
      name: 'certifications',
      title: 'Sellos de Certificaciones (Inicio y Sobre Nosotros)',
      type: 'array',
      group: 'statsAndCerts',
      description:
        '🏆 Agrega las certificaciones de SPS Risk (ej. FONDONORMA, ISO 9001:2015). Condición automática: Si subes el logo, se muestra el sello gráfico; si dejas el logo vacío, la web dibuja automáticamente una insignia verificada con el nombre.',
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo / Sello (PNG sin fondo - Opcional)',
              type: 'image',
              description:
                'Recomendado: PNG transparente. Si no subes imagen, se mostrará una tarjeta con ícono de verificación.',
              options: {hotspot: true},
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
            prepare({title, media}) {
              return {
                title: title || 'Certificación sin nombre',
                subtitle: media ? 'Con sello gráfico cargado' : 'Usando insignia verificada automática',
                media,
              }
            },
          },
        },
      ],
    }),

    // =========================================================================
    // PESTAÑA 3: RESUMEN "SOBRE NOSOTROS"
    // =========================================================================
    defineField({
      name: 'aboutTitle',
      title: 'Título de la Sección "Sobre Nosotros"',
      type: 'string',
      group: 'aboutSummary',
      initialValue: 'Sobre Nosotros',
    }),
    defineField({
      name: 'aboutText',
      title: 'Texto Resumen de "Sobre Nosotros"',
      type: 'text',
      rows: 4,
      group: 'aboutSummary',
      description: 'Resumen ejecutivo de la empresa que aparece en la Página de Inicio junto al botón "Conoce nuestra empresa".',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Fotografía de la Sección "Sobre Nosotros"',
      type: 'image',
      group: 'aboutSummary',
      description:
        '📸 Foto horizontal del equipo o instalaciones (Recomendado: 1200 x 800 px, JPG o WebP). 🔄 Condición inteligente: Esta foto también se usará automáticamente como respaldo en la página interna "Sobre Nosotros" si allá no se sube una imagen distinta.',
      options: {
        hotspot: true,
      },
    }),

    // =========================================================================
    // PESTAÑA 4: MAPA INTERACTIVO DE SERVICIOS (HOTSPOTS)
    // =========================================================================
    defineField({
      name: 'interactiveBackgroundImage',
      title: 'Imagen Panorámica de Fondo (Escenario de Hotspots)',
      type: 'image',
      group: 'interactiveHotspots',
      description:
        '🖼️ Imagen panorámica sobre la cual se ubican los botones circulares interactivos (Recomendado: 1920 x 900 px). Al cambiar esta imagen, el selector visual dentro de cada Hotspot se actualizará automáticamente.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'hotspots',
      title: 'Puntos Interactivos (Hotspots Vinculados a Servicios)',
      type: 'array',
      group: 'interactiveHotspots',
      description:
        '📍 Agrega y ubica cada círculo interactivo sobre la imagen. 🔄 Condición automática: Si dejas esta lista completamente vacía, la web generará puntos automáticamente a partir de tu Catálogo de Servicios.',
      of: [
        {
          type: 'object',
          name: 'hotspotItem',
          title: 'Punto Interactivo (Hotspot)',
          fields: [
            defineField({
              name: 'service',
              title: '1. Servicio Vinculado (Del Catálogo de Servicios)',
              type: 'reference',
              to: [{type: 'service'}],
              description:
                '🔗 Selecciona el servicio. El Hotspot heredará automáticamente su título, descripción e imagen a menos que los personalices abajo.',
            }),
            defineField({
              name: 'position',
              title: '2. Ubicación Visual en la Imagen (Haz clic sobre la foto)',
              type: 'object',
              components: {
                input: HotspotPinPickerInput,
              },
              fields: [
                defineField({name: 'topPercent', title: 'Vertical (%)', type: 'number'}),
                defineField({name: 'leftPercent', title: 'Horizontal (%)', type: 'number'}),
              ],
            }),
            defineField({
              name: 'customImage',
              title: '3. Icono / Recorte PNG del Botón Circular (Recomendado)',
              type: 'image',
              description:
                '📸 Sube el objeto recortado en PNG sin fondo (Cámara, Laptop, Radio, Teléfono, Casco, etc.) que se verá dentro del círculo. 🔄 Si lo dejas vacío, usará la imagen principal del Servicio vinculado.',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'placement',
              title: '4. Dirección de Apertura de la Tarjeta Flotante (Tooltip)',
              type: 'string',
              description: 'Hacia qué lado del botón circular se abrirá el cuadro de información al pasar el cursor.',
              options: {
                list: [
                  {title: '⬆️ Arriba (top)', value: 'top'},
                  {title: '⬇️ Abajo (bottom)', value: 'bottom'},
                  {title: '⬅️ Izquierda (left)', value: 'left'},
                  {title: '➡️ Derecha (right)', value: 'right'},
                  {title: '↗️ Derecha Arriba (right-start)', value: 'right-start'},
                  {title: '↖️ Izquierda Arriba (left-start)', value: 'left-start'},
                ],
              },
              initialValue: 'top',
            }),
            defineField({
              name: 'customTitle',
              title: '5. Título Personalizado (Opcional)',
              type: 'string',
              description:
                '🔄 Opcional: Déjalo vacío para usar automáticamente el nombre del Servicio vinculado.',
            }),
            defineField({
              name: 'customDescription',
              title: '6. Descripción Personalizada (Opcional)',
              type: 'text',
              rows: 2,
              description:
                '🔄 Opcional: Déjalo vacío para usar automáticamente el resumen del Servicio vinculado.',
            }),
          ],
          preview: {
            select: {
              serviceTitle: 'service.title',
              customTitle: 'customTitle',
              topPercent: 'position.topPercent',
              leftPercent: 'position.leftPercent',
              customMedia: 'customImage',
              serviceMedia: 'service.icon',
            },
            prepare({serviceTitle, customTitle, topPercent, leftPercent, customMedia, serviceMedia}: any) {
              const title = customTitle || serviceTitle || 'Hotspot sin servicio asignado'
              const pos =
                topPercent !== undefined && leftPercent !== undefined
                  ? `Ubicación: Vertical ${topPercent}%, Horizontal ${leftPercent}%`
                  : 'Ubicación automática por defecto'
              return {
                title,
                subtitle: pos,
                media: customMedia || serviceMedia,
              }
            },
          },
        },
      ],
    }),

    // =========================================================================
    // PESTAÑA 5: ¿POR QUÉ ELEGIRNOS?
    // =========================================================================
    defineField({
      name: 'whyUsTitle',
      title: 'Título de la Sección "¿Por qué elegirnos?"',
      type: 'string',
      group: 'whyUs',
      initialValue: '¿POR QUÉ ELEGIRNOS?',
    }),
    defineField({
      name: 'whyUsImage',
      title: 'Imagen del Guardia / Personal (PNG sin fondo)',
      type: 'image',
      group: 'whyUs',
      description:
        '👤 IMPORTANTE: Subir imagen en formato PNG recortada con fondo transparente. Tamaño recomendado: 800 x 1200 px (vertical).',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whyUsItems',
      title: 'Lista de Puntos Fuertes / Ventajas Competitivas',
      type: 'array',
      group: 'whyUs',
      description:
        '✅ Agrega cada razón o ventaja competitiva (Recomendado: 4 puntos). Si se deja vacío, se muestran los 4 puntos institucionales por defecto.',
      of: [
        {
          type: 'object',
          name: 'whyUsItem',
          title: 'Punto Fuerte',
          fields: [
            defineField({
              name: 'title',
              title: 'Título del Punto (Ej: Sólida trayectoria:)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Descripción Breve',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    // =========================================================================
    // PESTAÑA 6: CLIENTES Y MAPA DE SEDES
    // =========================================================================
    defineField({
      name: 'clients',
      title: 'Carrusel de Logos de Clientes Corporativos',
      type: 'array',
      group: 'clientsAndMap',
      description:
        '🤝 Logos que desfilan en el carrusel continuo tanto en la Página de Inicio como en Sobre Nosotros. Subir en PNG con fondo transparente o SVG.',
      of: [
        {
          type: 'object',
          name: 'clientItem',
          title: 'Cliente',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre de la Empresa Cliente',
              type: 'string',
              description: 'Ejemplo: Mitsubishi, Repsol, ENI, Halliburton',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo del Cliente (PNG sin fondo o SVG)',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
            prepare({title, media}) {
              return {
                title: title || 'Cliente corporativo',
                subtitle: 'Carrusel de clientes',
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'mapTitle',
      title: 'Título de la Sección Ubicación / Mapa',
      type: 'string',
      group: 'clientsAndMap',
      fieldset: 'venezuelaMapSection',
      initialValue: 'ESTAMOS DONDE NOS NECESITES',
    }),
    defineField({
      name: 'mapImage',
      title: 'Imagen del Mapa 3D de Venezuela (PNG transparente)',
      type: 'image',
      group: 'clientsAndMap',
      fieldset: 'venezuelaMapSection',
      description:
        '🗺️ Subir el mapa de Venezuela en PNG sin fondo o SVG (Recomendado: 1200 x 900 px). Al subirlo aquí, aparecerá automáticamente en el selector interactivo de cada sede abajo.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'branches',
      title: 'Sucursales / Sedes en el Mapa Interactivo',
      type: 'array',
      group: 'clientsAndMap',
      fieldset: 'venezuelaMapSection',
      description:
        '📍 Agrega cada sede regional y haz clic directamente sobre el mapa de Venezuela para colocar su pin amarillo pulsante.',
      of: [
        {
          type: 'object',
          name: 'branchItem',
          title: 'Sede / Sucursal',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre de la Sede',
              type: 'string',
              description: 'Ejemplo: Sede Principal (Caracas), Sede Zulia (Maracaibo), Sede Maturín',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'address',
              title: 'Dirección o Información de la Sede',
              type: 'text',
              rows: 2,
              description: 'Texto que se muestra al abrir la tarjeta flotante del pin en el mapa.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'coordinates',
              title: 'Ubicación del Pin en el Mapa',
              type: 'object',
              components: {
                input: MapPinPickerInput,
              },
              fields: [
                defineField({name: 'topPercent', title: 'Vertical (%)', type: 'number'}),
                defineField({name: 'leftPercent', title: 'Horizontal (%)', type: 'number'}),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              address: 'address',
              top: 'coordinates.topPercent',
              left: 'coordinates.leftPercent',
            },
            prepare({title, address, top, left}) {
              const coords =
                top !== undefined && left !== undefined ? ` [Pin: ${top}%, ${left}%]` : ''
              return {
                title: `${title || 'Sede SPS'}${coords}`,
                subtitle: address || 'Sin dirección especificada',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      media: 'heroImage',
    },
    prepare({title, media}) {
      return {
        title: 'Página de Inicio (Home)',
        subtitle: title || 'Configuración completa de la portada',
        media,
      }
    },
  },
})
