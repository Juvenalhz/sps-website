import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'urb5qo9n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Desactivado CDN para obtener cambios al instante al publicar en Sanity Studio
});

const builder = createImageUrlBuilder(sanityClient);

/**
 * Convierte un objeto de imagen de Sanity en una URL optimizada
 * @param {Object} source - El campo de imagen retornado por Sanity
 */
export function urlFor(source) {
  if (!source || !source.asset) return null;
  return builder.image(source);
}
