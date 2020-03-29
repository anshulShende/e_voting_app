import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  voters: [];
  isResult: boolean;

  constructor(
    private dataservice : DataService
  ) {
    this.isResult = false;
   }

  ngOnInit(): void {
  }

  showAllVoters(){
    this.dataservice.showAllVoters().subscribe( (response:any) => {
      this.voters = response;
      if(this.voters.length > 0)
        this.isResult = true;
    },(err: HttpErrorResponse) => {
      console.log("Login Error");
    });
  }

  onSearch(firstName, lastName, email, locale){
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(locale);
  }
}
