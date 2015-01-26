# angular-treasure-overlay-spinner

Add a spinner to an element when binding is truthy.

treasure-overlay-spinner requires [ngAnimate](https://docs.angularjs.org/api/ngAnimate).

## Installation

* `bower install angular-treasure-overlay-spinner`
* add `angular-treasure-overlay-spinner/src/treasure-overlay-spinner.js` to your html
* add `angular-treasure-overlay-spinner/src/treasure-overlay-spinner.css`to your html
* add `treasure-overlay-spinner` as an angular module dependency


## Usage

```javascript
angular.module('example', ['treasure-overlay-spinner']);
angular.module('example').run(run);

run.$inject = ['$rootScope'];
function run ($rootScope) {
  $scope.spinner = {active true};
}
```

```html
<div ng-app='example'>
  <!-- active uses two-way bindings to track the status -->
  <treasure-overlay-spinner active='spinner.active'>
    <p>This will be covered by a spinner when spinner.active is truthy</p>
  </treasure-overlay-spinner>
</div>

```

## Example

Try the example by running:

* `npm install`
* `bower install`
* `npm run example`

Or visit the [live example](https://treasure-data.github.io/angular-treasure-overlay-spinner/).

## Scripts

* `npm run example` - run example server and open browser
* `npm run build` - minify and copy to dist folder
* `npm run tdd` - run tests whenever files change
* `npm run test` - run tests
