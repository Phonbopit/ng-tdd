'ust strict';

angular.module('todoApp', [])
  .controller('TodoController', todoController);

function todoController() {
  var vm = this;

  vm.list = ['test', 'execute', 'refactor'];
};
