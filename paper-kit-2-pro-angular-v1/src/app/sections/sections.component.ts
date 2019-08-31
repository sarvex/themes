import { Component, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

//t = current time
//b = start value
//c = change in value
//d = duration
var easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy, AfterViewInit {
    private fragment: string;
    data : Date = new Date();

    constructor(router: Router) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) { element.scrollIntoView(); }
                }
            }
        });
    }
    @HostListener('window:scroll', ['$event'])
    updateNavigation() {
        var contentSections = document.getElementsByClassName('cd-section') as HTMLCollectionOf<any>;
        var navigationItems = document.getElementById('cd-vertical-nav').getElementsByTagName('a');

        for (let i = 0; i < contentSections.length; i++) {
            var activeSection: any = parseInt(navigationItems[i].getAttribute('data-number')) - 1;

            if ( ( contentSections[i].offsetTop - window.innerHeight/2 < window.pageYOffset ) && ( contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight/2 > window.pageYOffset ) ) {
                navigationItems[activeSection].classList.add('is-selected');
            }else {
                navigationItems[activeSection].classList.remove('is-selected');
            }
        }
    }

    ngOnInit() {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('sections-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('sections-page');
    }
    smoothScroll(target) {
        var targetScroll = document.getElementById(target);
        this.scrollTo(document.scrollingElement || document.documentElement, targetScroll.offsetTop, 1250);
    }
    scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function(){
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    ngAfterViewInit(){
        this.updateNavigation();
    }
}
