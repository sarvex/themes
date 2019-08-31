<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 mr-auto ml-auto">
          <wizard @complete="wizardComplete">
            <template slot="header">
              <h3 class="card-title">Build your profile</h3>
              <h3 class="description">This information will let us know more about you.</h3>
            </template>

            <wizard-tab :before-change="() => validateStep('step1')">
              <template slot="label">
                <i class="nc-icon nc-single-02"></i>
                About
              </template>
              <first-step ref="step1" @on-validated="onStepValidated"></first-step>
            </wizard-tab>

            <wizard-tab :before-change="() => validateStep('step2')">
              <template slot="label" >
                <i class="nc-icon nc-touch-id"></i>
                Account
              </template>
              <second-step ref="step2" @on-validated="onStepValidated"></second-step>
            </wizard-tab>

            <wizard-tab :before-change="() => validateStep('step3')">
              <template slot="label">
                <i class="nc-icon nc-pin-3"></i>
                Address
              </template>
              <third-step ref="step3"></third-step>
            </wizard-tab>
          </wizard>
      </div>
    </div>
  </div>
</template>
<script>
  import FirstStep from './Wizard/FirstStep.vue'
  import SecondStep from './Wizard/SecondStep.vue'
  import ThirdStep from './Wizard/ThirdStep.vue'
  import swal from 'sweetalert2'
  import {Wizard, WizardTab} from 'src/components/UIComponents'

  export default {
    data() {
      return {
        wizardModel: {}
      }
    },
    components: {
      FirstStep,
      SecondStep,
      ThirdStep,
      Wizard,
      WizardTab
    },
    methods: {
      validateStep(ref) {
        return this.$refs[ref].validate()
      },
      onStepValidated(validated, model) {
        this.wizardModel = {...this.wizardModel, ...model}
      },
      wizardComplete() {
        swal('Good job!', 'You clicked the finish button!', 'success')
      }
    }
  }
</script>
