'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "123c3c9f211738443e8a3b4e751a45d0",
"version.json": "7bad5578da37e791467892f4da8ebff1",
"index.html": "c8756a76f33901b8041810cdeae262e7",
"/": "c8756a76f33901b8041810cdeae262e7",
"taskfy-flutter-web/flutter_bootstrap.js": "7755b526f38b763fd2be859084c31da3",
"taskfy-flutter-web/version.json": "7bad5578da37e791467892f4da8ebff1",
"taskfy-flutter-web/index.html": "c8756a76f33901b8041810cdeae262e7",
"taskfy-flutter-web/main.dart.js": "5b8efa65ae15687d8d7fed4d174f3ea8",
"taskfy-flutter-web/flutter.js": "f393d3c16b631f36852323de8e583132",
"taskfy-flutter-web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"taskfy-flutter-web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"taskfy-flutter-web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"taskfy-flutter-web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"taskfy-flutter-web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"taskfy-flutter-web/manifest.json": "fc2c4270f749cd33bba8ab2ca483ac0f",
"taskfy-flutter-web/.git/config": "32a216bf7d3045921b17e12c21b2cdb0",
"taskfy-flutter-web/.git/objects/9b/dcb4a5cd169bbb835c8baa0202306cf6b7b1ca": "6a0eb5c5560bd22ab084ca2c3fa44cc2",
"taskfy-flutter-web/.git/objects/9e/70be0f5bdb0155714fdafe3359fe00db582b3a": "fd7f1e4c48bc1b5582285bbd7adc2c97",
"taskfy-flutter-web/.git/objects/35/f6244b6040aad89c8c4e033fd80762e7aca15e": "6b913d74cf3641c947f1f983ecc3039f",
"taskfy-flutter-web/.git/objects/69/8751aade90210d0d435f87f4e0aeec9497b62b": "477c211e02de7e025d9e926467b2e230",
"taskfy-flutter-web/.git/objects/d9/5f1963375186e78fc1d8cc58998d54fc4561fd": "ce573cd78c81a3d1f9df74be9174539c",
"taskfy-flutter-web/.git/objects/d9/583a42d65c1f73344f2a518794fa406209fabc": "8758ecf5c107b4a8eb9d3aa7292af3dc",
"taskfy-flutter-web/.git/objects/ac/df0280d57c47fbc02c6bdd01b94d73545e70dc": "8391984c5e4bb91fdb8c4d488fe0757b",
"taskfy-flutter-web/.git/objects/d0/87dccdd5c5b8b7975fb358ac0d8d86f4e0cb45": "d1499d88db3f437965c68cbd940b63a5",
"taskfy-flutter-web/.git/objects/b3/e68aec6a95941cd8bf56514d1a2a376d49972e": "fb4396a69bb29f7db95aa09f8fc95e00",
"taskfy-flutter-web/.git/objects/d8/06abae1ce541bf815fbad44bdf5d69e4229939": "9a2d097325fa36658f21262ea723d990",
"taskfy-flutter-web/.git/objects/c7/54706fdf4e81bfe4c2cc6a93c110396f664b70": "3ce711a03bb387dd84aa7cf2dc730b3b",
"taskfy-flutter-web/.git/objects/c9/da9426d36a32ee73fb1cf643631b6ff22c9863": "a3923c879449841d2638231e1dff0453",
"taskfy-flutter-web/.git/objects/4b/79e5ceefdd5c0f42cb2fb0f6bbe844b77084fa": "43c02393f033d00429e644ae5da3435d",
"taskfy-flutter-web/.git/objects/pack/pack-3251c4d682d9b782fc043c53eaa96029a63a3964.idx": "0cf8dee9347cfc2262cd19209c7222ff",
"taskfy-flutter-web/.git/objects/pack/pack-3251c4d682d9b782fc043c53eaa96029a63a3964.pack": "305f280e7f591dba70278ebb42c81016",
"taskfy-flutter-web/.git/objects/89/42957ef3f2248a5509145894001373e4913c95": "04103711cadfd09afd8195d8e1353d1c",
"taskfy-flutter-web/.git/objects/73/7cc96c2c1aa5abaa537187870f7ec2545ce906": "d10490aa7a9484cfc702dd670d59558a",
"taskfy-flutter-web/.git/objects/17/f31ed51d62af1767047d1fecbfa2beb00b2df8": "54db354940e6bb8e856d9fda5db9618c",
"taskfy-flutter-web/.git/objects/8f/6563dd59026b6839fc318685ecbb537000d204": "05dbb1eaf01b062883e22b38643bfe9e",
"taskfy-flutter-web/.git/objects/81/8fb23659d694f7d3a03a51562424934b427647": "8cc0519d6dfb04608cd0ad01fe192a6c",
"taskfy-flutter-web/.git/objects/88/4e2eab03209f4e9d064eb4f9d6ab5c68ea10af": "d1432f47b2beed81a0a5ac856289da52",
"taskfy-flutter-web/.git/objects/65/fc1fb13bdc9c19987430bca448f1084aed8f26": "ec3c6b8381ee317b2216bdf7cc09f84b",
"taskfy-flutter-web/.git/objects/30/5db20905bc5107a99d53193b4d3bc4e720bc9b": "93aecfa26d8cbfcce6c24b3918cb5096",
"taskfy-flutter-web/.git/objects/6c/77d06687543e29c29bfdac504b0486c2b7b76c": "01c9a357f56f92608e476272555d3b84",
"taskfy-flutter-web/.git/objects/97/df5fc880dda86cc6a5ff45cd1c4d15e54f310b": "aa795aa882bfb998d71a3d1d582e749d",
"taskfy-flutter-web/.git/objects/d4/a3e81122cd879a318dfe7ba72f86cdc38dd612": "cb11f47b995d9e0526ea59d3e1a48a7f",
"taskfy-flutter-web/.git/objects/db/cd8300e84ce67d23b588d2c7954ab23e2def01": "1b0c6fc40580dc20dd7a94138044f4dd",
"taskfy-flutter-web/.git/objects/f9/068119aa95beefe8b1251a13e1ca807ff28e0c": "8bbc4bcb6ac6d7b9e36799f13231e589",
"taskfy-flutter-web/.git/objects/c5/6ff3d74f7976aefb63ec889aa2588550477be7": "c7ffad22b5897de81b4ae408827c8ae4",
"taskfy-flutter-web/.git/objects/f1/53402257e96580752bf7b03e61ade131749628": "bae731e1cba01efa9b83b5affda8bcba",
"taskfy-flutter-web/.git/objects/f1/3d449b58c1abed490abc0caefedc7a5a9a4f18": "95bd97594a1ead0e0cdd0be213a38a11",
"taskfy-flutter-web/.git/objects/79/c78a1c546edc1854287aaa120deedd34bc1994": "d9a27032df63d8243d7826f133a39995",
"taskfy-flutter-web/.git/objects/1e/32e7897ddb2ac7dd2b676861744e0ea3bb27d1": "42c82e70259b62ff8089f4ebee984008",
"taskfy-flutter-web/.git/objects/24/39cd4d6b6eaa97874cfea7f930c5447abdc72f": "879622e0bbbf81365841f71f9f35f89e",
"taskfy-flutter-web/.git/objects/71/8697d1369f8cfd257261b2aca5603e70403a33": "d4300fde939d0ff390e238970c893f85",
"taskfy-flutter-web/.git/objects/76/b19013b281839942b772ff1ae20facb109e2cc": "2e869fb61a080e4c508db9fcba7cab4b",
"taskfy-flutter-web/.git/objects/1c/4eb932d5d7b1e5f60a0c9ec09207dbf38f1f27": "606cddb92319b349c720c73605c62d1f",
"taskfy-flutter-web/.git/objects/82/53d777d88c09c50a8e7c32c3ca73954c03c2be": "a723fdd2ee025dda521d349c424c72a9",
"taskfy-flutter-web/.git/objects/49/7f8bab4500ff87630a570594ebbc61a19d3030": "d19dfca2ba3864a80b35d849e9478272",
"taskfy-flutter-web/.git/objects/8b/aa4ef818514469c7b57091680d266196d1fe50": "ceeec3bd0d52d84209c37385c1d2d5c5",
"taskfy-flutter-web/.git/objects/7f/7fffa298577aa7c759c4f01373b56d1f855763": "c3c61182e9928578da525b60e2c9a657",
"taskfy-flutter-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"taskfy-flutter-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"taskfy-flutter-web/.git/logs/HEAD": "66c44c6f923d6ed49cebeb59e3bf8cb5",
"taskfy-flutter-web/.git/logs/refs/heads/main": "66c44c6f923d6ed49cebeb59e3bf8cb5",
"taskfy-flutter-web/.git/logs/refs/remotes/origin/HEAD": "8d19b630a8e72ab32323d745794cfc3e",
"taskfy-flutter-web/.git/logs/refs/remotes/origin/main": "aae54366a79d37d17c5b18806bd0a9be",
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
"taskfy-flutter-web/.git/refs/heads/main": "2e01aaebcc0c20e5d0a0e7a714ace084",
"taskfy-flutter-web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"taskfy-flutter-web/.git/refs/remotes/origin/main": "2e01aaebcc0c20e5d0a0e7a714ace084",
"taskfy-flutter-web/.git/index": "e0509e367597f33691373e9df87b9271",
"taskfy-flutter-web/.git/packed-refs": "e5f87ab92e0cb9ef721a7010ba56a65a",
"taskfy-flutter-web/.git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
"taskfy-flutter-web/assets/AssetManifest.json": "871d547ccb6cb05d6e09f01bdfe6829c",
"taskfy-flutter-web/assets/NOTICES": "34afe0eb0b834848997e8884d5ae443d",
"taskfy-flutter-web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"taskfy-flutter-web/assets/AssetManifest.bin.json": "d39d83ea91a0d51965f5dd01b0209ba1",
"taskfy-flutter-web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"taskfy-flutter-web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"taskfy-flutter-web/assets/lib/l10n/app_id.arb": "2e5aa37a9ffd25b9f192205475e9c325",
"taskfy-flutter-web/assets/lib/l10n/app_en.arb": "c11b96c09d00c5f19f7bd49180e1704f",
"taskfy-flutter-web/assets/AssetManifest.bin": "f989c0df503945b0c7c0d24955df09de",
"taskfy-flutter-web/assets/fonts/MaterialIcons-Regular.otf": "35805679eb0724702e395ffb81819ad9",
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
"main.dart.js": "8a72dec60a8e3048aece6fb484f353c2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc2c4270f749cd33bba8ab2ca483ac0f",
"assets/AssetManifest.json": "871d547ccb6cb05d6e09f01bdfe6829c",
"assets/NOTICES": "34afe0eb0b834848997e8884d5ae443d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d39d83ea91a0d51965f5dd01b0209ba1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/l10n/app_id.arb": "2e5aa37a9ffd25b9f192205475e9c325",
"assets/lib/l10n/app_en.arb": "c11b96c09d00c5f19f7bd49180e1704f",
"assets/AssetManifest.bin": "f989c0df503945b0c7c0d24955df09de",
"assets/fonts/MaterialIcons-Regular.otf": "35805679eb0724702e395ffb81819ad9",
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
