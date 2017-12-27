UI-GENERICS - Generic components for web apps
=======

Generic and custom components for web apps for AngularJS 1.6+.

## How to get it ? 

#### Manual Download
Download the from [here](https://github.com/neosyler/ui-generics/releases)

#### Bower 
```
bower install ui-generics
```
<!--
#### Npm
```
npm install ui-generics
```
-->

## Usage

1. Add ui-generics.js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/ui-generics/dist/ui-generics.js"></script>
  ```

2. Set `ui-generics` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ui-generics'])
  ```

3. Pick a component and add to one of your views:
  ```html
  <div data-gen-menu data-gen-obj="vm.obj"></div>
  ```

4. Component will render accordingly

## Credits
This project was initially forked from the application template seed here
[https://github.com/refactorthis/angular-component-seed.git](https://github.com/refactorthis/angular-component-seed.git)
