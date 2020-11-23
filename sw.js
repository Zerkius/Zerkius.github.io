self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'GinkoBus-v1';
var contentToCache = [];
var appShellFile=[];
var iconsSize=["32","64","96","128","168","180","192","256","512"];

for(var i=0; i<iconsSize.length; i++) {
    contentToCache.push('icons/icon-'+iconsSize[i]+'.png');
}


self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      })
    );
  });

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource '+e.request.url);
});