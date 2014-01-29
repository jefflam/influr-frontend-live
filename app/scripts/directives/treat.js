'use strict';

angular.module('influrUser')
  .directive('treat', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/treat.html',
      link: function(scope, element) {
        angular.element(element.children()[0]).click(function(){
          angular.element(element.children().children()[2]).collapse('toggle');
        });
      }
    };
  });