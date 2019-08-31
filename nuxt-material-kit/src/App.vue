<template>
  <div
    id="vue-material-kit-pro"
    :class="{ 'nav-open': NavbarStore.showNavbar }"
  >
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>
