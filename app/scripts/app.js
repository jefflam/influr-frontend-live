'use strict';

angular.module('influrUser', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/highlights', {
        templateUrl: 'views/highlights.html',
        controller: 'HighlightsCtrl'
      })
      .when('/treats', {
        templateUrl: 'views/treats.html',
        controller: 'TreatsCtrl'
      })
      .when('/treats/redeemed', {
        templateUrl: 'views/treats_redeemed.html',
        controller: 'TreatsCtrl'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/assignments/ongoing', {
        templateUrl: 'views/assignments_ongoing.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/assignments/done', {
        templateUrl: 'views/assignments_done.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/network', {
        templateUrl: 'views/network.html',
        controller: 'NetworkCtrl'
      })
      .when('/network/feed', {
        templateUrl: 'views/network_feed.html',
        controller: 'NetworkCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/settings/social-media', {
        templateUrl: 'views/settings_social_media.html',
        controller: 'SettingsCtrl'
      })
      .when('/settings/privacy', {
        templateUrl: 'views/settings_privacy.html',
        controller: 'SettingsCtrl'
      })
      .when('/user/scarlett', {
        templateUrl: 'views/user_profile.html',
        controller: 'UserProfileCtrl'
      })
      .when('/user/scarlett', {
        templateUrl: 'views/user_profile.html',
        controller: 'UserProfileCtrl'
      })
      .when('/user/scarlett/assignments', {
        templateUrl: 'views/user_profile_assignments.html',
        controller: 'UserProfileCtrl'
      })
      .when('/user/scarlett/highlights', {
        templateUrl: 'views/user_profile_highlights.html',
        controller: 'UserProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });