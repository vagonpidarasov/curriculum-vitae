import {Employee} from '../models';

export class EmployeeState {
    employee:Employee = null;
    avatarUrl:string = null;
    address:string = null;
    expertise:string[] = [];
    filename:string = null;
}
