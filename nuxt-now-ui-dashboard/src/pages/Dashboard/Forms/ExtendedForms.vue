<template>
  <div class="extended-forms">
    <div class="row">
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Datetimepicker</h4>
          <fg-input>
            <el-date-picker
              type="datetime"
              placeholder="Date Time Picker"
              v-model="dateTimePicker">
            </el-date-picker>
          </fg-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Date Picker</h4>
          <fg-input>
            <el-date-picker
              type="date"
              placeholder="Date Picker"
              v-model="datePicker">
            </el-date-picker>
          </fg-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Time Picker</h4>
          <fg-input>
            <el-time-select
              placeholder="Time Picker"
              v-model="timePicker">
            </el-time-select>
          </fg-input>
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
                <n-switch v-model="switches.defaultOn" type="primary" on-text="ON" off-text="OFF"></n-switch>
                <n-switch v-model="switches.defaultOff" type="primary" on-text="ON" off-text="OFF"></n-switch>
              </div>
              <div class="col-md-4">
                <p class="category">Plain</p>
                <n-switch v-model="switches.plainOn"></n-switch>
                <n-switch v-model="switches.plainOff"></n-switch>

              </div>
              <div class="col-md-4">
                <p class="category">With Icons</p>
                <n-switch v-model="switches.withIconsOn">
                  <i class="now-ui-icons ui-1_check" slot="on"></i>
                  <i class="now-ui-icons ui-1_simple-remove" slot="off"></i>
                </n-switch>
                <n-switch v-model="switches.withIconsOff">
                  <i class="now-ui-icons ui-1_check" slot="on"></i>
                  <i class="now-ui-icons ui-1_simple-remove" slot="off"></i>
                </n-switch>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Customisable Select</h4>
            <div class="row">
              <div class="col-md-6">
                <el-select class="select-primary"
                           size="large"
                           placeholder="Single Select"
                           v-model="selects.simple">
                  <el-option v-for="option in selects.countries"
                             class="select-primary"
                             :value="option.value"
                             :label="option.label"
                             :key="option.label">
                  </el-option>
                </el-select>
              </div>
              <div class="col-md-6">
                <el-select multiple class="select-info"
                           size="large"
                           v-model="selects.multiple"
                           collapse-tags
                           placeholder="Multiple Select">
                  <el-option v-for="option in selects.countries"
                             class="select-info"
                             :value="option.value"
                             :label="option.label"
                             :key="option.label">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Tags</h4>

            <el-tag
              :key="tag"
              v-for="tag in tags.dynamicTags"
              size="small"
              type="danger"
              :closable="true"
              :close-transition="false"
              @close="handleClose(tag)"
            >
              {{tag}}
            </el-tag>

            <input type="text" placeholder="New Tag"
                   class="form-control input-new-tag"
                   v-model="tags.inputValue"
                   ref="saveTagInput"
                   size="mini"
                   @keyup.enter="handleInputConfirm"
                   @blur="handleInputConfirm"/>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Dropdown &amp; Dropup</h4>

            <div class="row">
              <div class="col-xl-4 col-md-6">
                <drop-down>
                  <n-button slot="title"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            type="primary"
                            block
                            round>
                    Dropdown
                  </n-button>
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </drop-down>
              </div>

              <div class="col-xl-4 col-md-6">
                <drop-down direction="up">
                  <n-button slot="title"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            type="primary"
                            block
                            round>
                    Dropup
                  </n-button>
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </drop-down>
              </div>
            </div>

          </div>

        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">Progress Bars</h4>
            <n-progress label="Default" :value="25" show-value></n-progress>
            <n-progress label="Primary" :value="60" type="primary" show-value></n-progress>
          </div>
          <div class="col-md-6">
            <h4 class="card-title">Sliders</h4>
            <slider v-model="sliders.simple">
            </slider>
            <br>
            <slider v-model="sliders.rangeSlider"
                    type="primary"
                    :connect="true">
            </slider>
            <br>
          </div>
        </div>
      </div>
    </card> <!-- end card -->
  </div>
</template>
<script>
import {
  TimeSelect,
  DatePicker,
  Tag,
  Input,
  Button,
  Select,
  Option
} from 'element-ui';
import {
  Progress,
  Switch,
  FormGroupInput as FgInput,
  Slider
} from 'src/components/index';

export default {
  components: {
    FgInput,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button,
    [Option.name]: Option,
    [Select.name]: Select,
    [Switch.name]: Switch,
    [Progress.name]: Progress,
    Slider
  },
  data() {
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
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      },
      datePicker: '',
      dateTimePicker: '',
      timePicker: ''
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.tags.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.tags.inputValue;
      if (inputValue) {
        this.tags.dynamicTags.push(inputValue);
      }
      this.tags.inputVisible = false;
      this.tags.inputValue = '';
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
