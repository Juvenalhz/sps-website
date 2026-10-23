import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: '📢 1. Encabezado (Hero)',
      default: true,
    },
    {
      name: 'contactCards',
      title: '📍 2. Tarjetas de Contacto y WhatsApp',
    },
    {
      name: 'formSettings',
      title: '✉️ 3. Textos del Formulario',
    },
  ],
  fieldsets: [
    {
      name: 'hqCard',
      title: 'Tarjeta 1: Sede Principal',
      description:
        '🔄 Condición inteligente: Si dejas la dirección vacía aquí, se mostrará automáticamente la dirección cargada en "⚙️ Configuración General".',
    },
    {
      name: 'phoneCard',
      title: 'Tarjeta 2: Teléfonos, Emergencia 24/7 y Botón de WhatsApp',
      description:
        '🔄 Condición inteligente: Si dejas el Teléfono Principal vacío aquí, se mostrará automáticamente el teléfono cargado en "⚙️ Configuración General".',
    },
    {
      name: 'emailCard',
      title: 'Tarjeta 3: Correo Electrónico',
      description:
        '🔄 Condición inteligente: Si dejas el Correo Principal vacío aquí, se mostrará automáticamente el correo cargado en "⚙️ Configuración General".',
    },
  ],
  fields: [
    // --- PESTAÑA 1: ENCABEZADO (HERO) ---
    defineField({
      name: 'badgeText',
      title: 'Etiqueta Superior (Badge Amarillo)',
      type: 'string',
      group: 'hero',
      initialValue: 'Atención Personalizada 24/7',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal de la Página',
      type: 'string',
      group: 'hero',
      initialValue: 'Contáctanos',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo del Encabezado',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue:
        'Estamos listos para evaluar los riesgos de tu empresa y diseñar una solución de seguridad integral a la medida de tus necesidades.',
    }),

    // --- PESTAÑA 2: TARJETAS DE CONTACTO Y WHATSAPP ---
    defineField({
      name: 'sectionTitle',
      title: 'Título de la Columna de Contacto',
      type: 'string',
      group: 'contactCards',
      initialValue: 'Estamos donde nos necesites',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Descripción Introductoria de Contacto',
      type: 'text',
      rows: 2,
      group: 'contactCards',
      initialValue:
        'Comunícate con nuestro equipo multidisciplinario. Ofrecemos respuesta inmediata y asesoría experta en todo el territorio nacional.',
    }),

    // Tarjeta 1: Sede Principal
    defineField({
      name: 'headquartersTitle',
      title: 'Título de la Tarjeta de Sede',
      type: 'string',
      group: 'contactCards',
      fieldset: 'hqCard',
      initialValue: 'Sede Principal (Caracas)',
    }),
    defineField({
      name: 'headquartersAddress',
      title: 'Dirección Específica (Opcional — hereda de Configuración General)',
      type: 'text',
      rows: 2,
      group: 'contactCards',
      fieldset: 'hqCard',
      description:
        'Déjalo vacío para usar automáticamente la dirección de "⚙️ Configuración General", o escribe una dirección distinta si deseas sobreescribirla solo en esta página.',
    }),

    // Tarjeta 2: Teléfonos y WhatsApp
    defineField({
      name: 'phoneTitle',
      title: 'Título de la Tarjeta de Teléfonos',
      type: 'string',
      group: 'contactCards',
      fieldset: 'phoneCard',
      initialValue: 'Teléfonos de Contacto',
    }),
    defineField({
      name: 'phoneMain',
      title: 'Teléfono Principal Específico (Opcional — hereda de Configuración General)',
      type: 'string',
      group: 'contactCards',
      fieldset: 'phoneCard',
      description:
        'Déjalo vacío para usar automáticamente el teléfono de "⚙️ Configuración General", o escribe otro número si deseas sobreescribirlo aquí.',
    }),
    defineField({
      name: 'phoneEmergency',
      title: 'Nota o Línea de Emergencia 24/7 (Debajo del teléfono)',
      type: 'string',
      group: 'contactCards',
      fieldset: 'phoneCard',
      initialValue: 'Línea de Emergencia 24/7 disponible para clientes',
      description: 'Texto o número secundario que aparece justo debajo del teléfono principal.',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Número de WhatsApp Directo (Activa el botón verde de WhatsApp)',
      type: 'string',
      group: 'contactCards',
      fieldset: 'phoneCard',
      description:
        '💬 Condición automática: Si escribes un número con código de país (Ej: +584241234567), aparecerá el botón verde "💬 Contactar por WhatsApp" en la tarjeta. Si lo dejas vacío, el botón no se muestra.',
    }),

    // Tarjeta 3: Correo
    defineField({
      name: 'emailTitle',
      title: 'Título de la Tarjeta de Correo',
      type: 'string',
      group: 'contactCards',
      fieldset: 'emailCard',
      initialValue: 'Correo Electrónico',
    }),
    defineField({
      name: 'emailMain',
      title: 'Correo Electrónico Específico (Opcional — hereda de Configuración General)',
      type: 'string',
      group: 'contactCards',
      fieldset: 'emailCard',
      description:
        'Déjalo vacío para usar automáticamente el correo de "⚙️ Configuración General", o escribe un correo distinto solo para esta página.',
    }),

    // --- PESTAÑA 3: FORMULARIO DE CONTACTO ---
    defineField({
      name: 'formTitle',
      title: 'Título del Formulario',
      type: 'string',
      group: 'formSettings',
      initialValue: 'Solicitar Evaluación o Cotización',
      description:
        '💡 Nota: La lista desplegable "Servicio de Interés" dentro del formulario se alimenta automáticamente de tu "📋 Catálogo de Servicios".',
    }),
    defineField({
      name: 'formSubtitle',
      title: 'Subtítulo / Instrucciones del Formulario',
      type: 'text',
      rows: 2,
      group: 'formSettings',
      initialValue:
        'Completa el siguiente formulario y un consultor especialista en seguridad se pondrá en contacto contigo en breve.',
    }),
    defineField({
      name: 'formSubmitButtonText',
      title: 'Texto del Botón de Envío',
      type: 'string',
      group: 'formSettings',
      initialValue: 'Enviar Solicitud',
    }),
    defineField({
      name: 'formSuccessText',
      title: 'Mensaje de Confirmación al Enviar',
      type: 'string',
      group: 'formSettings',
      initialValue: 'Gracias por tu mensaje. Te contactaremos pronto.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badgeText',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Página de Contacto',
        subtitle: subtitle || 'Tarjetas de contacto, WhatsApp y formulario',
      }
    },
  },
})
