var tempApp = angular.module('app', []);

tempApp.controller("TemperatureMonitor",function($scope){
  $scope.inputTemp = '';
  $scope.arrayTemp=[];
  $scope.limit = 8
  $scope.median= '';
  $scope.arrayLength = '';
  $scope.progBar= 0;
  
  //Allows user to view temperatures they've entered after clicking 'Add.'
  $scope.recordTemperature = function(){
    if($scope.inputTemp ===''){
      alert("Please enter a number")
    }else{
      $scope.arrayTemp.push($scope.inputTemp);
      $scope.arrayLength = $scope.arrayTemp.length
    }
      //Value of progress bar will be the same as the array length
      if($scope.arrayLength > 0){
       $scope.progBar = $scope.arrayLength
       
      }else{
      $scope.progBar = 0
     
    }
     
      //If user enters more than 8 temperatures, an alert box will appear.
      if($scope.arrayLength > $scope.limit){
        alert("Limit of 8 temperatures has been reached")
      }
    
  };
  
  //Function that allow median to display once user clicks 'Get Median Temperature'
    
  $scope.getCurrentMedian = function(){
    //Sorts temperature from least to greatest
    $scope.arrayTemp.sort(function(a,b){
      return a-b;
    });
    
      //Formula for calculating median if array length is even
    if ($scope.arrayLength % 2 === 0) {
				$scope.median = ($scope.arrayTemp[$scope.arrayLength / 2 - 1] + $scope.arrayTemp[$scope.arrayLength / 2]) / 2;
			
			//Formula for calculating median if array length is odd
      } else {
				$scope.median = ($scope.arrayTemp[($scope.arrayLength - 1) / 2])}
		  
		  return $scope.median;
		
		}

  
  
});


