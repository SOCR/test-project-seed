'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'partials']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/socr', {
      templateUrl: '/partials/socr.html'
    }).when('/projects', {
      templateUrl: '/partials/projects.html'
    }).when('/demo', {
      templateUrl: '/partials/demo.html'
    }).when('/view1', {
      templateUrl: '/partials/partial1.html'
    }).when('/view2', {
      templateUrl: '/partials/partial2.html'
    }).otherwise({
      redirectTo: '/socr'
    });
    return $locationProvider.html5Mode(false);
  }
]);
'use strict';
/* Controllers
*/
angular.module('app.controllers', ['app.services']).controller('AppCtrl', [
  '$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
    $scope.$location = $location;
    $scope.$watch('$location.path()', function(path) {
      return $scope.activeNavId = path || '/';
    });
    return $scope.getClass = function(id) {
      if ($scope.activeNavId.substring(0, id.length) === id) {
        return 'active';
      } else {
        return '';
      }
    };
  }
]).controller('MyCtrl1', [
  '$scope', function($scope) {
    return $scope.onePlusOne = 2;
  }
]).controller('MyCtrl2', [
  '$scope', function($scope) {
    return $scope;
  }
]).controller('TodoCtrl', [
  '$scope', function($scope) {
    $scope.todos = [
      {
        text: "learn angular",
        done: true
      }, {
        text: "build an angular app",
        done: false
      }
    ];
    $scope.addTodo = function() {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });
      return $scope.todoText = "";
    };
    $scope.remaining = function() {
      var count;

      count = 0;
      angular.forEach($scope.todos, function(todo) {
        return count += (todo.done ? 0 : 1);
      });
      return count;
    };
    return $scope.archive = function() {
      var oldTodos;

      oldTodos = $scope.todos;
      $scope.todos = [];
      return angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          return $scope.todos.push(todo);
        }
      });
    };
  }
]).controller('demoCtrl', [
  'd3', function(d3) {
    var sampleSVG;

    sampleSVG = d3.select("#viz").append("svg").attr("width", 100).attr("height", 100);
    return sampleSVG.append("circle").style("stroke", "gray").style("fill", "white").attr("r", 40).attr("cx", 50).attr("cy", 50).on("mouseover", function() {
      return d3.select(this).style("fill", "aliceblue");
    }).on("mouseout", function() {
      return d3.select(this).style("fill", "white");
    });
  }
]);
'use strict';
/* Directives
*/
angular.module('app.directives', ['app.services']).directive('appVersion', [
  'version', function(version) {
    return function(scope, elm, attrs) {
      return elm.text(version);
    };
  }
]);
'use strict';
/* Filters
*/
angular.module('app.filters', []).filter('interpolate', [
  'version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
]);
'use strict';
/* Sevices
*/

var services;

services = angular.module('app.services', []).factory('version', function() {
  return "0.1";
});

/*
  @name app.services.d3
  @description d3 service for visualization
*/


services.factory('d3', function() {
  return d3;
});

services.factory('lineChart', function() {});
