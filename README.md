ng-tdd
---

Learn AngularJS Test Driven Development with this book [AngularJS Test-driven Development](http://amzn.to/1NUxWsv)

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
