<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">
              How We Built the Most Successful Castle Ever
            </h1>
            <h4>
              The last 48 hours of my life were total madness. This is what I
              did.
            </h4>
            <br>
            <md-button
              class="md-success md-lg md-round"
            >
              <md-icon>format_align_left</md-icon>Read Article
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h3 class="title">
                The Castle Looks Different at Night...
              </h3>
              <p>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more. We are here to make life better.
                <br>
                <br>
                And now I look and look around and there’s so many Kanyes I've
                been trying to figure out the bed design for the master bedroom
                at our Hidden Hills compound... and thank you for turning my
                personal jean jacket into a couture piece.
              </p>
              <div class="blockquote">
                <p>
                  “And thank you for turning my personal jean jacket into a
                  couture piece.”
                </p>
                <small>
                  Kanye West, Producer.
                </small>
              </div>
            </div>
            <div
              class="section md-layout-item md-size-80 md-small-size-100 mx-auto"
            >
              <div class="md-layout">
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <img
                    class="img-raised rounded img-fluid"
                    alt="Raised Image"
                    :src="blogPost.blogPost1"
                  >
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <img
                    class="img-raised rounded img-fluid"
                    alt="Raised Image"
                    :src="blogPost.blogPost2"
                  >
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <img
                    class="img-raised rounded img-fluid"
                    alt="Raised Image"
                    :src="blogPost.blogPost3"
                  >
                </div>
              </div>
            </div>
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h3 class="title">
                Rest of the Story:
              </h3>
              <p>
                We are here to make life better. And now I look and look around
                and there’s so many Kanyes I've been trying to figure out the
                bed design for the master bedroom at our Hidden Hills
                compound... and thank you for turning my personal jean jacket
                into a couture piece. <br>
                I speak yell scream directly at the old guard on behalf of the
                future. daytime All respect prayers and love to Phife’s family
                Thank you for so much inspiration.
              </p>
              <p>
                Thank you Anna for the invite thank you to the whole Vogue team
                And I love you like Kanye loves Kanye Pand Pand Panda I've been
                trying to figure out the bed design for the master bedroom at
                our Hidden Hills compound...The Pablo pop up was almost a pop up
                of influence. All respect prayers and love to Phife’s family
                Thank you for so much inspiration daytime I love this new Ferg
                album! The Life of Pablo is now available for purchase I have a
                dream. Thank you to everybody who made The Life of Pablo the
                number 1 album in the world! I'm so proud of the nr #1 song in
                the country. Panda! Good music 2016!
              </p>
              <p>
                I love this new Ferg album! The Life of Pablo is now available
                for purchase I have a dream. Thank you to everybody who made The
                Life of Pablo the number 1 album in the world! I'm so proud of
                the nr #1 song in the country. Panda! Good music 2016!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-blog-info">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <div class="blog-tags">
                    Tags:
                    <badge
                      type="primary"
                      class="badge-pill"
                    >
                      Photography
                    </badge>
                    <badge
                      type="primary"
                      class="badge-pill"
                    >
                      Stories
                    </badge>
                    <badge
                      type="primary"
                      class="badge-pill"
                    >
                      Castle
                    </badge>
                  </div>
                </div>
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-right"
                >
                  <md-button
                    href="javascript:void(0)"
                    class="md-google md-round"
                  >
                    <i class="fab fa-google" /> 232
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-twitter md-round"
                  >
                    <i class="fab fa-twitter" /> 910
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-facebook md-round"
                  >
                    <i class="fab fa-facebook" /> 872
                  </md-button>
                </div>
              </div>
              <hr>
              <profile-card
                flex-direction-row
                card-avatar
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="true"
                :card-image="cardProfile.cardProfile1"
              >
                <template slot="cardContent">
                  <h4 class="card-title">
                    Alec Thompson
                  </h4>
                  <p class="description">
                    I've been trying to figure out the bed design for the master
                    bedroom at our Hidden Hills compound...I like good music
                    from Youtube.
                  </p>
                </template>
                <template slot="cardAction">
                  <md-button class="md-round">
                    Follow
                  </md-button>
                </template>
              </profile-card>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-comments">
        <div class="container">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
            <div class="comment-area">
              <h3 class="title text-center">
                3 Comments
              </h3>
              <div class="comment">
                <a
                  class="float-left"
                  href="javascript:void(0)"
                >
                  <div class="avatar">
                    <img
                      class="comment-object"
                      :src="comment3"
                      alt="..."
                    >
                  </div>
                </a>
                <div class="comment-body">
                  <h4 class="comment-heading">
                    Tina Andrew <small>· 7 minutes ago</small>
                  </h4>

                  <p>
                    Chance too good. God level bars. I'm so proud of
                    @LifeOfDesiigner #1 song in the country. Panda! Don't be
                    scared of the truth because we need to restart the human
                    foundation in truth I stand with the most humility. We are
                    so blessed!
                  </p>
                  <p>
                    All praises and blessings to the families of people who
                    never gave up on dreams. Don't forget, You're Awesome!
                  </p>

                  <div class="comment-footer">
                    <md-button
                      href="javascript:void(0)"
                      class="md-danger md-simple"
                    >
                      <md-icon>favorite</md-icon> 243
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-success md-simple"
                    >
                      <md-icon>reply</md-icon> Reply
                      <md-tooltip
                        md-direction="top"
                      >
                        Reply to Comment
                      </md-tooltip>
                    </md-button>
                  </div>
                </div>
              </div>

              <div class="comment">
                <a
                  class="float-left"
                  href="javascript:void(0)"
                >
                  <div class="avatar">
                    <img
                      class="comment-object"
                      alt="Tim Picture"
                      :src="comment1"
                    >
                  </div>
                </a>
                <div class="comment-body">
                  <h4 class="comment-heading">
                    John Camber <small>· Yesterday</small>
                  </h4>
                  <p>
                    Hello guys, nice to have you on the platform! There will be
                    a lot of great stuff coming soon. We will keep you posted
                    for the latest news.
                  </p>
                  <p>Don't forget, You're Awesome!</p>
                  <div class="comment-footer">
                    <md-button
                      href="javascript:void(0)"
                      class=" md-simple"
                    >
                      <md-icon>favorite</md-icon> 25
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-success md-simple"
                    >
                      <md-icon>reply</md-icon> Reply
                      <md-tooltip
                        md-direction="top"
                      >
                        Reply to Comment
                      </md-tooltip>
                    </md-button>
                  </div>
                  <div class="comment">
                    <a
                      class="float-left"
                      href="javascript:void(0)"
                    >
                      <div class="avatar">
                        <img
                          class="comment-object"
                          alt="64x64"
                          :src="comment3"
                        >
                      </div>
                    </a>
                    <div class="comment-body">
                      <h4 class="comment-heading">
                        Tina Andrew <small>· 2 Days Ago</small>
                      </h4>

                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>Don't forget, You're Awesome!</p>
                      <div class="comment-footer">
                        <md-button
                          href="javascript:void(0)"
                          class="md-danger md-simple"
                        >
                          <md-icon>favorite</md-icon> 243
                        </md-button>
                        <md-button
                          href="javascript:void(0)"
                          class="md-success md-simple"
                        >
                          <md-icon>reply</md-icon> Reply
                          <md-tooltip
                            md-direction="top"
                          >
                            Reply to Comment
                          </md-tooltip>
                        </md-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 class="title text-center">
                Post your comment
              </h3>
              <div class="comment comment-post">
                <a
                  class="author float-left"
                  href="javascript:void(0)"
                >
                  <div class="avatar">
                    <img
                      class="comment-object"
                      alt="64x64"
                      :src="comment2"
                    >
                  </div>
                </a>
                <div class="comment-body">
                  <md-field maxlength="5">
                    <label>Write some nice stuff or nothing...</label>
                    <md-textarea v-model="aboutme2" />
                  </md-field>
                  <div class="comment-footer">
                    <md-button
                      href="javascript:void(0)"
                      class="md-success md-round"
                    >
                      Post Comment
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-12 md-small-size-100">
            <h2 class="title text-center">
              Similar Stories
            </h2>
            <br>
            <div class="md-layout">
              <div class="md-layout-item md-size-33 md-small-size-100">
                <blog-card
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardBlog.cardBlog1"
                >
                  <template slot="cardContent">
                    <h6 class="card-category text-info">
                      ENTERPRISE
                    </h6>
                    <h4 class="card-title">
                      <a
                        href="javasript:void(0)"
                      >Autodesk looks to future of 3D printing with Project
                        Escher</a>
                    </h4>
                    <p class="card-description">
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="javascript:void(0)">Read More</a>
                    </p>
                  </template>
                </blog-card>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <blog-card
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardBlog.cardBlog2"
                >
                  <template slot="cardContent">
                    <h6 class="card-category text-success">
                      Startups
                    </h6>
                    <h4 class="card-title">
                      <a
                        href="javasript:void(0)"
                      >Lyft launching cross-platform service this week</a>
                    </h4>
                    <p class="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth And I love you like Kanye
                      loves Kanye I love Rick Owens’ bed design but the back
                      is...
                      <a href="javascript:void(0)">Read More</a>
                    </p>
                  </template>
                </blog-card>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <blog-card
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardBlog.cardBlog3"
                >
                  <template slot="cardContent">
                    <h6 class="card-category text-danger">
                      <md-icon class="text-danger">
                        trending_up
                      </md-icon> Fashion
                    </h6>
                    <h4 class="card-title">
                      <a
                        href="javasript:void(0)"
                      >6 insights into the French Fashion landscape</a>
                    </h4>
                    <p class="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth And I love you like Kanye
                      loves Kanye I love Rick Owens’ bed design but the back
                      is...
                      <a href="javascript:void(0)">Read More</a>
                    </p>
                  </template>
                </blog-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, ProfileCard, BlogCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Badge,
    ProfileCard,
    BlogCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "blog-post",
  data() {
    return {
      aboutme2: null,
      image: require("@/assets/img/bg5.jpg"),
      comment1: require("@/assets/img/faces/card-profile1-square.jpg"),
      comment2: require("@/assets/img/faces/card-profile6-square.jpg"),
      comment3: require("@/assets/img/faces/card-profile4-square.jpg"),
      blogPost: {
        blogPost1: require("@/assets/img/examples/blog4.jpg"),
        blogPost2: require("@/assets/img/examples/blog3.jpg"),
        blogPost3: require("@/assets/img/examples/blog1.jpg")
      },
      cardProfile: {
        cardProfile1: require("@/assets/img/faces/card-profile1-square.jpg")
      },
      cardBlog: {
        cardBlog1: require("@/assets/img/examples/blog6.jpg"),
        cardBlog2: require("@/assets/img/examples/blog8.jpg"),
        cardBlog3: require("@/assets/img/examples/blog7.jpg")
      }
    };
  }
};
</script>

<style lang="scss"></style>
