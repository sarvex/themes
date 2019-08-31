<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-warning">
          <div class="card-text">
            <h4 class="title">لتكاليف يبق</h4>
            <p class="category">
              بالإنزال وفي. خيار ومضى العمليات تم ذلك, تم معقل مرمى
            </p>
          </div>
        </md-card-header>
        <md-card-content>
          <md-table v-model="users" table-header-color="orange">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="وتم">{{ item.id }}</md-table-cell>
              <md-table-cell md-label="لأمريكية هذا">{{
                item.name
              }}</md-table-cell>
              <md-table-cell md-label="شاسعالأمريكية">{{
                item.salary
              }}</md-table-cell>
              <md-table-cell md-label="الأمريكية">{{
                item.country
              }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <nav-tabs-card>
        <template slot="content">
          <span class="md-nav-tabs-title">منتصف:</span>
          <md-tabs md-sync-route class="md-rose" md-alignment="left">
            <md-tab id="tab-home" md-label="ضرب" md-icon="bug_report">
              <md-table v-model="firstTabs" @md-selected="onSelect">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ item.tab }}</md-table-cell>
                  <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>

            <md-tab id="tab-pages" md-label="السفن" md-icon="code">
              <md-table v-model="secondTabs" @md-selected="onSelect">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ item.tab }}</md-table-cell>
                  <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>

            <md-tab id="tab-posts" md-label="فصل." md-icon="cloud">
              <md-table v-model="thirdTabs" @md-selected="onSelect">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ item.tab }}</md-table-cell>
                  <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <pricing-card icon-color="icon-success">
            <h6 slot="category" class="category">جيوب سليمان، الإنزال</h6>
            <md-icon slot="icon">home</md-icon>
            <h3 slot="title" class="title">29$</h3>
            <p slot="description" class="card-description">
              الأجل المتساقطة، من. عرض بسبب وأكثرها الاندونيسية بـ.
            </p>
            <md-button slot="footer" class="md-success md-round"
              >حاملات فعل</md-button
            >
          </pricing-card>
        </div>
        <div class="md-layout-item">
          <pricing-card card-class="md-card-plain" icon-color="icon-black">
            <h6 slot="category" class="category">المتحدة لتقليعة</h6>
            <md-icon slot="icon">weekend</md-icon>
            <h3 slot="title" class="title black-color">قائمة</h3>
            <p slot="description" class="card-description">
              الأجل المتساقطة، من. عرض بسبب وأكثرها الاندونيسية بـ.
            </p>
            <md-button slot="footer" class="md-white md-round"
              >حاملات فعل</md-button
            >
          </pricing-card>
        </div>
        <div class="md-layout-item md-size-90">
          <testimonial-card>
            <template slot="header-icon"
              >format_quote</template
            >
            <template slot="content">
              <h5 class="description">
                بعد و وسوء الأحمر, دون عقبت الهادي أم, قد حول قادة حكومة يتعلّق.
                أخذ حصدت اوروبا أن, كلا مهمّات اسبوعين التخطيط عل. وإيطالي
                الأوروبي و نفس. صفحة احداث أضف ان, هو مرجع نهاية لهيمنة كما. تم
                مايو لفشل المدن دول, جعل أن عسكرياً التّحول استرجاع.
              </h5>
            </template>
            <template slot="footer">
              <h4 class="title">أليك طومسون</h4>
              <h6 class="category">@أليك طومسون</h6>
              <div class="avatar">
                <a href="#pablo">
                  <img class="img" :src="profileCard" />
                </a>
              </div>
            </template>
          </testimonial-card>
        </div>
      </div>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <time-line plain type="simple">
        <time-line-item inverted badge-type="danger" badge-icon="card_travel">
          <span slot="header" class="badge badge-danger">جهة أي</span>
          <p slot="content">
            قام كل ماذا العصبة اوروبا. أي جورج العالمي أخر, كان تم أطراف القوى
            استبدال. أسر ميناء تكتيكاً الجديدة، كل. جُل اللا التكاليف بـ, عرفها
            النزاع لليابان بـ أضف. انتهت المدن الثالث من وقد.وقبل قادة إحتار عن
            أخر. حين ونتج أخرى قد. بالعمل بالمطالبة فقد قد. عن جنوب ومضى الشتاء.
          </p>

          <h6 slot="footer">
            <i class="ti-time"></i>
            مدن أن هُزم سكان, مكن.
          </h6>
        </time-line-item>

        <time-line-item inverted badge-type="success" badge-icon="extension">
          <span slot="header" class="badge badge-success">جُل حكومة</span>
          <p slot="content">
            عل فكانت الثقيلة بلا. شيء بخطوط بالرّغم التبرعات عن, يطول بأيدي لم
            كلّ. معقل الغالي واتّجه لم وتم, أن الصفحة بالمحور حول, بال مرمى
            الصفحات قُدُماً و. الأخذ سبتمبر العالم من ذلك. ان يبق شدّت الأبرياء,
            الى الربيع، والمانيا كل.ودول الأهداف التقليدي عل أضف, كلا يقوم الأخذ
            الآلاف بل.
          </p>
        </time-line-item>

        <time-line-item inverted badge-type="info" badge-icon="fingerprint">
          <span slot="header" class="badge badge-info">هذا غينيا</span>
          <div slot="content">
            <p>
              جهة المارق والديون التقليدية في, هو وترك المجتمع بريطانيا ذلك, لمّ
              ما العالم، اليابان،. ٣٠ فقامت أوروبا مشاركة بعد, ٢٠٠٤ الجو مساعدة
              ما حدى. في عليها وبحلول معارضة بعض. عن الأرض وبداية العمليات ولم.
              الجو جديداً الأوروبيّون أم به،. ثم التي نتيجة الآلاف جعل, عن
              المارق السادس قام. ما أخر فقامت الأجل الشرق،, فصل كل وسوء الأرواح.
              ثم بعد وشعار بأيدي. قبل وكسبت الغالي الولايات بل, ٣٠ أمّا أخرى
              لأداء أضف. هو منتصف معزّزة على. بـ أفريقيا التغييرات مما, أثره،.
            </p>
            <hr />
            <drop-down>
              <md-button
                slot="title"
                class="md-button md-info md-round dropdown-toggle"
                data-toggle="dropdown"
              >
                <md-icon>build</md-icon>
              </md-button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a href="#">ان</a></li>
                <li><a href="#">إجلاء لفرنسا</a></li>
                <li><a href="#">أواخر الأرض بل</a></li>
                <li><a href="#">عل اليها</a></li>
              </ul>
            </drop-down>
          </div>
        </time-line-item>
      </time-line>
    </div>
  </div>
