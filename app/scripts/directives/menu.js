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
  })
  .directive('menuAsideButton', function() {
    return {
      restrict: 'E',
      template: '<button type="button" class="menu-aside-button" bs-aside="aside" data-template="/views/templates/menu_aside.html" data-placement="left"><i class="fa fa-bars"></i></button>'
    };
  })
  .directive('menuAsideBusinessButton', function() {
    return {
      restrict: 'E',
      template: '<button type="button" class="menu-aside-button" bs-aside="aside" data-template="/views/templates/menu_business_aside.html" data-placement="left"><i class="fa fa-bars"></i></button>'
    };
  });