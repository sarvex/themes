<template>
  <div class="section section-plain-cards">
    <div class="container">
      <div class="title">
        <h3>Plain Cards</h3>
        <h3>
          <small>Blog Cards</small>
        </h3>
      </div>
      <!--     *********    PLAIN BLOG CARDS      *********      -->
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <card type="blog" plain>
            <img slot="image" class="img rounded img-raised" src="img/project13.jpg" />
            <div class="card-body">
              <h6 class="category text-warning"><i class="now-ui-icons business_bulb-63"></i> Focus</h6>
              <h5 class="card-title">
                <a href="#nuk">Stay Focused: Train Your Brain</a>
              </h5>
              <p class="card-description">
                Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to
                focus...
              </p>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-4">
          <card type="blog" plain>
            <img slot="image" class="img rounded img-raised" src="img/card-blog2.jpg" />

            <h6 class="category text-primary">Features</h6>
            <h5 class="card-title">
              <a href="#nuk">That’s One Way To Ditch Your Passenger</a>
            </h5>
            <p class="card-description">
              As near as we can tell, this guy must have thought he was going over backwards and tapped the rear break
              to bring the nose down...
            </p>
            <div class="card-footer">
              <div class="author">
                <img v-lazy="'img/julie.jpg'" alt="..." class="avatar img-raised" />
                <span>Mike John</span>
              </div>
              <div class="stats stats-right"><i class="now-ui-icons tech_watch-time"></i> 5 min read</div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-4">
          <card type="blog" plain>
            <img slot="image" class="img img-raised rounded" src="img/examples/card-blog6.jpg" />
            <div class="text-center">
              <h6 class="category text-danger"><i class="now-ui-icons media-2_sound-wave"></i> Business</h6>
              <h5 class="card-title">
                <a href="#nuk">Axel Springer Spends $343M To Buy Business Insider</a>
              </h5>
              <p class="card-description">
                German media giant Axel Springer has announced it’s acquiring online business news publication Business
                Inside...
              </p>
              <div class="card-footer">
                <n-button type="primary">Read Article</n-button>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
    <!--     *********    END PLAIN BLOG CARDS      *********      -->
    <!--     *********   PLAIN PROFILE CARDS     *********      -->
    <div class="container">
      <div class="title">
        <h3>
          <small>Profile Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <card type="profile" plain>
            <img slot="image" class="img rounded" src="img/julie.jpg" />

            <a href="pablo">
              <h4 class="card-title">Julie Andrew</h4>
            </a>
            <h6 class="card-category text-info">Web Designer</h6>
            <div class="card-footer">
              <n-button type="neutral" class="btn-twitter" size="lg" icon round>
                <i class="fab fa-twitter"></i>
              </n-button>
              <n-button type="neutral" class="btn-dribbble" size="lg" icon round>
                <i class="fab fa-dribbble"></i>
              </n-button>
              <n-button type="neutral" class="btn-instagram" size="lg" icon round>
                <i class="fab fa-instagram"></i>
              </n-button>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile" plain>
            <img slot="avatar" class="img img-raised" src="img/mike.jpg" />

            <h4 class="card-title">Alec Mike</h4>
            <h6 class="category text-gray">Designer</h6>
            <p class="card-description">
              One of the co-founders. Alec drives the technical strategy of the platform, customer support and brand.
            </p>
            <div class="card-footer">
              <n-button class="btn-twitter" icon round>
                <i class="fab fa-twitter"></i>
              </n-button>
              <n-button class="btn-facebook" icon round>
                <i class="fab fa-facebook-square"></i>
              </n-button>
              <n-button class="btn-google" icon round>
                <i class="fab fa-google"></i>
              </n-button>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile" plain>
            <img slot="avatar" class="img img-raised" src="img/james.jpg" />
            <div class="card-body">
              <h6 class="card-category">CEO / Co-Founder</h6>
              <h4 class="card-title">James Thompson</h4>
              <p class="card-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
              <n-button type="primary" round>Follow</n-button>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile" plain>
            <div class="card-avatar">
              <a href="#pablo">
                <img class="img img-raised" src="img/olivia.jpg" />
              </a>
            </div>
            <h6 class="category text-gray">Growth Hacker</h6>
            <h4 class="card-title">Olivia Thompson</h4>
            <p class="card-description">"Work hard play harder."</p>
            <div class="card-footer">
              <n-button type="primary" simple icon round>
                <i class="fab fa-twitter"></i>
              </n-button>
              <n-button type="primary" simple icon round>
                <i class="fab fa-facebook-square"></i>
              </n-button>
              <n-button type="primary" simple icon round>
                <i class="fab fa-google"></i>
              </n-button>
            </div>
          </card>
        </div>
      </div>
    </div>
    <!--     *********    END PROFILE CARDS      *********      -->
  </div>
</template>
<script>
import { Card, Button } from '@/components'

export default {
  components: {
    Card,
    [Button.name]: Button,
  },
}
</script>
