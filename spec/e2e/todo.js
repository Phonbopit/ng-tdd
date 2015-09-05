'use strict';

describe('Todo List Home Page', function() {

  var todoList;

  // Assemble
  beforeEach(function() {

    // Act
    browser.get('/');
    todoList = element.all(by.repeater('item in todo.list'));
  });



  it('items in todo list should have 3 items', function() {
    // Assert
    expect(todoList.count()).toBe(3);
  });

  describe('Add new todo', function() {

    var addTodo, addButton;
    beforeEach(function() {
      addTodo = element(by.model('todo.todoText'));
      addButton = element(by.css('[value="add"'));

      addTodo.sendKeys('repeat');
      addButton.click();
    });

    it('should add a new todo', function() {
      expect(todoList.count()).toBe(4);
      expect(todoList.get(3).getText()).toEqual('repeat');
    });

    it('should clear text after added new item', function() {
      expect(addTodo.getAttribute('value')).toEqual('');
    });

  });

});
