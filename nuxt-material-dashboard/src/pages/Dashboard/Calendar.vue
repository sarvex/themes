<template>
  <div>
    <div class="header text-center">
      <h3 class="title">FullCalendar.io</h3>
      <p class="category">
        Handcrafted by our friends from
        <a target="_blank" href="https://fullcalendar.io/">FullCalendar.io</a>.
        Please checkout the
        <a href="https://fullcalendar.io/docs" target="_blank"
          >full documentation</a
        >.
      </p>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto">
        <md-card class="md-card-calendar">
          <md-card-content>
            <fullCalendar
              ref="calendar"
              defaultView="dayGridMonth"
              :plugins="calendarPlugins"
              :events="events"
              :selectable= "true"
              @dateClick="dateClick"
              :header="header"
              :buttonIcons="buttonIcons"
              :selectHelper= "true"
              :editable= "true"
            />
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Swal from "sweetalert2";

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin ],
      header: {
        center: 'dayGridMonth,timeGridWeek,timeGridDay',
        right: "prev,next,today"
      },
      buttonIcons: {
        close: 'fa-times',
        prev: 'left-single-arrow',
        next: 'right-single-arrow',
        prevYear: 'fa-angle-double-left',
        nextYear: 'fa-angle-double-right'
      },
      events: [
        {
          title: "All Day Event",
          start: new Date(y, m, 1),
          className: "event-default"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d - 4, 6, 0),
          allDay: false,
          className: "event-rose"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d + 3, 6, 0),
          allDay: false,
          className: "event-rose"
        },
        {
          title: "Meeting",
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: "event-green"
        },
        {
          title: "Lunch",
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: "event-red"
        },
        {
          title: "Md-pro Launch",
          start: new Date(y, m, d - 2, 12, 0),
          allDay: true,
          className: "event-azure"
        },
        {
          title: "Birthday Party",
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          className: "event-azure"
        },
        {
          title: "Click for Creative Tim",
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: "http://www.creative-tim.com/",
          className: "event-orange"
        },
        {
          title: "Click for Google",
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: "http://www.creative-tim.com/",
          className: "event-orange"
        }
      ]
    }
  },
  methods: {
    dateClick: function(info) {
      // on select we show the Sweet Alert modal with an input
      Swal.fire({
        title: "Create an Event",
        html: `<div class="md-field md-theme-default">
          <input type="text" id="md-input" class="md-input">
          </div>`,
        showCancelButton: true,
        confirmButtonClass: "md-button md-success",
        cancelButtonClass: "md-button md-danger",
        buttonsStyling: false
      }).then(() => {
        var eventTitle = document.getElementById('md-input').value;
        if (eventTitle) {
          let calendarApi = this.$refs.calendar.getApi();
          calendarApi.addEvent({
            title: eventTitle,
            start: info.dateStr,
            allDay: true
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#fullCalendar {
  min-height: 300px;
}

.md-card-calendar {
  .md-card-content {
    padding: 0 !important;
  }
}

.text-center {
  text-align: center;
}
</style>
