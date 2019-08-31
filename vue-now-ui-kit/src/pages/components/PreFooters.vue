<template>
  <div class="section section-pre-footer" data-background-color="gray">
    <div id="pre-footer-areas">
      <div class="container">
        <div class="title">
          <h3>Pre-Footer Areas</h3>
        </div>
      </div>
      <!--     *********    SIMPLE SOCIAL LINE     *********      -->
      <div class="social-line social-line-white text-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <h4 class="title">Thank you for your support!</h4>
            </div>
            <n-button round class="btn-twitter"> <i class="fab fa-twitter"></i> Twitter · 2.5k </n-button>
            <n-button round class="btn-facebook"> <i class="fab fa-facebook-square"></i> Facebook · 3.2k </n-button>
            <n-button round class="btn-google"> <i class="fab fa-google-plus"></i> Google · 1.2k </n-button>
            <n-button round class="btn-dribble"> <i class="fab fa-dribbble"></i> Dribbble · 1.8k </n-button>
          </div>
        </div>
      </div>
      <!--     *********   SIMPLE SOCIAL LINE     *********      -->
      <br />
      <br />
      <!--     *********    SIMPLE SOCIAL LINE     *********      -->
      <div class="social-line social-line-big-icons social-line-white">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-neutral btn-icon btn-twitter btn-footer">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-neutral btn-icon btn-facebook btn-footer">
                <i class="fab fa-facebook-square"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-neutral btn-icon btn-google btn-footer">
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-neutral btn-icon btn-dribbble btn-footer">
                <i class="fab fa-dribbble"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-neutral btn-icon btn-youtube btn-footer">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-neutral btn-icon btn-instagram btn-footer">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--     *********   SIMPLE SOCIAL LINE     *********      -->
      <br />
      <br />
      <!--     *********    SIMPLE BLACK SOCIAL LINE     *********      -->
      <div class="social-line social-line-big-icons social-line-black">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-simple btn-icon btn-footer">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-simple btn-icon btn-footer">
                <i class="fab fa-facebook-square"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-simple btn-icon btn-footer">
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-simple btn-icon btn-footer">
                <i class="fab fa-dribbble"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-simple btn-icon btn-footer">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div class="col-md-2">
              <a href="#pablo" class="btn btn-simple btn-icon btn-footer">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <!--     *********   SIMPLE BLACK SOCIAL LINE     *********      -->
      <br />
      <br />
      <!--     *********    SIMPLE SUBSCRIBE LINE     *********      -->
      <div class="subscribe-line subscribe-line-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4 class="title">Get Tips &amp; Tricks every Week!</h4>
              <p class="description">
                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
              </p>
            </div>
            <div class="col-md-6">
              <div class="card card-plain card-form-horizontal">
                <div class="card-body">
                  <form method action>
                    <div class="row">
                      <div class="col-sm-8">
                        <fg-input placeholder="Your Email..." addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>
                      </div>
                      <div class="col-sm-4">
                        <n-button type="primary" round block>Subscribe</n-button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--     *********   SIMPLE SUBSCRIBE LINE     *********      -->
      <br />
      <br />
      <!--     *********    IMAGE SUBSCRIBE LINE     *********      -->
      <div class="subscribe-line subscribe-line-image" style="background-image: url('img/bg7.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="text-center">
                <h4 class="title">Subscribe to our Newsletter</h4>
                <p class="description">
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                </p>
              </div>
              <div class="card card-raised card-form-horizontal">
                <div class="card-body">
                  <form method action>
                    <div class="row">
                      <div class="col-sm-8">
                        <fg-input placeholder="Your Email..." addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>
                      </div>
                      <div class="col-sm-4">
                        <n-button type="primary" round block>Subscribe</n-button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--     *********   IMAGE SUBSCRIBE LINE     *********      -->
    </div>
  </div>
</template>
<script>
import { FormGroupInput, Button } from '@/components'

export default {
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [Button.name]: Button,
  },
}
</script>
