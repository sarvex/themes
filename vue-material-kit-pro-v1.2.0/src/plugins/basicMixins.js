import { API_KEY } from "../API_KEY";
import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.KEY = API_KEY;

const InitMap = {
  methods: {
    initMap(google) {
      // Regular Map
      const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        disableDefaultUI: true, // a way to quickly hide all controls
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      };

      const map = new google.maps.Map(
        document.getElementById("contactUs2Map"),
        mapOptions
      );

      const marker = new google.maps.Marker({
        position: myLatlng,
        title: "Regular Map!"
      });

      marker.setMap(map);
    }
  },
  mounted() {
    GoogleMapsLoader.load(google => {
      this.initMap(google);
    });
  }
};

const HeaderImage = {
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};

const VerticalNav = {
  methods: {
    scrollToElement(elem) {
      let element_id = document.getElementById(elem);
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    scrollListener() {
      var contentSections = document.getElementsByClassName("cd-section");
      var navigationItems = document
        .getElementById("cd-vertical-nav")
        .getElementsByTagName("a");

      for (let i = 0; i < contentSections.length; i++) {
        var activeSection =
          parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
        if (
          contentSections[i].offsetTop -
            window.innerHeight / 2 +
            document.getElementById("main-panel").offsetTop <
            window.pageYOffset &&
          contentSections[i].offsetTop +
            contentSections[i].scrollHeight -
            window.innerHeight / 2 +
            document.getElementById("main-panel").offsetTop >
            window.pageYOffset
        ) {
          navigationItems[activeSection].classList.add("is-selected");
        } else {
          navigationItems[activeSection].classList.remove("is-selected");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};

const ShoppingCart = {
  computed: {
    shoppingTotal() {
      return this.shoppingCartTable.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
    }
  },
  methods: {
    increaseQuantity(item) {
      item.qty++;
      this.computeAmount(item);
    },
    decreaseQuantity(item) {
      if (item.qty > 1) {
        item.qty--;
        this.computeAmount(item);
      }
    },
    computeAmount(item) {
      item.amount = item.qty * item.price;
    }
  }
};

const Mixins = {
  InitMap,
  VerticalNav,
  ShoppingCart,
  HeaderImage
};

export default Mixins;
