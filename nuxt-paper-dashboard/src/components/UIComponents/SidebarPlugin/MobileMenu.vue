<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <a href="javascript:void(0)" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
        <i class="ti-panel"></i>
        <p>Stats</p>
      </a>
    </li>
    <drop-down tag="li" title="5 Notificaitons" icon="ti-bell">
      <a slot="title" href="javascript:void(0)" class="dropdown-toggle btn-rotate" data-toggle="dropdown">
        <i class="ti-bell"></i>
        <span class="notification">5</span>
        <p class="hidden-md hidden-lg">
          Notifications
          <b class="caret"></b>
        </p>
      </a>
      <li><a href="javascript:void(0)">Notification 1</a></li>
      <li><a href="javascript:void(0)">Notification 2</a></li>
      <li><a href="javascript:void(0)">Notification 3</a></li>
      <li><a href="javascript:void(0)">Notification 4</a></li>
      <li><a href="javascript:void(0)">Another notification</a></li>
    </drop-down>
    <li>
      <a href="javascript:void(0)" class="btn-rotate">
        <i class="ti-settings"></i>
        <p class="hidden-md hidden-lg">
          Settings
        </p>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {}
</script>
<style>
</style>
