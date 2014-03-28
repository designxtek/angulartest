
// service
module jobPositon {

	angular.module('jobPositionApp').service('jobPositionApp.service.jobs', () => new JobsService());

	export class JobsService {
		jobs: any[] = [];

		constructor() {
			//this.jobs.push({ title: 'web developer', salary: '90,000' });
		}
	}
}