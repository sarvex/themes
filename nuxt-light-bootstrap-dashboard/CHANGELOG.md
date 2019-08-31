# Change Log

## [1.2.0] 2019-01-05

### Breaking changes
- Update to Vue CLI 3
- Updated Full Calendar, Vector map and some other components
- Removed jquery from code base
- Added new Button component

### Updates & fixes
- Update packages
- 3, 19 Add polyfills for IE compat
- 13 Add static alert component
- 21 Fix date range picker css ui issue
- Add new button component
- 20 Fix sweetalert css, update sweet alert package

## [1.1.0] 2018-02-26

- Package updates
- Updated Bootstrap to final release (4.0)
- Fixed disabled button state [#1](https://github.com/creativetimofficial/vue-light-bootstrap-dashboard-pro/issues/1)
- Scope the css for dropdown (moved the css in the dropdown component) [#2](https://github.com/creativetimofficial/vue-light-bootstrap-dashboard-pro/issues/2)
- Remove buggy z-index from element-table [#6](https://github.com/creativetimofficial/vue-light-bootstrap-dashboard-pro/issues/6)
- Refinements for date-pickers to be more inline with lbd design.
- Fixed Progress component key warning for multiple values
- Internet Explorer (10-11) compatibility
- Remove element-variables.scss as it was importing the whole element-ui css. 
If you need to overwrite the variables, please refer to [custom theme docs](http://element.eleme.io/#/en-US/component/custom-theme#cli-theme-tool)
from element ui to generate your own local theme and customize the variables.
We provided custom styles only for the following components: date-picker, select, modal, input, collapse, slider and tags.


## [1.0.0] 2017-12-28
### Stable Original Release
