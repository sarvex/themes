<template>
  <div id="basic-elements" class="section section-basic">
    <div class="container">
      <h3 class="title">Basic Elements</h3>
      <h4>Buttons</h4>
      <p class="category">Pick your style</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="primary">Default</n-button>
          <n-button type="primary" round>Round</n-button>
          <n-button type="primary" round> <i class="now-ui-icons ui-2_favourite-28"></i> With Icon </n-button>
          <n-button type="primary" round icon>
            <i class="now-ui-icons ui-2_favourite-28"></i>
          </n-button>
          <n-button type="primary" round simple>Simple</n-button>
        </div>
      </div>
      <p class="category">Pick your size</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="primary" size="sm">Small</n-button>
          <n-button type="primary">Regular</n-button>
          <n-button type="primary" size="lg">Large</n-button>
        </div>
      </div>
      <p class="category">Pick your color</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="default">Default</n-button>
          <n-button type="primary">Primary</n-button>
          <n-button type="info">Info</n-button>
          <n-button type="success">Success</n-button>
          <n-button type="warning">Warning</n-button>
          <n-button type="danger">Danger</n-button>
          <n-button type="neutral">Neutral</n-button>
        </div>
      </div>
      <h4>Links</h4>
      <div class="row">
        <div class="col-md-8">
          <n-button type="default" link>Default</n-button>
          <n-button type="primary" link>Primary</n-button>
          <n-button type="info" link>Info</n-button>
          <n-button type="success" link>Success</n-button>
          <n-button type="warning" link>Warning</n-button>
          <n-button type="danger" link>Danger</n-button>
          <n-button type="neutral" link>Neutral</n-button>
        </div>
      </div>
      <!--                 social n-buttons		         -->
      <div id="social-n-buttons">
        <h4>Social n-buttons</h4>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <p class="category">Default</p>
            <n-button class="btn-twitter"> <i class="fab fa-twitter"></i> Connect with Twitter </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <p class="category">&nbsp;</p>
            <n-button class="btn-icon btn-twitter">
              <i class="fab fa-twitter"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <p class="category">&nbsp;</p>
            <n-button class="btn-icon btn-round btn-twitter">
              <i class="fab fa-twitter"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <p class="category">Neutral</p>
            <n-button class="btn-icon btn-neutral btn-twitter">
              <i class="fab fa-twitter"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <p class="category">&nbsp;</p>
            <n-button class="btn-neutral btn-twitter"> <i class="fab fa-twitter"></i> Connect with Twitter </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-facebook"> <i class="fab fa-facebook-square"></i> Share · 2.2k </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-facebook">
              <i class="fab fa-facebook"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-facebook">
              <i class="fab fa-facebook"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-facebook">
              <i class="fab fa-facebook-square"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-facebook"> <i class="fab fa-facebook-square"></i> Share · 2.2k </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-google"> <i class="fab fa-google"></i> Share on Google+ </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-google">
              <i class="fab fa-google"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-google">
              <i class="fab fa-google"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-google">
              <i class="fab fa-google"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-google"> <i class="fab fa-google"></i> Share on Google+ </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-linkedin"> <i class="fab fa-linkedin"></i> Connect with Linkedin </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-linkedin">
              <i class="fab fa-linkedin"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-linkedin">
              <i class="fab fa-linkedin"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-linkedin">
              <i class="fab fa-linkedin-square"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-linkedin">
              <i class="fab fa-linkedin-square"></i> Connect with Linkedin
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-pinterest"> <i class="fab fa-pinterest"></i> Pint it · 212 </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-pinterest">
              <i class="fab fa-pinterest"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-pinterest">
              <i class="fab fa-pinterest"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-pinterest">
              <i class="fab fa-pinterest"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-pinterest"> <i class="fab fa-pinterest"></i> Pint it · 212 </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-youtube"> <i class="fab fa-youtube"></i> View on Youtube </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-youtube">
              <i class="fab fa-youtube"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-youtube">
              <i class="fab fa-youtube"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-youtube">
              <i class="fab fa-youtube"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-youtube"> <i class="fab fa-youtube"></i> View on Youtube </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-tumblr"> <i class="fab fa-tumblr-square"></i> Repost </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-tumblr">
              <i class="fab fa-tumblr"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-tumblr">
              <i class="fab fa-tumblr"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-tumblr">
              <i class="fab fa-tumblr-square"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-tumblr"> <i class="fab fa-tumblr-square"></i> Repost </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-github"> <i class="fab fa-github"></i> Connect with Github </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-github">
              <i class="fab fa-github"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-github">
              <i class="fab fa-github"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-github">
              <i class="fab fa-github"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-github"> <i class="fab fa-github"></i> Connect with Github </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-behance"> <i class="fab fa-behance-square"></i> Follow us </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-behance">
              <i class="fab fa-behance"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-behance">
              <i class="fab fa-behance"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-behance">
              <i class="fab fa-behance"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-behance"> <i class="fab fa-behance-square"></i> Follow us </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-dribbble"> <i class="fab fa-dribbble"></i> Find us on Dribble </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-dribbble">
              <i class="fab fa-dribbble"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-dribbble">
              <i class="fab fa-dribbble"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-dribbble">
              <i class="fab fa-dribbble"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-dribbble"> <i class="fab fa-dribbble"></i> Find us on Dribble </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-reddit"> <i class="fab fa-reddit"></i> Repost · 232 </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-reddit">
              <i class="fab fa-reddit"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-reddit">
              <i class="fab fa-reddit"></i>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-reddit">
              <i class="fab fa-reddit"></i>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-reddit"> <i class="fab fa-reddit"></i> Repost · 232 </n-button>
          </div>
        </div>
      </div>
      <!--                 end social n-buttons -->
      <div class="space-70"></div>
      <div id="inputs">
        <h4>Inputs</h4>
        <p class="category">Form Controls</p>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <fg-input placeholder="Regular"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input value="Success" class="has-success"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input value="Error Input" class="has-danger"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input addon-left-icon="now-ui-icons users_single-02" placeholder="Left Nucleo Icon"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input addon-right-icon="now-ui-icons users_single-02" placeholder="Right Nucleo Icon"></fg-input>
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <!--                 select -->
      <div class="select">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
              <h4>Customizable Select</h4>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-8 col-sm-5">
                <el-select v-model="singleSelect.value" class="select-primary" placeholder="Single Option">
                  <el-option
                    v-for="option in singleSelect.options"
                    :key="option.label"
                    class="select-primary"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </div>
              <div class="col-lg-6 col-md-8 col-sm-5">
                <el-select
                  v-model="multiSelect.value"
                  class="select-info"
                  multiple
                  collapse-tags
                  placeholder="Multiple Options"
                >
                  <el-option
                    v-for="option in multiSelect.options"
                    :key="option.value"
                    class="select-info"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="title">
              <h4>Dropdown & Dropup</h4>
            </div>
            <div class="row">
              <div class="col-lg-5 col-md-8">
                <drop-down>
                  <n-button slot="title" class="dropdown-toggle" type="primary" data-toggle="dropdown" round
                    >Dropdown</n-button
                  >
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </drop-down>
              </div>
              <div class="col-lg-5 col-md-8">
                <drop-down direction="up">
                  <n-button slot="title" class="dropdown-toggle" type="primary" data-toggle="dropdown" round
                    >Dropdown</n-button
                  >
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </drop-down>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--                 end select -->
      <div class="space-70"></div>
      <!--				 textarea/tags -->
      <div id="textareaTags">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
              <h4>Textarea</h4>
            </div>
            <textarea
              class="form-control"
              name="name"
              rows="4"
              cols="80"
              placeholder="You can write your text here..."
            ></textarea>
          </div>
          <div class="col-md-6">
            <div class="title">
              <h4>Tags</h4>
            </div>
            <el-tag
              v-for="tag in tags.dynamicTags"
              :key="tag"
              size="small"
              type="danger"
              :closable="true"
              :close-transition="false"
              @close="handleClose(tag)"
              >{{ tag }}</el-tag
            >

            <input
              ref="saveTagInput"
              v-model="tags.inputValue"
              type="text"
              placeholder="New Tag"
              class="form-control input-new-tag"
              size="mini"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <div id="checkRadios" class="row">
        <div class="col-sm-6 col-lg-3">
          <p class="category">Checkboxes</p>
          <n-checkbox v-model="checkboxes.unchecked">Unchecked</n-checkbox>
          <n-checkbox v-model="checkboxes.checked">Checked</n-checkbox>
          <n-checkbox v-model="checkboxes.disabledUnchecked" disabled>Disabled Unchecked</n-checkbox>
          <n-checkbox v-model="checkboxes.disabledChecked" disabled>Disabled Checked</n-checkbox>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Radios</p>
          <n-radio v-model="radios.radioOn" label="1">Radio is On</n-radio>
          <n-radio v-model="radios.radioOn" label="2">Radio is Off</n-radio>

          <n-radio v-model="radios.radioOff" label="1" disabled>Disabled radio is on</n-radio>
          <n-radio v-model="radios.radioOff" label="2" disabled>Disabled radio is off</n-radio>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Toggle buttons</p>
          <n-switch v-model="switches.defaultOn"></n-switch>
          <br />
          <n-switch v-model="switches.defaultOff" on-text="ON" off-text="OFF"></n-switch>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Sliders</p>
          <slider v-model="sliders.simple"></slider>
          <br />
          <slider v-model="sliders.rangeSlider" type="primary" :connect="true"></slider>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Checkbox, Radio, FormGroupInput, DropDown, Slider, Switch } from '@/components'
