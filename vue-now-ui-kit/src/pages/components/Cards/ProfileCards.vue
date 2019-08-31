<template>
  <!--     *********    PROFILE CARDS     *********      -->
  <div class="cards">
    <div class="container">
      <div class="title">
        <h3>
          <small>Profile Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <img slot="image" class="img rounded" src="img/julie.jpg" />
            <a href="pablo">
              <h4 class="card-title">Julie Andrew</h4>
            </a>
            <h6 class="card-category text-info">Web Designer</h6>
            <div class="card-footer">
              <a href="#pablo" class="btn btn-icon btn-neutral btn-lg btn-twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#pablo" class="btn btn-icon btn-neutral btn-lg btn-dribbble">
                <i class="fab fa-dribbble"></i>
              </a>
              <a href="#pablo" class="btn btn-icon btn-neutral btn-lg btn-instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <img slot="avatar" class="img img-raised" src="img/mike.jpg" />
            <div class="card-body">
              <h4 class="card-title">Alec Mike</h4>
              <h6 class="category text-gray">Designer</h6>
              <p class="card-description">
                One of the co-founders. Alec drives the technical strategy of the platform, customer support and brand.
              </p>
              <div class="card-footer">
                <a href="#pablo" class="btn btn-icon btn-twitter btn-round">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-icon btn-facebook btn-round">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#pablo" class="btn btn-icon btn-google btn-round">
                  <i class="fab fa-google"></i>
                </a>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile" color="black">
            <img slot="avatar" class="img img-raised" src="img/james.jpg" />
            <div>
              <h6 class="card-category">CEO / Co-Founder</h6>
              <h4 class="card-title">James Thompson</h4>
              <p class="card-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
              <a href="#pablo" class="btn btn-primary btn-round">Follow</a>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <div>
              <div class="card-avatar">
                <a href="#pablo">
                  <img class="img img-raised" src="img/olivia.jpg" />
                </a>
              </div>
              <h6 class="category text-gray">Growth Hacker</h6>
              <h4 class="card-title">Olivia Thompson</h4>
              <p class="card-description">"Work hard play harder."</p>
              <div class="card-footer">
                <a href="#pablo" class="btn btn-icon btn-primary btn-simple btn-round">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-icon btn-primary btn-simple btn-round">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#pablo" class="btn btn-icon btn-primary btn-simple btn-round">
                  <i class="fab fa-google"></i>
                </a>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROFILE CARDS      *********      -->
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
