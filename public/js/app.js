'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.taskService'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/authenticate', {
      templateUrl: 'partials/authenticate',
      controller: 'AuthCtrl'
    }).
    when('/todo', {
      templateUrl: 'partials/todo',
      controller: 'TodoCtrl'
    }).
    when('/list', {
      templateUrl: 'partials/list',
      controller: 'listCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
