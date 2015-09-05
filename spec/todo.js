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

  it('should define a list object', function() {
    expect(scope.todo.list[0].toEqual('test'));
  });

});
