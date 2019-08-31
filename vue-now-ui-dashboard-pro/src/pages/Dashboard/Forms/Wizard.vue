<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 mr-auto ml-auto">
          <simple-wizard>
            <template slot="header">
              <h3 class="card-title">Build your profile</h3>
              <h3 class="description">This information will let us know more about you.</h3>
            </template>

            <wizard-tab :before-change="() => validateStep('step1')">
              <template slot="label">
                <i class="now-ui-icons users_circle-08"></i>
                About
              </template>
              <first-step ref="step1" @on-validated="onStepValidated"></first-step>
            </wizard-tab>

            <wizard-tab :before-change="() => validateStep('step2')">
              <template slot="label" >
                <i class="now-ui-icons ui-1_settings-gear-63"></i>
                Account
              </template>
              <second-step ref="step2" @on-validated="onStepValidated"></second-step>
            </wizard-tab>

            <wizard-tab :before-change="() => validateStep('step3')">
              <template slot="label">
                <i class="now-ui-icons ui-1_email-85"></i>
                Address
              </template>
              <third-step ref="step3"></third-step>
            </wizard-tab>
          </simple-wizard>
      </div>
    </div>
  </div>
</template>
<script>
import FirstStep from './Wizard/FirstStep.vue';
import SecondStep from './Wizard/SecondStep.vue';
import ThirdStep from './Wizard/ThirdStep.vue';
import swal from 'sweetalert2';
import { SimpleWizard, WizardTab } from 'src/components';

export default {
  data() {
    return {
      wizardModel: {}
    };
  },
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    SimpleWizard,
    WizardTab
  },
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      this.wizardModel = { ...this.wizardModel, ...model };
    },
    wizardComplete() {
      swal('Good job!', 'You clicked the finish button!', 'success');
    }
  }
};
</script>
