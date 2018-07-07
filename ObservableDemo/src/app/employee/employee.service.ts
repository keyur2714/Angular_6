import {EMPLOYEE_LIST} from './employee.mock';
import {Employee} from './employee.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
export class EmployeeService{
    getEmployeeList():Employee[]{
        return EMPLOYEE_LIST;
    }
    
    getEmployeeListObservable():Observable<Employee[]>{        
        return Observable.of(EMPLOYEE_LIST);
    }   

    getEmployeeListPromise():Promise<Employee[]>{
        return Promise.resolve(EMPLOYEE_LIST);
    }   
}