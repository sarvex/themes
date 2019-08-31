import {mount, createLocalVue} from 'vue-test-utils'
import {should} from 'chai'
import SidebarPlugin from 'src/components/UIComponents/SidebarPlugin/index'
import Sidebar from 'src/components/UIComponents/SidebarPlugin/SideBar.vue'

describe('Sidebar', () => {
  it('should set a store on Vue prototype', () => {
    const localVue = createLocalVue()
    localVue.use(SidebarPlugin)
    const wrapper = mount(Sidebar, {
      localVue
    })

    expect(wrapper.vm.$sidebar).to.have.property('sidebarLinks')
    expect(wrapper.vm.$sidebar).to.have.property('displaySidebar')
    expect(wrapper.vm.$sidebar).to.have.property('toggleMinimize')
  })
})
