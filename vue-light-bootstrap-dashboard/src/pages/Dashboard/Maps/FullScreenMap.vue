<template>
    <div id="map" class="full-screen-map"></div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  import {API_KEY} from './API_KEY'
  GoogleMapsLoader.KEY = API_KEY

  export default {
    methods: {
      initMap (google) {
        // Regular Map
        var myLatlng = new window.google.maps.LatLng(40.748817, -73.985428)
        var mapOptions = {
          zoom: 8,
          center: myLatlng,
          scrollwheel: false // we disable de scroll over the map, it is a really annoing when you scroll through page
        }

        var map = new window.google.maps.Map(document.getElementById('map'), mapOptions)

        var marker = new window.google.maps.Marker({
          position: myLatlng,
          title: 'Regular Map!'
        })

        marker.setMap(map)
      }
    },
    mounted () {
      GoogleMapsLoader.load((google) => {
        this.initMap(google)
      })
    }
  }
</script>
<style>
  #map{
    height: 100vh;
  }
</style>
