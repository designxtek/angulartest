describe('employee controllers', function(){

	describe('add employee controller', function(){

		var scope, ctrl;

		beforeEach(module('employeeApp'));

		beforeEach(inject(function($controller){
			scope = {};
			ctrl = $controller('employeeApp.controller.addEmployee', { $scope: scope });
		}));

		it('adding 2 employee should add 2 to the scope', inject(function($controller){
			

			scope.firstName = "luke";
			scope.lastName = "skywalker"
			ctrl.addEmployee();

			scope.firstName = "han";
			scope.lastName = "solo"
			ctrl.addEmployee();

			expect(scope.employees.length).toBe(2);
		}));

		it('adding an employee should have a message "Employee Added"', function(){
			scope.firstName = "luke";
			scope.lastName = "skywalker"
			ctrl.addEmployee();

			expect(scope.message).toBe("Employee Added");
		});

		it('saving an employee should clear employee scope', function(){
			scope.firstName = "luke";
			scope.lastName = "skywalker"

			ctrl.addEmployee();
			ctrl.saveEmployee();

			expect(scope.employees.length).toBe(0);
		});

		it('trying to save employees with no employees added will set the message "There are no employees to save"', function(){
			ctrl.saveEmployee();

			expect(scope.message).toBe("There are no employees to save");
		});

		it('saving employees will set the message "Employee List Saved"', function(){
			scope.firstName = "luke";
			scope.lastName = "skywalker"

			ctrl.addEmployee();
			ctrl.saveEmployee();

			expect(scope.message).toBe("Employee List Saved");
		});

	});

	// describe('fetch employee if employee list is empty', function() {

	// 	var service, $httpBackend;

	// 	beforeEach(module('employeeApp'));

	// 	// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
	//     // This allows us to inject a service but then attach it to a variable
	//     // with the same name as the service.
	// 	beforeEach(inject(function(_$httpBackend_, $injector){
	// 		$httpBackend = _$httpBackend_;
	// 		service = $injector.get('employeeApp.service.employees');;

	// 		$httpBackend.expectGET('app/employee/employees.json').
	// 			respond([{firstName: 'test', lastName: 'testtest'}]);
	// 	}));

	// 	it('fetch 1 employee should have 1 employee', function(){
			
	// 		service.fetchEmployees();
	// 		$httpBackend.flush();

	// 		expect(service.employees.length).toBe(1);
	// 	});

	// 	it('fetching should flag has fetched', function(){
			
	// 		service.fetchEmployees();
	// 		$httpBackend.flush();

	// 		expect(service.hasFetched).toBe(true);
	// 	});

	// });

});