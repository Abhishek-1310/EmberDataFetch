import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployeesDetailsRoute extends Route {
  @service store;
  @service employeeData;
  async model(params) {
    await this.employeeData.loadData();
    return this.store.peekRecord('employee', params.employee_id);
  }
}
