// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon'
  ],
  //configuration Css optionnelle
  css: [
    //Fichier Scss global
    '~/assets/scss/main.scss'
  ],
  //options Sass
  vite: {
    css: {
      preprocessorOptions:{
        scss:{
          additionalData: '@use "~/assets/scss/variables" as *;'
        }
      }
    }
  }
})
