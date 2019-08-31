<template>
  <div class="cards">
    <div class="container">
      <div class="title">
        <h3>
          <small>Pricing Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <card type="pricing">
            <h6 class="category">Alpha Pack</h6>
            <div class="icon icon-primary">
              <i class="now-ui-icons objects_diamond"></i>
            </div>
            <h3 class="card-title">$67</h3>
            <p class="card-description">This is good if your company size is between 100 and 299 employees.</p>
            <a href="#pablo" class="btn btn-primary btn-round">Add to Cart</a>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="pricing" color="orange">
            <h1 class="card-title">$40</h1>
            <ul>
              <li><i class="now-ui-icons ui-1_check text-primary"></i> Unlimited MB</li>
              <li><i class="now-ui-icons ui-1_check text-primary"></i> Unlimited emails</li>
              <li><i class="now-ui-icons ui-1_check text-primary"></i> Unlimited Databases</li>
              <li><i class="now-ui-icons ui-1_check text-primary"></i> Full Support</li>
            </ul>
            <n-button type="neutral" disabled round>Current Plan</n-button>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="pricing" class="card-background" style="background-image: url('img/project12.jpg')">
            <h6 class="category">Professional</h6>
            <div class="icon icon-primary">
              <i class="now-ui-icons objects_spaceship"></i>
            </div>
            <h2 class="card-title">$67</h2>
            <p class="card-description">This is good if you are a freelancer of photographer.</p>
            <n-button type="primary" round>Sign Up</n-button>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="pricing">
            <h6 class="category">Starter</h6>
            <h1 class="card-title">
              <small>$</small>
              10
            </h1>
            <ul>
              <li><i class="now-ui-icons ui-1_check text-success"></i> 1000 MB</li>
              <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i> 3 email</li>
              <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i> 5 Databases</li>
              <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i> No Support</li>
            </ul>
            <n-button type="primary" round>Register</n-button>
          </card>
        </div>
      </div>
    </div>
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
