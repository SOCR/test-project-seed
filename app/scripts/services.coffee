'use strict'

### Sevices ###

services = angular.module('app.services', [])

.factory 'version', -> "0.1"

###
  @name app.services.d3
  @description d3 service for visualization
###
services.factory 'd3', ->
  d3

services.factory 'lineChart', ->







