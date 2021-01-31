// const webpack = require("webpack")。
import webpack from 'webpack'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'zh-CN',
    },
    title: 'MC影',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '' }
    ],

    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script:[{src:'js/flexible.js',type:'text/javascript',charset:'utf-8'}]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'element-ui/lib/theme-chalk/index.css',  因为装了babel-plugin-component 这个css会自动按需引入
    '~assets/main.css',
    // '~assets/animate.min.css',    暂时没用上
    // 'quill/dist/quill.snow.css',
    // 'quill/dist/quill.bubble.css',
    // 'quill/dist/quill.core.css',
    "mint-ui/lib/style.css",
    '@/assets/fontclass/iconfont.css',

  ],

  // 在呈现页面之前运行的插件 (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    // {src:'~/plugins/store-cache',ssr:false},
    '@/plugins/axios',
    '@/plugins/mint-ui',
    {
      src: '~/plugins/util',
      ssr: false
    },
    {
      src: '@/plugins/vue-quill-editor',
      ssr: false
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // 用于开发和构建的模块(推荐) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // 组件 (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources'
  ],
  axios: {
    prefix: '/api/',
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'http://www.jt.ricemc.cn/',
      // target: 'http://127.0.0.1:8080/',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  // 组建组态 (https://go.nuxtjs.dev/config-build)
  build: {
    styleResources: {
      less: "./assets/css/mixins.less",
    },
    postcss:{
      plugins:{
        'postcss-pxtorem':{ rootValue:150, propList:['*'], selectorBlackList:['mint-']   }      }    },
    //去掉查看源码有CSS
    /* extractCSS: {
      allChunks: true,
    }, */
    // analyze: true,//打包的时候需要注释，优化用
    // 按需引入element-ui
    babel: {
      plugins: [
        ["component", {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }]
      ]
    },

    // transpile: [/^element-ui/],
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      })
    ]
  },

}
