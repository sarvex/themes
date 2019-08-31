<template>
  <div class="wrapper">
    <div id="cards">
      <template v-if="!sectionCardPlain && !sectionMorphingCards">
        <div class="title">
          <h2>Cards</h2>
          <h3>Blog Cards</h3>
        </div>
        <!-- Blog Cards -->
        <div class="md-layout">
          <div class="md-layout-item md-large-size-33 md-small-size-100">
            <blog-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardBlog.cardBlog1"
            >
              <template
                slot="cardTitleHeader"
              >
                This Summer Will be Awesome
              </template>
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Fashion
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
            </blog-card>
            <md-card class="bg-info">
              <md-card-content>
                <h5 class="card-category card-category-social">
                  <i class="fab fa-twitter" /> Twitter
                </h5>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >"You Don't Have to Sacrifice Joy to Build a Fabulous
                    Business and Life"</a>
                </h4>
              </md-card-content>
              <md-card-actions>
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="avatarImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Tania Andrew</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>favorite</md-icon> 2.4K · <md-icon>share</md-icon> 45
                </div>
              </md-card-actions>
            </md-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-50 md-small-size-100"
          >
            <md-card>
              <md-card-content>
                <h6 class="card-category">
                  <md-icon class="text-danger">
                    trending_up
                  </md-icon> Trending
                </h6>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >To Grow Your Business Start Focusing on Your Employees</a>
                </h4>
              </md-card-content>
              <md-card-actions>
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="christianImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Lord Alex</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>favorite</md-icon> 342 ·
                  <md-icon>chat_bubble</md-icon> 45
                </div>
              </md-card-actions>
            </md-card>
            <blog-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardBlog.cardBlog2"
            >
              <template slot="cardContent">
                <h6 class="card-category text-success">
                  Legal
                </h6>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >5 Common Legal Mistakes That Can Trip-Up Your Startup</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="marcImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Mike John</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>schedule</md-icon> 5 min read
                </div>
              </template>
            </blog-card>
          </div>
          <div class="md-layout-item md-large-size-33 md-small-size-100">
            <blog-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardBlog.cardBlog3"
            >
              <template slot="cardContent">
                <h6 class="card-category text-danger">
                  <md-icon class="text-danger">
                    trending_up
                  </md-icon> Trending
                </h6>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >To Grow Your Business Start Focusing on Your Employees</a>
                </h4>
              </template>
              <template slot="cardAction">
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="marcImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Mike John</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>schedule</md-icon> 5 min read
                </div>
              </template>
            </blog-card>

            <md-card class="bg-success">
              <md-card-content>
                <h5 class="card-category card-category-social">
                  <i class="far fa-newspaper" /> TechCrunch
                </h5>
                <h4 class="card-title">
                  <a href="javascript:void(0)">"Focus on Your Employees"</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>

                <div class="card-stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-round"
                  >
                    Read Article
                  </md-button>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
        <!-- end Blog Cards -->

        <!-- Profile Cards -->
        <div class="title">
          <h3>Profile Cards</h3>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-large-size-33 md-small-size-100">
            <profile-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile1"
            >
              <template
                slot="cardTitleHeader"
              >
                Tania Andrew
              </template>
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Web Designer
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fab fa-instagram" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-large-size-33 md-small-size-100">
            <profile-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-gray">
                  CEO / Co-Founder
                </h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javasript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javasript:void(0)"
                  class="md-facebook md-just-icon md-round"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javasript:void(0)"
                  class="md-google md-just-icon md-round"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-large-size-33 md-small-size-100">
            <profile-card
              :shadow-normal="true"
              :no-colored-shadow="false"
              :card-avatar="true"
              :card-image="marcImg"
            >
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  CEO / Co-Founder
                </h6>
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <md-button class="md-info md-round">
                  Follow
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
        <!-- end Profile Cards -->

        <!-- Full Background Cards -->
        <div class="title">
          <h3>Full Background Cards</h3>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <full-bg-card :card-image="cardFullBg.fullBg1">
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Productivy Apps
                </h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">
                    The Best Productivity Apps on Market
                  </h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-simple"
                >
                  <md-icon>subject</md-icon> Read Article
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-simple"
                >
                  <md-icon>watch_later</md-icon> Watch Later
                </md-button>
              </template>
            </full-bg-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <full-bg-card :card-image="cardFullBg.fullBg2">
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Materials
                </h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">The Sculpture Where Details Matter</h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-danger md-round"
                >
                  <md-icon>subject</md-icon> Read Article
                </md-button>
              </template>
            </full-bg-card>
          </div>
        </div>
        <!-- end Full Background Cards -->

        <!-- Pricing Cards -->
        <div class="title">
          <h3>Pricing Cards</h3>
        </div>
        <div class="md-layout">
          <div
            class="md-layout-item md-large-size-25 md-medium-size-50 md-small-size-100"
          >
            <pricing-card>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Small Company
                </h6>
                <div class="icon icon-info">
                  <i class="material-icons">people</i>
                </div>
                <h3 class="card-title">
                  $29
                </h3>
                <p class="card-description">
                  This is good if your company size is between 2 and 10 Persons.
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-info md-round"
                >
                  Choose Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div
            class="md-layout-item md-large-size-25 md-medium-size-50 md-small-size-100"
          >
            <pricing-card card-bg="primary">
              <template slot="cardContent">
                <div class="icon">
                  <i class="material-icons">business</i>
                </div>
                <h3 class="card-title">
                  $69
                </h3>
                <p class="card-description">
                  This is good if your company size is between 11 and 99
                  Persons.
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round"
                >
                  Choose Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div
            class="md-layout-item md-large-size-25 md-medium-size-50 md-small-size-100"
          >
            <pricing-card
              class="md-card-background"
              :card-image="cardFullBg.fullBg2"
            >
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Premium
                </h6>
                <h1 class="card-title">
                  <small>$</small>89
                </h1>
                <ul>
                  <li><b>100</b> Projects</li>
                  <li><b>5</b> Team Members</li>
                  <li><b>55</b> Personal Contacts</li>
                  <li><b>5.000</b> Messages</li>
                </ul>
                <md-button
                  href="javascript:void(0)"
                  class="md-danger md-round"
                >
                  Get Started
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div
            class="md-layout-item md-large-size-25 md-medium-size-50 md-small-size-100"
          >
            <pricing-card>
              <template slot="cardContent">
                <h6 class="card-category text-success">
                  Platinum
                </h6>
                <h1 class="card-title">
                  <small>$</small>89
                </h1>
                <ul>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Sharing Tools
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Design Tools
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Private
                    Messages
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Personal Brand
                  </li>
                </ul>
                <md-button
                  href="javascript:void(0)"
                  class="md-primary md-round"
                >
                  Get Started
                </md-button>
              </template>
            </pricing-card>
          </div>
        </div>
        <!-- end Pricing Cards -->
      </template>

      <template v-if="sectionMorphingCards">
        <!-- Morphing Cards -->
        <div class="title">
          <h2>Morphing Cards</h2>
          <h3>Rotating Cards</h3>
        </div>
        <div class="md-layout">
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <rotating-card
              card-class="md-card-background"
              layer-background
              :front-card-image="cardRotating.cardRotatingBg1"
              :back-card-image="cardRotating.cardRotatingBg1"
            >
              <template slot="frontRotateCardContent">
                <h6 class="card-category">
                  Full Background Card
                </h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">
                    This Background Card Will Rotate on Hover
                  </h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Manage Post
                </h5>
                <p class="card-description">
                  As an Admin, you have shortcuts to edit, view or delete the
                  posts.
                </p>

                <md-button
                  href="javascript:void(0)"
                  class="md-info md-just-icon md-round"
                >
                  <md-icon>subject</md-icon>
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-success md-just-icon md-round"
                >
                  <md-icon>mode_edit</md-icon>
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-danger md-just-icon md-round"
                >
                  <md-icon>delete</md-icon>
                </md-button>
              </template>
            </rotating-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <rotating-card>
              <template slot="frontRotateCardContent">
                <h5 class="card-category card-category-social text-success">
                  <i class="far fa-newspaper" /> TechCrunch
                </h5>

                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >This Card is Doing a Full Rotation on Hover...</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Do more...
                </h5>
                <p class="card-description">
                  You can read this article or share it with your friends and
                  family on different networks...
                </p>

                <md-button
                  href="javascript:void(0)"
                  class="md-rose md-round"
                >
                  <md-icon>subject</md-icon> Read
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-round"
                >
                  <i class="fab fa-facebook" />
                </md-button>
              </template>
            </rotating-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <rotating-card card-bg="rose">
              <template slot="frontRotateCardContent">
                <h5 class="card-category card-category-social">
                  <i class="fab fa-dribbble" /> Dribbble
                </h5>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >"Dribbble just acquired Crew, a very interesting
                    startup..."</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="frontCardAction">
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="avatarImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Tania Andrew</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>favorite</md-icon> 2.4K · <md-icon>share</md-icon> 45
                </div>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-category card-category-social">
                  <i class="fab fa-dribbble" /> Dribbble
                </h5>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >"Dribbble just acquired Crew, a very interesting
                    startup..."</a>
                </h4>
                <div class="stats">
                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-round"
                  >
                    <md-icon class="md-icon-button">
                      subject
                    </md-icon> Read
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-simple md-round"
                  >
                    <md-icon class="md-icon-button">
                      bookmark
                    </md-icon> Bookmark
                  </md-button>
                </div>
              </template>
            </rotating-card>
          </div>
        </div>

        <div class="title">
          <h3>Manual Rotating Cards</h3>
        </div>
        <div class="md-layout">
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <rotating-card
              :manual-rotate-state="manualRotateState"
              manual-rotate
            >
              <template slot="frontRotateCardContent">
                <h5 class="card-category card-category-social text-success">
                  <i class="far fa-newspaper" /> Manual Rotating Card
                </h5>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >"This card is doing a full rotation, click on the rotate
                    button"</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <div class="stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-success md-round"
                    @click="manualRotateState = true"
                  >
                    <md-icon>refresh</md-icon> Rotate...
                  </md-button>
                </div>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Do more...
                </h5>
                <p class="card-description">
                  You can read this article or share it with your friends and
                  family on different networks...
                </p>
                <div class="stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-rose md-round"
                  >
                    <md-icon>subject</md-icon> Read
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-twitter md-just-icon md-round"
                  >
                    <i class="fab fa-twitter" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-dribbble md-just-icon md-round"
                  >
                    <i class="fab fa-dribbble" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-facebook md-just-icon md-round"
                  >
                    <i class="fab fa-facebook" />
                  </md-button>
                </div>
                <br>
                <md-button
                  href="javascript:void(0)"
                  class="md-simple md-round"
                  @click="manualRotateState = false"
                >
                  <md-icon>refresh</md-icon> Back...
                </md-button>
              </template>
            </rotating-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <rotating-card
              card-class="md-card-background"
              layer-background
              :front-card-image="cardRotating.cardRotatingBg2"
              :back-card-image="cardRotating.cardRotatingBg2"
              :manual-rotate-state="manualRotateState2"
              manual-rotate
            >
              <template slot="frontRotateCardContent">
                <h6 class="card-category">
                  Full Background Card
                </h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">
                    This card is doing a full rotation, click on the rotate
                    button
                  </h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human...
                </p>

                <div class="stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-danger md-round"
                    @click="manualRotateState2 = true"
                  >
                    <md-icon>refresh</md-icon> Rotate...
                  </md-button>
                </div>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Manage Post
                </h5>
                <p class="card-description">
                  As an Admin, you have shortcuts to edit, view or delete the
                  posts.
                </p>
                <div class="stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-info md-just-icon md-round"
                  >
                    <md-icon>subject</md-icon>
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-success md-just-icon md-round"
                  >
                    <md-icon>mode_edit</md-icon>
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-danger md-just-icon md-round"
                  >
                    <md-icon>delete</md-icon>
                  </md-button>

                  <br>
                  <br>

                  <md-button
                    href="javascript:void(0)"
                    class="md-simple md-round"
                    @click="manualRotateState2 = false"
                  >
                    <md-icon>refresh</md-icon> Back...
                  </md-button>
                </div>
              </template>
            </rotating-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <rotating-card
              card-bg="warning"
              :manual-rotate-state="manualRotateState3"
              manual-rotate
            >
              <template slot="frontRotateCardContent">
                <h5 class="card-category card-category-social">
                  <md-icon>receipt</md-icon> Manual Rotating Card
                </h5>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >"This card is doing a full rotation, click on the rotate
                    button"</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <div class="stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-round"
                    @click="manualRotateState3 = true"
                  >
                    <md-icon class="md-icon-button">
                      refresh
                    </md-icon> Rotate...
                  </md-button>
                </div>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Do more...
                </h5>
                <p class="card-description">
                  You can read this article or share it with your friends and
                  family on different networks...
                </p>
                <div class="stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-round md-white"
                  >
                    <md-icon class="md-icon-button">
                      subject
                    </md-icon> Read
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-twitter md-just-icon md-round md-white"
                  >
                    <i class="fab fa-twitter md-icon-button" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-dribbble md-just-icon md-round md-white"
                  >
                    <i class="fab fa-dribbble md-icon-button" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-facebook md-just-icon md-round md-white"
                  >
                    <i class="fab fa-facebook md-icon-button" />
                  </md-button>

                  <br>
                  <br>

                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-round"
                    @click="manualRotateState3 = false"
                  >
                    <md-icon class="md-icon-button">
                      refresh
                    </md-icon> Back...
                  </md-button>
                </div>
              </template>
            </rotating-card>
          </div>
        </div>
        <!-- end Morphing Cards -->

        <!-- Dynamic Shadows Cards -->
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-66 md-large-size-66 md-small-size-100"
          >
            <div class="title">
              <h2>Dynamic Shadows™</h2>
              <h4>
                Material Kit PRO is coming with the famous colored shadows. That
                means each image from the cards is getting an unique color
                shadow. You don't have to do anything to activate them, just
                enjoy the new look of your website.
              </h4>
            </div>
          </div>
        </div>
        <div class="md-layout">
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <blog-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="dynamicShadows.dynamicShadowsBg1"
            >
              <template slot="cardContent">
                <h6 class="card-category text-warning">
                  Dynamic Shadows
                </h6>
                <h4 class="card-title">
                  <a
                    href="javacript:void(0)"
                  >The image from this card is getting a yellow shadow</a>
                </h4>
              </template>
            </blog-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <blog-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="dynamicShadows.dynamicShadowsBg2"
            >
              <template slot="cardContent">
                <h6 class="card-category text-rose">
                  Dynamic Shadows
                </h6>
                <h4 class="card-title">
                  <a
                    href="javacript:void(0)"
                  >The image from this card is getting a pink shadow</a>
                </h4>
              </template>
            </blog-card>
          </div>
          <div
            class="md-layout-item md-large-size-33 md-medium-size-50 md-small-size-100"
          >
            <blog-card
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="dynamicShadows.dynamicShadowsBg3"
            >
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Dynamic Shadows
                </h6>
                <h4 class="card-title">
                  <a
                    href="javacript:void(0)"
                  >The image from this card is getting a blue shadow</a>
                </h4>
              </template>
            </blog-card>
          </div>
        </div>
        <!-- end Dynamic Shadows Cards -->
      </template>

      <template v-if="sectionCardPlain">
        <div class="title">
          <h3>Plain Cards</h3>
        </div>
        <!-- Blog Plain Cards -->
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-50 md-large-size-33 md-small-size-100"
          >
            <blog-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardBlog.cardBlog4"
            >
              <template
                slot="cardTitleHeader"
              >
                This Summer Will be Awesome
              </template>
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Fashion
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
            </blog-card>
            <md-card class="bg-info">
              <md-card-content>
                <h5 class="card-category card-category-social">
                  <i class="fab fa-twitter" /> Twitter
                </h5>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >"You Don't Have to Sacrifice Joy to Build a Fabulous
                    Business and Life"</a>
                </h4>
              </md-card-content>
              <md-card-actions>
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="avatarImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Tania Andrew</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>favorite</md-icon> 2.4K · <md-icon>share</md-icon> 45
                </div>
              </md-card-actions>
            </md-card>
          </div>
          <div
            class="md-layout-item md-medium-size-50 md-large-size-33 md-small-size-100"
          >
            <blog-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardBlog.cardBlog5"
            >
              <template slot="cardContent">
                <h6 class="card-category text-success">
                  Legal
                </h6>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >5 Common Legal Mistakes That Can Trip-Up Your Startup</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="marcImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Mike John</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>schedule</md-icon> 5 min read
                </div>
              </template>
            </blog-card>
          </div>
          <div
            class="md-layout-item md-medium-size-50 md-large-size-33 md-small-size-100"
          >
            <blog-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardBlog.cardBlog6"
            >
              <template slot="cardContent">
                <h6 class="card-category text-danger">
                  <md-icon class="text-danger">
                    trending_up
                  </md-icon> Trending
                </h6>
                <h4 class="card-title">
                  <a
                    href="javascript:void(0)"
                  >To Grow Your Business Start Focusing on Your Employees</a>
                </h4>
              </template>
              <template slot="cardAction">
                <div class="author">
                  <a href="javascript:void(0)">
                    <img
                      :src="marcImg"
                      alt="..."
                      class="avatar img-raised"
                    >
                    <span>Mike John</span>
                  </a>
                </div>
                <div class="stats ml-auto">
                  <md-icon>schedule</md-icon> 5 min read
                </div>
              </template>
            </blog-card>
            <md-card class="bg-danger">
              <md-card-content>
                <h5 class="card-category card-category-social">
                  <i class="far fa-newspaper" /> The Next Web
                </h5>
                <h4 class="card-title">
                  <a href="javascript:void(0)">"Focus on Your Employees"</a>
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>

                <div class="card-stats text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-white md-round"
                  >
                    Read Article
                  </md-button>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
        <!-- end Blog Plain Cards -->

        <!-- Profile Plain Cards -->
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-50 md-large-size-33 md-small-size-100"
          >
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile1"
            >
              <template
                slot="cardTitleHeader"
              >
                Tania Andrew
              </template>
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Web Designer
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fab fa-instagram" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div
            class="md-layout-item md-medium-size-50 md-large-size-33 md-small-size-100"
          >
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-gray">
                  CEO / Co-Founder
                </h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javasript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javasript:void(0)"
                  class="md-facebook md-just-icon md-round"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javasript:void(0)"
                  class="md-google md-just-icon md-round"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div
            class="md-layout-item md-medium-size-50 md-large-size-33 md-small-size-100"
          >
            <profile-card
              card-plain
              :shadow-normal="true"
              :no-colored-shadow="false"
              :card-avatar="true"
              :card-image="marcImg"
            >
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  CEO / Co-Founder
                </h6>
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <md-button class="md-info md-round">
                  Follow
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
        <!-- end Profile Plain Cards -->
      </template>
    </div>
  </div>
