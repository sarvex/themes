import Vue from 'vue'
import Router from 'vue-router'
import StarterPage from './pages/starter/StarterPage.vue'
import StarterNavbar from './layout/StarterNavbar.vue'
import StarterFooter from './layout/StarterFooter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'starter',
      components: { default: StarterPage, header: StarterNavbar, footer: StarterFooter },
      props: {
        footer: { backgroundColor: 'black' },
      },
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
})
