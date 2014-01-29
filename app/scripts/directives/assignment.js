'use strict';

angular.module('influrUser')
  .directive('assignment', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/assignment.html',
      link: function(scope, element) {
        angular.element(element.children()[0]).click(function(){
          angular.element(element.children().children()[2]).collapse('toggle');
        });
      }
    };
  });