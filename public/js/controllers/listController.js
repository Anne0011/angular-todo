controllers.controller('listCtrl',
[
  '$scope',
  '$http',
  '$route',
  '$location',
  'sharedTask',

  function ($scope, $http, $route, $location, taskStorage) {
    $scope.message = "Todo List";
    $scope.tasks = [];

    $http({
      method: "GET",
      url: '/api/tasks'
    }).
    success(function (data, status, headers, config){
      console.log(data);
      $scope.tasks = data;
    }).
    error(function (data, status, headers, config){
      console.log('could not get task')
    });
    $scope.remove = function(id) {
      $http({
        method: 'Delete',
        url: '/api/tasks/' + id
      }).
      success(function (data, status, headers, config){
        console.log('item deleted');
        $route.reload();
      }).
      error(function (data, status, headers, config){
        console.log('item not deleted');
      });
    }
    $scope.edit = function(id){
      $http({
        method: 'GET',
        url: '/api/tasks/' + id
      }).
      success(function (data, status, headers, config){
        console.log('Edit Item');
        taskStorage.setTask(data[0]);
        $location.path('/todo');
      }).
      error(function (data, status, headers, config){
        console.log('item not deleted');
      });

    }
  }
]);
