angular.module('myApp')
.controller('threadPageController', function($scope, $http, $routeParams, threadService, fb){

    var threadId = $routeParams.threadId;

    $scope.newComment = '';
    var thread = threadService.getThread(threadId);
    var getCommentFire = threadService.getCommentFire(threadId); 
 
    thread.$bindTo($scope, 'thread') //creates $scope.thread with 3 way binding

    $scope.addComment= function(){ 
        if(!$scope.newComment){
            return false; //Don't do anything if the text box is empty
        }        

        var newComment = {
            text: $scope.newComment,
            newCUser: $scope.newCUser,
            upVote: 0
        };

        var tt = function(){
            number += 1;
            console.log(number);
        };

        $scope.thread.comments = $scope.thread.comments || [];
        $scope.thread.comments.push(newComment);
    
        $scope.newComment = ''; //Clear the input box
        $scope.newCUser = ''; //Clear the input box
    };

    $scope.addReply = function(comm, $index) {
        var newreply = {
            username: comm.replyUser,
            text: comm.replyValue
        }
        console.log('username: ' + comm.replyUser);
        console.log('commentKey: ' + comm.replyValue);    
        console.log('addReply $index: ' + $index);    
        
        $scope.addReply2(newreply, $index);  
    };


    $scope.dd = function($index){

        var getComment = threadService.getComment(threadId, $index); 
        
         //creates $scope.thread with 3 way binding 
 
        return getComment.$bindTo($scope, 'getComment');
    };

    $scope.addReply2 = function(newreply, $index){
        var getCommentFire = threadService.getCommentFire(threadId, $index); 
        getCommentFire.push(newreply);
        $scope.IsVisible = 3030;
        console.log('addReply2 $index: ' + $index);    
    };

    $scope.IsVisible = 3030; 

    $scope.ShowReply = function($index){ 


        $scope.IsVisible = $index;

        console.log($index);
        console.log($scope.IsVisible);
    }; 

    $scope.upVote = function(comment){
        if(!comment.upVote){
            comment.upVote = 1;
        } else {
            comment.upVote += 1;
        };        
    };  
 
    $scope.like = function(thread){
        if(!thread.like){
            thread.like = 1;
        } else {
            thread.like += 1;
        };        
    };    

  
});