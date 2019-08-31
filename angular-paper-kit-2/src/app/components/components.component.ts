import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data : Date = new Date();

    page = 4;
    page1 = 5;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    state_icon_primary = true;

    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

    constructor( private renderer : Renderer, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                "previewFullscreen": true,
                "previewKeyboardNavigation": true,
                "previewCloseOnClick": true,
                "previewCloseOnEsc": true,
                "previewZoom": true,
                "imageSwipe": true,
                "thumbnailsSwipe": true,
                "previewSwipe": true,
                "imageArrowsAutoHide": true,
                "thumbnailsArrowsAutoHide": true,
                "imageAnimation": "slide"
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: './assets/img/gallery/outfit-gucci.jpg',
                medium: './assets/img/gallery/outfit-gucci.jpg',
                big: './assets/img/gallery/outfit-gucci.jpg'
            },
            {
                small: './assets/img/gallery/outfit-paul-smith.jpg',
                medium: './assets/img/gallery/outfit-paul-smith.jpg',
                big: './assets/img/gallery/outfit-paul-smith.jpg'
            },
            {
                small: './assets/img/gallery/outfit-maison-margiela.jpg',
                medium: './assets/img/gallery/outfit-maison-margiela.jpg',
                big: './assets/img/gallery/outfit-maison-margiela.jpg'
            },
            {
                small: './assets/img/gallery/outfit-burberry.jpg',
                medium: './assets/img/gallery/outfit-burberry.jpg',
                big: './assets/img/gallery/outfit-burberry.jpg'
            },
            {
                small: './assets/img/gallery/ressence.jpg',
                medium: './assets/img/gallery/ressence.jpg',
                big: './assets/img/gallery/ressence.jpg'
            },
            {
                small: './assets/img/gallery/gucci-sun.jpg',
                medium: './assets/img/gallery/gucci-sun.jpg',
                big: './assets/img/gallery/gucci-sun.jpg'
            },
            {
                small: './assets/img/gallery/bottega.jpg',
                medium: './assets/img/gallery/bottega.jpg',
                big: './assets/img/gallery/bottega.jpg'
            },
            {
                small: './assets/img/gallery/bracelet.jpg',
                medium: './assets/img/gallery/bracelet.jpg',
                big: './assets/img/gallery/bracelet.jpg'
            }
        ];
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
