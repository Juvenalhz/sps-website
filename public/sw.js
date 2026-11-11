// Self-destroying Service Worker to purge any legacy PWA cache
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      } catch (e) {}

      try {
        await self.registration.unregister();
      } catch (e) {}

      try {
        const clientsList = await self.clients.matchAll({
          type: 'window',
          includeUncontrolled: true,
        });
        for (const client of clientsList) {
          if (client.url && 'navigate' in client) {
            await client.navigate(client.url);
          }
        }
      } catch (e) {}
    })()
  );
});
