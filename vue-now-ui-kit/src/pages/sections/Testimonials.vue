<template>
  <div id="testimonials" class="cd-section">
    <!--     *********    TESTIMONIALS 1     *********      -->
    <div class="testimonials-1 section-image" style="background-image: url('img/bg19.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">What is ALPHA?</h2>
            <h4 class="description">
              If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and
              Mentor Hours and much more all for €850.
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card type="testimonial" no-footer-line>
              <img slot="avatar" class="img img-raised" src="img/michael.jpg" />
              <p class="card-description">The networking at Web Summit is like no other European tech conference.</p>
              <div slot="raw-content" class="icon icon-primary">
                <i class="fas fa-quote-right"></i>
              </div>
              <template slot="footer">
                <h4 class="card-title">Michael Elijah</h4>
                <p class="category">@michaelelijah</p>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial" no-footer-line>
              <img slot="avatar" class="img img-raised" src="img/olivia.jpg" />
              <p class="card-description">
                The connections you make at Web Summit are unparalleled, we met users all over the world.
              </p>
              <div slot="raw-content" class="icon icon-primary">
                <i class="fas fa-quote-right"></i>
              </div>
              <template slot="footer">
                <h4 class="card-title">Olivia Harper</h4>
                <p class="category">@oliviaharper</p>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial" no-footer-line>
              <img slot="avatar" class="img img-raised" src="img/james.jpg" />
              <p class="card-description">
                Web Summit will increase your appetite, your inspiration, and your network.
              </p>
              <div slot="raw-content" class="icon icon-primary">
                <i class="fas fa-quote-right"></i>
              </div>
              <template slot="footer">
                <h4 class="card-title">James Logan</h4>
                <p class="category">@jameslogan</p>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END TESTIMONIALS 1      *********      -->
    <!--     *********    TESTIMONIALS 2     *********      -->
    <div class="testimonials-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 justify-content-center">
            <el-carousel height="500px" class="carousel-centered">
              <el-carousel-item>
                <card type="testimonial" plain>
                  <img slot="avatar" class="img img-raised rounded" src="img/james.jpg" />
                  <h5 class="card-description">
                    "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let
                    the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every
                    other idea alone. This is the way to success. A single rose can be my garden... a single friend, my
                    world."
                  </h5>
                  <h3 class="card-title">Isaac Hunter</h3>
                  <div class="card-footer">
                    <h6 class="category text-primary">Human Resource Director</h6>
                  </div>
                </card>
              </el-carousel-item>
              <el-carousel-item>
                <card type="testimonial" plain>
                  <img slot="avatar" class="img img-raised rounded" src="img/olivia.jpg" />

                  <h5 class="card-description">
                    "When we are no longer able to change a situation - we are challenged to change ourselves. Spread
                    love everywhere you go. Let no one ever come to you without leaving happier. Problems are not stop
                    signs, they are guidelines."
                  </h5>
                  <h3 class="card-title">Alexa Hailey</h3>
                  <div class="card-footer">
                    <h6 class="category text-primary">Human Resource Director</h6>
                  </div>
                </card>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END TESTIMONIALS 2      *********      -->
    <!--     *********    TESTIMONIALS 3     *********      -->
    <div class="testimonials-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">What Clients Say</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card type="testimonial" plain>
              <img slot="avatar" class="img img-raised rounded" src="img/michael.jpg" />

              <h3 class="card-title">Andrew John</h3>
              <h6 class="category text-primary">Loan Counselor</h6>
              <p class="card-description">
                "Do not go where the path may lead, go instead where there is no path and leave a trail."
              </p>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial" plain>
              <img slot="avatar" class="img img-raised rounded" src="img/olivia.jpg" />

              <h4 class="card-title">Zoe Gabriella</h4>
              <h6 class="category text-primary">Interpreter OR Translator</h6>
              <p class="card-description">
                "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me
                and be my friend."
              </p>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial" plain>
              <img slot="avatar" class="img img-raised rounded" src="img/james.jpg" />

              <h4 class="card-title">Joshiah Luke</h4>
              <h6 class="category text-primary">HR Specialist</h6>
              <p class="card-description">
                "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the
                sails."
              </p>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END TESTIMONIALS 3      *********      -->
  </div>
</template>
<script>
import { Card, Button } from '@/components'
import { Carousel, CarouselItem } from 'element-ui'

export default {
  components: {
    Card,
    [Button.name]: Button,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
}
</script>
<style scoped>
.carousel-centered {
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}
</style>
