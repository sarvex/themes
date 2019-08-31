// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-vector-maps-cmp',
    templateUrl: './vectormaps.component.html'
})

export class VectorMapsComponent implements OnInit {
    ngOnInit() {
      $('#worldMap').vectorMap({
          map: 'world_en',
          backgroundColor: 'transparent',
           borderColor: '#818181',
           borderOpacity: 0.25,
           borderWidth: 1,
           color: '#ffffff',
           enableZoom: true,
           hoverColor: '#b3b3b3',
           hoverOpacity: null,
           normalizeFunction: 'linear',
           scaleColors: ['#b6d6ff', '#005ace'],
           selectedColor: '#c9dfaf',
           selectedRegions: null,
           showTooltip: true,
           onRegionClick: function(element, code, region)
           {
               var message = 'You clicked "'
                   + region
                   + '" which has the code: '
                   + code.toUpperCase();

               alert(message);
           }
      });
    }
}
