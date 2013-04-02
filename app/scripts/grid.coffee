grid = angular.module 'gridDemo', ['ngGrid']

grid.controller "gridDemoCtrl", [
  '$scope'
  (scope)->
    scope.myData = [
      {name: "Moroni", age: 50},
      {name: "Tiancum", age: 43},
      {name: "Jacob", age: 27},
      {name: "Nephi", age: 29},
      {name: "Enos", age: 34}
    ]
    scope.gridOptions =
      data: 'myData',
      enableCellSelection: true,
      canSelectRows: false,
      enableCellEdit:true,
      columnDefs: [{field: 'name', displayName: 'Name',
      enableFocusedCellEdit: true}, {field:'age', displayName:'Age'}]
]