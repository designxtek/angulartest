
// app init
module jobPosition {
	angular.module('jobPositionApp', []);

	angular.module('jobPositionApp').config(['$routeProvider', function routes($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
        	.when('/job-position', {
                templateUrl: 'app/jobPosition/jobPosition.html',
                controller: 'jobPositionApp.controller.addJobPosition'
            });
    }]);
}