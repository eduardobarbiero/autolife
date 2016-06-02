'use strict';
angular.module('controlYourLife.services')
  .factory('Auth', function($firebaseAuth) {
    var ref = new Firebase("https://eduardobarbiero.firebaseio.com");
    return $firebaseAuth(ref);
  });
