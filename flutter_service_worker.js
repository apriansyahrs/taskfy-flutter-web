'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a8f1ffa1eaa7fdebf73188b09d4486db",
"version.json": "7bad5578da37e791467892f4da8ebff1",
"index.html": "44d1e34f8eddb94374e41a57fcdedd38",
"/": "44d1e34f8eddb94374e41a57fcdedd38",
"taskfy-flutter-web/flutter_bootstrap.js": "c5ded200d9726a1fcdb22fd00efb06ec",
"taskfy-flutter-web/version.json": "7bad5578da37e791467892f4da8ebff1",
"taskfy-flutter-web/index.html": "62a0a587087c4cbe2427b581800efd90",
"taskfy-flutter-web/main.dart.js": "24da248b2226fab1e833465e2ed6f26f",
"taskfy-flutter-web/flutter.js": "f393d3c16b631f36852323de8e583132",
"taskfy-flutter-web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"taskfy-flutter-web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"taskfy-flutter-web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"taskfy-flutter-web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"taskfy-flutter-web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"taskfy-flutter-web/manifest.json": "fc2c4270f749cd33bba8ab2ca483ac0f",
"taskfy-flutter-web/.git/config": "32a216bf7d3045921b17e12c21b2cdb0",
"taskfy-flutter-web/.git/objects/33/809b21d2771bfc6f04690af7d2a3c274320f86": "89d19bea6c81647666ddd3ad455ec4cd",
"taskfy-flutter-web/.git/objects/ee/6ab8b292a8b3fb0a906fb5e683a59a1f16e85e": "fe31439f70441b381077a28b7aa1f90c",
"taskfy-flutter-web/.git/objects/pack/pack-4ef0d903bdc2a17585f24ac1686e7952bd5f9ddf.idx": "529c696049207c5cc6cd076b76a67219",
"taskfy-flutter-web/.git/objects/pack/pack-4ef0d903bdc2a17585f24ac1686e7952bd5f9ddf.pack": "23da76984b4c7513563b4393b65559bd",
"taskfy-flutter-web/.git/objects/89/73dbb16bdaf6c4d60b93b3c9e12f699eeb6c6c": "8ed8708bca925836d6154856ed26784d",
"taskfy-flutter-web/.git/objects/80/76d5020b8898a8114d27e6061d98b7a4705648": "71bc443e3f9b25752504ceaa127a1239",
"taskfy-flutter-web/.git/objects/9f/0898701869522b3b223d8796e3c88e60b5e55b": "f3fa52ea78d8552ebaf010951500db95",
"taskfy-flutter-web/.git/objects/98/35f48503d09514faca1e6fc64f7d576b529745": "8efbf4f5e904549df33b827744c645de",
"taskfy-flutter-web/.git/objects/dd/7b7d2c5fc8b4ad72aa8b4dbd61da9b8bd503dd": "9bc8dd548885eda49b22ca91a1c2d33a",
"taskfy-flutter-web/.git/objects/c5/c83143cfd24f5f6c3055902beb4ec9285d071c": "283ca75c2b3fe0070c889cd34fedc856",
"taskfy-flutter-web/.git/objects/48/c8b489dfcee4f9ddab6f62e73d5821d1a8f9a4": "0b14ec08ff4b1048074467b421baa26e",
"taskfy-flutter-web/.git/objects/13/06421910182de6bef0ea8f71fd8aa8c40b03e5": "389f467d97950db2c082d9537cb6f8b8",
"taskfy-flutter-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"taskfy-flutter-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"taskfy-flutter-web/.git/logs/HEAD": "2849046f7e8977303de16298c279baea",
"taskfy-flutter-web/.git/logs/refs/heads/main": "2849046f7e8977303de16298c279baea",
"taskfy-flutter-web/.git/logs/refs/remotes/origin/HEAD": "06640e7168121b95dd5d238d549b51b7",
"taskfy-flutter-web/.git/logs/refs/remotes/origin/main": "908677183b7c54ba70a9a72a7ad4d1b1",
"taskfy-flutter-web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"taskfy-flutter-web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"taskfy-flutter-web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"taskfy-flutter-web/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"taskfy-flutter-web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"taskfy-flutter-web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"taskfy-flutter-web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"taskfy-flutter-web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"taskfy-flutter-web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"taskfy-flutter-web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"taskfy-flutter-web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"taskfy-flutter-web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"taskfy-flutter-web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"taskfy-flutter-web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"taskfy-flutter-web/.git/refs/heads/main": "ddb214c7e7647d797ff6c43e64bf62c6",
"taskfy-flutter-web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"taskfy-flutter-web/.git/refs/remotes/origin/main": "ddb214c7e7647d797ff6c43e64bf62c6",
"taskfy-flutter-web/.git/index": "95477c11f273f2b1722439e3adbb8647",
"taskfy-flutter-web/.git/packed-refs": "e7e63f5e841181b41f4b3782dca5130d",
"taskfy-flutter-web/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"taskfy-flutter-web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"taskfy-flutter-web/assets/NOTICES": "508ac9bd05f1ccaa8afae6dbf64d007f",
"taskfy-flutter-web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"taskfy-flutter-web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"taskfy-flutter-web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"taskfy-flutter-web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"taskfy-flutter-web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"taskfy-flutter-web/assets/fonts/MaterialIcons-Regular.otf": "8defd15ac79640d7cad337efb1f331fa",
"taskfy-flutter-web/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"taskfy-flutter-web/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"taskfy-flutter-web/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"taskfy-flutter-web/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"taskfy-flutter-web/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"taskfy-flutter-web/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"taskfy-flutter-web/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"taskfy-flutter-web/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"taskfy-flutter-web/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"taskfy-flutter-web/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"main.dart.js": "24da248b2226fab1e833465e2ed6f26f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc2c4270f749cd33bba8ab2ca483ac0f",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "508ac9bd05f1ccaa8afae6dbf64d007f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "8defd15ac79640d7cad337efb1f331fa",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
