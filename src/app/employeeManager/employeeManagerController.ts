
// controller
module employeeManagerApp {

	angular.module('employeeManagerApp').controller('employeeManagerApp.controller.manager',
		['$scope', '$http', 'employeeApp.service.employees', 'jobPositionApp.service.jobs', 'hrApp.factory.hrId',
		($scope, $http, EmployeesService, JobsService, HrIdFactory) => 
			new ManagerController($scope, $http, EmployeesService, JobsService, HrIdFactory)]);

	export class ManagerController {
		scope: any;
		hrIdFactory: any;
		employeeService: employeeApp.EmployeesService;

		constructor($scope: ng.IScope, $http: ng.IHttpService, EmployeesService: any, JobsService: any, HrIdFactory: any) {
			this.scope = $scope;
			this.scope.vm = this;

			this.scope.test = "manager";
			this.scope.employees = EmployeesService.employees;
			this.employeeService = EmployeesService;

			this.scope.jobs = JobsService.jobs;
			this.hrIdFactory = HrIdFactory;
		}

		doSomething() {
			this.hrIdFactory.append();
			console.log('do something');
		}
	}
}