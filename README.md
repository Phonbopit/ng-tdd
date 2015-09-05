ng-tdd
---

Learn AngularJS Test Driven Development with this book [AngularJS Test-driven Development](http://amzn.to/1NUxWsv)

## How does it work?

Install dependencies

```
npm install
bower install
```

Run spec test with karma

```
karma start karma.conf.js
```

Run e2e test with Protractor

```
protractor conf.js
```

---

# My Notes

## Chapter 2 : The Karma Way

#### Install karma

```
npm install karma-cli -g
```

By default, when installing karma it will install `karma-chrome-launcher` and `karma-jasmine` as dependencies if not install as devDependencies :

```
npm install karma-jasmine karma-chrome-launcher --save-dev
```

#### Init karma

Initialized a default configuration by:

```
karma init
```

#### Create a test

Create first test inside folder `/test/unit` named `firstTest.js`

#### Start karma

```
karma start karma.conf.js
```

#### Install AngularJS

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

#### Test first

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

- start karma with : `karma start` it should be passed.

## Chapter 3 : End-to-end Testing with Protractor

Ref : [Protractor Website](https://angular.github.io/protractor/#/)

- Install protractor as global

```
npm install protractor -g
```

Update Web Driver with :

```
webdriver-manager update
```

Now start up a server with :

```
webdriver-manager start
```
#### Create index file

- add `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AngularJS Test Driven Development</title>
</head>
<body>
</body>
</html>
```

#### Create first e2e test

- Create `conf.js` file on root of project

```
// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['spec/e2e/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
```
- create a new file named `spec/e2e/todo.js` :

```
'use strict';

describe('Home Page', function() {

  // Assemble
  beforeEach(function() {

    // Act
    browser.get('/');
  });

  it('items in todo list should be have 3 items', function() {
    var items = element.all(by.repeater('item in list'));

    // Assert
    expect(items.count()).toBe(3);
  });
})
```

Install `http-server` module and run at port 5555

```
npm install http-server -g
http-server -p 5555
```

- Update `conf.js` file by add `baseUrl`

```
  baseUrl: 'http://localhost:5555/',
```

- Run protractor `protractor conf.js`

**Faied!**

- Add script link to angular in `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AngularJS Test Driven Development</title>
</head>
<body ng-app="todoApp">

    <script src="bower_components/angular/angular.js"></script>
    <script src="app/todo.js"></script>
</body>
</html>
```
