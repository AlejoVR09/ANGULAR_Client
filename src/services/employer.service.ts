import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employer } from '../models/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  globalRute = 'http://localhost:8080/api/v1/employers/'

  constructor(private Http : HttpClient) {}

  createEmployer(employer : Employer){
    return this.Http.post<Employer>(
      this.globalRute + 'create', 
      employer, 
      {
        observe : 'response'
      }
    );
  }

  getEmployer(){
    return this.Http.get<Employer[]>(this.globalRute + 'getAll');
  }

  updateEmployer(employer : Employer){
    return this.Http.put<Employer>(
      this.globalRute + 'update', 
      employer, 
      {
        observe : 'response'
      }
    );
  }

  deleteEmployer(id : number){
    return this.Http.delete<Boolean>(
      this.globalRute + 'delete' + '/' + id, 
      {
        observe : 'response'
      }
    );
  }

}
