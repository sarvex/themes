<template>
  <div class="row">
    <div class="col-md-6">
      <card>
        <h4 slot="header" class="card-title">
          Stacked Form
        </h4>

        <fg-input placeholder="Enter email" label="Email address"></fg-input>
        <fg-input placeholder="Password" label="Password" type="password"></fg-input>

        <p-checkbox>Subscribe to newsletter</p-checkbox>

        <p-button type="info" round>Submit</p-button>

      </card> <!-- end card -->
    </div> <!--  end col-md-6  -->
    <div class="col-md-6">
      <card>
        <form class="form-horizontal">
          <h4 slot="header" class="card-title">
            Horizontal Form
          </h4>
          <div class="row">
            <label class="col-md-3 col-form-label">Username</label>
            <div class="col-md-9">
              <fg-input placeholder="Username"></fg-input>
            </div>

            <label class="col-md-3 col-form-label">Email</label>
            <div class="col-md-9">
              <fg-input placeholder="Email"></fg-input>
            </div>


            <label class="col-md-3 col-form-label">Password</label>
            <div class="col-md-9">
              <fg-input placeholder="Password"></fg-input>
            </div>

            <label class="col-md-3 col-form-label"></label>
            <div class="col-md-9">
              <fg-input placeholder="Password">
                <p-checkbox>Remember me</p-checkbox>
              </fg-input>
            </div>
          </div>

          <div slot="footer" class="row">
            <label class="col-md-3"></label>
            <div class="col-md-9">
              <p-button type="info" round>
                Sign in
              </p-button>
            </div>
          </div>
        </form>
      </card> <!-- end card -->
    </div> <!--  end col-md-6  -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Form Elements</h4>
        </div>
        <div class="card-body">
          <form method="get" action="/" class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">With help</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control">
                  <span class="help-block">A block of help text that breaks onto a new line.</span>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" name="password" class="form-control">
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Placeholder</label>
                <div class="col-sm-10">
                  <input type="text" placeholder="placeholder" class="form-control">
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Disabled</label>
                <div class="col-sm-10">
                  <input type="text" placeholder="Disabled input here..." disabled="" class="form-control">
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">static/ control</label>
                <div class="col-sm-10">
                  <p class="form-control-static/">hello@creative-tim.com</p>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Checkboxes and radios</label>
                <div class="col-sm-10">
                  <p-checkbox v-model="checkboxes.first">First checkbox</p-checkbox>
                  <p-checkbox v-model="checkboxes.second">Second checkbox</p-checkbox>

                  <p-radio label="1" v-model="radios.radio1">First Radio</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Second Radio</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Inline checkboxes</label>
                <div class="col-sm-10">
                  <p-checkbox v-model="checkboxes.a" :inline="true">a</p-checkbox>
                  <p-checkbox v-model="checkboxes.b" :inline="true">b</p-checkbox>
                  <p-checkbox v-model="checkboxes.c" :inline="true">c</p-checkbox>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Input Variants</legend>

              <div class="form-group">
                <label class="col-sm-2 control-label">Custom Checkboxes &amp; radios</label>
                <div class="col-sm-4 col-sm-offset-1">
                  <p-checkbox v-model="checkboxes.unchecked">Unchecked</p-checkbox>
                  <p-checkbox v-model="checkboxes.checked">Unchecked</p-checkbox>
                  <p-checkbox v-model="checkboxes.disabledUnchecked" :disabled="true">Disabled unchecked</p-checkbox>
                  <p-checkbox v-model="checkboxes.disabledChecked" :disabled="true">Disabled checked</p-checkbox>
                </div>

                <div class="col-sm-5">
                  <p-radio label="1" v-model="radios.radio2">Radio is off</p-radio>
                  <p-radio label="2" v-model="radios.radio2">Radio is on</p-radio>

                  <p-radio label="1" v-model="radios.radio2" :disabled="true">Disabled radio is off</p-radio>
                  <p-radio label="2" v-model="radios.radio2" :disabled="true">Disabled radio is on</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group has-success">
                <label class="col-sm-2 control-label">Input with success</label>
                <div class="col-sm-10">
                  <input type="text" value="Success" class="form-control"/>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label class="col-sm-2 control-label text-danger">Input with error</label>
              <div class="col-sm-10">
                <fg-input error="Input error" value="Error">

                </fg-input>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group column-sizing">
                <label class="col-sm-2 control-label">Column sizing</label>
                <div class="col-sm-10">
                  <div class="row">
                    <div class="col-md-3">
                      <input type="text" placeholder=".col-md-3" class="form-control">
                    </div>
                    <div class="col-md-4">
                      <input type="text" placeholder=".col-md-4" class="form-control">
                    </div>
                    <div class="col-md-5">
                      <input type="text" placeholder=".col-md-5" class="form-control">
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Input groups</label>
                <div class="col-sm-3">
                  <fg-input placeholder="Username">
                      <template slot="addonLeft">@</template>
                  </fg-input>
                </div>
                <div class="col-sm-3">
                  <fg-input>
                    <template slot="addonRight">.00</template>
                  </fg-input>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Textarea</label>
                <div class="col-sm-10">
                  <textarea class="form-control" placeholder="Here can be your nice text" rows="3"></textarea>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>  <!-- end card -->
    </div> <!-- end col-md-12 -->
  </div>
</template>
<script>
  import { Card } from 'src/components/UIComponents'

  export default {
    components: {
      Card
    },
    data() {
      return {
        radios: {
          radio1: '1',
          radio2: '2',
          radio3: '2'
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
      }
    }
  }
</script>
<style>
</style>
