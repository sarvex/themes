import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
    icon_video_button_class: string = 'fa-play';
    text_video_button: string = 'Play Video';
  constructor() { }

  ngOnInit() {
    //   $('[data-toggle="video"]').click(function(){
    //       id_video = $(this).data('video');
    //       video = $('#' + id_video).get(0);
      //
    //       parent = $(this).parent('div').parent('div');
      //
    //       if(video.paused){
    //           video.play();
    //           $(this).html('<i class="fa fa-pause"></i> Pause Video');
    //           parent.addClass('state-play');
    //       } else {
    //           video.pause();
    //           $(this).html('<i class="fa fa-play"></i> Play Video');
    //           parent.removeClass('state-play');
    //       }
    //   });
  }

  playBackgroundVideo(event){
      var id_video = document.getElementById('video-source') as HTMLVideoElement;
      var parent = event.target.parentElement.parentElement;
    if(id_video.paused){
         id_video.play();
        this.text_video_button = 'Pause Video';
        this.icon_video_button_class = 'fa-pause';
     } else {
         id_video.pause();
        this.text_video_button = 'Play Video';
        this.icon_video_button_class = 'fa-play';
     }
  }

}
