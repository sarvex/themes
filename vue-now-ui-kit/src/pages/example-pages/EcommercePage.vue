<template>
  <div class="wrapper ecommerce-page">
    <el-carousel height="100vh">
      <el-carousel-item>
        <div class="page-header header-filter">
          <div class="page-header-image" style="background-image: url('img/bg40.jpg')"></div>
          <div class="content-center text-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h1 class="title">Finding the Perfect.</h1>
                <h4 class="description text-white">
                  The haute couture crowds make stylish statements between shows during couture season in Paris...
                </h4>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="page-header header-filter">
          <div class="page-header-image" style="background-image: url('img/bg41.jpg')"></div>
          <div class="content-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h1 class="title">Street Style: Couture.</h1>
                <h4 class="description text-white">
                  See what Karlie Kloss, Tracee Ellis Ross and others wore between the shows...
                </h4>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="page-header header-filter">
          <div class="page-header-image" style="background-image: url('img/bg29.jpg')"></div>
          <div class="content-center text-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h1 class="title">For Men With Style.</h1>
                <h4 class="description text-white">
                  Shirts that actually fit? Check. Linen shorts? Yup. Those wider pants suddenly in style? Got them,
                  too....
                </h4>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="main">
      <div class="section">
        <div class="container">
          <h2 class="section-title">Find what you need</h2>
          <div class="row">
            <div class="col-md-3">
              <div class="collapse-panel">
                <div class="card-body">
                  <div class="card card-refine card-plain">
                    <h4 class="card-title">
                      Refine
                      <button
                        class="btn btn-default btn-icon btn-neutral pull-right"
                        rel="tooltip"
                        title="Reset Filter"
                      >
                        <i class="arrows-1_refresh-69 now-ui-icons"></i>
                      </button>
                    </h4>
                    <collapse>
                      <collapse-item no-icon class="card-header">
                        <h6 slot="title" class="mb-0 text-primary">
                          Price Range
                          <i class="now-ui-icons arrows-1_minimal-down"></i>
                        </h6>
                        <span class="price-left pull-left">€{{ filters.priceRange[0] }}</span>
                        <span class="price-right pull-right">€{{ filters.priceRange[1] }}</span>
                        <div class="clearfix"></div>
                        <slider
                          id="slider-refine"
                          v-model="filters.priceRange"
                          class="slider-refine"
                          :range="{ min: 0, max: 900 }"
                          :connect="true"
                        ></slider>
                      </collapse-item>
                      <collapse-item no-icon class="card-header">
                        <h6 slot="title" class="mb-0 text-primary">
                          Clothing
                          <i class="now-ui-icons arrows-1_minimal-down"></i>
                        </h6>
                        <n-checkbox
                          v-for="clothing in filters.clothingTypes"
                          :key="clothing.label"
                          v-model="clothing.value"
                          >{{ clothing.label }}</n-checkbox
                        >
                      </collapse-item>
                      <collapse-item no-icon class="card-header">
                        <h6 slot="title" class="mb-0 text-primary">
                          Designer
                          <i class="now-ui-icons arrows-1_minimal-down"></i>
                        </h6>
                        <n-checkbox
                          v-for="desginer in filters.designerTypes"
                          :key="desginer.label"
                          v-model="desginer.value"
                          >{{ desginer.label }}</n-checkbox
                        >
                      </collapse-item>
                      <collapse-item no-icon class="card-header">
                        <h6 slot="title" class="mb-0 text-primary">
                          Colour
                          <i class="now-ui-icons arrows-1_minimal-down"></i>
                        </h6>
                        <n-checkbox v-for="color in filters.colourTypes" :key="color.label" v-model="color.value">{{
                          color.label
                        }}</n-checkbox>
                      </collapse-item>
                    </collapse>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div v-for="product in products" :key="product.title" class="col-lg-4 col-md-6">
                  <card type="product" plain>
                    <img slot="image" :src="product.image" alt />

                    <a href="#">
                      <h4 class="card-title">{{ product.title }}</h4>
                    </a>
                    <p class="card-description">{{ product.description }}</p>
                    <div class="card-footer">
                      <div class="price-container">
                        <span class="price">&euro; 300</span>
                      </div>
                      <el-tooltip effect="light" content="Remove from wishlist" placement="top">
                        <n-button type="danger" icon round class="pull-right btn-neutral">
                          <i class="now-ui-icons ui-2_favourite-28"></i>
                        </n-button>
                      </el-tooltip>
                    </div>
                  </card>
                </div>
                <div class="col-md-3 ml-auto mr-auto">
                  <n-button type="primary" round>Load more...</n-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- section -->
      <div class="container">
        <h2 class="section-title">News in fashion</h2>
      </div>
      <div class="projects-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 px-0">
              <card type="background" class="card-fashion" style="background-image: url('img/bg35.jpg')">
                <div class="card-title text-left">
                  <h2>
                    <a href="#pablo">
                      The New York Times Todd Snyder and Raf Simons Party During Men’s Fashion Week
                    </a>
                  </h2>
                </div>
                <div class="card-footer text-left">
                  <div class="stats">
                    <span> <i class="now-ui-icons users_circle-08"></i>Emy Grace </span>
                    <span> <i class="now-ui-icons tech_watch-time"></i> June 6, 2017 </span>
                  </div>
                  <div class="stats-link pull-right">
                    <a href="#pablo" class="footer-link">Fashion Week</a>
                  </div>
                </div>
              </card>
            </div>
            <div class="col-md-6 px-0">
              <div class="card-container">
                <div class="card card-fashion">
                  <div class="card-title">
                    <a href="#pablo"></a>
                    <h4>
                      <a href="#pablo"></a>
                      <a href="#pablo">Valentina Garavani Holds a Summer Lunch in Honor of Sofia Coppola...</a>
                    </h4>
                  </div>
                  <div class="card-body">
                    <div class="card-footer text-left">
                      <div class="stats">
                        <span> <i class="now-ui-icons users_circle-08"></i>Jerry McGregor </span>
                        <span> <i class="now-ui-icons tech_watch-time"></i> June 10, 2017 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <card type="background" class="card-fashion" style="background-image: url('img/bg40.jpg')"></card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <h2 class="section-title">Latest Offers</h2>
          <div class="row">
            <div class="col-md-4">
              <card type="product" plain>
                <img slot="image" src="img/saint-laurent1.jpg" alt />
                <h4 class="card-title">
                  <a href="#pablo">Saint Laurent</a>
                </h4>
                <p class="card-description">
                  The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket
                  square and leather loafers.
                </p>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-old">&euro;1,430</span>
                    <span class="price price-new">&euro;743</span>
                  </div>
                  <div class="stats stats-right">
                    <el-tooltip content="Saved to Wishlist" effect="light" placement="top">
                      <n-button type="neutral" icon>
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                    </el-tooltip>
                  </div>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <card type="product" plain>
                <img slot="image" src="img/saint-laurent1.jpg" alt />
                <h4 class="card-title">
                  <a href="#pablo">Saint Laurent</a>
                </h4>
                <p class="card-description">
                  The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket
                  square and leather loafers.
                </p>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-old">&euro;1,430</span>
                    <span class="price price-new">&euro;743</span>
                  </div>
                  <div class="stats stats-right">
                    <el-tooltip content="Saved to Wishlist" effect="light" placement="top">
                      <n-button type="neutral" icon>
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                    </el-tooltip>
                  </div>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <card type="product" plain>
                <img slot="image" src="img/gucci.jpg" alt />
                <h4 class="card-title">
                  <a href="#pablo">Gucci</a>
                </h4>
                <p class="card-description">
                  The smooth woven-wool is water resistant to ensure you stay pristine after a long-haul flight. Cut in
                  a trim yet comfortable regular fit.
                </p>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-old">&euro;2,430</span>
                    <span class="price price-new">&euro;890</span>
                  </div>
                  <div class="stats stats-right">
                    <el-tooltip content="Saved to Wishlist" effect="light" placement="top">
                      <n-button type="neutral" icon>
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                    </el-tooltip>
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
      <!-- section -->
      <div class="subscribe-line subscribe-line-image" style="background-image: url('img/bg43.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="text-center">
                <h4 class="title">Subscribe to our Newsletter</h4>
                <p class="description">
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                </p>
              </div>
              <card type="raised" class="card-form-horizontal">
                <div class="row">
                  <div class="col-sm-8">
                    <fg-input placeholder="Your Email..." addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>
                  </div>
                  <div class="col-sm-4">
                    <n-button type="primary" round block>Subscribe</n-button>
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, InfoSection, FormGroupInput, Checkbox, Collapse, CollapseItem, Slider } from '@/components'
import { Carousel, CarouselItem, Tooltip } from 'element-ui'

