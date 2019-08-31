<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>mail_outline</md-icon>
          </div>
          <h4 class="title">Stacked Form</h4>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Email Adress</label>
            <md-input v-model="emailadress" type="email"></md-input>
          </md-field>
          <md-field>
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
          <md-checkbox v-model="boolean">Subscribe to newsletter</md-checkbox>
        </md-card-content>

        <md-card-actions md-alignment="left">
          <md-button class="md-success">Submit</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>contacts</md-icon>
          </div>
          <h4 class="title">Horizontal Form</h4>
        </md-card-header>

        <md-card-content>
          <form class="form-horizontal" action="" method="post">
            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Email Adress
              </label>
              <div class="md-layout-item">
                <md-field>
                  <md-input v-model="emailadress1" type="email"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Password
              </label>
              <div class="md-layout-item">
                <md-field>
                  <md-input v-model="password1" type="password"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label"> </label>
              <div class="md-layout-item">
                <md-checkbox v-model="boolean1">Remember Me</md-checkbox>
              </div>
            </div>
          </form>
        </md-card-content>

        <md-card-actions md-alignment="left">
          <md-button class="md-success">Sign In</md-button>
        </md-card-actions>
      </md-card>
    </div>

    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Form Elements</h4>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              With Help
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="helper" type="text"></md-input>
                <span class="md-helper-text"
                  >A block of help text that breaks onto a new line.</span
                >
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Password
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="password2" type="password"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Placeholder
            </label>
            <div class="md-layout-item">
              <md-field>
                <label>With label</label>
                <md-input
                  v-model="placeholder"
                  placeholder="placeholder"
                ></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Disabled
            </label>
            <div class="md-layout-item">
              <md-field>
                <label>Disabled input here..</label>
                <md-input v-model="disabled" disabled></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Static Control
            </label>
            <div class="md-layout-item">
              <p class="form-control-static">hello@creative-tim.com</p>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Checkboxes and Radios
            </label>
            <div class="md-layout-item">
              <md-checkbox v-model="checkbox1">First Checkbox</md-checkbox>
              <md-checkbox v-model="checkbox2">Second Checkbox</md-checkbox>
              <md-radio v-model="radio" :value="false">First Radio</md-radio>
              <md-radio v-model="radio" :value="true">Second Radio</md-radio>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Inline Checkboxes
            </label>
            <div class="md-layout-item md-inline-checkboxes">
              <md-checkbox v-model="checkbox3">a</md-checkbox>
              <md-checkbox v-model="checkbox4">b</md-checkbox>
              <md-checkbox v-model="checkbox5">c</md-checkbox>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Input Variants</h4>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Custom Checkboxes & Radios
            </label>
            <div class="md-layout-item">
              <md-checkbox v-model="checkbox6">Checked</md-checkbox>
              <md-checkbox v-model="checkbox7">Unchecked</md-checkbox>
              <md-checkbox v-model="checkbox8" disabled
                >Disabled Checked</md-checkbox
              >
              <md-checkbox v-model="checkbox9" disabled
                >Disabled Unchecked</md-checkbox
              >
            </div>
            <div class="md-layout-item">
              <md-radio v-model="radio1" :value="true">Radio is on</md-radio>
              <md-radio v-model="radio1" :value="false">Radio is off</md-radio>
              <md-radio v-model="radio2" :value="true" disabled
                >Disabled Radio is on</md-radio
              >
              <md-radio v-model="radio2" :value="false" disabled
                >Disabled Radio is off</md-radio
              >
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Input with success
            </label>
            <div class="md-layout-item">
              <md-field class="md-valid">
                <label>Success Input</label>
                <md-input v-model="success" type="text"></md-input>
                <md-icon>done</md-icon>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Input with error
            </label>
            <div class="md-layout-item">
              <md-field class="md-error">
                <label>Error Input</label>
                <md-input v-model="error" type="text"></md-input>
                <md-icon>clear</md-icon>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Column sizing
            </label>
            <div class="md-layout-item md-size-20">
              <md-field>
                <label>.md-size-20</label>
                <md-input v-model="layout1" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-25">
              <md-field>
                <label>.md-size-25</label>
                <md-input v-model="layout2" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-40">
              <md-field>
                <label>.md-size-40</label>
                <md-input v-model="layout3" type="text"></md-input>
              </md-field>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      layout1: null,
      layout2: null,
      layout3: null,
      emailadress: null,
      emailadress1: null,
      placeholder: null,
      password: null,
      success: null,
      error: null,
      password1: null,
      password2: null,
      boolean: false,
      disabled: null,
      boolean1: false,
      helper: null,
      checkbox1: null,
      checkbox2: null,
      checkbox3: null,
      checkbox4: null,
      checkbox5: null,
      checkbox6: true,
      checkbox7: null,
      checkbox8: true,
      checkbox9: null,
      radio: true,
      radio1: true,
      radio2: true
    };
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.md-inline-checkboxes {
  display: inline-flex;

  .md-checkbox {
    margin-top: 15px !important;
  }
}

.md-checkbox,
.md-radio {
  margin-top: 15px;
  margin-bottom: 0.5rem;
}

.md-checkbox,
.md-radio {
  display: flex;
}

.md-radio /deep/ .md-radio-container {
  margin-left: 5px;
  position: relative;
  left: -3px;
}

.md-form-label + .md-layout-item .md-checkbox:not(:first-child),
.md-form-label + .md-layout-item + .md-layout-item .md-radio:not(:first-child),
.md-form-label + .md-layout-item .md-radio {
  margin-top: 0;
}

.form-control-static {
  margin-top: 6px;
}
</style>
