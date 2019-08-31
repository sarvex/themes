<template>
  <slide-y-up-transition :duration="300">
    <div class="modal-wrapper">
      <div
        v-click-outside="closeModal"
        class="modal-container"
        :class="type"
      >
        <template v-if="!modalWithCard">
          <div class="modal-header">
            <slot name="header" />
          </div>

          <div
            v-if="$slots.body"
            class="modal-body text-center"
          >
            <slot name="body" />
          </div>

          <div
            v-if="$slots.footer"
            class="modal-footer"
          >
            <slot name="footer" />
          </div>
        </template>

        <template v-else>
          <md-card :class="cardClasses">
            <div
              v-if="$slots.header"
              class="modal-header"
            >
              <slot name="header" />
            </div>

            <div
              v-if="$slots.body"
              class="modal-body"
            >
              <md-card-content>
                <slot name="body" />
              </md-card-content>
            </div>

            <div
              v-if="$slots.footer"
              class="modal-footer"
            >
              <md-card-actions>
                <slot name="footer" />
              </md-card-actions>
            </div>
          </md-card>
        </template>
      </div>
    </div>
  </slide-y-up-transition>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "Modal",
  components: {
    SlideYUpTransition
  },
  props: {
    type: String,
    cardClasses: String,
    modalWithCard: Boolean
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
    }
  }
};
</script>