</template>

<script>
import {
  NavTabsCard,
  TimeLine,
  TimeLineItem,
  PricingCard,
  TestimonialCard
} from "@/components";

export default {
  components: {
    NavTabsCard,
    PricingCard,
    TimeLine,
    TimeLineItem,
    TestimonialCard
  },
  props: {
    profileCard: {
      type: String,
      default: "./img/faces/card-profile1-square.jpg"
    }
  },
  data() {
    return {
      selected: [],
      firstTabs: [
        {
          tab:
            " فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي."
        },
        { tab: "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي." },
        { tab: "تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي." }
      ],
      secondTabs: [
        {
          tab:
            "قدما مليون بين عن, مرجع منتصف الأمريكية  جعل السبب وفرنسا الصينية أي."
        },
        {
          tab:
            "قدما مليون بين عن, مرجع منتصف الأمريكية  جعل السبب وفرنسا الصينية أي."
        },
        {
          tab:
            "قدما مليون بين عن, مرجع منتصف الأمريكية  جعل السبب وفرنسا الصينية أي."
        }
      ],
      thirdTabs: [
        {
          tab:
            "قدما مليون بين عن, مرجع منتصف الأمريكية  جعل السبب وفرنسا الصينية أي."
        },
        {
          tab:
            "قدما مليون بين عن, مرجع منتصف الأمريكية  جعل السبب وفرنسا الصينية أي."
        },
        {
          tab:
            "قدما مليون بين عن, مرجع منتصف الأمريكية  جعل السبب وفرنسا الصينية أي."
        }
      ],
      users: [
        {
          id: 1,
          name: "السبب وفرنسا الصينية ",
          salary: "$36,738",
          country: "تكاليف "
        },
        {
          id: 2,
          name: "بمباركة بها",
          salary: "$23,738",
          country: "الأمريكية من"
        },
        {
          id: 3,
          name: "شاسعالأمريكية",
          salary: "$56,142",
          country: "السفن وعُرفت"
        },
        {
          id: 4,
          name: "الاندونيسية",
          salary: "$38,735",
          country: "فصل."
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>

<style lang="css"></style>
