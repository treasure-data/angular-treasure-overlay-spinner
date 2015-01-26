'use strict';

describe('treasure-overlay-spinner directive', function() {
  var tpl = '<treasure-overlay-spinner active="active"><p>text</p><treasure-overlay-spinner>';
  var element = angular.element;
  var $compile, scope, elm, className;

  beforeEach(function () {
    angular.mock.module('treasure-overlay-spinner');
    angular.mock.inject(function ($rootScope, _$compile_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
    });
  });

  it('should add a class when active is truthy', function () {
    scope.active = true;
    elm = $compile(element(tpl))(scope);
    scope.$apply();
    assert.ok(elm.hasClass('treasure-overlay-spinner-active'));
  });

  it('should not have class when active is falsy', function () {
    scope.active = false;
    elm = $compile(element(tpl))(scope);
    scope.$apply();
    assert.notOk(elm.hasClass('treasure-overlay-spinner-active'));
  });

  it('should transclude', function () {
    scope.active = false;
    elm = $compile(element(tpl))(scope);
    scope.$apply();
    assert(elm.find('p')[0].textContent === 'text');
  });


});
