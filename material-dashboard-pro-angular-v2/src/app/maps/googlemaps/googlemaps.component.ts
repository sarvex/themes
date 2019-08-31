import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
    selector: 'app-vector-maps-cmp',
    templateUrl: './googlemaps.component.html'
})

export class GoogleMapsComponent implements OnInit {
    ngOnInit() {
        let myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        const mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        };

        let map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);

        let marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Regular Map!'
        });

        marker.setMap(map);


        // Custom Skin & Settings Map
        myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        const mapOptions1 = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
            disableDefaultUI: true, // a way to quickly hide all controls
            zoomControl: true,
            styles: [{'featureType': 'water', 'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]},
                {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'hue': '#ff0000'},
                {'saturation': -100}, {'lightness': 99}]},
                {'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#808080'},
                {'lightness': 54}]},
                {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ece2d9'}]},
                {'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ccdca1'}]},
                {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#767676'}]},
                {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]},
                 {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]},
                {'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{'visibility': 'on'},
                  {'color': '#b8cb93'}]},
                {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {'featureType': 'poi.sports_complex',
                 'stylers': [{'visibility': 'on'}]},
                {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {'featureType': 'poi.business',
                 'stylers': [{'visibility': 'simplified'}]}]
        };

        map = new google.maps.Map(document.getElementById('customSkinMap'), mapOptions1);

        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Custom Skin & Settings Map!'
        });

        marker.setMap(map);

        // Satellite Map
        myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        const mapOptions2 = {
            zoom: 3,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById('satelliteMap'), mapOptions2);

        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Satellite Map!'
        });

        marker.setMap(map);
    }
}
