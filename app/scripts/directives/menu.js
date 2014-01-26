'use strict';

angular.module('influrUser')
  .directive('mainMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/menu.html'
    };
  });