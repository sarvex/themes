import fgInput from './components/Inputs/formGroupInput.vue'
import DropDown from './components/Dropdown.vue'
import Card from './components/Cards/Card.vue'
import Button from './components/Button.vue';
import {Input, InputNumber} from 'element-ui'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
    Vue.component('card', Card)
    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
  }
}

export default GlobalComponents
