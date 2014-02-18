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
  .controller('BusinessTreatsCtrl', function () {
    console.log('BusinessTreatsCtrl');
  })
  .controller('BusinessAssignmentsCtrl', function () {
    console.log('BusinessAssignmentsCtrl');
  })
  .controller('BusinessProfileCtrl', function () {
    console.log('BusinessProfileCtrl');
  })
  .controller('AssignmentsCtrl', function () {
    console.log('AssignmentsCtrl');
  })
  .controller('NetworkCtrl', function () {
    console.log('NetworkCtrl');
  })
  .controller('SettingsCtrl', function () {
    console.log('SettingsCtrl');
  })
  .controller('BusinessSettingsCtrl', function () {
    console.log('BusinessSettingsCtrl');
  });