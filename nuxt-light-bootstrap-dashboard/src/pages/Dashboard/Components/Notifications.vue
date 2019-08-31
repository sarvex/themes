<template>
  <div>
    <p class="category">Easy and accessible notifications everywhere in your app. Handcrafted by
      <a target="_blank" rel="noopener" href="https://github.com/cristijora">Cristi Jora</a>.
      Please check out the <a href="https://github.com/cristijora/vue-notifyjs" target="_blank" rel="noopener">github repository</a>
    </p>
    <card>
      <template slot="header">
        <h4 class="card-title">Notifications</h4>
        <p class="card-category">Vue NotifyJs</p>
      </template>
      <div>
        <div class="row">
          <div class="col-md-6">
            <h5>Notifications Style</h5>
            <l-alert type="info">
              This is a plain notification
            </l-alert>

            <l-alert type="info" dismissible="">
              This is a notification with close button.
            </l-alert>

            <l-alert type="info" dismissible="" icon="nc-icon nc-bell-55">
              This is a notification with close button and icon.
            </l-alert>
            <l-alert type="info" dismissible="" icon="nc-icon nc-bell-55">
                This is a notification with close button and icon and have many lines.
                You can see that the icon and the close button are always vertically aligned.
                This is a beautiful notification. So you don't have to worry about the style.
            </l-alert>
          </div>
          <div class="col-md-6">
            <h5>Notification states</h5>
            <l-alert type="info" dismissible="">
              <span>
                <b> Info - </b> This is a regular notification made with ".alert-info"</span>
            </l-alert>
            <l-alert type="success" dismissible="">
              <span>
                <b> Success - </b> This is a regular notification made with ".alert-success"</span>
            </l-alert>
            <l-alert type="warning" dismissible="">
              <span>
                <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
            </l-alert>
            <l-alert type="danger" dismissible="">
              <span>
                <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
            </l-alert>
          </div>
        </div>

        <br>
        <br>

        <div class="places-buttons">
          <div class="row justify-content-center">
            <div class="col-6 text-center">
              <h5>Notifications Places
                <p class="category">Click to view notifications</p>
              </h5>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'left')">Top Left</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'center')">Top Center</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('top', 'right')">Top Right</button>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'left')">Bottom Left</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'center')">Bottom Center</button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'right')">Bottom Right</button>
            </div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>
<script>
  import LAlert from 'src/components/Alert';
  import NotificationSample from './NotificationSample';
  export default {
    components: {
      LAlert,
    },
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        let color = Math.floor((Math.random() * 4) + 1)
        this.$notify(
          {
            component: NotificationSample,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style>
  .card .alert {
    position: relative !important;
    width: 100%
  }
</style>
