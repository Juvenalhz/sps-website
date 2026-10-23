import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStructure} from './structure'

// Documentos únicos (Singletons) que no deben duplicarse ni eliminarse por error
const singletonTypes = new Set([
  'siteSettings',
  'homePage',
  'aboutPage',
  'servicesPage',
  'contactPage',
])

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'SPS Risk — Panel de Administración',

  projectId: 'urb5qo9n',
  dataset: 'production',

  plugins: [
    structureTool({
      title: 'Contenido Web',
      structure: myStructure,
    }),
    visionTool({
      title: 'Consultas (Avanzado)',
    }),
  ],

  schema: {
    types: schemaTypes,
    // Evita que los documentos únicos aparezcan en el botón "+" (Crear nuevo documento)
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // En páginas únicas, deshabilita "Eliminar" y "Duplicar" para proteger la estructura del sitio
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