export default {
  name: 'EcommercePage',
  bodyClass: 'ecommerce-page',
  components: {
    Card,
    InfoSection,
    Collapse,
    CollapseItem,
    Slider,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      filters: {
        priceRange: [42, 900],
        clothingTypes: [
          {
            label: 'Blazers',
            value: false,
          },
          {
            label: 'Casual Shirts',
            value: false,
          },
          {
            label: 'Formal Shirts',
            value: false,
          },
          {
            label: 'Jeans',
            value: false,
          },
          {
            label: 'Polos',
            value: false,
          },
        ],
        designerTypes: [
          {
            label: 'All',
            value: false,
          },
          {
            label: 'Polo Ralph Lauren',
            value: false,
          },
          {
            label: 'Wooyoungmi',
            value: false,
          },
          {
            label: 'Alexander McQueen',
            value: false,
          },
          {
            label: 'Tom Ford',
            value: false,
          },
          {
            label: 'AMI',
            value: false,
          },
          {
            label: 'Berena',
            value: false,
          },
          {
            label: 'Thom Sweeney',
            value: false,
          },
          {
            label: 'Burberry Prorsum',
            value: false,
          },
          {
            label: 'Calvin Klein',
            value: false,
          },
          {
            label: 'Kingsman',
            value: false,
          },
          {
            label: 'Club Monaco',
            value: false,
          },
          {
            label: 'Dolce & Gabbana',
            value: false,
          },
          {
            label: 'Gucci',
            value: false,
          },
          {
            label: 'Biglioli',
            value: false,
          },
          {
            label: 'Lanvin',
            value: false,
          },
          {
            label: 'Loro Piana',
            value: false,
          },
          {
            label: 'Massimo Alba',
            value: false,
          },
        ],
        colourTypes: [
          {
            label: 'All',
            value: false,
          },
          {
            label: 'Black',
            value: false,
          },
          {
            label: 'Blue',
            value: false,
          },
          {
            label: 'Brown',
            value: false,
          },
          {
            label: 'Gray',
            value: false,
          },
          {
            label: 'Neutrals',
            value: false,
          },
          {
            label: 'Purple',
            value: false,
          },
        ],
      },
      products: [
        {
          image: 'img/polo.jpg',
          title: 'Polo Ralph Lauren',
          description: 'Impeccably tailored in Italy from lightweight navy wool.',
          price: 300,
        },
        {
          image: 'img/tom-ford.jpg',
          title: 'Tom Ford',
          description: "Immaculate tailoring is TOM FORD's forte.",
          price: 879,
        },
        {
          image: 'img/wooyoungmi.jpg',
          title: 'Wooyoungmi',
          description: 'Dark-grey slub wool, pintucked notch lapels.',
          price: 555,
        },
        {
          image: 'img/sweeney.jpg',
          title: 'Thom Sweeney',
          description: "It's made from lightweight grey wool woven.",
          price: 680,
        },
        {
          image: 'img/kingsman.jpg',
          title: 'Kingsman',
          description: 'Crafted from khaki cotton and fully canvassed.',
          price: 725,
        },
        {
          image: 'img/boglioli.jpg',
          title: 'Boglioli',
          description: 'Masterfully crafted in Northern Italy.',
          price: 699,
        },
      ],
    }
  },
}
</script>
