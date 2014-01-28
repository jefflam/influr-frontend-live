'use strict';

angular.module('influrUser')
  .directive('treat', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/treat.html',
      link: function(scope, element, attributes, ngModel) {
        $(element.children()[0]).click(function(){
          $(element.children().children()[2]).collapse('toggle');
        });
      }
    };
  });