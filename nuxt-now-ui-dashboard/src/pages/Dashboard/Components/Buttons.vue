<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="row">
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pick your Color</h4>
            </div>
            <div class="card-body">
              <n-button>Default</n-button>
              <n-button type="primary">Primary</n-button>
              <n-button type="info">Info</n-button>
              <n-button type="success">Success</n-button>
              <n-button type="warning">Warning</n-button>
              <n-button type="danger">Danger</n-button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Buttons with Label</h4>
            </div>
            <div class="card-body">
              <n-button>
                <i slot="label" class="now-ui-icons arrows-1_minimal-left"></i>
                Left
              </n-button>

              <n-button>
                Right
                <i slot="labelRight" class="now-ui-icons arrows-1_minimal-right"></i>
              </n-button>

              <n-button type="info">
                <i slot="label" class="now-ui-icons travel_info"></i>
                Info
              </n-button>

              <n-button type="success">
                <i slot="label" class="now-ui-icons ui-1_check"></i>
                Success
              </n-button>

              <n-button type="warning">
                <i slot="label" class="now-ui-icons ui-2_time-alarm"></i>
                Warning
              </n-button>

              <n-button type="danger">
                <i slot="label" class="now-ui-icons ui-1_simple-remove"></i>
                Danger
              </n-button>
            </div>
          </div>


        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pick your Size</h4>
            </div>
            <div class="card-body">
              <n-button type="primary" size="sm">Small</n-button>
              <n-button type="primary">Regular</n-button>
              <n-button type="primary" size="lg">Large</n-button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pick your Style</h4>
            </div>
            <div class="card-body">
              <n-button type="primary">Default</n-button>
              <n-button type="primary" round>round</n-button>
              <n-button type="primary" round>
                <i slot="label" class="now-ui-icons ui-2_favourite-28"></i>
                with icon
              </n-button>
              <n-button type="primary" round icon>
                <i class="now-ui-icons ui-2_favourite-28"></i>
              </n-button>
              <n-button type="primary" simple>Simple</n-button>
            </div>

          </div>
        </div>


        <div class="row">
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pagination</h4>
            </div>

            <div class="card-body">
              <n-pagination :page-count="10" v-model="defaultPagination"></n-pagination>
              <n-pagination :page-count="10" v-model="infoPagination"></n-pagination>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Button Group</h4>
            </div>
            <div class="card-body">
              <div class="btn-group">
                <button type="button" class="btn btn-info btn-outline">Left</button>
                <button type="button" class="btn btn-info btn-outline">Middle</button>
                <button type="button" class="btn btn-info btn-outline">Right</button>
              </div>

              <br><br>
              <div class="btn-group">
                <button type="button" class="btn btn-info btn-outline">1</button>
                <button type="button" class="btn btn-info btn-outline">2</button>
                <button type="button" class="btn btn-info btn-outline">3</button>
                <button type="button" class="btn btn-info btn-outline">4</button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-info btn-round btn-outline">5</button>
                <button type="button" class="btn btn-info btn-round btn-outline">6</button>
                <button type="button" class="btn btn-info btn-round btn-outline">7</button>
              </div>
            </div>
          </div>

        </div>


        <div class="card-header">
          <h4 class="card-title">Social buttons</h4>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-md-4 col-sm-5">
              <p class="category">
                Default
              </p>
              <n-button class="btn-twitter">
                <i class="fa fa-twitter"></i> Connect with Twitter
              </n-button>
              <br>
              <n-button class="btn-facebook">
                <i class="fa fa-facebook-square"></i> Share · 2.2k
              </n-button>
              <br>
              <n-button class="btn-google">
                <i class="fa fa-google-plus-square"></i> Share on Google+
              </n-button>
              <br>
              <n-button class="btn-linkedin">
                <i class="fa fa-linkedin-square"></i> Connect with Linkedin
              </n-button>
              <br>
              <n-button class="btn-pinterest">
                <i class="fa fa-pinterest"></i> Pint it · 212
              </n-button>
              <br>
              <n-button class="btn-youtube">
                <i class="fa fa-youtube-play"></i> View on Youtube
              </n-button>
              <br>
              <n-button class="btn-tumblr">
                <i class="fa fa-tumblr-square"></i> Repost
              </n-button>
              <br>
              <n-button class="btn-github">
                <i class="fa fa-github"></i> Connect with Github
              </n-button>
              <br>
              <n-button class="btn-behance">
                <i class="fa fa-behance-square"></i> Follow us
              </n-button>
              <br>
              <n-button class="btn-dribbble">
                <i class="fa fa-dribbble"></i> Find us on Dribbble
              </n-button>
              <br>
              <n-button class="btn-reddit">
                <i class="fa fa-reddit"></i> Repost · 232
              </n-button>
              <br>
              <n-button class="btn-stumbleupon">
                <i class="fa fa-stumbleupon"></i> View on StumbleUpon
              </n-button>
              <br>
            </div>

            <div class="col-md-1 col-sm-1">
              <p class="category">&nbsp;</p>
              <n-button class="btn-twitter" social icon>
                <i class="fa fa-twitter"></i>
              </n-button>
              <br>
              <n-button class="btn-facebook" social icon>
                <i class="fa fa-facebook"> </i>
              </n-button>
              <br>
              <n-button class="btn-google" social icon>
                <i class="fa fa-google-plus"> </i>
              </n-button>
              <br>
              <n-button class="btn-linkedin" social icon>
                <i class="fa fa-linkedin"></i>
              </n-button>
              <br>
              <n-button class="btn-pinterest" social icon>
                <i class="fa fa-pinterest"></i>
              </n-button>
              <br>
              <n-button class="btn-youtube" social icon>
                <i class="fa fa-youtube"> </i>
              </n-button>
              <br>
              <n-button class="btn-tumblr" social icon>
                <i class="fa fa-tumblr"> </i>
              </n-button>
              <br>
              <n-button class="btn-github" social icon>
                <i class="fa fa-github"></i>
              </n-button>
              <br>
              <n-button class="btn-behance" social icon>
                <i class="fa fa-behance"></i>
              </n-button>
              <br>
              <n-button class="btn-dribbble" social icon>
                <i class="fa fa-dribbble"></i>
              </n-button>
              <br>
              <n-button class="btn-reddit" social icon>
                <i class="fa fa-reddit"></i>
              </n-button>
              <br>
              <n-button class="btn-stumbleupon" social icon>
                <i class="fa fa-stumbleupon"></i>
              </n-button>
              <br>
            </div>
            <div class="col-md-1 col-sm-1">
              <p class="category">&nbsp;</p>
              <n-button class="btn-twitter" social icon round>
                <i class="fa fa-twitter"></i>
              </n-button>
              <br>
              <n-button class="btn-facebook" social icon round>
                <i class="fa fa-facebook"> </i>
              </n-button>
              <br>
              <n-button class="btn-google" social icon round>
                <i class="fa fa-google-plus"> </i>
              </n-button>
              <br>
              <n-button class="btn-linkedin" social icon round>
                <i class="fa fa-linkedin"></i>
              </n-button>
              <br>
              <n-button class="btn-pinterest" social icon round>
                <i class="fa fa-pinterest"></i>
              </n-button>
              <br>
              <n-button class="btn-youtube" social icon round>
                <i class="fa fa-youtube"> </i>
              </n-button>
              <br>
              <n-button class="btn-tumblr" social icon round>
                <i class="fa fa-tumblr"> </i>
              </n-button>
              <br>
              <n-button class="btn-github" social icon round>
                <i class="fa fa-github"></i>
              </n-button>
              <br>
              <n-button class="btn-behance" social icon round>
                <i class="fa fa-behance"></i>
              </n-button>
              <br>
              <n-button class="btn-dribbble" social icon round>
                <i class="fa fa-dribbble"></i>
              </n-button>
              <br>
              <n-button class="btn-reddit" social icon round>
                <i class="fa fa-reddit"></i>
              </n-button>
              <br>
              <n-button class="btn-stumbleupon" social icon round>
                <i class="fa fa-stumbleupon"></i>
              </n-button>
              <br>

            </div>
            <div class="col-md-1 col-sm-1">
              <p class="category">Neutral</p>
              <n-button class="btn-twitter" type="neutral" social>
                <i class="fa fa-twitter"></i>
              </n-button>
              <br>
              <n-button class="btn-facebook" type="neutral" social>
                <i class="fa fa-facebook"> </i>
              </n-button>
              <br>
              <n-button class="btn-google" type="neutral" social>
                <i class="fa fa-google-plus"> </i>
              </n-button>
              <br>
              <n-button class="btn-linkedin" type="neutral" social>
                <i class="fa fa-linkedin"></i>
              </n-button>
              <br>
              <n-button class="btn-pinterest" type="neutral" social>
                <i class="fa fa-pinterest"></i>
              </n-button>
              <br>
              <n-button class="btn-youtube" type="neutral" social>
                <i class="fa fa-youtube"> </i>
              </n-button>
              <br>
              <n-button class="btn-tumblr" type="neutral" social>
                <i class="fa fa-tumblr"> </i>
              </n-button>
              <br>
              <n-button class="btn-github" type="neutral" social>
                <i class="fa fa-github"></i>
              </n-button>
              <br>
              <n-button class="btn-behance" type="neutral" social>
                <i class="fa fa-behance"></i>
              </n-button>
              <br>
              <n-button class="btn-dribbble" type="neutral" social>
                <i class="fa fa-dribbble"></i>
              </n-button>
              <br>
              <n-button class="btn-reddit" type="neutral" social>
                <i class="fa fa-reddit"></i>
              </n-button>
              <br>
              <n-button class="btn-stumbleupon" type="neutral" social>
                <i class="fa fa-stumbleupon"></i>
              </n-button>
              <br>

            </div>
            <div class="col-md-3 col-sm-4">
              <p class="category">&nbsp;</p>
              <n-button class="btn-twitter" type="neutral">
                <i class="fa fa-twitter"></i> Connect with Twitter
              </n-button>
              <br>
              <n-button class="btn-facebook" type="neutral">
                <i class="fa fa-facebook-square"></i> Share · 2.2k
              </n-button>
              <br>
              <n-button class="btn-google" type="neutral">
                <i class="fa fa-google-plus-square"></i> Share on Google+
              </n-button>
              <br>
              <n-button class="btn-linkedin" type="neutral">
                <i class="fa fa-linkedin-square"></i> Connect with Linkedin
              </n-button>
              <br>
              <n-button class="btn-pinterest" type="neutral">
                <i class="fa fa-pinterest"></i> Pint it · 212
              </n-button>
              <br>
              <n-button class="btn-youtube" type="neutral">
                <i class="fa fa-youtube-play"></i> View on Youtube
              </n-button>
              <br>
              <n-button class="btn-tumblr" type="neutral">
                <i class="fa fa-tumblr-square"></i> Repost
              </n-button>
              <br>
              <n-button class="btn-github" type="neutral">
                <i class="fa fa-github"></i> Connect with Github
              </n-button>
              <br>
              <n-button class="btn-behance" type="neutral">
                <i class="fa fa-behance-square"></i> Follow us
              </n-button>
              <br>
              <n-button class="btn-dribbble" type="neutral">
                <i class="fa fa-dribbble"></i> Find us on Dribbble
              </n-button>
              <br>
              <n-button class="btn-reddit" type="neutral">
                <i class="fa fa-reddit"></i> Repost · 232
              </n-button>
              <br>
              <n-button class="btn-stumbleupon" type="neutral">
                <i class="fa fa-stumbleupon"></i> View on StumbleUpon
              </n-button>
              <br>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { Pagination } from 'src/components';

export default {
  components: {
    [Pagination.name]: Pagination
  },
  data() {
    return {
      defaultPagination: 1,
      infoPagination: 3
    };
  }
};
</script>
<style>
</style>
