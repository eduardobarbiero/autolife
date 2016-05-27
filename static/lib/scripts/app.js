'use strict';

/**
 * @ngdoc overview
 * @name controlYourLife
 * @description Simple app for control your life. has simple :)
 */
angular
  .module('controlYourLife', [
    'controlYourLife.services', 'controlYourLife.directives', // App
    'ngMaterial' // Material
  ])
  .constant("AppConfig", {
    "api_url": "http://localhost:3000",
    "image_server_url": "http://localhost:3000"
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('grey');
  });

angular.module('controlYourLife.services', []);
angular.module('controlYourLife.directives', []);
