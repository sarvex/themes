<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/dashboard'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{year}}, Designed by
        <a href="https://www.invisionapp.com/">Invision</a>.
        Coded by
        <a href="https://binarcode.com" target="_blank" rel="noopener">BinarCode</a>
        and <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank" rel="noopener">Creative Tim</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
