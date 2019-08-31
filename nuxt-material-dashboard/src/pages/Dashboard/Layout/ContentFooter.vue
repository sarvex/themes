<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link
              v-if="$route.meta.rtlActive"
              :to="{ path: 'https://www.creative-tim.com' }"
              >منزل</router-link
            >
            <a v-else href="https://www.creative-tim.com">Creative Tim</a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="http://blog.creative-tim.com">
              شركة
            </a>
            <a v-else href="https://creative-tim.com/presentation">
              About Us
            </a>
          </li>
          <li>
            <a v-if="$route.meta.rtlActive" href="http://blog.creative-tim.com">
              محفظة
            </a>
            <a v-else href="http://blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a
              v-if="$route.meta.rtlActive"
              href="https://www.creative-tim.com/license"
            >
              بلوق
            </a>
            <a v-else href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://www.creative-tim.com/?ref=mdp-vuejs" target="_blank"
          >Creative Tim</a
        >, made with <i class="fa fa-heart heart"></i> for a better web
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style></style>
