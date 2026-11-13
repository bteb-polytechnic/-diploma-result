// BTEB Results Zone service worker: offline support for the app shell + data.
// Navigation / index.html: network-first (always fresh after updates).
// Data chunks, icons, manifest: cache-first (large, versioned by deploy).
const CACHE = "bteb-rz-v1";
const CORE = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).catch(function () {})
    );
    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
        })
    );
    self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    // Navigation + the page itself: network first, fall back to cache.
    if (event.request.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/")) {
        event.respondWith(
            fetch(event.request).then(function (res) {
                if (res.ok) {
                    const copy = res.clone();
                    caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
                }
                return res;
            }).catch(function () { return caches.match(event.request).then(function (hit) { return hit || caches.match("./index.html"); }); })
        );
        return;
    }

    // Static assets (data chunks, icons, manifest): cache first.
    if (/\.(js|json|png|css)$/.test(url.pathname)) {
        event.respondWith(
            caches.match(event.request).then(function (hit) {
                if (hit) return hit;
                return fetch(event.request).then(function (res) {
                    if (res.ok) {
                        const copy = res.clone();
                        caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
                    }
                    return res;
                });
            })
        );
    }
});
