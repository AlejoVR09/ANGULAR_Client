import { Component } from '@angular/core';
import { Employer } from '../../models/employer';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { EmployerService } from '../../services/employer.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  employers : Array<Employer>;
  formEmployers? : FormGroup;
  
  

  constructor(private FormEmployer : FormBuilder, private employerService : EmployerService){
    this.employers = new Array<Employer>();
    this.formEmployers = this.FormEmployer.group({
       id : new FormControl('', [Validators.required])
    })
  }

  getEmployers(){
    this.employerService.getEmployer().subscribe(res => {
      console.log(res)
      console.log(1)
      this.employers = res;
    });
  }


}
