<template>
  <div class="wrapper">
    <div class="page-header page-header-mini">
      <parallax class="page-header-image" style="background-image: url('img/pp-cov.jpg') ;"></parallax>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <el-carousel>
              <el-carousel-item>
                <img class="d-block img-raised" src="img/pp-1.jpg" alt="First slide" />
              </el-carousel-item>
              <el-carousel-item>
                <img class="d-block img-raised" src="img/pp-2.jpg" alt="Second slide" />
              </el-carousel-item>
              <el-carousel-item>
                <img class="d-block img-raised" src="img/pp-3.jpg" alt="Third slide" />
              </el-carousel-item>
            </el-carousel>
            <p class="blockquote blockquote-primary">
              "And thank you for turning my personal jean jacket into a couture piece. Wear yours with mirrored
              sunglasses on vacation."
              <br />
              <br />
              <small>Kanye West</small>
            </p>
          </div>
          <div class="col-md-6 ml-auto mr-auto">
            <h2 class="title">Saint Laurent</h2>
            <h5 class="category">Slim-Fit Leather Biker Jacket</h5>
            <h2 class="main-price">$3,390</h2>
            <collapse>
              <collapse-item title="Description">
                <p>
                  Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a bikini in a one-piece silhouette.
                  This fuchsia style is crafted from the label's sculpting peau douce fabric and has flattering cutouts
                  through the torso and back. Wear yours with mirrored sunglasses on vacation.
                </p>
              </collapse-item>
              <collapse-item title="Designer Informationription">
                <p>
                  An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl
                  style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded
                  her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a "downtown
                  romantic" theme.
                </p>
              </collapse-item>
              <collapse-item title="Details and Care">
                <ul>
                  <li>Storm and midnight-blue stretch cotton-blend</li>
                  <li>
                    Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket
                  </li>
                  <li>Two button fastening</li>
                  <li>84% cotton, 14% nylon, 2% elastane</li>
                  <li>Dry clean</li>
                </ul>
              </collapse-item>
            </collapse>
            <div class="row pick-size">
              <div class="col-lg-6 col-md-8 col-sm-6">
                <label>Select color</label>
                <br />
                <el-select v-model="filters.color" class="select-default">
                  <el-option class="select-default" value="1" label="Black"></el-option>
                  <el-option class="select-default" value="2" label="Gray"></el-option>
                  <el-option class="select-default" value="3" label="White"></el-option>
                </el-select>
              </div>
              <div class="col-lg-6 col-md-8 col-sm-6">
                <label>Select size</label>
                <br />
                <el-select v-model="filters.size" class="select-default">
                  <el-option class="select-default" value="1" label="Small"></el-option>
                  <el-option class="select-default" value="2" label="Medium"></el-option>
                  <el-option class="select-default" value="3" label="Large"></el-option>
                </el-select>
              </div>
            </div>
            <div class="row justify-content-end">
              <n-button type="primary" class="mr-3">
                Add to Cart &nbsp;
                <i class="now-ui-icons shopping_cart-simple"></i>
              </n-button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center mr-5">
              <h2 class="title">How to wear it</h2>
              <h4 class="description">
                You need more information? Check what other persons are saying about our product. They are very happy
                with their purchase.
              </h4>
            </div>
          </div>
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-4 ml-auto mr-auto">
                <div class="image-container image-left" style="background-image: url('img/pp-5.jpg')">
                  <!-- First image on the left side -->
                  <p class="blockquote blockquote-primary">
                    "Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea
                    ice in the Antarctichas increased very slightly"
                    <br />
                    <br />
                    <small>- NOAA</small>
                  </p>
                </div>
                <!-- Second image on the left side of the article -->
                <div class="image-container" style="background-image: url('img/bg29.jpg')"></div>
              </div>
              <div class="col-md-4 ml-auto mr-auto">
                <!-- First image on the right side, above the article -->
                <div class="image-container image-right" style="background-image: url('img/pp-4.jpg')"></div>
                <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                  process will continue whatever happens with climate change. Even if the Arctic continues to be one of
                  the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of
                  the ice.
                </p>
                <p>
                  For a start, it does not automatically follow that a record amount of ice will melt this summer. More
                  important for determining the size of the annual thaw is the state of the weather as the midnight sun
                  approaches and temperatures rise. But over the more than 30 years of satellite records, scientists
                  have observed a clear pattern of decline, decade-by-decade.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="features-4">
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">Not convinced yet!</h2>
                <h4 class="description">
                  Havenly is a convenient, personal and affordable way to redecorate your home room by room. Collaborate
                  with our professional interior designers on our online platform.
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div
                  class="card card-background card-raised"
                  data-background-color
                  style="background-image: url('img/bg24.jpg')"
                >
                  <div class="info">
                    <div class="icon icon-white">
                      <i class="now-ui-icons shopping_delivery-fast"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">1 Day Delivery</h4>
                      <p>
                        Divide details about your product or agency work into parts. Write a few lines about each one. A
                        paragraph describing a feature will be enough.
                      </p>
                      <a href="#pablo" class="ml-3">Find more...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="card card-background card-raised"
                  data-background-color
                  style="background-image: url('img/bg28.jpg')"
                >
                  <div class="info">
                    <div class="icon icon-white">
                      <i class="now-ui-icons business_badge"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Refund Policy</h4>
                      <p>
                        Divide details about your product or agency work into parts. Write a few lines about each one.
                        Very good refund policy just for you.
                      </p>
                      <a href="#pablo">Find more...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="card card-background card-raised"
                  data-background-color
                  style="background-image: url('img/bg25.jpg')"
                >
                  <div class="info">
                    <div class="icon">
                      <i class="now-ui-icons ui-2_favourite-28"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Popular Item</h4>
                      <p>
                        Share a floor plan, and we'll create a visualization of your room. A paragraph describing a
                        feature will be enough. This is a popular item for you.
                      </p>
                      <a href="#pablo" class="ml-3">Find more...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section related-products" data-background-color="black">
      <div class="container">
        <h3 class="title text-center">You may also be interested in:</h3>
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/saint-laurent.jpg" />

              <h6 class="category text-danger">Trending</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Dolce & Gabbana</a>
              </h4>
              <div class="card-description">
                Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€1,459</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/gucci.jpg" />

              <h6 class="category text-danger">Popular</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Balmain</a>
              </h4>
              <div class="card-description">
                Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but
                move comfortably.
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€459</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/wooyoungmi.jpg" />

              <h6 class="category text-danger">Popular</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Balenciaga</a>
              </h4>
              <div class="card-description">
                Balenciaga's black textured-leather wallet is finished with the label's iconic 'Giant' studs. This is
                where you can...
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€559</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/saint-laurent1.jpg" />

              <h6 class="category text-danger">Trending</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Dolce & Gabbana</a>
              </h4>
              <div class="card-description">
                Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€ 1,359</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer footer-big footer-white">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-2">
              <h5>About Us</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo" class="text-muted">Blog</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">About Us</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Presentation</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5>Market</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo" class="text-muted">Sales FAQ</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">How to Register</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Sell Goods</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Receive Payment</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Transactions Issues</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Affiliates Program</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Social Feed</h5>
              <div class="social-feed">
                <div class="feed-line">
                  <i class="fab fa-twitter"></i>
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div class="feed-line">
                  <i class="fab fa-twitter"></i>
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div class="feed-line">
                  <i class="fab fa-facebook-square"></i>
                  <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Follow Us</h5>
              <ul class="social-buttons">
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-twitter btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-round">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-dribbble btn-round">
                    <i class="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-google btn-round">
                    <i class="fab fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-instagram btn-round">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <h5>
                <small>Numbers Don't Lie</small>
              </h5>
              <h5>
                14.521
                <small class="text-muted">Freelancers</small>
              </h5>
              <h5>
                1.423.183
                <small class="text-muted">Transactions</small>
              </h5>
            </div>
          </div>
        </div>
        <hr />
        <div class="copyright">
          Copyright &copy;
          {{ year }} Creative Tim All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { Card, Button, Collapse, CollapseItem } from '@/components'
import { Carousel, CarouselItem, Select, Option, Tooltip } from 'element-ui'

export default {
  name: 'ProductPage',
  bodyClass: 'product-page',
  components: {
    Card,
    Collapse,
    CollapseItem,
    [Button.name]: Button,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Select.name]: Select,
    [Option.name]: Option,
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      filters: {
        color: '',
        size: '',
      },
      year: new Date().getFullYear(),
    }
  },
}
</script>
