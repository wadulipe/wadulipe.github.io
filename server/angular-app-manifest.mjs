
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://wadulipe.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 734, hash: '133d2623493c867a6df0d39aa2dab650443fb070d831d25adfd234110efc93ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1048, hash: '8f021399739947f1d7616192ad78bda0d02f0c071775cb0f249069a9c8c736c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8821, hash: '509d196adbff53f87701d5f3f9a012c0679909362635f7a39456b29ad41efdf8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-I5S3PPHA.css': {size: 102, hash: 'a2DsAXWZdkY', text: () => import('./assets-chunks/styles-I5S3PPHA_css.mjs').then(m => m.default)}
  },
};
