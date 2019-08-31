<template>
  <div class="extended-forms">
    <div class="card">
      <div class="card-content">
        <div class="row">
          <div class="col-md-4">
            <h4 class="card-title">Datetime Picker</h4>
            <div class="form-group">
              <el-date-picker
                v-model="dateTimePicker"
                type="datetime"
                placeholder="Select date and time"
                :picker-options="pickerOptions1">
              </el-date-picker>
            </div>
          </div>
          <div class="col-md-4">
            <h4 class="card-title">Date Picker</h4>
            <div class="form-group">
              <el-date-picker v-model="datePicker" type="date" placeholder="Pick a day"
                              :picker-options="pickerOptions1">
              </el-date-picker>
            </div>
          </div>
          <div class="col-md-4">
            <h4 class="card-title">Time Picker</h4>
            <div class="form-group">
              <el-time-select
                v-model="timePicker"
                :picker-options="{
                  start: '00:00',
                  step: '00:15',
                  end: '23:59'
                }"
                placeholder="Select time">
              </el-time-select>
            </div>
          </div>
        </div>

        <br/><br/>

        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Switches</h4>
            <div class="col-md-4">
              <p class="category">Default</p>
              <p-switch v-model="switches.defaultOn" type="primary" on-text="ON" off-text="OFF"></p-switch>
              <p-switch v-model="switches.defaultOff" type="primary" on-text="ON" off-text="OFF"></p-switch>
            </div>
            <div class="col-md-4">
              <p class="category">Plain</p>
              <p-switch v-model="switches.plainOn"></p-switch>
              <p-switch v-model="switches.plainOff"></p-switch>

            </div>
            <div class="col-md-4">
              <p class="category">With Icons</p>
              <p-switch v-model="switches.withIconsOn">
                <i class="fa fa-check" slot="on"></i>
                <i class="fa fa-times" slot="off"></i>
              </p-switch>
              <p-switch v-model="switches.withIconsOff">
                <i class="fa fa-check" slot="on"></i>
                <i class="fa fa-times" slot="off"></i>
              </p-switch>
            </div>
          </div>
          <div class="col-md-3">
            <h4 class="card-title">Checkboxes</h4>
            <p-checkbox :checked="false">Unchecked</p-checkbox>
            <p-checkbox :checked="true">Checked</p-checkbox>

            <p-checkbox disabled :checked="false">Disabled unchecked</p-checkbox>
            <p-checkbox disabled :checked="true">Disabled checked</p-checkbox>
          </div>
          <div class="col-sm-3">
            <h4 class="card-title">Radio</h4>
            <p-radio v-model="enabledRadio" label="1">Radio is off</p-radio>
            <p-radio v-model="enabledRadio" label="2">Radio is on</p-radio>

            <p-radio disabled v-model="disabledRadio" label="1">Disabled radio is off</p-radio>
            <p-radio disabled v-model="disabledRadio" label="2">Disabled radio is on</p-radio>

          </div>
        </div>

        <br/><br/>

        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Tags</h4>

            <el-tag
              :key="tag"
              v-for="tag in tags.dynamicTags"
              type="primary"
              :closable="true"
              :close-transition="false"
              @close="handleClose(tag)"
            >
              {{tag}}
            </el-tag>

            <input type="text" placeholder="Add new tag" class="form-control input-new-tag"
                   v-model="tags.inputValue"
                   ref="saveTagInput"
                   size="mini"
                   @keyup.enter="handleInputConfirm"
                   @blur="handleInputConfirm"/>
            <br/>
            <h4 class="card-title">Progress Bars</h4>
            <p-progress :value="30"></p-progress>
            <p-progress :value="60" type="info"></p-progress>
            <p-progress
              :values="[{type:'success', value:35},{type:'warning', value:20}, {type:'danger', value: 10}]">
            </p-progress>

            <br/>
            <h4 class="card-title">Sliders</h4>
            <el-slider class="slider-success"
                       v-model="sliders.simple">
            </el-slider>
            <br>
            <el-slider class="slider-info"
                       v-model="sliders.rangeSlider"
                       :max="100"
                       range>
            </el-slider>

          </div>
          <div class="col-md-6">
            <h4 class="card-title">Customisable Select</h4>
            <div class="row">
              <div class="col-sm-6">
                <el-select class="select-danger"
                           size="large"
                           placeholder="Single Select"
                           v-model="selects.simple">
                  <el-option v-for="option in selects.countries"
                             class="select-danger"
                             :value="option.value"
                             :label="option.label"
                             :key="option.label">
                  </el-option>
                </el-select>
              </div>
              <div class="col-sm-6">
                <el-select multiple class="select-primary"
                           size="large"
                           v-model="selects.multiple"
                           placeholder="Multiple Select">
                  <el-option v-for="option in selects.countries"
                             class="select-primary"
                             :value="option.value"
                             :label="option.label"
                             :key="option.label">
                  </el-option>
                </el-select>
              </div>
              <div class="col-sm-6">
                <br/>
                <h4 class="card-title">Dropdown</h4>
                <drop-down>
                  <button slot="title" class="btn btn-block dropdown-toggle" data-toggle="dropdown">
                    Regular
                    <b class="caret"></b>
                  </button>
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)">Separated link</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)">One more separated link</a></li>
                </drop-down>
              </div>
              <div class="col-sm-6">
                <br/>
                <h4 class="card-title">Dropup</h4>
                <drop-down slide="up">
                  <button slot="title" class="btn btn-block dropdown-toggle" data-toggle="dropdown">
                    Regular
                    <b class="caret"></b>
                  </button>
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)">Separated link</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)">One more separated link</a></li>
                </drop-down>
              </div>
            </div>
          </div>
        </div>

        <br/><br/>
      </div>
    </div> <!-- end card -->
  </div>
