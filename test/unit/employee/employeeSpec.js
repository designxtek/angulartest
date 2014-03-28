describe('employee controllers', function(){

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