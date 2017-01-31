# Angular Directive ngShowOn

A simple angular directive to show/hide element according to the size of the window.

## Getting Started

### Installing

You can install it via bower with :

```
bower install ngshowon
```

or just clone the project on github :

```
https://github.com/PaulRosset/ngshowon.git
```

### Prerequisites

Once download, Include the file :

```
...
  <script src="path/to/the/file/ngShowOn.min.js"></script>
...
```

and integrate it in your main module angular as dependencies :

```
var myApp = angular.module('myApp', ['ngShowOn']);
```

### Example of use

Now, you can use as you want on any html element like this :

```
<h1 ng-show-on="tablet">Hello World</h1>
```

In this example the element will be shown only for tablet device.


Another example for mobile device

```
<div ng-show-on="mobile" class="test">
    <p>Hello here</p>
</div>
```

For the moment, the arguments available are : 
- tablet
- desktop
- mobile

By default, if no value are passed, the element is hidden on all devices.

## Tips

This is my first time that I post code on github, so I would appreciate if you do remark about the code.
Thank's in advance.

## Authors

* **Paul Rosset**