// service
module employeeApp {
	
	angular.module('employeeApp').service('employeeApp.service.employees', 
		['$http', ($http) => new EmployeesService($http)]);

	export class EmployeesService {
		employees: model.Employee[] = [];
		http: ng.IHttpService;

		constructor($http: ng.IHttpService) {
			this.http = $http;
		}

		fetchEmployees() {
			this.http.get('app/employee/employees.json').success( (data) => {
					data.forEach((employee) =>{
							this.employees.push(employee);
						});
				});
		}
	}
}