
angular.module('myApp', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.subscribe = function(){
      if($scope.name.length < 5) {
        alert("name must be at least 5 characters long");
      } else if($scope.email.length < 8) {
        alert("email must be at least 8 characters long");
      }
      console.log($scope.name, $scope.email);

      if($scope.name.length >= 5 & $scope.email.length >= 8){
        $scope.valid = true;
      }
    };

    $scope.checkLength = function(){
      console.log('checkLength');
      if($scope.name.length === null || $scope.name.length < 5 || $scope.email.length === null ||$scope.email.length < 8) {
        document.getElementsByName("submit")[0].disabled = true;
      }
      else if($scope.name.length >= 5 && $scope.email.length >= 8){
        document.getElementsByName("submit")[0].disabled = false;
      }
    };
  }]);
