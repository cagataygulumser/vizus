/* Çevrimdışı önbellek. Sürümü her yayında artırın. */
var S='vizus-v4',D=["./", "index.html", "arac.html", "katalog.js", "manifest.webmanifest", "ikon.svg", "ikon-192.png", "ikon-512.png", "ikon-180.png"];
self.addEventListener('install',function(e){e.waitUntil(caches.open(S).then(function(c){return c.addAll(D)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==S}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(e.request.method!=='GET')return;
  if(u.origin===location.origin){e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request)}));return}
  if(/jsdelivr\.net|storage\.googleapis\.com/.test(u.host)){e.respondWith(caches.open(S+'-cdn').then(function(c){return c.match(e.request).then(function(r){return r||fetch(e.request).then(function(n){if(n.ok||n.type==='opaque')c.put(e.request,n.clone());return n})})}))}
});
