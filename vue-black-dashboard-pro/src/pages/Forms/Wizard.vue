<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <simple-wizard>
          <template slot="header">
            <h3 class="card-title">Build your profile</h3>
            <h3 class="description">
              This information will let us know more about you.
            </h3>
          </template>

          <wizard-tab :before-change="() => validateStep('step1')">
            <template slot="label">
              <i class="tim-icons icon-single-02"></i>
              <p>About</p>
            </template>
            <first-step
              ref="step1"
              @on-validated="onStepValidated"
            ></first-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step2')">
            <template slot="label">
              <i class="tim-icons icon-settings-gear-63"></i>
              <p>Account</p>
            </template>
            <second-step
              ref="step2"
              @on-validated="onStepValidated"
            ></second-step>
          </wizard-tab>

          <wizard-tab :before-change="() => validateStep('step3')">
            <template slot="label">
              <i class="tim-icons icon-delivery-fast"></i>
              <p>Address</p>
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
