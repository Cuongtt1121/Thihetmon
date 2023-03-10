// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {
    $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
	$scope.emailrg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// function to submit the form after all validation has occurred			

    $scope.datas = [];
	if (localStorage.getItem('user-list')){
		$scope.datas = angular.fromJson(localStorage.getItem('user-list'));

	}
	$scope.add_user = function(){
		var user = [];
			user.name = $scope.name;
			user.email = $scope.email;
			user.password = $scope.password;
			user.phone = $scope.phone;
		$scope.datas.push(user);
		localStorage.setItem('user-list', angular.toJson($scope.datas));
		console.log($scope.datas);

	}
});     