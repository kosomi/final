var app = angular.module('myApp')
          .service('userService', function($firebaseAuth, fb, $location){ 

    //Todo: don't hardcode this 
    var user = { 
        name: '' 
    }; 
    var ref = new Firebase(fb.url); 
    var authObj = $firebaseAuth(ref); 
    // Log in user if already logged 

    // Set the user object if already logged in on page refresh 
    var info = authObj.$getAuth(); 
    if(info){ 
      user.name = info.google.displayName; 
    }  
 
});