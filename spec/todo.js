'use strict';

describe('TodoApp', function() {

  beforeEach(module('todoApp'));

  var scope = {};

  beforeEach(inject(function($controller) {
    $controller('TodoController as todo', { $scope: scope });
  }));

  it('should define a list object', function() {
    expect(scope.todo.list).toBeDefined();
  });

  it('should define a first value in list object', function() {
    expect(scope.todo.list[0]).toEqual('test');
  });

  it('should define a second value in list object', function() {
    expect(scope.todo.list[1]).toEqual('execute');
  });

  it('should define a third value in list object', function() {
    expect(scope.todo.list[2]).toEqual('refactor');
  });

  describe('when using a todo list', function() {

    beforeEach(function() {
      scope.todo.add('repeat');
    });

    it('should add item to last item in list', function() {

      var lastIndexOfList = scope.todo.list.length - 1;
      expect(scope.todo.list[lastIndexOfList]).toEqual('repeat');

    });

  });

});