import { Select, Option, Tag } from 'element-ui'

export default {
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    [Select.name]: Select,
    [Option.name]: Option,
    [DropDown.name]: DropDown,
    [Tag.name]: Tag,
    Slider,
  },
  data() {
    return {
      singleSelect: {
        value: '',
        options: [
          {
            value: '1',
            label: 'Foobar',
          },
          {
            value: '2',
            label: 'Is great',
          },
        ],
      },
      multiSelect: {
        value: '',
        options: [
          {
            value: '2',
            label: 'Paris',
          },
          {
            value: '3',
            label: 'Bucharest',
          },
          {
            value: '4',
            label: 'Rome',
          },
          {
            value: '5',
            label: 'New York',
          },
          {
            value: '6',
            label: 'Miami',
          },
          {
            value: '7',
            label: 'Piatra Neamt',
          },
          {
            value: '8',
            label: 'Paris',
          },
          {
            value: '9',
            label: 'Bucharest',
          },
          {
            value: '10',
            label: 'Rome',
          },
          {
            value: '11',
            label: 'New York',
          },
          {
            value: '12',
            label: 'Miami',
          },
          {
            value: '13',
            label: 'Piatra Neamt',
          },
          {
            value: '14',
            label: 'Paris',
          },
          {
            value: '15',
            label: 'Bucharest',
          },
          {
            value: '16',
            label: 'Rome',
          },
          {
            value: '17',
            label: 'New York',
          },
          {
            value: '18',
            label: 'Miami',
          },
          {
            value: '19',
            label: 'Piatra Neamt',
          },
        ],
      },
      tags: {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
      },
      radios: {
        radioOn: '2',
        radioOff: '2',
      },
      checkboxes: {
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true,
      },
      switches: {
        defaultOn: true,
        defaultOff: false,
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 60],
      },
    }
  },
  methods: {
    handleClose(tag) {
      this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.tags.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.tags.inputValue
      if (inputValue) {
        this.tags.dynamicTags.push(inputValue)
      }
      this.tags.inputVisible = false
      this.tags.inputValue = ''
    },
  },
}
</script>
