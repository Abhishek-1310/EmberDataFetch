import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class EmployeeDataService extends Service {
  @service store;

  async loadData() {
    let response = await fetch('http://localhost:3000/employees');
    let data = await response.json();
    console.log(data);

    return data.data.map((emp) => {
      let existingEmployee = this.store.peekRecord('employee', emp.id);
      if (!existingEmployee) {
        return this.store.createRecord('employee', {
          id: emp.id,
          employee_age: emp.employee_age,
          employee_name: emp.employee_name,
          employee_salary: emp.employee_salary,
        });
      }
      return existingEmployee;
    });
  }
}
