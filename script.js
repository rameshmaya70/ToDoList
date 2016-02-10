
var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){

	$scope.tasks = [];

	$scope.keyPressed = function(){
		if(event.which == 13 && $scope.task != ""){

			$scope.addtask();
		}

	};

$scope.addtask = function(){
	$scope.tasks.push({'name':$scope.task,'status':false});
	$scope.task= '';
};
});