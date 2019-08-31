import { Component, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {
    private fragment: string;

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

    ngOnInit() {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.add('navbar-transparent');
    }
}
