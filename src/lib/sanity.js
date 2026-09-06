import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';

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

/**
 * Componentes serializadores para renderizar PortableText (cuerpo de blog de Sanity) en HTML
 * Soporta saltos de línea (\n), formato de hipervínculos, listas y encabezados.
 */
export const portableTextComponents = {
  block: {
    normal: ({ children }) => `<p class="mb-5 leading-relaxed whitespace-pre-line">${children}</p>`,
    h1: ({ children }) => `<h1 class="text-3xl font-bold text-sps-navy mt-8 mb-4">${children}</h1>`,
    h2: ({ children }) => `<h2 class="text-2xl font-bold text-sps-navy mt-6 mb-3">${children}</h2>`,
    h3: ({ children }) => `<h3 class="text-xl font-bold text-sps-navy mt-5 mb-2">${children}</h3>`,
    h4: ({ children }) => `<h4 class="text-lg font-bold text-sps-navy mt-4 mb-2">${children}</h4>`,
    blockquote: ({ children }) => `<blockquote class="border-l-4 border-sps-blue pl-4 py-2 my-5 text-gray-600 italic bg-sps-light-blue/30 rounded-r-lg">${children}</blockquote>`,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || value?.url || '#';
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${href}"${targetAttr} class="text-sps-blue hover:text-sps-navy font-semibold underline underline-offset-4 transition-colors cursor-pointer">${children}</a>`;
    },
    strong: ({ children }) => `<strong class="font-bold text-sps-navy">${children}</strong>`,
    em: ({ children }) => `<em class="italic">${children}</em>`,
    code: ({ children }) => `<code class="bg-gray-100 text-sps-blue px-1.5 py-0.5 rounded text-sm font-mono">${children}</code>`,
  },
  list: {
    bullet: ({ children }) => `<ul class="list-disc list-inside mb-5 space-y-2 pl-2 leading-relaxed">${children}</ul>`,
    number: ({ children }) => `<ol class="list-decimal list-inside mb-5 space-y-2 pl-2 leading-relaxed">${children}</ol>`,
  },
  listItem: {
    bullet: ({ children }) => `<li class="leading-relaxed">${children}</li>`,
    number: ({ children }) => `<li class="leading-relaxed">${children}</li>`,
  },
};

/**
 * Convierte el objeto PortableText de Sanity a un string HTML completamente formateado
 * @param {Array} body - Array de bloques de Sanity
 */
export function renderPortableText(body) {
  if (!body || !Array.isArray(body)) return '';
  return toHTML(body, { components: portableTextComponents });
}

