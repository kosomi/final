var app = angular.module('myApp');

app.controller('writePageController', function($scope, threadService, $location, $http){

    $scope.time12 = Firebase.ServerValue.TIMESTAMP;

    $scope.threads = threadService.getAllThreads(); 

    $scope.addThread = function(){    

        $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.address + "&key=AIzaSyCnI89R9_5DcPldlSNI8gI5h0JjVoAQfKQ")
        .then(function(response) {
            
            $scope.location = response.data.results[0].geometry.location;

            console.log('latitude:'+$scope.location.lat);
            console.log('logitude:'+$scope.location.lng);

            second();
     
        }); 

        var second = function(){

            if(!$scope.newThreadTitle){ 
                return false; 
            } 

            if(!$scope.Text12){ 
                $scope.Text12 = '';  
            }

            if(!$scope.OriginUser){ 
                $scope.OriginUser = '';  
            }

            if(!$scope.time12){ 
                $scope.time12 = '';  
            }

            if(!$scope.address){ 
                $scope.address = '';  
            }

            if(!$scope.location.lat){ 
                $scope.location.lat = '';  
            }

            if(!$scope.location.lng){ 
                $scope.location.lng = '';  
            }

            if(!$scope.image1){ 
                $scope.image1 = '';  
            }

            if(!$scope.image2){ 
                $scope.image2 = '';  
            }

            if(!$scope.image3){ 
                $scope.image3 = '';  
            } 

            var newThread = { 
                title: $scope.newThreadTitle, 
                Text12: $scope.Text12, 
                username: $scope.OriginUser, 
                time12: $scope.time12,
                address: $scope.address,
                lat: $scope.location.lat,
                lng: $scope.location.lng,
                image1: $scope.image1,
                image2: $scope.image2,
                image3: $scope.image3,
                count: 0,
                like: 0,
                comments: [] 
            }; 

            $scope.threads.$add(newThread); 

            $scope.newThreadTitle = ''; //Clear the text in the input box 
            $scope.Text12 = ''; //Clear the text in the input box 
            $scope.OriginUser = ''; //Clear the text in the input box        

          }
    };

    $scope.logout = function(){
        $location.path('main');
    };
 

});