</template>
<script>
  import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
  import PProgress from 'src/components/UIComponents/Progress.vue'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  export default {
    components: {
      [DatePicker.name]: DatePicker,
      [TimeSelect.name]: TimeSelect,
      [Slider.name]: Slider,
      [Tag.name]: Tag,
      [Input.name]: Input,
      [Button.name]: Button,
      [Option.name]: Option,
      [Select.name]: Select,
      PSwitch,
      PProgress
    },
    data () {
      return {
        enabledRadio: '2',
        disabledRadio: '2',
        switches: {
          defaultOn: true,
          defaultOff: false,
          plainOn: true,
          plainOff: false,
          withIconsOn: true,
          withIconsOff: false
        },
        sliders: {
          simple: 30,
          rangeSlider: [20, 50]
        },
        selects: {
          simple: '',
          countries: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
            {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
            {value: 'Català', label: 'Català'},
            {value: 'Dansk', label: 'Dansk'},
            {value: 'Deutsch', label: 'Deutsch'},
            {value: 'English', label: 'English'},
            {value: 'Español', label: 'Español'},
            {value: 'Eλληνικά', label: 'Eλληνικά'},
            {value: 'Français', label: 'Français'},
            {value: 'Italiano', label: 'Italiano'},
            {value: 'Magyar', label: 'Magyar'},
            {value: 'Nederlands', label: 'Nederlands'},
            {value: 'Norsk', label: 'Norsk'},
            {value: 'Polski', label: 'Polski'},
            {value: 'Português', label: 'Português'},
            {value: 'Suomi', label: 'Suomi'},
            {value: 'Svenska', label: 'Svenska'},
            {value: 'Türkçe', label: 'Türkçe'},
            {value: 'Íslenska', label: 'Íslenska'},
            {value: 'Čeština', label: 'Čeština'},
            {value: 'Русский', label: 'Русский'},
            {value: 'ภาษาไทย', label: 'ภาษาไทย'},
            {value: '中文 (简体)', label: '中文 (简体)'},
            {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
            {value: '日本語', label: '日本語'},
            {value: '한국어', label: '한국어'}],
          multiple: 'ARS'
        },
        tags: {
          dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
          inputVisible: false,
          inputValue: ''
        },
        pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        datePicker: '',
        dateTimePicker: '',
        timePicker: ''
      }
    },
    methods: {
      handleClose (tag) {
        this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1)
      },

      showInput () {
        this.tags.inputVisible = true
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm () {
        let inputValue = this.tags.inputValue
        if (inputValue) {
          this.tags.dynamicTags.push(inputValue)
        }
        this.tags.inputVisible = false
        this.tags.inputValue = ''
      }
    }
  }
</script>
<style>
  .extended-forms .el-select {
    width: 100%;
    margin-bottom: 30px;
  }
</style>
