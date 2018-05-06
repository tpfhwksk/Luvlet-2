var app = angular.module('todo', []);
var sumMark = 0;
var index = 0;

app.controller('TodoCtrl', function($scope) {
	$scope.todos = [ {
		title : '머리가 아프다.',
		completed : false,
		num : 0

	}, {
		title : '신경이 예민하고 마음의 안정이 안 된다',
		completed : false,
		num : 1
	}, {
		title : '쓸데없는 생각이 머리에서 떠나지 않는다',
		completed : false,
		num : 2
	} ];
	
	$scope.remove = function (todo) {
		var idx = $($scope.todos).index(todo);
		$scope.todos.splice(idx,1);
	};
	
	$scope.add = function() {
		// 체크한거 넘기고, next index 불러옴, todo completed를 true로 변경
		idx = idx + 1;
		alert(idx);
		
	};
	
	$scope.retract = function(newTodoTitle) {
		// 체크한거 넘기지 말고, 그 전 index 불러옴, 
	};
	
	$scope.addMark = function(newMark) {
		sumMark = sumMark + Number(newMark);
		alert(sumMark);
	};

});