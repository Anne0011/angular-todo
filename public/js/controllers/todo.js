controllers.controller('TodoCtrl',
[
  '$scope',
  '$http',
  '$rootScope',
  'sharedTask',

  function ($scope, $http, $rootScope, taskStorage) {
    $scope.message = "Todo!";

    var currentTask = taskStorage.getTask();

    if (currentTask.hasOwnProperty("_id") && currentTask._id.length > 0) {
      $scope.task = currentTask;
    } else {
      $scope.task = {};
    }
    $scope.submit = function(){
      console.log('you clicked the submit button');
      $scope.task.user =$rootScope.rootUser;
      $http({
            method: 'POST',
            url: '/api/tasks',
            data: $scope.task
          }).
          success(function (data, status, headers, config) {
            console.log('task is saved');
            $scope.user = {};
          }).
          error(function (data, status, headers, config) {
            console.log('task save failed');
          });
    }
  }
]);
