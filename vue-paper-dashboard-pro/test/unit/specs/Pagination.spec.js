import {mount} from 'vue-test-utils'
import {should} from 'chai'
import Pagination from 'src/components/UIComponents/Pagination.vue'

describe('Pagination', () => {
  it('should work with v-model', () => {
    const initialValue = 2;
    const wrapper = mount(Pagination, {
      propsData: {
        value: initialValue,
        total: 100
      }
    })
    const nextButton = wrapper.find('[aria-label="Next"]')
    nextButton.trigger('click')
    const emitted1 = wrapper.emitted()
    expect(emitted1.input.length).to.equal(1)
    expect(emitted1.input[0]).to.deep.equal([initialValue + 1])
  })
  it('should have prev button disabled on first page', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        value: 1,
        total: 100
      }
    })

    const prevButton = wrapper.find('.prev-page')
    expect(prevButton.hasClass('disabled')).to.equal(true)
  })
  it('should have next button disabled on last page', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        value: 2,
        total: 100,
        perPage: 50
      }
    })

    const nextButton = wrapper.find('.next-page')
    expect(nextButton.hasClass('disabled')).to.equal(true)
  })
  it('should calculate page count based on total items', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        value: 2,
        total: 100,
        perPage: 20
      }
    })

    expect(wrapper.vm.totalPages).to.equal(5)
  })

  it('should reset to page 1 when per page changes', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        value: 4,
        total: 100,
        perPage: 20
      }
    })

    wrapper.setProps({perPage: 10})
    const emitted = wrapper.emitted()
    expect(emitted.input.length).to.equal(1)
    expect(emitted.input[0]).to.deep.equal([1])
  })

  it('should increase maxPage when last displayed page is clicked', () =>{
    const wrapper = mount(Pagination, {
      propsData: {
        value: 4,
        total: 100
      }
    })
    expect(wrapper.vm.maxPage).to.equal(wrapper.vm.defaultPagesToDisplay)
    wrapper.setProps({value: 5})
    expect(wrapper.vm.maxPage).to.equal(wrapper.vm.defaultPagesToDisplay + 2)
  })

  it('triggers page change when clicking on a page', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        value: 4,
        total: 100
      }
    })

    const page2 = wrapper.find('li:nth-child(3) .page-link')
    expect(page2.text().trim()).to.equal('2')
    page2.trigger('click')
    const emitted1 = wrapper.emitted()
    expect(emitted1.input.length).to.equal(1)
    expect(emitted1.input[0]).to.deep.equal([2])
  })

  it('triggers page change when clicking prev page', () => {
    const initialPage = 4
    const wrapper = mount(Pagination, {
      propsData: {
        value: initialPage,
        total: 100
      }
    })

    const prevPage = wrapper.find('.prev-page .page-link')
    prevPage.trigger('click')
    const emitted1 = wrapper.emitted()
    expect(emitted1.input.length).to.equal(1)
    expect(emitted1.input[0]).to.deep.equal([initialPage - 1])
  })
})
