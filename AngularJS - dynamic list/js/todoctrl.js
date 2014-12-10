angular.module('myapp', []).controller('TodoCtrl', function ($scope) {

	$scope.container = [];
	$scope.inputText;
	var counter = 0;

	$scope.add = function() {
		if (!$scope.inputText){
			return;
		}
		$scope.container.push({
			content : $scope.inputText,
			activ 	: false,
			id 		: counter
		});
		$scope.inputText = '';
		counter++;
	}

	$scope.change = function(id) {		
		var len = $scope.container.length;
		var tab = $scope.container;
		for (var i=0; i<len; ++i){
			if (tab[i].id === id){
				tab[i].activ = !tab[i].activ;								
				break;
			}
		}

	}

});
