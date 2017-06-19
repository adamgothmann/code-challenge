
angular.module('myApp', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.subscribe = function(){
      if($scope.name.length < 5){
        alert("name must be 5 or more characters long");
        return false;
      } else if ($scope.email.length < 8){
        alert("email must be 8 or more characters long");
        return false;
      }

      console.log($scope.name, $scope.email);

      if($scope.name.length >= 5 && $scope.email.length >= 8){
        $scope.valid = true;
      }
    };
  }]);
