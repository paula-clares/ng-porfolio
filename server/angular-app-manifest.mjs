
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ng-porfolio',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/modules/add-task/add-task.module.ts": [
    {
      "path": "chunk-5UBC66YE.js",
      "dynamicImport": false
    }
  ],
  "src/app/modules/edit-task/edit-task.module.ts": [
    {
      "path": "chunk-IYXIU6OQ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 782, hash: '0727b042d35c56e5d545ce4d5dcc3ff4bbbcaccacdecc554643d8b28938890ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: 'f1d6121385dfbabf83db3f9e2b1e77561da9e8a367bcac2fa96df39c1e630ba0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XBOJCTY3.css': {size: 83, hash: 'BbwC/8+bLqo', text: () => import('./assets-chunks/styles-XBOJCTY3_css.mjs').then(m => m.default)}
  },
};
