let cacheName = "after-school";
let cacheFiles = [

    "index.html",
    "img/math.png",
    "img/english.png",
    "img/dance.png",
    "img/chess.png",
    "img/drama.png",
    "img/art.png",
    "img/photo.png",
    "img/cooking.png",
    "img/football.png",
    "img/gymnastics.png",

]


self.addEventListener("install", function (e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("[Service Worker] Caching files");
            return cache.addAll(cacheFiles);
        })
    );
});