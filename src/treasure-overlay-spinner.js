;(function (window) {
  var angular = window.angular,
    addResizeListener = window.addResizeListener,
    removeResizeListener = window.removeResizeListener;

  /** TEMPLATE /template/treasure-overlay-spinner/treasure-overlay-spinner.html
   * <div class="treasure-overlay-spinner-container">
   *   <div class="treasure-overlay-spinner"></div>
   * </div>
   * <div class="treasure-overlay-spinner-content" ng-transclude></div>
   */

  // constants
  var TEMPLATE_PATH = '/template/treasure-overlay-spinner/treasure-overlay-spinner.html';
  var TEMPLATE = '';
  TEMPLATE += '<div class="treasure-overlay-spinner-container">';
  TEMPLATE +=   '<div class="treasure-overlay-spinner"></div>';
  TEMPLATE += '</div>';
  TEMPLATE += '<div class="treasure-overlay-spinner-content" ng-transclude></div>';

  // module
  angular.module('treasure-overlay-spinner', ['ngAnimate']);

  // directive
  angular.module('treasure-overlay-spinner').directive('treasureOverlaySpinner', overlaySpinner);
  overlaySpinner.$inject = ['$animate'];
  function overlaySpinner ($animate) {
    return {
      templateUrl: TEMPLATE_PATH,
      scope: {active: '='},
      transclude: true,
      restrict: 'E',
      link: link
    };

    function link (scope, iElement) {
      var background = iElement[0].querySelectorAll('.treasure-overlay-spinner-container')[0],
        content = iElement[0].querySelectorAll('.treasure-overlay-spinner-content')[0];

      onResize();
      addResizeListener(content, onResize);
      function onResize () {
        background.style.height = content.offsetHeight + 'px';
        background.style.width = content.offsetWidth + 'px';
      }

      scope.$on('$destroy', onDestroy);
      function onDestroy () {
        removeResizeListener(content, onResize);
      }

      scope.$watch('active', statusWatcher);
      function statusWatcher (active) {
        $animate[active ? 'addClass' : 'removeClass'](iElement, 'treasure-overlay-spinner-active');
      }
    }
  }

  // template
  angular.module('treasure-overlay-spinner').run(overlaySpinnerTemplate);
  overlaySpinnerTemplate.$inject = ['$templateCache'];
  function overlaySpinnerTemplate ($templateCache) {
    $templateCache.put(TEMPLATE_PATH, TEMPLATE);
  }

}.call(this, window));

