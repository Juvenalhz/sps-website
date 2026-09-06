import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Etiqueta superior (Badge encima del título)',
      type: 'string',
      initialValue: 'Atención Personalizada 24/7',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal del Hero',
      type: 'string',
      initialValue: 'Contáctanos',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
      initialValue: 'Estamos listos para evaluar los riesgos de tu empresa y diseñar una solución de seguridad integral a la medida de tus necesidades.',
    }),

    // --- INFORMACIÓN DE LA SEDE PRINCIPAL Y CONTACTO ---
    defineField({
      name: 'sectionTitle',
      title: 'Título de la Sección de Datos de Contacto',
      type: 'string',
      initialValue: 'Estamos donde nos necesites',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Descripción de la Sección de Contacto',
      type: 'text',
      initialValue: 'Comunícate con nuestro equipo multidisciplinario. Ofrecemos respuesta inmediata y asesoría experta en todo el territorio nacional.',
    }),

    defineField({
      name: 'headquartersTitle',
      title: 'Título / Nombre de la Sede Principal',
      type: 'string',
      initialValue: 'Sede Principal (Caracas)',
      description: 'Ej: Sede Principal (Caracas), Oficina Central, etc.',
    }),
    defineField({
      name: 'headquartersAddress',
      title: 'Dirección de la Sede Principal',
      type: 'text',
      rows: 3,
      initialValue: 'Av. Francisco de Miranda, Edif. EASO, Piso 3, Ofc. 3JK, El Rosal, Caracas.',
      description: 'Dirección física completa que se mostrará en la tarjeta de contacto.',
    }),

    defineField({
      name: 'phoneTitle',
      title: 'Título de la Tarjeta de Teléfonos',
      type: 'string',
      initialValue: 'Teléfonos de Contacto',
    }),
    defineField({
      name: 'phoneMain',
      title: 'Teléfono Principal de Contacto',
      type: 'string',
      initialValue: '+58 (212) 952-5242',
    }),
    defineField({
      name: 'phoneEmergency',
      title: 'Línea de Emergencia 24/7 / Teléfono Secundario',
      type: 'string',
      initialValue: 'Línea de Emergencia 24/7 disponible para clientes',
      description: 'Teléfono secundario o nota sobre la línea de atención de emergencia.',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Número de WhatsApp (Opcional)',
      type: 'string',
      description: 'Número con código de país para botón directo (Ej: +584240000000).',
    }),

    defineField({
      name: 'emailTitle',
      title: 'Título de la Tarjeta de Correos',
      type: 'string',
      initialValue: 'Correo Electrónico',
    }),
    defineField({
      name: 'emailMain',
      title: 'Correo Electrónico Principal',
      type: 'string',
      initialValue: 'contacto@sps-seguridad.com',
    }),

    // --- FORMULARIO DE CONTACTO ---
    defineField({
      name: 'formTitle',
      title: 'Título del Formulario de Contacto',
      type: 'string',
      initialValue: 'Solicitar Evaluación o Cotización',
    }),
    defineField({
      name: 'formSubtitle',
      title: 'Subtítulo / Instrucciones del Formulario',
      type: 'text',
      initialValue: 'Completa el siguiente formulario y un consultor especialista en seguridad se pondrá en contacto contigo en breve.',
    }),
    defineField({
      name: 'formSubmitButtonText',
      title: 'Texto del Botón de Envío',
      type: 'string',
      initialValue: 'Enviar Solicitud',
    }),
    defineField({
      name: 'formSuccessText',
      title: 'Mensaje de Confirmación al Enviar',
      type: 'string',
      initialValue: 'Gracias por tu mensaje. Te contactaremos pronto.',
    }),

    defineField({
      name: 'institutionalMessage',
      title: 'Mensaje Institucional / Notas Adicionales',
      type: 'text',
    }),
    defineField({
      name: 'mapInstructions',
      title: 'Instrucciones de Llegada / Ubicación',
      type: 'text',
    }),
    defineField({
      name: 'mapUrl',
      title: 'URL de Google Maps (Iframe embed opcional)',
      type: 'url',
    }),
  ],
})


