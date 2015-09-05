ng-tdd
---

Learn AngularJS Test Driven Development

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

then install angular via bower 

```
bower install angular --save
```

angular folder will be save on `bower_components` folder.
