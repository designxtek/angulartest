
// controller
module employeeApp {

	angular.module('employeeApp').controller('employeeApp.controller.addEmployee', 
		['$scope', 'employeeApp.service.employees', '$http',
			($scope, EmployeesService, $http) => new AddEmployeeController($scope, EmployeesService, $http)]);

	export class AddEmployeeController {
		scope: any;
		employeeService: employeeApp.EmployeesService;

		constructor($scope: ng.IScope, EmployeesService: any, $http: ng.IHttpService) {
			this.scope = $scope;
			this.scope.vm = this;

			this.scope.employees = [];
			this.employeeService = EmployeesService;

		}

		addEmployee() {
			this.scope.employees.push({ firstName: this.scope.firstName, lastName: this.scope.lastName });
			this.scope.firstName = "";
			this.scope.lastName = "";
			this.scope.message = "Employee Added";
		}

		saveEmployee() {
			this.scope.employees.forEach((employee) => { 
					this.employeeService.employees.push(employee);
				});
			
			this.scope.message = "Employee List Saved";
		}
	}
}