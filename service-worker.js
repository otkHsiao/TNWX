/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "7feee89567fc4f9e32aa84b33be4c57f"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.2163bcaa.css",
    "revision": "89e8f5db8c8e289cb03f24f1635c6ce4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.470dfb6d.js",
    "revision": "45cdf76ce126783974cf1e64dc40d187"
  },
  {
    "url": "assets/js/11.3ef22147.js",
    "revision": "44d80c123076201339d8cc6b6c71a1ab"
  },
  {
    "url": "assets/js/12.1078b9db.js",
    "revision": "130a92d3679daa5c8ea754c1a2d44cfc"
  },
  {
    "url": "assets/js/13.e30e191f.js",
    "revision": "e49b0b8f388edcce598a0363f96930b1"
  },
  {
    "url": "assets/js/14.7e523d97.js",
    "revision": "585add958a064329f0f96eb126d271a1"
  },
  {
    "url": "assets/js/15.214073fb.js",
    "revision": "a369083a68050987bbba5d8b157c1ccd"
  },
  {
    "url": "assets/js/16.d405661d.js",
    "revision": "c4452ce83b3116c9e260f6f53907272b"
  },
  {
    "url": "assets/js/17.e7074638.js",
    "revision": "e5a5e0c6ed5d129f1f7c690d75f7491b"
  },
  {
    "url": "assets/js/18.ac700e96.js",
    "revision": "674afc0ab38f2adf5aedf4f9248930c6"
  },
  {
    "url": "assets/js/19.4ed32732.js",
    "revision": "d15c3fcca3796d646f862beb81cf087c"
  },
  {
    "url": "assets/js/20.92dbd837.js",
    "revision": "4cca68133f505a66c046a18e2db82faf"
  },
  {
    "url": "assets/js/21.d37ecdb8.js",
    "revision": "dd2b3811ac4bbfc74e257ae1d06d69de"
  },
  {
    "url": "assets/js/22.d5462217.js",
    "revision": "ec45bd68fb0202deedb59e0b319cadb5"
  },
  {
    "url": "assets/js/23.ee59309e.js",
    "revision": "281c677230879d81bc408e831c15a5da"
  },
  {
    "url": "assets/js/24.0a02ff84.js",
    "revision": "7de77ddf20e6168ebb0e768878df7ad8"
  },
  {
    "url": "assets/js/25.2570222d.js",
    "revision": "84c87d3aac6aff303d7b653630cb5a29"
  },
  {
    "url": "assets/js/26.a25f3552.js",
    "revision": "e1285814e0e26ed822ee18abb346d6a7"
  },
  {
    "url": "assets/js/27.7623e189.js",
    "revision": "b618848914861c7badb44c356cfb6f99"
  },
  {
    "url": "assets/js/28.7b29409a.js",
    "revision": "3bb5d4fd74c291d537bfa247bf4816c4"
  },
  {
    "url": "assets/js/29.7479f75f.js",
    "revision": "3990bdf50f38095f81a6625ecb53b144"
  },
  {
    "url": "assets/js/3.43011e0b.js",
    "revision": "5797deaa03045b030430492a8e0011b9"
  },
  {
    "url": "assets/js/30.d95ba395.js",
    "revision": "ee4e4c070bf222efb497cd70fa4dc6b8"
  },
  {
    "url": "assets/js/31.fa21b093.js",
    "revision": "6d249099fd9f1a2f041b160a239cd5ec"
  },
  {
    "url": "assets/js/32.9a9832fa.js",
    "revision": "8b6f63202f24af4defa237f766c8c1c1"
  },
  {
    "url": "assets/js/4.a48f21e3.js",
    "revision": "7d38217966a9fddd7df10ac2859bf85a"
  },
  {
    "url": "assets/js/5.eed9ec6e.js",
    "revision": "68cc6aa016ddd721401876b530aceca9"
  },
  {
    "url": "assets/js/6.94a14664.js",
    "revision": "65287ea1215ffad237081e484b710c69"
  },
  {
    "url": "assets/js/7.52aff822.js",
    "revision": "12ff1643e4d3edc9d3488daffc0e4a30"
  },
  {
    "url": "assets/js/8.6e89422d.js",
    "revision": "fc3b99511e95704d8b93a0d268167d75"
  },
  {
    "url": "assets/js/9.aadac41b.js",
    "revision": "9c0067f8986efe6e701b6d25f25b0073"
  },
  {
    "url": "assets/js/app.45523f02.js",
    "revision": "734e860765bb8612c5e166d1bb929cc1"
  },
  {
    "url": "assets/js/vendors~notification.c4421e20.js",
    "revision": "76078ea184902799882af0b3ccb56b70"
  },
  {
    "url": "chat.png",
    "revision": "39fad2947246c8676d8ae34c47939d10"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "3860a94797a0cbe27320dd424a62ee5b"
  },
  {
    "url": "guide/common/init.html",
    "revision": "ebd439d8cb13d7977e0509c955ad1fb0"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "7febaabbab2e27e03825e769409fe3f6"
  },
  {
    "url": "guide/index.html",
    "revision": "9afffdf5c27996ee040c8585a2064de0"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "63fe3bbd713b97f319d11dec4c63cbeb"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "3e591f52dcf8fa9110a0da0e8a49096b"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "e88cc89461baf271e45ceb4de5294d99"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "d610726248a3c9e23c70c32f02f8a26c"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "bd1ae837765a1e2287a7718f119e9a6c"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "fb9d9fe1dded27db097f72d31d6bd20c"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "9e9759a20bc43cb7001e1ee5c6405bb0"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "b0b7bcbae6a018013333980783c3670c"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "1fe794fd145f6782c266a93c108ab7bb"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "07b44dd741c9768a7ea63f235e48a0d1"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "218ab0faf911f21d2e1ae041f2ba737e"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "6926b725a106424131949f19968f9037"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "075b0e15e92553f058b6216164a4e7f2"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "e59e69abf9df76ccedb8f10f280a5e03"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "804b7ee3bc618ae8b1eff7317d0a6c94"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "4a0122e61e760e7ff923360d00490e26"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "e0afcb0ac8118134dc13da5cce47bc9f"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "6d6c12db3e34c7b5dca9df8147c19db9"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "c20034d75d8bcc032726b989154d187c"
  },
  {
    "url": "index.html",
    "revision": "d15c99af55c60a9814fe44ac92813158"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
