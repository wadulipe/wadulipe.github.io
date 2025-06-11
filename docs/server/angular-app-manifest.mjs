
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wadulipe.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/wadulipe.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 727, hash: '3f129bb207b1d5192e27bc30fb9ae9d3102278a1846806354a3bccd35db65358', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '06f5a776461933a3f0581d5bf2d6eacddb08fe3d53ab4f692cd619f931432518', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8814, hash: '2c2c6dae61ff739c9af2e55395816b6a95d5b36ef7ea82bfa973b2f4800e11b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-I5S3PPHA.css': {size: 102, hash: 'a2DsAXWZdkY', text: () => import('./assets-chunks/styles-I5S3PPHA_css.mjs').then(m => m.default)}
  },
};
