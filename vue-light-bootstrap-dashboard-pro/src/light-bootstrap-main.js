import './polyfills'
// Notifications plugin. Used on Notifications page
// Validation plugin used to validate forms
import VeeValidate from 'vee-validate'
// A plugin file where you could register global components used across the app
import GlobalComponents from './globalComponents'
// A plugin file where you could register global directives
import GlobalDirectives from './globalDirectives'
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from './components/SidebarPlugin'
import NotificationPlugin from './components/NotificationPlugin'
// Tabs plugin. Used on Panels page.
import VueTabs from 'vue-nav-tabs'

// element ui language configuration
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

// asset imports
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-nav-tabs/themes/vue-tabs.scss'
import './assets/sass/light-bootstrap-dashboard.scss'
import './assets/css/demo.css'

export default {
  async install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
    Vue.use(NotificationPlugin)
    Vue.use(VueTabs)
    Vue.use(VeeValidate)
  }
}
