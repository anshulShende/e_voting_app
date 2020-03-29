import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  isPasswordInvalid: boolean;
  staff: [];
  isloginError: boolean;

  constructor(
    private dataService: DataService
  ) { 
    this.isPasswordInvalid = false;
    this.isloginError = false;
  }

  ngOnInit(): void {
  }

  staffLogin(name, password, locale, localeId){
    if(password === '123'){
      this.dataService.authenticateStaff(name,password,locale, localeId).subscribe( (response: any) =>{
          if(true){
            this.staff = response;
            console.log(this.staff);
          }
          else{
            console.log("Authentication failed");
            this.isloginError = true;
          }
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
    }else
    {
      console.log("invalid Password");
      this.isPasswordInvalid = true;
    }
  }
}
