
// controller
module jobPosition {

	angular.module('jobPositionApp').controller('jobPositionApp.controller.addJobPosition', ['$scope', 'jobPositionApp.service.jobs', ($scope, JobsService) => new AddJobPositionController($scope, JobsService)]);

	export class AddJobPositionController {
		scope: any;
		jobsService: any;

		constructor($scope: ng.IScope, JobsService: any) {
			this.scope = $scope;
			this.scope.vm = this;

			this.scope.jobs = [];
			this.jobsService = JobsService;
		}

		addJob() {
			this.scope.jobs.push({ title: this.scope.jobTitle, salary: this.scope.salary });
			this.scope.jobTitle = "";
			this.scope.salary = "";
			this.scope.message = "Jobs Added";
		}

		saveJobs() {
			this.scope.jobs.forEach((job) =>{
					this.jobsService.jobs.push(job);
				});
			this.scope.message = "Jobs Saved";
		}
	}
}