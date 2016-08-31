var app = angular.module('myApp');

app.controller('mainPageController', function($scope, threadService, $cordovaGeolocation){

    $scope.threads = threadService.getAllThreads();    

    var threads = $scope.threads;




    var posOptions = {timeout: 10000, enableHighAccuracy: false};
  
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            $scope.lat  = position.coords.latitude;
            $scope.long = position.coords.longitude;    

            console.log('my location is ' + $scope.lat);
            console.log('my location is ' + $scope.long);

        }, function(error) { 
          console.log('Your Geolocation is messed up!')
        });    


    var distance = function(thread){

        var earthRadiusInKm    = 6371;
        var earthRadiusInMiles = 3959;

        var lat = thread.lat - $scope.lat; // Difference of latitude
        var long = thread.lng - $scope.long; // Difference of longitud 
            console.log('lat is ' + lat);
            console.log('long is ' + $scope.long);

        // Vertical distance
        var disLat = (lat * Math.PI * earthRadiusInMiles) / 180;

        // Horizontal distance
        var disLon = (long * Math.PI * earthRadiusInMiles) / 180;

        // Total distance (calculated by Pythagore: a^2 + b^2 = c^2)
        var calculation = Math.sqrt(Math.pow(disLat, 2) + Math.pow(disLon, 2)); 

        thread.dist   = (calculation).toFixed(2);   
      };  


    threads.$loaded()
        .then(function(){
            angular.forEach(threads, function(thread) {  
                distance(thread); 
        });
    });

 

 


///////// need to fix //////////////////////

    $scope.upCount = function(thread){
        console.log(thread);
        thread.count += 1; 
        console.log(thread.count);
    };
 

});