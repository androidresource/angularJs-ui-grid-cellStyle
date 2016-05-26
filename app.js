var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [
      { field: 'name', cellClass:'red'},
      { name:'company',
        field:'compny',
        cellTemplate: '<div style="color:{{row.entity.color}};text-align: center;"  >{{row.entity.company}}</div> '
      }
    ]
  };

  $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
    .success(function(data) {
      $scope.gridOptions.data = [
                      {
                          "name": "Ethel Price",
                          "gender": "female",
                          "company": "Enersol",
                           "color":"#0000FF"
                      },
                      {
                          "name": "Claudine Neal",
                          "gender": "female",
                          "company": "Sealoud",
                           "color":"#EE56FF"
                      },
                      {
                          "name": "Beryl Rice",
                          "gender": "female",
                          "company": "Velity",
                           "color":"#EED77F"
                      },
                      {
                          "name": "Wilder Gonzales",
                          "gender": "male",
                          "company": "Geekko",
                           "color":"#E3457F"
                      },
                      {
                          "name": "Georgina Schultz",
                          "gender": "female",
                          "company": "Suretech",
                           "color":"#E2377F"
                      },
                      {
                          "name": "Carroll Buchanan",
                          "gender": "male",
                          "company": "Ecosys",
                           "color":"#99977F"
                      },
                      {
                          "name": "Valarie Atkinson",
                          "gender": "female",
                          "company": "Hopeli",
                           "color":"#00000F"
                      },
                      {
                          "name": "Schroeder Mathews",
                          "gender": "male",
                          "company": "Polarium",
                           "color":"#EED77F"
                      }];
    });
}]);
