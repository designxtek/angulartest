
// app init
module employeeManagerApp {
	angular.module('employeeManagerApp', []);

	angular.module('employeeManagerApp').config(['$routeProvider', function routes($routeProvider: ng.route.IRouteProvider) {
		$routeProvider
	        .when('/manage-employees', {
                templateUrl: 'app/employeeManager/employeeManager.html',
                controller: 'employeeManagerApp.controller.manager'
            })
    }]);
}