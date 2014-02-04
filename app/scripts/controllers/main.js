'use strict';

angular.module('influrUser')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('TreatsCtrl', function () {
    console.log('TreatsCtrl');
  })
  .controller('UserProfileCtrl', function () {
    console.log('UserProfileCtrl');
  })
  .controller('BusinessDashboardCtrl', function () {
    console.log('BusinessDashboardCtrl');
  })
  .controller('BusinessProfileCtrl', function () {
    console.log('BusinessProfileCtrl');
  });