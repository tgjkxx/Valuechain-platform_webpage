export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KETI 밸류체인 플랫폼',
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: 'KETI 밸류체인 플랫폼' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js', async: true },
      { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' , async: true }
    ]
  },
  // mode: 'spa',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/common.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/global-components.js', mode: 'client'},
    {src: '~/plugins/global-method.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: '0.0.0.0', // 모든 IP 주소에서 접속을 허용
    port: 1111, // 포트 번호 (설정한 포트 번호로 접속 가능)
  },
}
