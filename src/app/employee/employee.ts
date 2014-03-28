
// app init
module employeeApp {
	angular.module('employeeApp', ['ngRoute']);

	angular.module('employeeApp').config(['$routeProvider', function routes($routeProvider: ng.route.IRouteProvider) {
		$routeProvider
	        .when('/employee', {
	            templateUrl: 'app/employee/employee.html',
	            controller: 'employeeApp.controller.addEmployee'
	        });
    }]);
}