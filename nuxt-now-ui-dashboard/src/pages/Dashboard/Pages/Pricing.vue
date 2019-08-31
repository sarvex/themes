<template>
  <div>
    <div class="row">
      <div class="col-md-6 ml-auto mr-auto text-center">
        <h2 class="title">Pick the best plan for you</h2>
        <h5 class="description">You have Free Unlimited Updates and Premium Support on each package.</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <card class="card-pricing"
              plain
              no-footer-line
              category="Bravo Pack">
          <div class="card-icon icon-warning">
            <i class="now-ui-icons media-1_button-power"></i>
          </div>
          <h3 class="card-title">10$</h3>
          <ul>
            <li>Complete documentation</li>
            <li>Working materials in Sketch</li>
          </ul>

          <n-button slot="footer" type="primary" round>Add to Cart</n-button>
        </card>

      </div>

      <div class="col-lg-3 col-md-6">
        <card class="card-pricing"
              no-footer-line
              category="Alpha Pack">
          <div class="card-icon icon-primary">
            <i class="now-ui-icons objects_diamond"></i>
          </div>
          <h3 class="card-title">69$</h3>
          <ul>
            <li>Working materials in EPS</li>
            <li>6 months access to the library</li>
          </ul>

          <n-button slot="footer" type="primary" round>Add to Cart</n-button>
        </card>

      </div>

      <div class="col-lg-3 col-md-6">

        <card class="card-pricing"
              plain
              no-footer-line
              category=" Charlie Pack">
          <div class="card-icon icon-success ">
            <i class="now-ui-icons media-2_sound-wave"></i>
          </div>
          <h3 class="card-title">69$</h3>
          <ul>
            <li>Working materials in PSD</li>
            <li>1 year access to the library</li>
          </ul>

          <n-button slot="footer" type="primary" round>Add to Cart</n-button>
        </card>

      </div>

      <div class="col-lg-3 col-md-6">

        <card class="card-pricing"
              plain
              no-footer-line
              category=" Extra Pack">
          <div class="card-icon icon-danger ">
            <i class="now-ui-icons education_atom"></i>
          </div>
          <h3 class="card-title">159$</h3>

          <ul>
            <li>Complete documentation</li>
            <li>2GB cloud storage</li>
          </ul>

          <n-button slot="footer" type="neutral" round>Add to Cart</n-button>
        </card>
      </div>
    </div>
  </div>

</template>
<script>
export default {};
</script>
<style>
</style>
