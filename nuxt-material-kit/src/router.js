import Vue from "vue";
import Router from "vue-router";

//  Main Pages
import Index from "./views/Index.vue";
import Sections from "./views/Sections.vue";
import Presentation from "./views/Presentation.vue";

//  Main Examples
import Landing from "./views/examples/Landing.vue";
import Login from "./views/examples/Login.vue";
import Profile from "./views/examples/Profile.vue";
import AboutUs from "./views/examples/AboutUs.vue";
import BlogPost from "./views/examples/BlogPost.vue";
import BlogPosts from "./views/examples/BlogPosts.vue";
import ContactUs from "./views/examples/ContactUs.vue";
import Pricing from "./views/examples/Pricing.vue";
import Shopping from "./views/examples/Shopping.vue";
import Ecommerce from "./views/examples/Ecommerce.vue";
import Product from "./views/examples/Product.vue";
import Signup from "./views/examples/Signup.vue";
import Error from "./views/examples/Error.vue";

import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/sections",
      name: "sections",
      components: { default: Sections, header: MainNavbar },
      props: {
        header: { colorOnScroll: 0, navbarTransparent: false }
      }
    },
    {
      path: "/presentation",
      name: "presentation",
      components: {
        default: Presentation,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
        footer: { type: "white" }
      }
    },
    {
      path: "/about-us",
      name: "about-us",
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/blog-post",
      name: "blog-post",
      components: { default: BlogPost, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/blog-posts",
      name: "blog-posts",
      components: {
        default: BlogPosts,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/contact-us",
      name: "contact-us",
      components: {
        default: ContactUs,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 0, navbarTransparent: false, type: "dark" }
      }
    },
    {
      path: "/pricing-page",
      name: "pricing-page",
      components: {
        default: Pricing,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/shopping-cart",
      name: "shopping-cart",
      components: {
        default: Shopping,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/ecommerce-page",
      name: "ecommerce-page",
      components: {
        default: Ecommerce,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
        footer: { type: "black", size: "big" }
      }
    },
    {
      path: "/product-page",
      name: "product-page",
      components: {
        default: Product,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/landing-page",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/login-page",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/profile-page",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/signup-page",
      name: "signup",
      components: { default: Signup, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
    {
      path: "/error-page",
      name: "error",
      components: { default: Error, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
