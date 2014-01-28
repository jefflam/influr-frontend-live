'use strict';

angular.module('influrUser')
  .directive('assignment', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/assignment.html',
      link: function(scope, element, attributes, ngModel) {
        $(element.children()[0]).click(function(){
          $(element.children().children()[2]).collapse('toggle');
        });
      }
    };
  });