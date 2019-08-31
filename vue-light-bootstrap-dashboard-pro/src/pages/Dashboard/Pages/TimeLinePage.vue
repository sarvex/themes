<template>
  <div class="col-md-12">
    <time-line>
      <time-line-item class="timeline-inverted" badgeType="danger" badgeIcon="ti-gallery">
        <span slot="header" class="label label-danger">Some title</span>
        <p slot="body">
          Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>

        <h6 slot="footer">
          <i class="ti-time"></i>
          11 hours ago via Twitter
        </h6>
      </time-line-item>

      <time-line-item badgeType="success" badgeIcon="ti-check-box">
        <span slot="header" class="label label-success">Another Title</span>
        <p slot="body">
          Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>
      </time-line-item>

      <time-line-item class="timeline-inverted" badgeType="info" badgeIcon="ti-credit-card">
        <span slot="header" class="label label-success">Another Title</span>
        <div slot="body">
          <p>
            Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
          <p>
            What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
          <hr>
          <drop-down class="btn-group">
            <button slot="title" href="#" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
              <i class="ti-settings"></i> <span class="caret"></span>
            </button>
            <li><a href="#action">Action</a></li>
            <li><a href="#action">Another action</a></li>
            <li><a href="#here">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#link">Separated link</a></li>
          </drop-down>
        </div>
      </time-line-item>

      <time-line-item badgeType="warning" badgeIcon="ti-gallery">
        <span slot="header" class="label label-warning">Another Title</span>
        <p slot="body">
          Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>
      </time-line-item>

    </time-line>
  </div>

</template>
<script>
  import TimeLine from '../Dashboard/Stats/TimeLine.vue'
  import TimeLineItem from '../Dashboard/Stats/TimeLineItem.vue'

  export default {
    components: {
      TimeLine,
      TimeLineItem
    }
  }
</script>
<style>
</style>
