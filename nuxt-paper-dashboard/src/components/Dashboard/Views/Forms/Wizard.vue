<template>
  <div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="card card-wizard" id="wizardCard">
          <form-wizard shape="tab"
                       @on-complete="wizardComplete"
                       error-color="#EB5E28"
                       color="#66615B">
            <tab-content title="Personal details"
                         :before-change="validateFirstStep"
                         icon="ti-user">
              <first-step ref="firstStep"></first-step>
            </tab-content>

            <tab-content title="Additional Info"
                         :before-change="validateSecondStep"
                         icon="ti-settings">
              <second-step ref="secondStep"></second-step>
            </tab-content>

            <tab-content title="Last step"
                         icon="ti-check">
              <h2 class="text-center text-space">Yuhuuu!
                <br>
                <small>Click on "<b>Finish</b>" to join our community</small>
              </h2>
            </tab-content>

            <button slot="prev" class="btn btn-default btn-fill btn-wd btn-back">Back</button>
            <button slot="next" class="btn btn-info btn-fill btn-wd btn-next">Next</button>
            <button slot="finish" class="btn btn-info btn-fill btn-wd">Finish</button>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import FirstStep from './Wizard/FirstStep.vue'
  import SecondStep from './Wizard/SecondStep.vue'
  import swal from 'sweetalert2'

  export default {
    data () {
      return {
        wizardModel: {}
      }
    },
    components: {
      FormWizard,
      TabContent,
      FirstStep,
      SecondStep
    },
    methods: {
      validateFirstStep () {
        return this.$refs.firstStep.validate()
      },
      validateSecondStep () {
        return this.$refs.secondStep.validate()
      },
      wizardComplete () {
        // we gather models from all steps into one model
        this.wizardModel = {
          ...this.$refs.firstStep.model,
          ...this.$refs.secondStep.model
        }
        swal('Good job!', 'You clicked the finish button!', 'success')
      }
    }
  }
</script>
<style>
  .vue-form-wizard .wizard-icon-circle.tab_shape {
    background-color: #9A9A9A !important;
    color: white;
  }
</style>
