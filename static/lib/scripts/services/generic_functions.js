'use strict';
angular.module('controlYourLife.services')
  .factory('GenericFunctions', function($mdToast) {
    function toast_message(message) {
        var toast = $mdToast.simple().content(message).position('bottom right');
        $mdToast.show(toast);
    }
    return {
      toast: function(message) {
        toast_message(message);
      }
    };
  });
