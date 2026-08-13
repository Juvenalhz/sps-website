import type {StructureResolver} from 'sanity/structure'

export const myStructure: StructureResolver = (S) =>
  S.list()
    .title('Contenido Base')
    .items([
      // 1. Configuración Global
      S.listItem()
        .title('Global')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Configuración del Sitio')
        ),
      
      S.divider(),

      // 2. Páginas Web (Singletons)
      S.listItem()
        .title('Páginas Web')
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.listItem()
                .title('Inicio')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Página de Inicio')
                ),
              S.listItem()
                .title('Nosotros')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('Página Nosotros')
                ),
              S.listItem()
                .title('Servicios')
                .child(
                  S.document()
                    .schemaType('servicesPage')
                    .documentId('servicesPage')
                    .title('Página Servicios')
                ),
              S.listItem()
                .title('Contacto')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .title('Página de Contacto')
                ),
            ])
        ),

      S.divider(),

      // 3. Catálogos (Colecciones)
      S.listItem()
        .title('Catálogos')
        .child(
          S.list()
            .title('Catálogos')
            .items([
              S.documentTypeListItem('service').title('Servicios'),
              S.documentTypeListItem('post').title('Blog / Insights'),
            ])
        ),
    ])
