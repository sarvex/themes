# [Paper Dashboard Pro Angular](https://demos.creative-tim.com/paper-dashboard-pro-angular) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Paper%20Dashboard%20PRO%20Angular%20by%20Creative%20Tim%20https%3A//demos.creative-tim.com/paper-dashboard-pro-angular%20via%20%40CreativeTim)


![version](https://img.shields.io/badge/version-1.2.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/ct-paper-dashboard-pro-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-paper-dashboard-pro-angular/issues?q=is%3Aopen+is%3Aissue) [![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/creativetimofficial/ct-paper-dashboard-pro-angular.svg?maxAge=259200)](https://github.com/creativetimofficial/ct-paper-dashboard-pro-angular/issues?q=is%3Aissue+is%3Aclosed)  [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](https://media.giphy.com/media/5WJf1Jp5C0Ve1I2nne/giphy.gif)

**[Paper Dashboard PRO Angular](https://www.creative-tim.com/product/paper-dashboard-pro-angular/)** is the premium version for the [Paper Dashboard Angular](https://www.creative-tim.com/product/paper-dashboard-angular), which is available for free download.


During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:

* [Robert McIntosh](https://github.com/mouse0270) for the notification system
* [Chartist](https://gionkunz.github.io/chartist-js/) for the wonderful charts
* [Tristan Edwards](https://twitter.com/t4t5) for the [Sweet Alert](http://limonte.github.io/sweetalert2/)
* [Eonasdan](https://github.com/Eonasdan) for the [DateTimPicker](https://eonasdan.github.io/bootstrap-datetimepicker/)
* Kirill Lebedev for [jVector Maps](http://jvectormap.com/)
* [Vincent Gabriel](https://twitter.com/gabrielva) for the [Bootstrap Wizard](https://github.com/VinceG/twitter-bootstrap-wizard)
* [FullCalendar.io](https://fullcalendar.io/) for the awesome Calendar

Let us know your thoughts below. And good luck with development!

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Terminal Commands](#terminal-commands)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-2-pro)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/angular-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-pro-angular)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/vue-paper-dashboard-pro)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-pro-react)

| Angular | HTML | React | Vue |
| --- | --- | --- | --- |
|[![Paper Dashboard Pro Angular](https://github.com/creativetimofficial/public-assets/blob/master/paper-dashboard-2-pro-angular/opt_pdp_angular_thumbnail.jpg?raw=true) | [![Paper Dashboard 2 Pro HTML](https://github.com/creativetimofficial/public-assets/blob/master/paper-dashboard-2-pro-html/opt_pd2p_thumbnail.jpg?raw=true)| [![Paper Dashboard Pro React](https://github.com/creativetimofficial/public-assets/blob/master/vue-paper-dashboard-2-pro/vue-paper-dashboard-2-pro.jpg?raw=true)| [![Vue Paper Dashboard Pro](https://github.com/creativetimofficial/public-assets/blob/master/paper-dashboard-2-pro-react/opt_pdp_react.jpg?raw=true)

## Demo

- [Start page](https://demos.creative-tim.com/paper-dashboard-pro-angular)
- [Widgets page](https://demos.creative-tim.com/paper-dashboard-pro-angular/widgets)
- [Tables page ](https://demos.creative-tim.com/paper-dashboard-pro-angular/tables/extended)
- [Maps Page](https://demos.creative-tim.com/paper-dashboard-pro-angular/maps/google)
- [Notifications page](https://demos.creative-tim.com/paper-dashboard-pro-angular/components/notifications)
- [Charts page](https://demos.creative-tim.com/paper-dashboard-pro-angular/charts)

[View More](https://demos.creative-tim.com/paper-dashboard-pro-angular).


## Quick start

Quick start options:

- Buy from [Creative Tim](https://www.creative-tim.com/product/paper-dashboard-pro-angular)

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```ng serve```
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

## Documentation
The documentation for the Paper Dashboard Pro Angular is hosted at our [website](https://demos.creative-tim.com/paper-dashboard-pro-angular/documentation/tutorial).


## File Structure

Within the download you'll find the following directories and files:

```
paper-dashboard-pro-angular/
├── CHANGELOG.md
├── README.md
├── angular.json
├── documentation
│   ├── css
│   ├── js
│   └── tutorial-components.html
├── e2e
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── calendar
│   │   │   ├── calendar.component.html
│   │   │   ├── calendar.component.ts
│   │   │   ├── calendar.module.ts
│   │   │   └── calendar.routing.ts
│   │   ├── charts
│   │   │   ├── charts.component.html
│   │   │   ├── charts.component.ts
│   │   │   ├── charts.module.ts
│   │   │   └── charts.routing.ts
│   │   ├── components
│   │   │   ├── buttons
│   │   │   │   ├── buttons.component.html
│   │   │   │   └── buttons.component.ts
│   │   │   ├── components.module.ts
│   │   │   ├── components.routing.ts
│   │   │   ├── grid
│   │   │   │   ├── grid.component.html
│   │   │   │   └── grid.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   └── icons.component.ts
│   │   │   ├── notifications
│   │   │   │   ├── notifications.component.html
│   │   │   │   └── notifications.component.ts
│   │   │   ├── panels
│   │   │   │   ├── panels.component.html
│   │   │   │   └── panels.component.ts
│   │   │   ├── sweetalert
│   │   │   │   ├── sweetalert.component.html
│   │   │   │   └── sweetalert.component.ts
│   │   │   └── typography
│   │   │       ├── typography.component.html
│   │   │       └── typography.component.ts
│   │   ├── dashboard
│   │   │   ├── dashboard.component.html
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.module.ts
│   │   │   └── dashboard.routing.ts
│   │   ├── forms
│   │   │   ├── equal-validator.directive.ts
│   │   │   ├── extendedforms
│   │   │   │   ├── extendedforms.component.html
│   │   │   │   └── extendedforms.component.ts
│   │   │   ├── forms.module.ts
│   │   │   ├── forms.routing.ts
│   │   │   ├── regularforms
│   │   │   │   ├── regularforms.component.html
│   │   │   │   └── regularforms.component.ts
│   │   │   ├── validationforms
│   │   │   │   ├── password-validator.component.ts
│   │   │   │   ├── validationforms.component.html
│   │   │   │   └── validationforms.component.ts
│   │   │   └── wizard
│   │   │       ├── wizard.component.html
│   │   │       └── wizard.component.ts
│   │   ├── layouts
│   │   │   ├── admin
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   └── admin-layout.component.ts
│   │   │   └── auth
│   │   │       ├── auth-layout.component.html
│   │   │       └── auth-layout.component.ts
│   │   ├── maps
│   │   │   ├── fullscreenmap
│   │   │   │   ├── fullscreenmap.component.html
│   │   │   │   └── fullscreenmap.component.ts
│   │   │   ├── googlemaps
│   │   │   │   ├── googlemaps.component.html
│   │   │   │   └── googlemaps.component.ts
│   │   │   ├── maps.module.ts
│   │   │   ├── maps.routing.ts
│   │   │   └── vectormaps
│   │   │       ├── vectormaps.component.html
│   │   │       └── vectormaps.component.ts
│   │   ├── pages
│   │   │   ├── lock
│   │   │   │   ├── lock.component.html
│   │   │   │   └── lock.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.ts
│   │   │   ├── pages.module.ts
│   │   │   ├── pages.routing.ts
│   │   │   └── register
│   │   │       ├── register.component.html
│   │   │       └── register.component.ts
│   │   ├── shared
│   │   │   ├── fixedplugin
│   │   │   │   ├── fixedplugin.component.html
│   │   │   │   ├── fixedplugin.component.ts
│   │   │   │   └── fixedplugin.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.ts
│   │   │   │   └── footer.module.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.ts
│   │   │       └── navbar.module.ts
│   │   ├── sidebar
│   │   │   ├── sidebar.component.html
│   │   │   ├── sidebar.component.ts
│   │   │   └── sidebar.module.ts
│   │   ├── tables
│   │   │   ├── datatable.net
│   │   │   │   ├── datatable.component.html
│   │   │   │   └── datatable.component.ts
│   │   │   ├── extendedtable
│   │   │   │   ├── extendedtable.component.html
│   │   │   │   └── extendedtable.component.ts
│   │   │   ├── regulartable
│   │   │   │   ├── regulartable.component.html
│   │   │   │   └── regulartable.component.ts
│   │   │   ├── tables.module.ts
│   │   │   └── tables.routing.ts
│   │   ├── timeline
│   │   │   ├── timeline.component.html
│   │   │   ├── timeline.component.ts
│   │   │   ├── timeline.module.ts
│   │   │   └── timeline.routing.ts
│   │   ├── userpage
│   │   │   ├── user.component.html
│   │   │   ├── user.component.ts
│   │   │   ├── user.module.ts
│   │   │   └── user.routing.ts
│   │   └── widgets
│   │       ├── widgets.component.html
│   │       ├── widgets.component.spec.ts
│   │       ├── widgets.component.ts
│   │       ├── widgets.module.ts
│   │       └── widgets.routing.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   └── scss
│   │       ├── paper-dashboard
│   │       └── paper-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
├── typings
└── typings.json

```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- [Live Preview](https://demos.creative-tim.com/paper-dashboard-pro-angular)
- Buy Page: https://www.creative-tim.com/product/paper-dashboard-pro-angular
- Documentation is [here](https://demos.creative-tim.com/paper-dashboard-pro-angular/documentation/tutorial)
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/ct-paper-dashboard-pro-angular/issues)
- Paper Dashboard Angular- [demo](https://www.creative-tim.com/product/paper-dashboard-angular?ref=github-pd-pro-angular)
- For Front End Development - [Paper Kit Pro ](https://www.creative-tim.com/product/paper-kit-2-pro-angular?ref=github-pd-pro)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the Paper Dashboard Pro Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Paper Dashboard Pro Angular. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com)
- Creative Tim [license](https://www.creative-tim.com/license)

## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim

- [Angular products](https://www.creative-tim.com/bootstrap-themes/angular-themes) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
