<template>
  <div class="extended-forms">
    <div class="row">
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Datetimepicker</h4>
          <base-input>
            <el-date-picker
              type="datetime"
              placeholder="Date Time Picker"
              v-model="dateTimePicker"
            >
            </el-date-picker>
          </base-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Date Picker</h4>
          <base-input>
            <el-date-picker
              type="date"
              placeholder="Date Picker"
              v-model="datePicker"
            >
            </el-date-picker>
          </base-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Time Picker</h4>
          <base-input>
            <el-time-select placeholder="Time Picker" v-model="timePicker">
            </el-time-select>
          </base-input>
        </card>
      </div>
    </div>
    <card>
      <div class="col-12">
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Toggle Buttons</h4>
            <div class="row">
              <div class="col-md-4">
                <p class="category">Default</p>
                <base-switch
                  v-model="switches.defaultOn"
                  type="primary"
                  on-text="ON"
                  off-text="OFF"
                ></base-switch>
                &nbsp;
                <base-switch
                  v-model="switches.defaultOff"
                  type="primary"
                  on-text="ON"
                  off-text="OFF"
                ></base-switch>
              </div>
              <div class="col-md-4">
                <p class="category">Plain</p>
                <base-switch v-model="switches.plainOn"></base-switch>
                &nbsp;
                <base-switch v-model="switches.plainOff"></base-switch>
              </div>
              <div class="col-md-4">
                <p class="category">With Icons</p>
                <base-switch v-model="switches.withIconsOn">
                  <i class="tim-icons icon-check-2" slot="on"></i>
                  <i class="tim-icons icon-simple-remove" slot="off"></i>
                </base-switch>
                &nbsp;
                <base-switch v-model="switches.withIconsOff">
                  <i class="tim-icons icon-check-2" slot="on"></i>
                  <i class="tim-icons icon-simple-remove" slot="off"></i>
                </base-switch>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Customisable Select</h4>
            <div class="row">
              <div class="col-md-6">
                <el-select
                  class="select-primary"
                  size="large"
                  placeholder="Single Select"
                  v-model="selects.simple"
                >
                  <el-option
                    v-for="option in selects.countries"
                    class="select-primary"
                    :value="option.value"
                    :label="option.label"
                    :key="option.label"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="col-md-6">
                <el-select
                  multiple
                  class="select-info"
                  size="large"
                  v-model="selects.multiple"
                  collapse-tags
                  placeholder="Multiple Select"
                >
                  <el-option
                    v-for="option in selects.countries"
                    class="select-info"
                    :value="option.value"
                    :label="option.label"
                    :key="option.label"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Tags</h4>

            <tags-input v-model="tags.dynamicTags"></tags-input>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Dropdown &amp; Dropup</h4>

            <div class="row">
              <div class="col-xl-4 col-md-6">
                <base-dropdown
                  title-classes="dropdown-toggle btn btn-primary btn-block"
                  title="Dropdown"
                >
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </base-dropdown>
              </div>

              <div class="col-xl-4 col-md-6">
                <base-dropdown
                  direction="up"
                  title="Dropup"
                  title-classes="dropdown-toggle btn btn-primary btn-block"
                >
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </base-dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Progress Bars</h4>
            <base-progress label="Default" value-position="right" :value="25" />
            <base-progress
              label="Primary"
              :value="60"
              value-position="right"
              type="primary"
            />
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Sliders</h4>
            <slider v-model="sliders.simple"> </slider> <br />
            <slider
              v-model="sliders.rangeSlider"
              type="primary"
              :connect="true"
            >
            </slider>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <h4 class="card-title">Regular Image</h4>
            <image-upload @change="onImageChange" select-text="Select Image" />
          </div>
          <div class="col-md-4 col-sm-4">
            <h4 class="card-title">Avatar</h4>
            <image-upload
              type="avatar"
              select-text="Add photo"
              @change="onAvatarChange"
            />
          </div>
        </div>
      </div>
    </card>
    <!-- end card -->
  </div>
</template>
<script>
import { TimeSelect, DatePicker, Select, Option } from 'element-ui';
import {
  BaseProgress,
  BaseSwitch,
  Slider,
  ImageUpload,
  TagsInput
} from 'src/components/index';

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Option.name]: Option,
    [Select.name]: Select,
    BaseSwitch,
    BaseProgress,
    ImageUpload,
    TagsInput,
    Slider
  },
  data() {
    return {
      enabledRadio: '2',
      disabledRadio: '2',
      images: {
        regular: null,
        avatar: null
      },
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
        rangeSlider: [20, 60]
      },
      selects: {
        simple: '',
        countries: [
          { value: 'Bahasa Indonesia', label: 'Bahasa Indonesia' },
          { value: 'Bahasa Melayu', label: 'Bahasa Melayu' },
          { value: 'Català', label: 'Català' },
          { value: 'Dansk', label: 'Dansk' },
          { value: 'Deutsch', label: 'Deutsch' },
          { value: 'English', label: 'English' },
          { value: 'Español', label: 'Español' },
          { value: 'Eλληνικά', label: 'Eλληνικά' },
          { value: 'Français', label: 'Français' },
          { value: 'Italiano', label: 'Italiano' },
          { value: 'Magyar', label: 'Magyar' },
          { value: 'Nederlands', label: 'Nederlands' },
          { value: 'Norsk', label: 'Norsk' },
          { value: 'Polski', label: 'Polski' },
          { value: 'Português', label: 'Português' },
          { value: 'Suomi', label: 'Suomi' },
          { value: 'Svenska', label: 'Svenska' },
          { value: 'Türkçe', label: 'Türkçe' },
          { value: 'Íslenska', label: 'Íslenska' },
          { value: 'Čeština', label: 'Čeština' },
          { value: 'Русский', label: 'Русский' },
          { value: 'ภาษาไทย', label: 'ภาษาไทย' },
          { value: '中文 (简体)', label: '中文 (简体)' },
          { value: 'W">中文 (繁體)', label: 'W">中文 (繁體)' },
          { value: '日本語', label: '日本語' },
          { value: '한국어', label: '한국어' }
        ],
        multiple: 'ARS'
      },
      tags: {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3']
      },
      datePicker: '',
      dateTimePicker: '',
      timePicker: ''
    };
  },
  methods: {
    onImageChange(file) {
      this.images.regular = file;
    },
    onAvatarChange(file) {
      this.images.avatar = file;
    }
  }
};
</script>
<style>
.extended-forms .el-select {
  width: 100%;
  margin-bottom: 30px;
}

.extended-forms .progress {
  margin-bottom: 30px;
}
</style>
