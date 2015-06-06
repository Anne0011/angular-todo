controllers.controller('NavCtrl', function ($scope, $location) {
  $scope.message = "NAV!"
  $scope.logout = function(){
    $rootScope.rootuser=null;
    $location.path('/')
  }
});
