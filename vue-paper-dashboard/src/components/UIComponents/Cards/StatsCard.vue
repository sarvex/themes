<template>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="col-xs-5">
          <slot name="header"></slot>
        </div>
        <div class="col-xs-7">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <hr/>
      <slot name="footer"></slot>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'stats-card'
  }

</script>
<style scoped>
  .card-content{
    min-height: 85px
  }
</style>
