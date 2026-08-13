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

/**
 * Extrae o genera un resumen legible para un post de blog.
 * Si el post tiene un resumen (excerpt) definido en Sanity, lo usa directamente.
 * Si no lo tiene, extrae automáticamente las primeras líneas del texto del artículo (body).
 */
export function getPostExcerpt(post, maxLength = 140) {
  if (!post) return 'Análisis y perspectivas sobre protección corporativa y gestión de riesgos.';
  
  if (post.excerpt && typeof post.excerpt === 'string' && post.excerpt.trim().length > 0) {
    return post.excerpt.trim();
  }
  
  if (post.body && Array.isArray(post.body)) {
    const textContent = post.body
      .filter((block) => block._type === 'block' && block.children)
      .flatMap((block) => block.children.map((child) => child.text || ''))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (textContent.length > 0) {
      if (textContent.length <= maxLength) return textContent;
      return textContent.substring(0, maxLength).trim() + '...';
    }
  }

  return 'Análisis y perspectivas sobre protección corporativa y gestión estratégica de riesgos.';
}
