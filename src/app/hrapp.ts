/// <reference path="../lib/angular/angular.d.ts" />
/// <reference path="../lib/angular/angular-route.d.ts" />
/// <reference path="employee/_employeeReference.ts" />
/// <reference path="jobPosition/_jobPositionReference.ts" />
/// <reference path="employeeManager/_employeeManagerReference.ts" />

'use strict';

angular.module('hrApp', 
    ['ngRoute',
    'employeeApp',
    'jobPositionApp',
    'employeeManagerApp']);

module hrApp {

	angular.module('hrApp').config(['$routeProvider', function routes($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
        	.when('/', {
        		templateUrl: 'app/home/default.html'
        	})
            .otherwise({
                redirectTo: '/',
            });
    }]);

    angular.module('hrApp').value('hrId', 'abc123');

    angular.module('hrApp').service('hrApp.factory.hrId', ['hrId', (hrId) => new HrIdFactory(hrId)]);

    export class HrIdFactory {

        hrId: string;

        constructor(hrId: string) {
            this.hrId += hrId;
            console.log(this.hrId);
        }

        append() {
            this.hrId += " append ";
            console.log(this.hrId);
        }
    }

}