</template>

<script>
import {
  BlogCard,
  ProfileCard,
  PricingCard,
  RotatingCard,
  FullBgCard
} from "@/components";

export default {
  components: {
    BlogCard,
    ProfileCard,
    FullBgCard,
    PricingCard,
    RotatingCard
  },
  props: {
    sectionCardPlain: Boolean,
    sectionMorphingCards: Boolean
  },
  data() {
    return {
      manualRotateState: false,
      manualRotateState2: false,
      manualRotateState3: false,
      cardBlog: {
        cardBlog1: require("@/assets/img/examples/card-blog1.jpg"),
        cardBlog2: require("@/assets/img/examples/card-blog2.jpg"),
        cardBlog3: require("@/assets/img/examples/blog8.jpg"),
        cardBlog4: require("@/assets/img/examples/blog5.jpg"),
        cardBlog5: require("@/assets/img/examples/blog1.jpg"),
        cardBlog6: require("@/assets/img/examples/blog6.jpg")
      },
      cardProfile: {
        cardProfile1: require("@/assets/img/examples/card-profile4.jpg"),
        cardProfile2: require("@/assets/img/examples/card-profile1.jpg")
      },
      cardFullBg: {
        fullBg1: require("@/assets/img/examples/office1.jpg"),
        fullBg2: require("@/assets/img/examples/card-blog3.jpg")
      },
      cardRotating: {
        cardRotatingBg1: require("@/assets/img/examples/card-blog5.jpg"),
        cardRotatingBg2: require("@/assets/img/examples/card-blog6.jpg")
      },
      dynamicShadows: {
        dynamicShadowsBg1: require("@/assets/img/examples/color1.jpg"),
        dynamicShadowsBg2: require("@/assets/img/examples/color2.jpg"),
        dynamicShadowsBg3: require("@/assets/img/examples/color3.jpg")
      },
      avatarImg: require("@/assets/img/faces/avatar.jpg"),
      christianImg: require("@/assets/img/faces/christian.jpg"),
      marcImg: require("@/assets/img/faces/marc.jpg")
    };
  }
};
</script>
