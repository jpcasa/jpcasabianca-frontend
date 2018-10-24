var environment = {
  API_URL: 'http://159.65.224.158'
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'JP Casabianca | Full Stack Developer | UX/UI Design & Inbound Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi there, I\'m JP Casabianca! I\'m a Full Stack Developer and UI / UX Designer. I work remotely, dig Vue & React, use Python and Django, love Star Wars, and more! Find out more...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'js/heap.js' },
      { src: 'js/hotjar.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],
  plugins: ['~plugins/vue-scrollto.js', '~plugins/vue-scrollactive.js'],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-128015698-1'
    }]
  ],
  axios: {
    baseURL: environment.API_URL
  },
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/strongly-recommended",
    "plugin:prettier/strongly-recommended"
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { "semi": false }]
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
