'use strict';

angular.module('influrUser')
  .directive('dashboardPopover', function() {
    return {
      restrict: 'EA',
      template: '<i class="fa {{ icon }}"></i>',
      scope: {
        icon: '@',
        title: '@',
        content: '@'
      },
      link: function(scope, element) {
        // angular.element(element.children()[0]).click(function(){
        //   angular.element(element.children().children()[2]).collapse('toggle');
        // });
        console.log(element);
        angular.element(element[0]).hover(function() {
          angular.element(element[0]).popover({
            trigger: 'click',
            title: scope.title,
            placement: 'bottom',
            html: true,
            content: scope.content
          });
        });
      }
    };
  });