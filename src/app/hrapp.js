// app init
var employeeApp;
(function (employeeApp) {
    angular.module('employeeApp', ['ngRoute']);

    angular.module('employeeApp').config([
        '$routeProvider', function routes($routeProvider) {
            $routeProvider.when('/employee', {
                templateUrl: 'app/addEmployee/employee.html',
                controller: 'employeeApp.controller.addEmployee'
            });
        }]);
})(employeeApp || (employeeApp = {}));
var model;
(function (model) {
    var Employee = (function () {
        function Employee() {
        }
        return Employee;
    })();
    model.Employee = Employee;
})(model || (model = {}));
// controller
var employeeApp;
(function (employeeApp) {
    angular.module('employeeApp').controller('employeeApp.controller.addEmployee', [
        '$scope', 'employeeApp.service.employees',
        function ($scope, EmployeesService, $http) {
            return new AddEmployeeController($scope, EmployeesService);
        }]);

    var AddEmployeeController = (function () {
        function AddEmployeeController($scope, EmployeesService) {
            this.scope = $scope;
            this.scope.vm = this;

            this.scope.employees = [];
            this.employeeService = EmployeesService;
        }
        AddEmployeeController.prototype.addEmployee = function () {
            this.scope.employees.push({ firstName: this.scope.firstName, lastName: this.scope.lastName });
            this.scope.firstName = "";
            this.scope.lastName = "";
            this.scope.message = "Employee Added";
        };

        AddEmployeeController.prototype.saveEmployee = function () {
            var _this = this;
            var employeesSaved = false;

            this.scope.employees.forEach(function (employee) {
                _this.employeeService.employees.push(employee);
                employeesSaved = true;
            });

            if (employeesSaved)
                this.scope.message = "Employee List Saved";
            else
                this.scope.message = "There are no employees to save";

            this.scope.employees = [];
        };
        return AddEmployeeController;
    })();
    employeeApp.AddEmployeeController = AddEmployeeController;
})(employeeApp || (employeeApp = {}));
// service
var employeeApp;
(function (employeeApp) {
    angular.module('employeeApp').service('employeeApp.service.employees', ['$http', function ($http) {
            return new EmployeesService($http);
        }]);

    var EmployeesService = (function () {
        function EmployeesService($http) {
            this.employees = [];
            this.http = $http;
        }
        EmployeesService.prototype.fetchEmployees = function () {
            var _this = this;
            this.http.get('app/employee/employees.json').success(function (data) {
                data.forEach(function (employee) {
                    _this.employees.push(employee);
                });
            });
        };
        return EmployeesService;
    })();
    employeeApp.EmployeesService = EmployeesService;
})(employeeApp || (employeeApp = {}));
// app init
var jobPosition;
(function (jobPosition) {
    angular.module('jobPositionApp', []);

    angular.module('jobPositionApp').config([
        '$routeProvider', function routes($routeProvider) {
            $routeProvider.when('/job-position', {
                templateUrl: 'app/jobPosition/jobPosition.html',
                controller: 'jobPositionApp.controller.addJobPosition'
            });
        }]);
})(jobPosition || (jobPosition = {}));
// service
var jobPositon;
(function (jobPositon) {
    angular.module('jobPositionApp').service('jobPositionApp.service.jobs', function () {
        return new JobsService();
    });

    var JobsService = (function () {
        function JobsService() {
            this.jobs = [];
            //this.jobs.push({ title: 'web developer', salary: '90,000' });
        }
        return JobsService;
    })();
    jobPositon.JobsService = JobsService;
})(jobPositon || (jobPositon = {}));
// controller
var jobPosition;
(function (jobPosition) {
    angular.module('jobPositionApp').controller('jobPositionApp.controller.addJobPosition', ['$scope', 'jobPositionApp.service.jobs', function ($scope, JobsService) {
            return new AddJobPositionController($scope, JobsService);
        }]);

    var AddJobPositionController = (function () {
        function AddJobPositionController($scope, JobsService) {
            this.scope = $scope;
            this.scope.vm = this;

            this.scope.jobs = [];
            this.jobsService = JobsService;
        }
        AddJobPositionController.prototype.addJob = function () {
            this.scope.jobs.push({ title: this.scope.jobTitle, salary: this.scope.salary });
            this.scope.jobTitle = "";
            this.scope.salary = "";
            this.scope.message = "Jobs Added";
        };

        AddJobPositionController.prototype.saveJobs = function () {
            var _this = this;
            this.scope.jobs.forEach(function (job) {
                _this.jobsService.jobs.push(job);
            });
            this.scope.message = "Jobs Saved";
        };
        return AddJobPositionController;
    })();
    jobPosition.AddJobPositionController = AddJobPositionController;
})(jobPosition || (jobPosition = {}));
// app init
var employeeManagerApp;
(function (employeeManagerApp) {
    angular.module('employeeManagerApp', []);

    angular.module('employeeManagerApp').config([
        '$routeProvider', function routes($routeProvider) {
            $routeProvider.when('/manage-employees', {
                templateUrl: 'app/employeeManager/employeeManager.html',
                controller: 'employeeManagerApp.controller.manager'
            });
        }]);
})(employeeManagerApp || (employeeManagerApp = {}));
// controller
var employeeManagerApp;
(function (employeeManagerApp) {
    angular.module('employeeManagerApp').controller('employeeManagerApp.controller.manager', [
        '$scope', '$http', 'employeeApp.service.employees', 'jobPositionApp.service.jobs', 'hrApp.factory.hrId',
        function ($scope, $http, EmployeesService, JobsService, HrIdFactory) {
            return new ManagerController($scope, $http, EmployeesService, JobsService, HrIdFactory);
        }]);

    var ManagerController = (function () {
        function ManagerController($scope, $http, EmployeesService, JobsService, HrIdFactory) {
            this.scope = $scope;
            this.scope.vm = this;

            this.scope.test = "manager";
            this.scope.employees = EmployeesService.employees;
            this.employeeService = EmployeesService;

            this.scope.jobs = JobsService.jobs;
            this.hrIdFactory = HrIdFactory;

            this.scope.selectedJob = [];
        }
        ManagerController.prototype.onJobChange = function (index) {
            console.log(index);
        };

        ManagerController.prototype.doSomething = function () {
            this.hrIdFactory.append();
            console.log('do something');
        };
        return ManagerController;
    })();
    employeeManagerApp.ManagerController = ManagerController;
})(employeeManagerApp || (employeeManagerApp = {}));
/// <reference path="../lib/angular/angular.d.ts" />
/// <reference path="../lib/angular/angular-route.d.ts" />
/// <reference path="addEmployee/_employeeReference.ts" />
/// <reference path="jobPosition/_jobPositionReference.ts" />
/// <reference path="employeeManager/_employeeManagerReference.ts" />
'use strict';
angular.module('hrApp', [
    'ngRoute',
    'employeeApp',
    'jobPositionApp',
    'employeeManagerApp']);

var hrApp;
(function (hrApp) {
    angular.module('hrApp').config([
        '$routeProvider', function routes($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/home/default.html'
            }).otherwise({
                redirectTo: '/'
            });
        }]);

    angular.module('hrApp').value('hrId', 'abc123');

    angular.module('hrApp').service('hrApp.factory.hrId', ['hrId', function (hrId) {
            return new HrIdFactory(hrId);
        }]);

    var HrIdFactory = (function () {
        function HrIdFactory(hrId) {
            this.hrId += hrId;
            console.log(this.hrId);
        }
        HrIdFactory.prototype.append = function () {
            this.hrId += " append ";
            console.log(this.hrId);
        };
        return HrIdFactory;
    })();
    hrApp.HrIdFactory = HrIdFactory;
})(hrApp || (hrApp = {}));
