'use strict';

angular.module('yoMongoAuthApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.changePassOk = Auth.changePassOk;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
