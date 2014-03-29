
// controller
module employeeApp {

	angular.module('employeeApp').controller('employeeApp.controller.addEmployee', 
		['$scope', 'employeeApp.service.employees',
			($scope, EmployeesService, $http) => new AddEmployeeController($scope, EmployeesService)]);

	export interface IAddEmployeeScope extends ng.IScope {
		vm: AddEmployeeController;
		employees: model.Employee[];
		message: string;
		firstName: string;
		lastName: string;
	}

	export class AddEmployeeController {
		scope: IAddEmployeeScope;
		employeeService: employeeApp.EmployeesService;

		constructor($scope: IAddEmployeeScope, EmployeesService: employeeApp.EmployeesService) {
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
			var employeesSaved = false;

			this.scope.employees.forEach((employee) => { 
					this.employeeService.employees.push(employee);
					employeesSaved = true;
				});
			
			if(employeesSaved)
				this.scope.message = "Employee List Saved";
			else 
				this.scope.message = "There are no employees to save";

			this.scope.employees = [];
		}
	}
}