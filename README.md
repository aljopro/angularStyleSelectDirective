Stylable Select Directive
===========================

A Directive for select controls making them stylable. Check out the demo at http://johnchappell.net/angularStyleSelectDirective/demo.html

Usage:

include module into your angular app

```
angular.module('myApp', ['jcStyleSelect']);
```

Add to directive to a select control

```
<select jc-style-select ng-model="selectedThing"></select>
```

Optionally use css provided
```
<link rel="stylesheet" href="jcStyleSelect.css" type="text/css">
```

Install this directive via bower
```
bower install angular-style-select-directive
```

This directive is released under the MIT License.