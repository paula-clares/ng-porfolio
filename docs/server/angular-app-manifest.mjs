
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/modules/add-task/add-task.module.ts": [
    {
      "path": "chunk-L2JKXK36.js",
      "dynamicImport": false
    }
  ],
  "src/app/modules/edit-task/edit-task.module.ts": [
    {
      "path": "chunk-RVDDITJ3.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 5433, hash: 'b7a2161c79d75672456b2d449de2f643c3059847d4f23ae4d80789d11b840d5a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1118, hash: '502fbb5dc0897669279bf94b6ca87d57d2d38f25c4bd9812fe57f849bbdd5cf0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FXCA7SXW.css': {size: 310567, hash: 'uBRdN4F0wuM', text: () => import('./assets-chunks/styles-FXCA7SXW_css.mjs').then(m => m.default)}
  },
};
