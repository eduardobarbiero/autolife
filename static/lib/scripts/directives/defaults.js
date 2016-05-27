'use strict';

angular.module('controlYourLife.directives')
.directive('navLateral', function() {
  return {
      restrict: 'E',
      templateUrl: 'views/templates/default/nav-lateral.html'
  };
})
.directive('menuTop', function() {
  return {
      restrict: 'E',
      templateUrl: 'views/templates/default/menu-top.html'
  };
})
.directive('contentMain', function() {
  return {
      restrict: 'E',
      templateUrl: 'views/templates/default/content-main.html'
  };
});
