'use strict';

angular.module('influrUser')
  .directive('submenuPopover', function() {
    return {
      restrict: 'EA',
      template: '<a class="active">{{ activeNav }}</a> <i class="fa fa-caret-down"></i>',
      scope: {
        content: '@',
        activeNav: '@'
      },
      link: function(scope, element) {
        angular.element(element[0]).hover(function() {
          angular.element(element[0]).popover({
            trigger: 'click',
            placement: 'bottom',
            html: true,
            content: scope.content
          });
        });
      }
    };
  });