import {Employee, Experience} from '../models';

export class EmployeeState {
    employee:Employee = null;
    avatarUrl:string = null;
    address:string = null;
    experience:Experience[] = [];
    currentPosition:Experience = null;
    expertise:string[] = [];
    filename:string = null;
}
