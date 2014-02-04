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
        templateUrl: 'views/user/main.html',
        controller: 'MainCtrl'
      })
      .when('/highlights', {
        templateUrl: 'views/user/highlights.html',
        controller: 'HighlightsCtrl'
      })
      .when('/treats', {
        templateUrl: 'views/user/treats.html',
        controller: 'TreatsCtrl'
      })
      .when('/treats/redeemed', {
        templateUrl: 'views/user/treats_redeemed.html',
        controller: 'TreatsCtrl'
      })
      .when('/assignments', {
        templateUrl: 'views/user/assignments.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/assignments/ongoing', {
        templateUrl: 'views/user/assignments_ongoing.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/assignments/done', {
        templateUrl: 'views/user/assignments_done.html',
        controller: 'AssignmentsCtrl'
      })
      .when('/network', {
        templateUrl: 'views/user/network.html',
        controller: 'NetworkCtrl'
      })
      .when('/network/feed', {
        templateUrl: 'views/user/network_feed.html',
        controller: 'NetworkCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/user/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/settings/social-media', {
        templateUrl: 'views/user/settings_social_media.html',
        controller: 'SettingsCtrl'
      })
      .when('/settings/privacy', {
        templateUrl: 'views/user/settings_privacy.html',
        controller: 'SettingsCtrl'
      })
      .when('/user/scarlett', {
        templateUrl: 'views/user/user_profile.html',
        controller: 'UserProfileCtrl'
      })
      .when('/user/scarlett/assignments', {
        templateUrl: 'views/user/user_profile_assignments.html',
        controller: 'UserProfileCtrl'
      })
      .when('/user/scarlett/highlights', {
        templateUrl: 'views/user/user_profile_highlights.html',
        controller: 'UserProfileCtrl'
      })
      .when('/payments', {
        templateUrl: 'views/user/payments.html',
        controller: 'UserPaymentsCtrl'
      })
      .when('/business/dashboard', {
        templateUrl: 'views/business/dashboard.html',
        controller: 'BusinessDashboardCtrl'
      })
      .when('/business/dashboard/treats', {
        templateUrl: 'views/business/dashboard_treats.html',
        controller: 'BusinessDashboardCtrl'
      })
      .when('/business/dashboard/assignments', {
        templateUrl: 'views/business/dashboard_assignments.html',
        controller: 'BusinessDashboardCtrl'
      })
      .when('/business/treats', {
        templateUrl: 'views/business/treats.html',
        controller: 'BusinessTreatsCtrl'
      })
      .when('/business/treats/create-treat', {
        templateUrl: 'views/business/create_treat.html',
        controller: 'BusinessTreatsCtrl'
      })
      .when('/business/assignments', {
        templateUrl: 'views/business/assignments.html',
        controller: 'BusinessAssignmentsCtrl'
      })
      .when('/business/assignments/create-assignment', {
        templateUrl: 'views/business/create_assignment.html',
        controller: 'BusinessAssignmentsCtrl'
      })
      .when('/business/settings', {
        templateUrl: 'views/business/settings.html',
        controller: 'BusinessSettingsCtrl'
      })
      .when('/business/settings/social-media', {
        templateUrl: 'views/business/settings_social_media.html',
        controller: 'BusinessSettingsCtrl'
      })
      .when('/business/settings/privacy', {
        templateUrl: 'views/business/settings_privacy.html',
        controller: 'BusinessSettingsCtrl'
      })
      .when('/business/paradise-group', {
        templateUrl: 'views/business/business_profile.html',
        controller: 'BusinessProfileCtrl'
      })
      .when('/business/paradise-group/last-active-treat', {
        templateUrl: 'views/business/business_profile_last_active_treat.html',
        controller: 'BusinessProfileCtrl'
      })
      .when('/business/paradise-group/assignments', {
        templateUrl: 'views/business/business_profile_assignments.html',
        controller: 'BusinessProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });