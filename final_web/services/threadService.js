var app = angular.module("myApp")
    
app.service("threadService", function($firebaseArray, $firebaseObject, fb){

    this.getAllThreads = function(){
        var ref = new Firebase(fb.url + '/threads');
        return $firebaseArray(ref);
    };

    this.getThread = function(threadId){
        var ref = new Firebase(fb.url + '/threads/' + threadId);
        return $firebaseObject(ref);
    };

    this.getComment = function(threadId, commentId){
        var ref = new Firebase(fb.url + '/threads/' + threadId + '/comments/' + commentId + '/replies');
        return $firebaseObject(ref);
    };  

    this.getCommentFire = function(threadId, $index){
        return new Firebase(fb.url + '/threads/' + threadId + '/comments/' + $index + '/replies');
        console.log('getCommentFire index: ' + $index);
    }; 

    this.visitors = function(){
    var ref = new Firebase(fb.url);
    return $firebaseArray(ref);
    };


});