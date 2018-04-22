describe('getCurrentMedian', function(){
  
  beforeEach(angular.mock.module('app'));
  
  var $controller;
  
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));
  //Tests ability to sort array and find the median of even-numbered array
  describe('even median',function(){
    it('median of [1,2,3,4,5,6] equals 3.5',function(){
      var $scope ={}
      var controller= $controller('TemperatureMonitor',{$scope: $scope});
      $scope.arrayTemp = [6,2,3,5,4,1];
      $scope.arrayLength = $scope.arrayTemp.length;
      $scope.getCurrentMedian();
      expect($scope.median).toBe(3.5);
    })
  })
  
  //Tests ability to sort and determine median of odd-numbered array
  describe('odd median',function(){
    it('median of [1,2,3,4,5] equals 3',function(){
      var $scope ={}
      var controller= $controller('TemperatureMonitor',{$scope: $scope});
      $scope.arrayTemp = [5,2,3,4,1];
      $scope.arrayLength = $scope.arrayTemp.length;
      $scope.getCurrentMedian();
      expect($scope.median).toBe(3);
    })
  })
  
  //Tests if value of progess bar will be equal to length of array
  describe('recordTemperature',function(){
    it('progBar equals arrayTemp.length',function(){
      var $scope ={}
      var controller= $controller('TemperatureMonitor',{$scope: $scope});
      $scope.inputTemp = 78
      $scope.arrayTemp = [1,13,15];
      $scope.arrayLength = $scope.arrayTemp.length;
      $scope.progBar =$scope.arrayLength
      $scope.recordTemperature();
      expect($scope.progBar).toBe(4);
    })
  })
  //Tests if alert will appear if user enters more than 8 values
  describe('recordTemperature',function(){
    it('alert if arrayTemp.length > 8',function(){
      var $scope ={}
      var controller= $controller('TemperatureMonitor',{$scope: $scope});
      $scope.inputTemp = 9
      $scope.arrayTemp = [1,2,3,4,5,6,7,8];
      $scope.arrayLength = $scope.arrayTemp.length;
      $scope.progBar =$scope.arrayLength;
      $scope.alertMsg = alert('Limit of 8 temperatures has been reached')
      $scope.z = $scope.alertMsg
      $scope.recordTemperature();
      expect($scope.z).toBe($scope.alertMsg);
    })
  })
  
  /* Tests if user doesn't enter anything they will get alert and the progress 
  bar value remain at 0 */
  describe('recordTemperature',function(){
    it('progBar =  0 && alert if inputTemp="" ',function(){
      var $scope ={}
      var controller= $controller('TemperatureMonitor',{$scope: $scope});
      $scope.inputTemp='' 
      $scope.arrayTemp = [];
      $scope.arrayLength = $scope.arrayTemp.length;
      $scope.progBar =$scope.arrayLength;
      $scope.alertMsg = alert("Please enter a number")
      $scope.z= $scope.alertMsg
      $scope.recordTemperature();
      expect($scope.z).toBe($scope.alertMsg)
      expect($scope.progBar).toBe(0);
    })
  })
})
