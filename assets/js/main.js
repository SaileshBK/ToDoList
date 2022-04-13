angular.module('myToDo',[])
		.controller('myCtrl', function($scope) {
	
    	$scope.items = [
    		{'title':'Wake up !','clear':false}
    	
    		];
	
		$scope.addTodo = function() {
        $scope.items.push({'title':$scope.newTodo,'clear':false});
    	}
	
		$scope.clearTodo = function(){
		$scope.items = $scope.items.filter(function(item){
			return !item.clear
		})
	}
		
	
})