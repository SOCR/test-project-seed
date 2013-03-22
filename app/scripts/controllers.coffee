'use strict'

### Controllers ###

angular.module('app.controllers', ['app.services'])

.controller('AppCtrl', [
  '$scope'
  '$location'
  '$resource'
  '$rootScope'

($scope, $location, $resource, $rootScope) ->

  # Uses the url to determine if the selected
  # menu item should have the class active.
  $scope.$location = $location
  $scope.$watch('$location.path()', (path) ->
    $scope.activeNavId = path || '/'
  )

  # getClass compares the current url with the id.
  # If the current url starts with the id it returns 'active'
  # otherwise it will return '' an empty string. E.g.
  #
  #   # current url = '/products/1'
  #   getClass('/products') # returns 'active'
  #   getClass('/orders') # returns ''
  #
  $scope.getClass = (id) ->
    if $scope.activeNavId.substring(0, id.length) == id
      return 'active'
    else
      return ''
])

.controller('MyCtrl1', [
  '$scope'

($scope) ->
  $scope.onePlusOne = 2
])

.controller('MyCtrl2', [
  '$scope'

($scope) ->
  $scope
])

.controller('TodoCtrl', [
  '$scope'

($scope) ->

  $scope.todos = [
    text: "learn angular"
    done: true
  ,
    text: "build an angular app"
    done: false
  ]

  $scope.addTodo = ->
    $scope.todos.push
      text: $scope.todoText
      done: false

    $scope.todoText = ""

  $scope.remaining = ->
    count = 0
    angular.forEach $scope.todos, (todo) ->
      count += (if todo.done then 0 else 1)

    count

  $scope.archive = ->
    oldTodos = $scope.todos
    $scope.todos = []
    angular.forEach oldTodos, (todo) ->
      $scope.todos.push todo  unless todo.done

])

.controller('demoCtrl', [
  'd3'
  (d3) ->
    sampleSVG = d3.select("#viz").append("svg").
    attr("width", 100).attr("height", 100)
    sampleSVG.append("circle").style("stroke", "gray")
      .style("fill", "white").attr("r", 40).attr("cx", 50)
      .attr("cy", 50)
      .on "mouseover", ->
        d3.select(this).style "fill", "aliceblue"
      .on "mouseout", ->
        d3.select(this).style "fill", "white"
])

