'use strict'

# Declare app level module which depends on filters, and services
App = angular.module('app', [
  'ngCookies'
  'ngResource'
  'app.controllers'
  'app.directives'
  'app.filters'
  'app.services'
  'partials'
  'gridDemo'
])

App.config([
  '$routeProvider'
  '$locationProvider'

($routeProvider, $locationProvider, config) ->

  $routeProvider

    .when('/socr', {templateUrl: '/partials/socr.html'})
    .when('/projects', {templateUrl: '/partials/projects.html'})
    .when('/demo', {templateUrl: '/partials/demo.html'})
    .when('/view1', {templateUrl: '/partials/partial1.html'})
    .when('/view2', {templateUrl: '/partials/partial2.html'})

    # Catch all
    .otherwise({redirectTo: '/socr'})

  # Without server side support html5 must be disabled.
  $locationProvider.html5Mode(false)
])

#App.run([
#  'd3'
#  (d3) ->
#    console.log d3
#    sampleSVG = d3.select("#viz").append("svg").
#    attr("width", 100).attr("height", 100)
#    sampleSVG.append("circle").style("stroke", "gray")
#      .style("fill", "white").attr("r", 40).attr("cx", 50)
#      .attr("cy", 50)
#      .on "mouseover", ->
#        d3.select(this).style "fill", "aliceblue"
#      .on "mouseout", ->
#        d3.select(this).style "fill", "white"
#])
