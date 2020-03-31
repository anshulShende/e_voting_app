import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  isPasswordInvalid: boolean;
  staff: [];
  isLoginError: boolean;
  isLoginSuccessful: boolean;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { 
    this.isPasswordInvalid = false;
    this.isLoginError = false;
    this.isLoginSuccessful = false;
  }

  ngOnInit(): void {
  }

  staffLogin(name, password, locale, localeId){
    if(password === '123'){
      this.dataService.authenticateStaff(name,password,locale, localeId).subscribe( (response: any) =>{
        console.log(response['0']['name']);
        console.log(response);
          if(response['0']['name']  == name){
            this.staff = response;
            console.log(this.staff);
            this.isLoginSuccessful = true;
            localStorage.setItem('locale', response['0']['locale']);
          }
          else{
            console.log("Authentication failed");
            this.isLoginError = true;
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

  onStart(){
    this.router.navigateByUrl('election');
  }

  onLogout(){
    this.isLoginSuccessful=false;
    this.staff = [];
    localStorage.removeItem('locale');
  }
}
