import {Employee, Education, Experience} from '../models';

export class EmployeeState {
    employee:Employee = null;
    education:Education = null;
    avatarUrl:string = null;
    experience:Experience[] = [];
    currentPosition:Experience = null;
}
