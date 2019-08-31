<template>
  <div class="section section-examples section-dark">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
          <div class="section-description">
            <h2 class="title">
              Example Pages
            </h2>
            <h5 class="description">
              The easiest way to get started is to use one of our pre-built
              example pages. From landing pages to e-commerce or blog pages, you
              will be able jump start your development. Show your clients a
              quick prototype and get inspired for your next project!
            </h5>
          </div>
        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-33 md-small-size-100">
          <template v-for="item in ExamplePagesSection1">
            <h4
              :key="item.key"
              class="title"
            >
              {{ item.name }}
            </h4>
            <div
              :key="item.key"
              class="card"
            >
              <a
                :key="item.key"
                :href="`#/${item.link}`"
                target="_blank"
              >
                <img
                  :key="item.key"
                  :src="item.img"
                  alt=""
                >
              </a>
            </div>
          </template>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100">
          <template v-for="item in ExamplePagesSection2">
            <h4
              :key="item.key"
              class="title"
            >
              {{ item.name }}
            </h4>
            <div
              :key="item.key"
              class="card"
            >
              <a
                :key="item.key"
                :href="`#/${item.link}`"
                target="_blank"
              >
                <img
                  :key="item.key"
                  :src="item.img"
                  alt=""
                >
              </a>
            </div>
          </template>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100">
          <template v-for="item in ExamplePagesSection3">
            <h4
              :key="item.key"
              class="title"
            >
              {{ item.name }}
            </h4>
            <div
              :key="item.key"
              class="card"
            >
              <a
                :key="item.key"
                :href="`#/${item.link}`"
                target="_blank"
              >
                <img
                  :key="item.key"
                  :src="item.img"
                  alt=""
                >
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ExamplePagesSection1: [
        {
          name: "About Us",
          link: "about-us",
          img: require("@/assets/img/example-pages/ex-about-us.jpg")
        },
        {
          name: "Landing Page",
          link: "landing-page",
          img: require("@/assets/img/example-pages/ex-landing.jpg")
        },
        {
          name: "Ecommerce Page",
          link: "ecommerce-page",
          img: require("@/assets/img/example-pages/ex-ecommerce.jpg")
        }
      ],
      ExamplePagesSection2: [
        {
          name: "Blog Post",
          link: "blog-post",
          img: require("@/assets/img/example-pages/ex-blog-post.jpg")
        },
        {
          name: "Product Page",
          link: "product-page",
          img: require("@/assets/img/example-pages/ex-product.jpg")
        },
        {
          name: "Login Page",
          link: "login-page",
          img: require("@/assets/img/example-pages/ex-login.jpg")
        },
        {
          name: "Shopping Cart",
          link: "shopping-cart",
          img: require("@/assets/img/example-pages/ex-shopping.jpg")
        }
      ],
      ExamplePagesSection3: [
        {
          name: "Pricing Page",
          link: "pricing-page",
          img: require("@/assets/img/example-pages/ex-pricing.jpg")
        },
        {
          name: "Signup Page",
          link: "signup-page",
          img: require("@/assets/img/example-pages/ex-register.jpg")
        },
        {
          name: "Profile Page",
          link: "profile-page",
          img: require("@/assets/img/example-pages/ex-profile.jpg")
        },
        {
          name: "Blog Posts",
          link: "blog-posts",
          img: require("@/assets/img/example-pages/ex-blog-posts.jpg")
        },
        {
          name: "Contact Us",
          link: "contact-us",
          img: require("@/assets/img/example-pages/ex-contact.jpg")
        },
        {
          name: "Error Page",
          link: "error-page",
          img: require("@/assets/img/example-pages/ex-error.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="css"></style>
