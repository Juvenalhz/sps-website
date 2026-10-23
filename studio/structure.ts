import type {StructureResolver} from 'sanity/structure'

export const myStructure: StructureResolver = (S) =>
  S.list()
    .title('Panel de Contenido — SPS Risk')
    .items([
      // 1. Configuración Global
      S.listItem()
        .title('⚙️ Configuración General (Logos, Contacto y Redes)')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Configuración General del Sitio')
        ),

      S.divider(),

      // 2. Páginas Principales (Acceso directo en 1 clic)
      S.listItem()
        .title('🏠 Página de Inicio (Home)')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Página de Inicio (Home)')
        ),

      S.listItem()
        .title('🏢 Página Sobre Nosotros')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('Página Sobre Nosotros')
        ),

      S.listItem()
        .title('📞 Página de Contacto')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
            .title('Página de Contacto')
        ),

      S.divider(),

      // 3. Sección de Servicios (Agrupada para evitar confusión entre la página y el catálogo)
      S.listItem()
        .title('🛡️ Sección de Servicios')
        .child(
          S.list()
            .title('Gestión de Servicios')
            .items([
              S.listItem()
                .title('📋 Catálogo de Servicios (Tarjetas y Modales)')
                .schemaType('service')
                .child(
                  S.documentTypeList('service')
                    .title('Catálogo de Servicios')
                    .defaultOrdering([
                      {field: 'order', direction: 'asc'},
                      {field: '_createdAt', direction: 'asc'},
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('✏️ Textos de la Página Servicios (Encabezado y Banner)')
                .id('servicesPage')
                .child(
                  S.document()
                    .schemaType('servicesPage')
                    .documentId('servicesPage')
                    .title('Textos de la Página Servicios')
                ),
            ])
        ),

      // 4. Blog / Artículos
      S.listItem()
        .title('📰 Blog / Artículos (Seguridad Hoy)')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Artículos del Blog')
            .defaultOrdering([
              {field: 'publishedAt', direction: 'desc'},
              {field: '_createdAt', direction: 'desc'},
            ])
        ),
    ])
