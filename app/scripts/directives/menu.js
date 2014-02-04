'use strict';

angular.module('influrUser')
  .directive('mainMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/menu.html'
    };
  })
  .directive('mainMenuBusiness', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/menu_business.html'
    };
  });