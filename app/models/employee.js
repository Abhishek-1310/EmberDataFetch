import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  // @attr('number') id;
  @attr('string') employee_name;
  @attr('string') employee_salary;
  @attr('string') employee_age;
  @attr('string') employee_img;
}
