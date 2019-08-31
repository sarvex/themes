<template>
  <div class="wrapper">
    <div id="comments">
      <div class="title">
        <h3>Comments</h3>
      </div>
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-66 md-xsmall-size-100 mx-auto"
        >
          <div class="comment-area">
            <h3 class="title text-center">
              10 Comments
            </h3>
            <div class="comment">
              <a
                class="float-left"
                href="javascript:void(0)"
              >
                <div class="avatar">
                  <img
                    class="comment-object"
                    :src="avatar"
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
                  foundation in truth I stand with the most humility. We are so
                  blessed!
                </p>
                <p>
                  All praises and blessings to the families of people who never
                  gave up on dreams. Don't forget, You're Awesome!
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
                    <md-tooltip md-direction="top">
                      Reply to Comment
                    </md-tooltip>
                  </md-button>
                </div>

                <div class="comment comment-post">
                  <a
                    class="author float-left"
                    href="javascript:void(0)"
                  >
                    <div class="avatar">
                      <img
                        class="media-object"
                        alt="64x64"
                        :src="image1"
                      >
                    </div>
                  </a>
                  <div class="comment-body">
                    <md-field maxlength="5">
                      <label>Write a nice reply or go home...</label>
                      <md-textarea v-model="aboutme" />
                    </md-field>
                    <div class="comment-footer">
                      <md-button
                        href="javascript:void(0)"
                        class="md-success"
                      >
                        <md-icon>reply</md-icon> Reply
                      </md-button>
                    </div>
                  </div>
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
                    :src="image"
                  >
                </div>
              </a>
              <div class="comment-body">
                <h4 class="comment-heading">
                  John Camber <small>· Yesterday</small>
                </h4>
                <p>
                  Hello guys, nice to have you on the platform! There will be a
                  lot of great stuff coming soon. We will keep you posted for
                  the latest news.
                </p>
                <p>Don't forget, You're Awesome!</p>
                <div class="comment-footer">
                  <md-button
                    href="javascript:void(0)"
                    class="md-success md-simple"
                  >
                    <md-icon>reply</md-icon> Reply
                    <md-tooltip md-direction="top">
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
                        :src="avatar"
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

            <div class="comment">
              <a
                class="float-left"
                href="javascript:void(0)"
              >
                <div class="avatar">
                  <img
                    class="comment-object"
                    alt="64x64"
                    :src="image1"
                  >
                </div>
              </a>
              <div class="comment-body">
                <h4 class="comment-heading">
                  Rosa Thompson <small>· 2 Days Ago</small>
                </h4>

                <p>
                  Hello guys, nice to have you on the platform! There will be a
                  lot of great stuff coming soon. We will keep you posted for
                  the latest news.
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
                    <md-tooltip md-direction="top">
                      Reply to Comment
                    </md-tooltip>
                  </md-button>
                </div>
              </div>
            </div>

            <pagination
              v-model="defaultPagination"
              class="justify-content-center"
              type="success"
              :page-count="5"
            />
          </div>

          <h3 class="text-center">
            Post your comment <br><small>- Logged In User -</small>
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
                  :src="avatar"
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
                  class="md-success"
                >
                  Post Comment
                </md-button>
              </div>
            </div>
          </div>
          <!-- end comment-post -->

          <h3 class="text-center">
            Post your comment <br><small>- Not Logged In User -</small>
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
                  :src="placeholder"
                >
              </div>
            </a>
            <div class="comment-body">
              <form class="form">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100"
                  >
                    <md-field class="has-success">
                      <md-input
                        v-model="name"
                        placeholder="Your Name"
                      />
                    </md-field>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100"
                  >
                    <md-field class="has-success">
                      <md-input
                        v-model="email"
                        placeholder="Your Email"
                      />
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Write some nice stuff or nothing...</label>
                  <md-textarea v-model="aboutme3" />
                </md-field>
                <div class="comment-footer flex-direction-column">
                  <h6>Sign in with</h6>
                  <span class="flex">
                    <span><md-button
                            href="javascript:void(0)"
                            class="md-twitter md-just-icon md-round"
                          ><i class="fab fa-twitter" /></md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-facebook md-just-icon md-round"
                      ><i class="fab fa-facebook" /></md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-google md-just-icon md-round"
                      ><i class="fab fa-google" /></md-button></span>
                    <md-button
                      href="javascript:void(0)"
                      class="md-success ml-auto"
                    >Post Comment</md-button>
                  </span>
                </div>
              </form>
            </div>
            <!-- end comment-body -->
          </div>
          <!-- end comment-post -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@/components";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      aboutme: null,
      aboutme2: null,
      aboutme3: null,
      name: null,
      email: null,
      defaultPagination: 3,
      avatar: require("@/assets/img/faces/avatar.jpg"),
      placeholder: require("@/assets/img/placeholder.jpg"),
      image: require("@/assets/img/faces/marc.jpg"),
      image1: require("@/assets/img/faces/kendall.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between !important;
}

.flex-direction-column {
  flex-direction: column;
}
</style>
