import { Parallax } from '../components'

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax)
  },
}

export default globalComponents
