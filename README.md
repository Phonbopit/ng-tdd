ng-tdd
---

Learn AngularJS Test Driven Development with this book [AngularJS Test-driven Development](http://amzn.to/1NUxWsv)

---

# Note

## Install karma

```
npm install karma-cli -g
```

By default, when installing karma it will install `karma-chrome-launcher` and `karma-jasmine` as dependencies if not install as devDependencies :

```
npm install karma-jasmine karma-chrome-launcher --save-dev
```

## Init karma

Initialized a default configuration by:

```
karma init
```

## Create a test

Create first test inside folder `/test/unit` named `firstTest.js`

## Start karma

```
karma start karma.conf.js
```

## Install AngularJS

Before install angularjs must be install bower first,

```
npm install bower -g

bower init
```

then install angular and angular-mocks via bower 

```
bower install angular angular-mocks --save
```

angular folder will be save on `bower_components` folder.

## Test first

- 3 A's (Assemble, Act, and Assert) with following format:

```
describe('', function () {
    beforeEach(function(){});

    it('', function() {

    });
});
```

- file `spec/todo.js`

```
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

});
```

- file `app/todo.js`

```
'ust strict';

angular.module('todoApp', [])
  .controller('TodoController', todoController);

function todoController() {
  var vm = this;

  vm.list = [];
};
```

- file `karma.conf.js`

```
...
// list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'spec/**/*.js'
    ],
    ...
```
