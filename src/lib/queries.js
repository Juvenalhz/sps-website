import { sanityClient } from './sanity.js';

/**
 * Obtiene la configuración global del sitio (siteSettings)
 */
export async function getSiteSettings() {
  try {
    const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
    return data || null;
  } catch (error) {
    console.error('Error al consultar siteSettings de Sanity:', error);
    return null;
  }
}

/**
 * Obtiene los datos de la página principal (homePage)
 */
export async function getHomePage() {
  try {
    const data = await sanityClient.fetch(`*[_type == "homePage"][0]{
      ...,
      "interactiveBgUrl": interactiveBackgroundImage.asset->url,
      hotspots[]{
        _key,
        placement,
        customTitle,
        customDescription,
        position,
        service->{
          _id,
          title,
          slug,
          description,
          icon,
          serviceLink
        }
      }
    }`);
    return data || null;
  } catch (error) {
    console.error('Error al consultar homePage de Sanity:', error);
    return null;
  }
}

/**
 * Obtiene los datos de la página Sobre Nosotros (aboutPage)
 */
export async function getAboutPage() {
  try {
    const data = await sanityClient.fetch(`*[_type == "aboutPage"][0]`);
    return data || null;
  } catch (error) {
    console.error('Error al consultar aboutPage de Sanity:', error);
    return null;
  }
}

/**
 * Obtiene los datos de la página de Contacto (contactPage)
 */
export async function getContactPage() {
  try {
    const data = await sanityClient.fetch(`*[_type == "contactPage"][0]`);
    return data || null;
  } catch (error) {
    console.error('Error al consultar contactPage de Sanity:', error);
    return null;
  }
}

/**
 * Obtiene los datos de la página Servicios (servicesPage)
 */
export async function getServicesPage() {
  try {
    const data = await sanityClient.fetch(`*[_type == "servicesPage"][0]`);
    return data || null;
  } catch (error) {
    console.error('Error al consultar servicesPage de Sanity:', error);
    return null;
  }
}

/**
 * Obtiene todos los servicios activos
 */
export async function getServices() {
  try {
    const data = await sanityClient.fetch(`*[_type == "service"]{
      _id,
      title,
      slug,
      badge,
      description,
      detailedDescription,
      detailItems,
      highlights,
      specifications,
      icon,
      "galleryUrls": gallery[].asset->url,
      serviceLink
    }`);
    return data || [];
  } catch (error) {
    console.error('Error al consultar servicios de Sanity:', error);
    return [];
  }
}

/**
 * Obtiene las publicaciones del blog
 * @param {number} limit - Límite de artículos a retornar
 */
export async function getPosts(limit = 10) {
  try {
    const data = await sanityClient.fetch(`*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit]{
      _id,
      title,
      slug,
      author,
      mainImage,
      categories,
      publishedAt,
      excerpt,
      body
    }`, { limit });
    return data || [];
  } catch (error) {
    console.error('Error al consultar posts de Sanity:', error);
    return [];
  }
}

/**
 * Obtiene un post específico por su slug
 */
export async function getPostBySlug(slug) {
  try {
    const data = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      author,
      mainImage,
      categories,
      publishedAt,
      excerpt,
      body
    }`, { slug });
    return data || null;
  } catch (error) {
    console.error('Error al consultar post por slug:', error);
    return null;
  }
}

/**
 * Obtiene todos los slugs de posts para generar rutas estáticas
 */
export async function getAllPostSlugs() {
  try {
    const slugs = await sanityClient.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`);
    return slugs || [];
  } catch (error) {
    console.error('Error al obtener slugs de posts:', error);
    return [];
  }
}

/**
 * Obtiene un servicio específico por su slug
 */
export async function getServiceBySlug(slug) {
  try {
    const data = await sanityClient.fetch(`*[_type == "service" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      badge,
      description,
      detailedDescription,
      detailItems,
      highlights,
      specifications,
      icon,
      "galleryUrls": gallery[].asset->url,
      serviceLink
    }`, { slug });
    return data || null;
  } catch (error) {
    console.error('Error al consultar servicio por slug:', error);
    return null;
  }
}

/**
 * Obtiene todos los slugs de servicios para generar rutas estáticas
 */
export async function getAllServiceSlugs() {
  try {
    const slugs = await sanityClient.fetch(`*[_type == "service" && defined(slug.current)][].slug.current`);
    return slugs || [];
  } catch (error) {
    console.error('Error al obtener slugs de servicios:', error);
    return [];
  }
}
