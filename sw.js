const CACHE = 'entrelazos-v1';
const STATIC = ['./','./index.html','./styles.css','./app.js','./tarjetas.html','./instrumentos.html','./assets/illustrations/icon.svg','./assets/illustrations/icon-192.png','./assets/illustrations/icon-512.png','./assets/audio/radio-equipo.mp3','./assets/audio/radio-escucha.mp3','./assets/audio/radio-palabras.mp3','./assets/audio/radio-acuerdos.mp3'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e => { if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
