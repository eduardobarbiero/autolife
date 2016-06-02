'use strict';

angular.module('controlYourLife')
.controller('AuthCtrl', function($scope, Auth, GenericFunctions) {

    $scope.auth = Auth;

    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });

    $scope.make_login = function() {
      $scope.auth.$authWithOAuthPopup("facebook").then(function(authData) {
        $scope.authData = authData;
        GenericFunctions.toast("Cadastrado com sucesso!");
      }).catch(function(error) {
        GenericFunctions.toast("Ocorreu um problema no registro, erro: " + error);        
      });
    },
    $scope.make_logout = function(){
      GenericFunctions.toast("Você efetuou logout!");
      return $scope.auth.$unauth();
    }
});
