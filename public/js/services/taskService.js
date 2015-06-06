angular.module("myApp.taskService", []).service("sharedTask", function () {
  var currentTask = {};
  return {
    setTask: function (task) {
      currentTask = task;
    },

    getTask: function () {
      return currentTask;
    }
  };
});
