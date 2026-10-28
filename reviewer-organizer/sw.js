self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Retire this legacy scope without touching caches, databases, or saved sessions.
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    await Promise.allSettled(windows.map(client => {
      const current = new URL(client.url);
      if (current.origin !== self.location.origin ||
          !(current.pathname === '/reviewer-organizer' || current.pathname.startsWith('/reviewer-organizer/'))) return;
      current.pathname = '/StudyNest/';
      return client.navigate(current.href);
    }));
  })());
});
