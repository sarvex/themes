<template>
  <div class="row">
    <div class="col-md-6">
      <card class="stacked-form" title="Stacked Form">
        <h4 slot="header" class="card-title">Stacked Form</h4>
        <form @submit.prevent>
          <div>
            <base-input
              label="Email address"
              type="email"
              placeholder="Enter email"
            >
            </base-input>
            <base-input label="Password" type="password" placeholder="Password">
            </base-input>
            <div class="form-group">
              <base-checkbox>Subscribe to newsletter</base-checkbox>
            </div>
            <base-button class="mt-3" native-type="submit" type="primary"
              >Submit</base-button
            >
          </div>
        </form>
      </card>
    </div>
    <div class="col-md-6">
      <card title="Horizontal Form">
        <h4 slot="header" class="card-title">Horizontal Form</h4>
        <form class="form-horizontal" action="#" method="#" @submit.prevent>
          <div class="row">
            <label class="col-md-3 col-form-label">Username</label>
            <div class="col-md-9">
              <base-input placeholder="Username"> </base-input>
            </div>
          </div>

          <div class="row">
            <label class="col-md-3 col-form-label">Email</label>
            <div class="col-md-9">
              <base-input placeholder="Email" type="email"> </base-input>
            </div>
          </div>

          <div class="row">
            <label class="col-md-3 col-form-label">Password</label>
            <div class="col-md-9">
              <base-input placeholder="Password" type="password"> </base-input>
            </div>
          </div>

          <div class="row">
            <label class="col-md-3 col-form-label"></label>
            <div class="col-md-9">
              <base-checkbox>Remember me</base-checkbox>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-md-9 offset-md-3 col-12">
            <base-button class="mt-3" native-type="submit" type="primary">
              Sign in
            </base-button>
          </div>
        </div>
      </card>
    </div>
    <!-- end card -->
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
                <base-input placeholder="Enter email">
                  <span slot="helpBlock" class="form-text"
                    >A block of help text that breaks onto a new line.
                  </span>
                </base-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <base-input type="password" value="password"> </base-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Placeholder</label>
              <div class="col-sm-10">
                <base-input placeholder="Placeholder"> </base-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Disabled</label>
              <div class="col-sm-10">
                <base-input value="Disabled input here.." disabled>
                </base-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Static Control</label>
              <div class="col-sm-10">
                <base-input>
                  <p class="form-control-static">hello@creative-tim.com</p>
                </base-input>
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label"
                >Checkboxes and radios</label
              >
              <div class="col-sm-10 checkbox-radios">
                <base-checkbox v-model="checkboxes.first"
                  >First checkbox</base-checkbox
                >
                <base-checkbox v-model="checkboxes.second"
                  >Second checkbox</base-checkbox
                >

                <base-radio name="1" v-model="radios.radio1"
                  >First Radio</base-radio
                >
                <base-radio name="2" v-model="radios.radio1"
                  >Second Radio</base-radio
                >
              </div>
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">Inline checkboxes</label>
              <div class="col-sm-10 checkbox-radios">
                <base-checkbox v-model="checkboxes.a" inline>a</base-checkbox>
                <base-checkbox v-model="checkboxes.b" inline>b</base-checkbox>
                <base-checkbox v-model="checkboxes.c" inline>c</base-checkbox>
              </div>
            </div>
          </form>
        </div>
      </card>
      <!-- end card -->
    </div>
    <div class="col-md-12">
      <card>
        <h4 slot="header" class="card-title">Input Variants</h4>
        <form method="get" action="/" class="form-horizontal">
          <div class="row">
            <label class="col-sm-2 col-form-label"
              >Custom Checkboxes &amp; radios</label
            >
            <div class="col-sm-4 col-sm-offset-1 checkbox-radios">
              <base-checkbox>Unchecked</base-checkbox>
              <base-checkbox :checked="true">Checked</base-checkbox>
              <base-checkbox disabled>Disabled Checked</base-checkbox>
              <base-checkbox disabled :checked="true"
                >Disabled Checked</base-checkbox
              >
            </div>

            <div class="col-sm-5 checkbox-radios">
              <base-radio v-model="radios.radioOn" name="1"
                >Radio is On</base-radio
              >
              <base-radio v-model="radios.radioOn" name="2"
                >Radio is Off</base-radio
              >

              <base-radio v-model="radios.radioOff" name="1" disabled
                >Radio is On</base-radio
              >
              <base-radio v-model="radios.radioOff" name="2" disabled
                >Radio is Off</base-radio
              >
            </div>
          </div>

          <div class="row">
            <label class="col-sm-2 col-form-label">Input with success</label>
            <div class="col-sm-10">
              <base-input class="has-success" value="Success"></base-input>
            </div>
          </div>

          <div class="row">
            <label class="col-sm-2 col-form-label">Input with error</label>
            <div class="col-sm-10">
              <base-input class="has-danger" value="Error"></base-input>
            </div>
          </div>

          <div class="row">
            <label class="col-sm-2 col-form-label">Column sizing</label>

            <div class="col-sm-10">
              <div class="row">
                <div class="col-md-3">
                  <base-input placeholder=".col-md-3"></base-input>
                </div>

                <div class="col-md-4">
                  <base-input placeholder=".col-md-4"></base-input>
                </div>

                <div class="col-md-5">
                  <base-input placeholder=".col-md-5"></base-input>
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
import { BaseCheckbox, BaseRadio } from 'src/components/index';

export default {
  components: {
    BaseCheckbox,
    BaseRadio
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
<style></style>
