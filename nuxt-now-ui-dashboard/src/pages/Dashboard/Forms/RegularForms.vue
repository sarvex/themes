<template>
  <div class="row">
    <div class="col-md-6">
      <card class="stacked-form" title="Stacked Form">
        <h4 slot="header" class="card-title">
          Stacked Form
        </h4>
        <form method="#" action="#" @submit.prevent>
          <div>
            <fg-input label="Email address"
                      type="email"
                      placeholder="Enter email">
            </fg-input>
            <fg-input label="Password"
                      type="password"
                      placeholder="Password">
            </fg-input>
            <div class="form-group">
              <checkbox>Subscribe to newsletter</checkbox>
            </div>
            <n-button type="primary">Submit</n-button>
          </div>
        </form>
      </card>
    </div>
    <div class="col-md-6">
      <card title="Horizontal Form">
        <h4 slot="header" class="card-title">
          Horizontal Form
        </h4>
        <form class="form-horizontal" action="#" method="#" @submit.prevent>
          <div class="row">
            <label class="col-md-3 col-form-label">Username</label>
            <div class="col-md-9">
              <fg-input placeholder="Username">
              </fg-input>
            </div>
          </div>

          <div class="row">
            <label class="col-md-3 col-form-label">Email</label>
            <div class="col-md-9">
              <fg-input placeholder="Email" type="email">
              </fg-input>
            </div>
          </div>

          <div class="row">
            <label class="col-md-3 col-form-label">Password</label>
            <div class="col-md-9">
              <fg-input placeholder="Password" type="password">
              </fg-input>
            </div>
          </div>

          <div class="row">
            <label class="col-md-3 col-form-label"></label>
            <div class="col-md-9">
                <checkbox>Remember me</checkbox>
            </div>
          </div>


        </form>
        <div class="row">
          <div class="col-md-9 offset-md-3 col-12">
            <n-button native-type="submit" type="primary">
              Sign in
            </n-button>
          </div>
        </div>
      </card>
    </div> <!-- end card -->
    <div class="col-md-12">
      <card>
        <template slot="header">
          <h4 class="card-title">Form Elements</h4>
        </template>
        <div>
          <form method="get" action="/" class="form-horizontal">
            <div class="row">
              <label class="col-sm-2 col-form-label">With help</label>
              <div class="col-sm-10">
                <fg-input placeholder="Enter email">
                  <span slot="helpBlock" class="form-text">A block of help text that breaks onto a new line.
                  </span>
                </fg-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <fg-input type="password" value="password">
                </fg-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Placeholder</label>
              <div class="col-sm-10">
                <fg-input placeholder="Placeholder">
                </fg-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Disabled</label>
              <div class="col-sm-10">
                <fg-input value="Disabled input here.." disabled>
                </fg-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Static Control</label>
              <div class="col-sm-10">
                <fg-input>
                  <p class="form-control-static">hello@creative-tim.com</p>
                </fg-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Checkboxes and radios</label>
              <div class="col-sm-10 checkbox-radios">
                  <checkbox v-model="checkboxes.first">First checkbox</checkbox>
                  <checkbox v-model="checkboxes.second">Second checkbox</checkbox>

                  <radio label="1" v-model="radios.radio1">First Radio</radio>
                  <radio label="2" v-model="radios.radio1">Second Radio</radio>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Inline checkboxes</label>
              <div class="col-sm-10 checkbox-radios">
                <checkbox v-model="checkboxes.a" inline>a</checkbox>
                <checkbox v-model="checkboxes.b" inline>b</checkbox>
                <checkbox v-model="checkboxes.c" inline>c</checkbox>
              </div>
            </div>

          </form>
        </div>
      </card>  <!-- end card -->
    </div>
    <div class="col-md-12">
      <card>
        <h4 slot="header" class="card-title">Input Variants</h4>
        <form method="get" action="/" class="form-horizontal">
          <div class="row">
            <label class="col-sm-2 col-form-label">Custom Checkboxes &amp; radios</label>
            <div class="col-sm-4 col-sm-offset-1 checkbox-radios">
              <checkbox>Unchecked</checkbox>
              <checkbox :checked="true">Checked</checkbox>
              <checkbox disabled>Disabled Checked</checkbox>
              <checkbox disabled :checked="true">Disabled Checked</checkbox>
            </div>

            <div class="col-sm-5 checkbox-radios">
              <radio v-model="radios.radioOn" label="1">Radio is On</radio>
              <radio v-model="radios.radioOn" label="2">Radio is Off</radio>

              <radio v-model="radios.radioOff" label="1" disabled>Radio is On</radio>
              <radio v-model="radios.radioOff" label="2" disabled>Radio is Off</radio>
            </div>
          </div>

          <div class="row">
            <label class="col-sm-2 col-form-label">Input with success</label>
            <div class="col-sm-10">
              <fg-input class="has-success" value="Success"></fg-input>
            </div>
          </div>

          <div class="row">
            <label class="col-sm-2 col-form-label">Input with error</label>
            <div class="col-sm-10">
              <fg-input class="has-danger" value="Error"></fg-input>
            </div>
          </div>

          <div class="row">
            <label class="col-sm-2 col-form-label">Column sizing</label>

            <div class="col-sm-10">
              <div class="row">
                <div class="col-md-3">
                  <fg-input placeholder=".col-md-3"></fg-input>
                </div>

                <div class="col-md-4">
                  <fg-input placeholder=".col-md-4"></fg-input>
                </div>

                <div class="col-md-5">
                  <fg-input placeholder=".col-md-5"></fg-input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>
<script>
import { Checkbox, Radio } from 'src/components/index';

export default {
  components: {
    Checkbox,
    Radio
  },
  data() {
    return {
      radios: {
        radio1: '1',
        radio2: '2',
        radio3: '2',
        radioOn: '2',
        radioOff: '2'
      },
      checkboxes: {
        first: false,
        second: false,
        a: false,
        b: false,
        c: false,
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true
      }
    };
  }
};
</script>
<style>
</style>
